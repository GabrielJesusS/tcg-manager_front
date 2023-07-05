import { Textarea } from "@/presentation/components/common/Textarea";
import { Textinput } from "@/presentation/components/common/Textinput";
import { LinkEditModal } from "@/presentation/components/common/modals/LinkEditModal";
import { DefaultLayout } from "@/presentation/components/layouts/DefaultLayout";
import { RichText } from "@/presentation/components/richText";
import ArrowIcon from "@/presentation/public/images/icons/chevron.svg";
import CloudIcon from "@/presentation/public/images/icons/cloud-upload.svg";
import { useSlate } from "slate-react";

const NewArticle = ({}) => {

  return (
    <>
      <DefaultLayout>
        <main className="flex flex-col flex-1 justify-center items-center bg-red-400 h-full">
          <section className="max-w-7xl flex-1 space-y-5 w-full text-system-800 mx-auto bg-system-100 p-safe">
            <div className="lg:grid-cols-3 lg:grid">
              <button className="flex items-center">
                <ArrowIcon className="w-8 fill-system-400 rotate-180" />
                <span className="font-bold text-2xl text-system-400">
                  Voltar
                </span>
              </button>
              <h1 className="font-bold text-3xl mx-auto text-center">
                Construtor de artigos
              </h1>
            </div>
            <div className="flex lg:space-x-8">
              <div className="flex  flex-col space-y-8 w-full">
                <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5">
                  <div className="bg-system flex flex-col  w-full shadow-md rounded-2xl py-5 px-6 space-y-4">
                    <h2 className="font-bold text-2xl  sm:whitespace-nowrap">
                      Titulo do artigo...
                    </h2>
                    <hr className="bg-system-200 h-1" />
                    <RichText></RichText>
                  </div>
                  <div className="bg-system lg:max-w-xs w-full shadow-md rounded-2xl py-5 px-6 relative">
                    <div className="space-y-8 sticky top-20">
                      <h2 className="font-bold text-2xl text-center sm:whitespace-nowrap">
                        Informações do artigo
                      </h2>
                      <Textinput
                        type="text"
                        label="Título do artigo"
                        placeholder="Meu artigo..."
                      />
                      <Textinput
                        type="text"
                        label="Descrição do artigo"
                        placeholder="Este artigo fala..."
                      />
                      <Textarea
                        label="Tags"
                        placeholder="Tags separadas por vírgulas..."
                      />
                      <div>
                        <label className="font-bold text-secondary block">
                          <span className="flex justify-between">
                            Fazer upload de uma capa{" "}
                            <CloudIcon className="w-6 h-6 fill-secondary" />{" "}
                          </span>
                          <input type="file" className="hidden" />
                        </label>
                        <Textinput
                          type="url"
                          label="ou passe uma URL"
                          placeholder="http://minha.imagem"
                        />
                      </div>
                      <div>
                        <div>
                          <p className="text-base font-bold">Preview da capa</p>
                          <hr className="bg-system-200 h-1" />
                        </div>

                        <button className="btn btn-error w-full" type="button">
                          Remover capa
                        </button>
                      </div>

                      <button className="btn btn-primary w-full" type="button">
                        Publicar novo deck
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </DefaultLayout>
    </>
  );
};

export default NewArticle;
