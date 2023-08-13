import { Deckitem } from "@/presentation/components/common/Deckitem";
import { Header } from "@/presentation/components/common/Header";
import { DeckFilterModal } from "@/presentation/components/common/modals/DeckFilterModal";
import { Textinput } from "@/presentation/components/common/Textinput";
import { DefaultLayout } from "@/presentation/components/layouts/DefaultLayout";
import { Deckitems } from "@/presentation/data/mocks/deckMocks";
import { deckFilterAtom } from "@/presentation/store/modal";
import { useRecoilState } from "recoil";

const Decks = (): JSX.Element => {
  const [modalIsOpen, toggleModal] = useRecoilState(deckFilterAtom);

  function toggle(): void {
    toggleModal(!modalIsOpen);
  }

  return (
    <DefaultLayout>
      <main>
        <Header>Decks</Header>

        <section className="p-safe mx-auto max-w-7xl space-y-4">
          <header>
            <h2 className="font-bold">Mais recentes</h2>
          </header>
          <div className="mt-4">
            <ol className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
              {Deckitems.map((item) => (
                <li key={item.deckId}>
                  <Deckitem {...item} />
                </li>
              ))}
            </ol>
          </div>

          <form action="" className="space-y-6">
            <Textinput label="" placeholder="Buscar por..." type="text">
              {" "}
            </Textinput>
          </form>
          <button onClick={toggle} className="btn btn-primary w-full">
            Filtrar
          </button>

          <div>
            <ol className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
              {Deckitems.map((item) => (
                <li key={item.deckId}>
                  <Deckitem {...item} />
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>
      <DeckFilterModal></DeckFilterModal>
    </DefaultLayout>
  );
};

export default Decks;
