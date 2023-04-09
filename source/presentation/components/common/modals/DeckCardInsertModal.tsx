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
import { useRecoilState, useSetRecoilState } from "recoil";
import { Modal } from "../Modal";
import { Textinput } from "../Textinput";
import { PaginationBlock } from "../Pagination";
import {
  cardListOffsetAtom,
  cardPaginationAtom,
} from "@/presentation/store/paginations";
import { useFetch } from "@/presentation/hooks/useFetch";
import { generateFilterString } from "@/presentation/utils/generateFilterString";
import { DefaultQuestionModal } from "./DefaultQuestionModal";
import { generateArray } from "@/presentation/utils/generateArray";
import { CardSkeleton } from "../skeletons/CardSkeleton";
import { useDebounce } from "@/presentation/hooks/useDebounce";

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

const skeletonArray = generateArray(20);
const getCardListUsecase = createGetCardListUsecase();

export const DeckCardInsertModal = ({}: DeckCardInsertModalProps) => {
  const [isOpen, setOpen] = useRecoilState(deckCardInsertAtom);
  const [composeIds, insertOnCompose] = useRecoilState(deckComposeIdsAtom);
  const setActualCards = useSetRecoilState(actualCardOnComposeAtom);
  const [pokemonCardList, setPokemonCardList] = useState<ICardListParams[]>([]);
  const [page, setPage] = useRecoilState(cardPaginationAtom);
  const [offsetPage, setOffsetPage] = useRecoilState(cardListOffsetAtom);
  const debounce = useDebounce(searchPokemon, 1000);
  const [filterParams, setFilterParams] = useState<Record<string, string>>({});

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    debounce(event.target.value);
  }

  function searchPokemon(name: string) {
    setFilterParams({ name });
  }

  const { data, mutate, error, isValidating } = useFetch({
    name: "pokemonCardList",
    useCase: async () =>
      await getCardListUsecase.execute({
        page: offsetPage,
        searchParams: filterParams ? generateFilterString(filterParams) : "",
      }),
    swr: {
      revalidateOnFocus: false,
    },
  });

  useEffect(() => {
    mutate();
  }, [offsetPage,filterParams]);

  function toggleOpen() {
    setOpen(!isOpen);
  }

  const { control, register, handleSubmit } = useForm<ICardParams>();

  const { fields, append, remove } = useFieldArray<ICardParams>({
    control,
    name: "pokemonCards",
  });

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

  const insertCard: SubmitHandler<ICardParams> = async (data) => {
    const newCard = await JSON.parse(data.pokemonCards.toString());
    setFilterParams({});
    insertOnCompose([...composeIds, newCard.cardId]);
    setActualCards({ ...newCard, quantity: 1 });
    toggleOpen();
  };

  return (
    <DefaultQuestionModal fullSize close={toggleOpen} isOpen={isOpen}>
      <form className="space-y-6">
        <div className="space-y-6">
          <Textinput
            label="Busque uma carta"
            type="text"
            placeholder="Chariz...."
            inputProps={{
              onChange: handleSearch
            }}
          />
          <div>
            {/*  <p className="font-semibold text-lg">Desculpe, não encontrei :(</p> */}
            <fieldset className="overflow-scroll max-h-60">
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 grid-flow-row">
                {!isValidating &&
                  fields.map((field, index) => {
                    return (
                      <div key={field.id} className="relative">
                        <input
                          {...register(`pokemonCards`)}
                          type="radio"
                          value={JSON.stringify(field)}
                          className={"absolute w-full h-full opacity-0 peer"}
                        />
                        <img
                          alt=""
                          width={160}
                          height={222}
                          src={field.image}
                          className="w-full peer-checked:border-4 peer-checked:opacity-75 peer-checked:border-secondary peer-checked:rounded-lg"
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
        <div className="mx-auto w-fit">
          <PaginationBlock />
        </div>
        <button
          onClick={handleSubmit(insertCard)}
          type="button"
          className="btn btn-primary w-full"
        >
          Adicionar
        </button>
      </form>
    </DefaultQuestionModal>
  );
};
