import { Header } from "@/presentation/components/common/Header";
import { CardFilterModal } from "@/presentation/components/common/modals/CardFilterModal";
import { PokemonCard } from "@/presentation/components/common/PokemonCard";
import { Textinput } from "@/presentation/components/common/Textinput";
import { DefaultLayout } from "@/presentation/components/layouts/DefaultLayout";
import { Cardsitems } from "@/presentation/data/mocks/cardMocks";
import { cardFilterAtom } from "@/presentation/store/modal";
import { useState } from "react";
import { useRecoilState } from "recoil";

const Cards = ({}) => {

  function alert(){
    window.alert("para de clicar gay")
  }

  const [modalIsOpen, toggleModal] = useRecoilState(cardFilterAtom)

  function toggle(){
    toggleModal(!modalIsOpen)
  }

  return (
    <DefaultLayout>
      <div>
        <Header>Cards</Header>
      </div>
      <section className="p-safe mx-auto max-w-7xl space-y-4">
        <header>
          <h2 className="font-bold">Mais recentes</h2>
        </header>

        <div className="space-y-6">
          <form action="" >
            <Textinput label="" placeholder="Buscar por..." type="text">
              {" "}
            </Textinput>
          </form>
          <button onClick={toggle} className="btn btn-primary w-full">Filtrar</button>
        </div>
        <div>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
            {Cardsitems.map((card) => (
              <li key={card.cardId}>
                <PokemonCard
                  url={`cards/${card.cardId}`}
                  src={card.cardImage}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
        <CardFilterModal/>
      
    </DefaultLayout>
  );
};

export default Cards;
