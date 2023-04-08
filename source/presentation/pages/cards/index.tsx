import { createGetCardListUsecase } from "@/factories/createGetCardListUsecase";
import { PokemonCardList } from "@/presentation/components/common/CardViewer/PokemonCardList";
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


const Cards = ({}) => {
  const [modalIsOpen, toggleModal] = useRecoilState(cardFilterAtom);
  
  const debounce = useDebounce(searchPokemon, 1000);
  
  const [filterParams, setFilterParams] = useState<Record<string, string>>({});
  const { query } = useRouter();

  function toggle() {
    toggleModal(!modalIsOpen);
  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    debounce(event.target.value);
  }

  function searchPokemon(name: string) {
    setFilterParams({ name });
  }

 

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
        <PokemonCardList filters={filterParams}/>
      </section>
      <CardFilterModal />
    </DefaultLayout>
  );
};

export default Cards;
