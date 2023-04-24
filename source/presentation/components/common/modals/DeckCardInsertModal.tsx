import { createGetCardListUsecase } from "@/factories/createGetCardListUsecase";
import {
  actualCardOnComposeAtom,
  deckComposeAtom,
  deckComposeIdsAtom,
} from "@/presentation/store/genericAtoms";
import { deckCardInsertAtom, deckFilterAtom } from "@/presentation/store/modal";
import { ChangeEvent, useEffect, useState } from "react";
import {
  useForm,
  FieldArray,
  useFieldArray,
  SubmitHandler,
} from "react-hook-form";
import { useRecoilCallback, useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil";
import { Modal } from "../Modal";
import { Textinput } from "../Textinput";
import { PaginationBlock } from "../Pagination";
import {
  listOffsetAtom,
  paginationAtom,
} from "@/presentation/store/paginations";
import { useFetch } from "@/presentation/hooks/useFetch";
import { generateFilterString } from "@/presentation/utils/generateFilterString";
import { DefaultQuestionModal } from "./DefaultQuestionModal";
import { generateArray } from "@/presentation/utils/generateArray";
import { CardSkeleton } from "../skeletons/CardSkeleton";
import { useDebounce } from "@/presentation/hooks/useDebounce";
import { CardFilter } from "../Filters/CardFilter";
import { cardFilterAtom } from "@/presentation/store/filters/cardFiltersAtom";
import { useGetCards } from "@/presentation/hooks/useGetCards";
import { useNotify } from "@/presentation/hooks/useNotify";
import { NOTIFY_TYPE_ENUM } from "@/presentation/enums/NotifyTypeEnum";

interface DeckCardInsertModalProps {}

interface ISearchCardParams {
  params: string;
}

interface ICardListParams {
  id: string;
  name: string;
  subtypes: string[];
  supertype: string;
  images: {
    small: string;
    large: string;
  };
}


interface ICardParams {
  pokemonCards: {
    cardId: string;
    name: string;
    image: string;
    subtypes: string[];
    supertype: string;
  }[];
}

interface ICard{
  cardId: string;
    name: string;
    image: string;
    subtypes: string[];
    supertype: string;
    quantity: number;
}

const skeletonArray = generateArray(20);

export const DeckCardInsertModal = ({}: DeckCardInsertModalProps) => {
  const [isOpen, setOpen] = useRecoilState(deckCardInsertAtom);
  const [composeIds, insertOnCompose] = useRecoilState(deckComposeIdsAtom);
  const [offsetPage, setOffsetPage] = useRecoilState(listOffsetAtom);
  const [filters, setFilters] = useRecoilState(cardFilterAtom);
  const { data, error, isValidating, mutate } = useGetCards(
    offsetPage,
    filters
  );
  const setActualCards = useSetRecoilState(actualCardOnComposeAtom);
  const [pokemonCardList, setPokemonCardList] = useState<ICardListParams[]>([]);
  const [page, setPage] = useRecoilState(paginationAtom);
  const debounce = useDebounce(searchPokemon, 1000);
  const resetFilters = useResetRecoilState(cardFilterAtom);
  const { notify } = useNotify();

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    debounce(event.target.value);
  }

  function searchPokemon(name: string) {
    setFilters({ ...filters, name });
  }

  useEffect(() => {
    mutate();
  }, [offsetPage, filters]);

  function toggleOpen() {
    setOpen(!isOpen);
  }

  const { control, register, handleSubmit, reset } = useForm<ICardParams>();

  const { fields, append, remove } = useFieldArray<ICardParams>({
    control,
    name: "pokemonCards",
  });

  const insertCardOnDeck = useRecoilCallback(({set})=> (card:ICard)=>{
    set(deckComposeIdsAtom, currVal => [...currVal, card.cardId])
    set(deckComposeAtom(card.cardId), card)
  })

  useEffect(() => {
    if (data) {
      remove();
      setPokemonCardList(data.data);
      setPage({ ...data });
    }
  }, [data]);

  useEffect(() => {
    pokemonCardList.forEach((e) => {
      append({
        cardId: e.id,
        name: e.name,
        image: e.images.small,
        subtypes: e.subtypes,
        supertype: e.supertype,
      });
    });
  }, [pokemonCardList]);

  const insertCard: SubmitHandler<ICardParams> = async (data, e) => {
    e?.preventDefault();
    const newCard:ICard = await JSON.parse(data.pokemonCards.toString());

    if (!composeIds.includes(newCard.cardId)) {
      insertCardOnDeck({...newCard, quantity: 1})
    }


    resetFilters();
    reset();
    toggleOpen();
  };

  return (
    <DefaultQuestionModal fullSize close={toggleOpen} isOpen={isOpen}>
      <div className="max-w-7xl mx-auto">
        <div className="space-y-6 p-safe">
          <Textinput
            label="Busque uma carta"
            type="text"
            placeholder="Chariz...."
            inputProps={{
              onChange: handleSearch,
            }}
          />
          <div className="grid grid-cols-3 gap-5">
            <CardFilter />
          </div>
          <div className="max-w-5xl mx-auto">
            <fieldset>
              <div className="p-5 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 grid-flow-row">
                {!isValidating &&
                  fields.map((field) => {
                    return (
                      <div key={field.id} className="relative">
                        <input
                          {...register(`pokemonCards`)}
                          type="radio"
                          value={JSON.stringify(field)}
                          className={"absolute w-full h-full opacity-0 peer"}
                        />
                        <img
                          alt={field.name}
                          width={160}
                          height={222}
                          src={field.image}
                          className="w-full peer-checked:ring-4 peer-checked:ring-offset-4 peer-checked:opacity-75 peer-checked:border-secondary peer-checked:rounded-lg"
                        ></img>
                      </div>
                    );
                  })}
                {isValidating &&
                  skeletonArray.map((item) => <CardSkeleton key={item} />)}
              </div>
            </fieldset>
          </div>
        </div>
        <div className="space-y-5 p-safe sticky pt-20 bottom-0 bg-gradient-to-t from-system via-system">
          <div className="mx-auto w-fit">
            <PaginationBlock isLoading={isValidating} />
          </div>
          <button
            onClick={handleSubmit(insertCard)}
            type="button"
            className="btn btn-primary w-full"
          >
            Adicionar
          </button>
        </div>
      </div>
    </DefaultQuestionModal>
  );
};
