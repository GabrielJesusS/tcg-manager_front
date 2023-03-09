import { Dropdown } from "@/presentation/components/common/Dropdown";
import { Textarea } from "@/presentation/components/common/Textarea";
import { Textinput } from "@/presentation/components/common/Textinput";
import { DefaultLayout } from "@/presentation/components/layouts/DefaultLayout";

const NewDeck = ({}) => {
  return (
    <>
      <DefaultLayout>
        <main className="flex flex-col grow justify-center items-center bg-red-400 h-full">
          <div className="w-full p-safe">
            <h1 className="text-2xl font-bold text-center">Novo artigo!</h1>
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
                  label="Classificação"
                  selectPlaceholder="Selecione uma classificação"
                  options={[{ text: "op1", value: "op1" }]}
                />
                <Dropdown
                  label="Carta cover"
                  selectPlaceholder="Selecione uma carta de capa"
                  options={[{ text: "op1", value: "op1" }]}
                />
                </div>
                <Textarea
                  placeholder="Este artigo fala sobre..."
                  label="Texto:"
                />
                <Textarea
                  placeholder="Digite a utl da fonte e uma virgula para separa-las"
                  label="O artigo possui fontes?"
                />
                <button className="btn btn-primary w-full">Publicar</button>
              </form>
            </section>
          </div>
        </main>
      </DefaultLayout>
    </>
  );
};

export default NewDeck;
