import {
  cardsInLimitSelector,
  deckComposeAtom,
  deckComposeIdsAtom,
} from "@/presentation/store/genericAtoms";
import {
  deckCardFilterAtom,
  deckCardInsertAtom,
} from "@/presentation/store/modal";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import {
  useRecoilCallback,
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";
import { TextInput } from "../Textinput";
import { generateArray } from "@/presentation/utils/generateArray";
import { CardSkeleton } from "../skeletons/CardSkeleton";
import { useDebounce } from "@/presentation/hooks/useDebounce";
import { filterParamsAtom } from "@/presentation/store/filters/cardFiltersAtom";
import { useGetCards } from "@/presentation/hooks/useGetCards";
import { OrderByEnum } from "@/presentation/enums/OrderByEnum";
import { Button } from "../Button";
import { BorderlessModal } from "./BorderlessModal";
import LoadingIcon from "@/presentation/public/images/icons/loading.svg";
import { useLockBody } from "@/presentation/hooks/useLockBody";
import Image from "next/image";
import Spinda from "@/presentation/public/images/rsc/spinda.webp";
import { useNotify } from "@/presentation/hooks/useNotify";
import { StatusEnum } from "@/presentation/enums/NotifyTypeEnum";

interface ICard {
  cardId: string;
  name: string;
  image: string;
  subtypes: string[];
  supertype: string;
  quantity: number;
}

const skeletonArray = generateArray(20);

export const DeckCardInsertModal = (): JSX.Element => {
  const [isOpen, setOpen] = useRecoilState(deckCardInsertAtom);
  const setFilterOpen = useSetRecoilState(deckCardFilterAtom);
  const [filters, setFilters] = useRecoilState(filterParamsAtom);
  const cardsInLimit = useRecoilValue(cardsInLimitSelector);
  const { data, isValidating, isLoading, setSize, mutate } = useGetCards(
    filters,
    OrderByEnum.NAME
  );
  const [selectedCard, setSelectedCard] = useState("");

  const [_, unlock] = useLockBody();

  const debounce = useDebounce(searchPokemon, 1000);
  const resetFilters = useResetRecoilState(filterParamsAtom);
  const { notify } = useNotify();

  function handleSearch(event: ChangeEvent<HTMLInputElement>): void {
    debounce(event.target.value);
  }

  function searchPokemon(name: string): void {
    setFilters({ ...filters, name });
  }

  function toggleOpen(): void {
    unlock();
    setOpen(!isOpen);
  }

  const insertCardOnDeck = useRecoilCallback(({ set }) => (card: ICard) => {
    set(deckComposeIdsAtom, (currVal) => [...currVal, card.cardId]);
    set(deckComposeAtom(card.cardId), card);
  });

  function handleSelectCard(event: ChangeEvent<HTMLInputElement>): void {
    setSelectedCard(event.target.value);
  }

  const insertCard = (): void => {
    const card = data?.reduce((acc, e) => {
      const rawCard = e.data.find((card) => card.id === selectedCard);

      if (!rawCard) return acc;

      return {
        cardId: rawCard.id,
        image: rawCard.images.small,
        name: rawCard.name,
        quantity: 1,
        subtypes: rawCard.subtypes,
        supertype: rawCard.supertype,
      };
    }, {}) as ICard | undefined;

    if (!card) {
      notify("Nenhuma carta selecionada", StatusEnum.ERROR);
      return;
    }

    if (cardsInLimit.includes(card.name)) {
      notify(
        "Não é possivel adicionar mais cartas com este nome",
        StatusEnum.ERROR
      );
      return;
    }

    insertCardOnDeck(card);
    setSelectedCard("");
    resetFilters();
    toggleOpen();
  };

  function loadMoreCards(): void {
    setSize((e) => e + 1);
  }

  const itemsFounded = useMemo(() => {
    if (data) {
      return data[data.length - 1].totalCount;
    }
    return 0;
  }, [data]);

  const reachedFinalList = useMemo(
    () => itemsFounded === data?.reduce((acc, e) => acc + e.data.length, 0),
    [data]
  );

  useEffect(() => {
    mutate();
  }, []);

  return (
    <BorderlessModal isOpen={isOpen}>
      <div className="max-w-7xl md:space-x-4 mx-auto p-safe flex-1 w-full flex flex-col-reverse md:flex-row h-full">
        <div className="h-full w-full overflow-y-auto p-2 space-y-4">
          {!itemsFounded && !isValidating ? (
            <p className="text-center font-bold text-2xl mt-11">
              <Image
                src={Spinda.src}
                width={200}
                height={200}
                alt="Imagem do spinda."
                className="mx-auto animate-bounce"
              />
              Desculpe, não encontrei nada com este nome =(
            </p>
          ) : null}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2 grid-flow-row">
            {data
              ? data?.map((e) =>
                  e.data.map((field) => {
                    return (
                      <label
                        onDoubleClick={insertCard}
                        key={field.id}
                        className="relative"
                      >
                        <input
                          type="radio"
                          value={field.id}
                          className={
                            "absolute w-full h-full opacity-0 peer  cursor-pointer"
                          }
                          onChange={handleSelectCard}
                          checked={field.id === selectedCard}
                          name="deck-insert-card"
                        />
                        <img
                          alt={field.name}
                          width={160}
                          height={222}
                          src={field.images.small}
                          className="w-full transition-all duration-150 ease-out peer-checked:ring-4 peer-checked:ring-offset-4 peer-checked:opacity-75 peer-checked:border-secondary peer-checked:rounded-lg"
                        ></img>
                      </label>
                    );
                  })
                )
              : null}
            {isValidating &&
              !data &&
              skeletonArray.map((item) => <CardSkeleton key={item} />)}
          </div>

          {!isValidating && !reachedFinalList ? (
            <Button onClick={loadMoreCards} className="col-span-full mx-auto">
              Carregar mais!
            </Button>
          ) : null}

          {isValidating && !isLoading ? (
            <LoadingIcon className="fill-primary h-10 spin mx-auto"></LoadingIcon>
          ) : null}
        </div>

        <div className="space-y-5 md:basis-1/3 md:h-full pb-safe md:pb-0 shrink-0 w-full">
          <TextInput
            type="search"
            placeholder="Chari..."
            label="Pesquise por cartas"
            onChange={handleSearch}
          />
          <Button
            full
            onClick={() => {
              setFilterOpen(true);
            }}
          >
            Abrir filtros
          </Button>

          <Button onClick={insertCard} full>
            Adicionar
          </Button>
          <Button onClick={toggleOpen} color="error" outline full>
            Cancelar
          </Button>
        </div>
      </div>
    </BorderlessModal>
  );
};
