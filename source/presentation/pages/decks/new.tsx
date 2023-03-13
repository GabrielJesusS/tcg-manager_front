import { DeckCardList } from "@/presentation/components/common/DeckCardList";
import { Dropdown } from "@/presentation/components/common/Dropdown";
import { DeckCardInsertModal } from "@/presentation/components/common/modals/DeckCardInsertModal";
import { Textinput } from "@/presentation/components/common/Textinput";
import { DefaultLayout } from "@/presentation/components/layouts/DefaultLayout";
import { deckComposeAtom} from "@/presentation/store/genericAtoms";
import { deckCardInsertAtom } from "@/presentation/store/modal";
import { useRecoilValue } from "recoil";

const NewDeck = ({}) => {
  const isOpen = useRecoilValue(deckCardInsertAtom);


  return (
    <>
      <DefaultLayout>
        <main className="flex flex-col grow justify-center items-center bg-red-400 h-full">
          <div className="w-full p-safe">
            <h1 className="text-2xl font-bold text-center">Novo deck</h1>
            <section className="bg-system w-full p-3 rounded-lg ">
              <form action="" className="space-y-3">
                <div className="space-y-3 md:space-y-0 ">
                  <Textinput
                    placeholder="Titulo..."
                    label="Titulo do artigo:"
                    type="text"
                  />
                  <Textinput
                    placeholder="Descrição..."
                    label="Descrição do artigo:"
                    type="text"
                  />
                  <Dropdown
                    label="Carta cover"
                    selectPlaceholder="Selecione uma carta de capa"
                    options={[{ text: "op1", value: "op1" }]}
                  />
                  <Dropdown
                    label="Dificuldade"
                    selectPlaceholder="Você considera este deck..."
                    options={[{ text: "op1", value: "op1" }]}
                  />
                </div>
                <div>
                  <div className="font-semibold text-lg flex justify-between">
                    <p>Cartas:</p> <span>{}</span>
                  </div>
                  <DeckCardList/>
                </div>
                <button className="btn btn-primary w-full">Publicar</button>
              </form>
            </section>
          </div>
        </main>
        <DeckCardInsertModal />
      </DefaultLayout>
    </>
  );
};

export default NewDeck;
