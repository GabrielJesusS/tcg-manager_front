import { ArticlesList } from "@/presentation/components/common/ArticlesList";
import { Header } from "@/presentation/components/common/Header";
import { ArticleFilterModal } from "@/presentation/components/common/modals/ArticleFilterModal";
import { TextInput } from "@/presentation/components/common/Textinput";
import { DefaultLayout } from "@/presentation/components/layouts/DefaultLayout";
import { ArticlesItems } from "@/presentation/data/mocks/articleMock";
import { articlesFilterAtom } from "@/presentation/store/modal";
import { useRecoilState } from "recoil";

const Articles = (): JSX.Element => {
  const [modalIsOpen, toggleModal] = useRecoilState(articlesFilterAtom);

  function toggle(): void {
    toggleModal(!modalIsOpen);
  }

  return (
    <DefaultLayout>
      <main>
        <Header>Artigos</Header>

        <section className="p-safe mx-auto max-w-7xl">
          <div className="space-y-6">
            <form action="">
              <TextInput label="" placeholder="Buscar por..." type="text" />
            </form>
            <button onClick={toggle} className="btn btn-primary w-full">
              Filtrar
            </button>
            <div className="mt-8">
              <ArticlesList
                topicTitle="Recentes"
                articles={ArticlesItems}
              ></ArticlesList>
            </div>
          </div>
        </section>
      </main>
      <ArticleFilterModal />
    </DefaultLayout>
  );
};

export default Articles;
