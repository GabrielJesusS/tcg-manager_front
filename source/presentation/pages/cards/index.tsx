import { createGetCardListUsecase } from "@/factories/createGetCardListUsecase";
import { Header } from "@/presentation/components/common/Header";
import { CardFilterModal } from "@/presentation/components/common/modals/CardFilterModal";
import { PaginationBlock } from "@/presentation/components/common/Pagination";
import { PokemonCard } from "@/presentation/components/common/PokemonCard";
import { CardSkeleton } from "@/presentation/components/common/skeletons/CardSkeleton";
import { Textinput } from "@/presentation/components/common/Textinput";
import { DefaultLayout } from "@/presentation/components/layouts/DefaultLayout";
import { Cardsitems } from "@/presentation/data/mocks/cardMocks";
import { useDebounce } from "@/presentation/hooks/useDebounce";
import { useFetch } from "@/presentation/hooks/useFetch";
import { cardFilterAtom } from "@/presentation/store/modal";
import {
  cardListOffsetAtom,
  cardPaginationAtom,
} from "@/presentation/store/paginations";
import { generateArray } from "@/presentation/utils/generateArray";
import { generateFilterString } from "@/presentation/utils/generateFilterString";
import { debounce, throttle } from "lodash";
import { useRouter } from "next/router";
import {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRecoilState, useRecoilValue } from "recoil";

const getCardListUsecase = createGetCardListUsecase();
const skeletonArray = generateArray(20);

const Cards = ({}) => {
  const [modalIsOpen, toggleModal] = useRecoilState(cardFilterAtom);
  const [page, setPage] = useRecoilState(cardPaginationAtom);
  const debounce = useDebounce(searchPokemon, 1000);
  const [offsetPage, setOffsetPage] = useRecoilState(cardListOffsetAtom);
  const [filterParams, setFilterParams] = useState<Record<string, string>>({});
  const { query } = useRouter();

  useEffect(() => {
    mutate();
  }, [offsetPage, filterParams]);

  useEffect(() => {
    setOffsetPage(1);
  }, [page.totalCount]);

  function toggle() {
    toggleModal(!modalIsOpen);
  }

  const { data, mutate, error, isValidating } = useFetch({
    name: "pokemonCardList",
    useCase: async () =>
      await getCardListUsecase.execute({
        page: offsetPage,
        searchParams: generateFilterString(filterParams),
      }),
    swr: {
      revalidateOnFocus: false,
    },
  });

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    debounce(event.target.value);
  }

  function searchPokemon(name: string) {
    setFilterParams({ name });
  }

  useEffect(() => {
    if (data) {
      setPage({ ...data });
    }
  }, [data]);

  return (
    <DefaultLayout>
      <div>
        <Header>Cards</Header>
      </div>
      <section className="p-safe mx-auto max-w-7xl w-full space-y-4">
        <div className="space-y-6 max-w-3xl mx-auto">
          <form>
            <Textinput
              className="w-full"
              label=""
              placeholder="Buscar por..."
              type="text"
              inputProps={{
                onChange: handleSearch,
              }}
            />
          </form>
          <button onClick={toggle} className="btn btn-primary w-full">
            Filtrar
          </button>
        </div>
        <div className="flex flex-col items-center space-y-6">
          <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 w-full">
            {data &&
              data.count > 0 &&
              !isValidating &&
              data.data.map((card) => (
                <li key={card.id}>
                  <PokemonCard
                    url={`cards/${card.id}`}
                    src={card.images.small}
                  />
                </li>
              ))}
            {isValidating &&
              skeletonArray.map((item) => <CardSkeleton key={item} />)}
          </ul>
          {data && data.count > 0 && <PaginationBlock />}
          {data && data.count === 0 && (
            <p className="text-center">
              Desculpe, não encontrei nada com este nome =(
            </p>
          )}
        </div>
      </section>
      <CardFilterModal />
    </DefaultLayout>
  );
};

export default Cards;
