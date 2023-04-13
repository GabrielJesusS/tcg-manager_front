import { createGetCardListUsecase } from "@/factories/createGetCardListUsecase";
import { PokemonCardList } from "@/presentation/components/common/CardViewer/PokemonCardList";
import { Header } from "@/presentation/components/common/Header";
import { CardFilterModal } from "@/presentation/components/common/modals/CardFilterModal";
import { PaginationBlock } from "@/presentation/components/common/Pagination";
import { PokemonCard } from "@/presentation/components/common/PokemonCard";
import { CardSkeleton } from "@/presentation/components/common/skeletons/CardSkeleton";
import { Textinput } from "@/presentation/components/common/Textinput";
import { DefaultLayout } from "@/presentation/components/layouts/DefaultLayout";
import { SearchLayout } from "@/presentation/components/layouts/SearchLayout";
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

  return (
    <SearchLayout>
      <PokemonCardList/>
    </SearchLayout>
  );
};

export default Cards;
