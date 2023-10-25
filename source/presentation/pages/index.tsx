import { Footer } from "@/presentation/components/common/Footer";
import { Navbar } from "@/presentation/components/common/Navbar";
import { ArticlesList } from "../components/common/ArticlesList";
import { ArticlesItems } from "../data/mocks/articleMock";
import { HomeCaroussel } from "../components/common/Caroussel/HomeCaroussel";
import { Banners } from "../data/local/banners";

function Home(): JSX.Element {
  return (
    <>
      <Navbar />
      <main className="bg-bg-pattern">
        <div className="dft-container bg-system">
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
      <Footer />
    </>
  );
}

export default Home;
