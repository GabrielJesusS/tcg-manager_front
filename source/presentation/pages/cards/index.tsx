import { createGetCardListUsecase } from "@/factories/createGetCardListUsecase";
import { Header } from "@/presentation/components/common/Header";
import { CardFilterModal } from "@/presentation/components/common/modals/CardFilterModal";
import { PokemonCard } from "@/presentation/components/common/PokemonCard";
import { CardSkeleton } from "@/presentation/components/common/skeletons/CardSkeleton";
import { Textinput } from "@/presentation/components/common/Textinput";
import { DefaultLayout } from "@/presentation/components/layouts/DefaultLayout";
import { Cardsitems } from "@/presentation/data/mocks/cardMocks";
import { useFetch } from "@/presentation/hooks/useFetch";
import { cardFilterAtom } from "@/presentation/store/modal";
import { generateArray } from "@/presentation/utils/generateArray";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

const getCardListUsecase = createGetCardListUsecase();
const skeletonArray = generateArray(20);

const Cards = ({}) => {
  const [modalIsOpen, toggleModal] = useRecoilState(cardFilterAtom);

  function toggle() {
    toggleModal(!modalIsOpen);
  }

  
  const { data }  = useFetch({
    name: "pokemonCardList",
    useCase: async () => await getCardListUsecase.execute(),
  });
  
  

  return (
    <DefaultLayout>
      <div>
        <Header>Cards</Header>
      </div>
      <section className="p-safe mx-auto max-w-7xl w-full space-y-4">
        <div className="space-y-6 max-w-3xl mx-auto">
          <form action="">
            <Textinput
              className="w-full"
              label=""
              placeholder="Buscar por..."
              type="text"
            >
              {" "}
            </Textinput>
          </form>
          <button onClick={toggle} className="btn btn-primary w-full">
            Filtrar
          </button>
        </div>
        <div>
          <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5  gap-8">
            {data &&
              data.data.map((card) => (
                <li key={card.id}>
                  <PokemonCard
                    url={`cards/${card.id}`}
                    src={card.images.small}
                  />
                </li>
              ))}
            {!Cards && skeletonArray.map((item) => <CardSkeleton key={item} />)}
          </ul>
        </div>
      </section>
      <CardFilterModal />
    </DefaultLayout>
  );
};

export default Cards;
