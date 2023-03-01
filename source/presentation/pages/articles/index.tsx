import { ArticlesList } from "@/presentation/components/common/ArticlesList";
import { Header } from "@/presentation/components/common/Header";
import { Textinput } from "@/presentation/components/common/Textinput";
import { DefaultLayout } from "@/presentation/components/layouts/DefaultLayout";
import { ArticlesItems } from "@/presentation/data/mocks/articleMock";

const Articles = ({}) => {
  return (
    <DefaultLayout>
      <main>
        <Header>Artigos</Header>

        <section className="p-safe mx-auto max-w-7xl">
        <form action="" className="space-y-6">
          <Textinput label="" placeholder="Buscar por..." type="text">
            {" "}
          </Textinput>
          <button className="btn btn-primary w-full">Filtrar</button>
        </form>
        <div className="mt-8">
        <ArticlesList
              topicTitle="Recentes"
              articles={ArticlesItems}
        ></ArticlesList>
        </div>

        </section>
      </main>
    </DefaultLayout>
  );
};

export default Articles;
