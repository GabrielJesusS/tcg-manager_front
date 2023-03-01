import { Footer } from "@/presentation/components/common/Footer";
import { Navbar } from "@/presentation/components/common/Navbar";
import { ArticlesList } from "../components/common/ArticlesList";
import { Deckitem } from "../components/common/Deckitem";
import { Setitem } from "../components/common/Setitem";
import { ArticlesItems } from "../data/mocks/articleMock";
import { Deckitems } from "../data/mocks/deckMocks";
import { Setitems } from "../data/mocks/setMocks";
import { HomeCaroussel } from "../components/common/Caroussel/HomeCaroussel";
import { Banners } from "../data/local/banners";

export default function Home(): JSX.Element {
  return (
    <>
      <Navbar></Navbar>
      <main>
        <div className="dft-container">
          <HomeCaroussel banners={Banners}></HomeCaroussel>
          <section className="px-safe py-safe space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 gap-6">
            <ArticlesList
              topicTitle="Recentes"
              articles={ArticlesItems}
            ></ArticlesList>
            <ArticlesList
              topicTitle="Recentes"
              articles={ArticlesItems}
            ></ArticlesList>
            <ArticlesList
              topicTitle="Recentes"
              articles={ArticlesItems}
            ></ArticlesList>
          </section>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
