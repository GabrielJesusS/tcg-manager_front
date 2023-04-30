import { DeckBuildViewer } from "@/presentation/components/common/DeckBuilder/DeckBuildViewer";
import { DeckBuilderAssistent } from "@/presentation/components/common/DeckBuilder/DeckBuilderAssistent";
import { DeckBuilderMeta } from "@/presentation/components/common/DeckBuilder/DeckBuilderMeta";
import { DeckStatistics } from "@/presentation/components/common/DeckBuilder/DeckStatistics";
import { CardEdit } from "@/presentation/components/common/DeckCardList/CardEdit";
import { DeckCardInsertModal } from "@/presentation/components/common/modals/DeckCardInsertModal";
import { DefaultLayout } from "@/presentation/components/layouts/DefaultLayout";
import ArrowIcon from "@/presentation/public/images/icons/chevron.svg";

const NewDeck = (): JSX.Element => {
  return (
    <>
      <DefaultLayout>
        <main className="bg-bg-pattern h-auto flex flex-1">
          <section className="max-w-7xl h-auto space-y-5 w-full text-system-800 mx-auto bg-system-100 p-safe">
            <div className="lg:grid-cols-3 lg:grid">
              <button className="flex items-center">
                <ArrowIcon className="w-8 fill-system-400 rotate-180" />
                <span className="font-bold text-2xl text-system-400">
                  Voltar
                </span>
              </button>
              <h1 className="font-bold text-3xl mx-auto text-center">
                Construtor de Decks
              </h1>
            </div>
            <div className="flex lg:space-x-8">
              <div className="flex flex-col space-y-8 w-full">
                <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5">
                  <DeckBuilderMeta/>
                  <DeckStatistics />
                </div>
                <DeckBuildViewer />
              </div>
              <CardEdit />
            </div>
          </section>
        </main>
      </DefaultLayout>
      <DeckCardInsertModal />
      <DeckBuilderAssistent/>
    </>
  );
};

export default NewDeck;
