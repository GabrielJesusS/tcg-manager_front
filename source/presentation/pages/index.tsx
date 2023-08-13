import { Footer } from "@/presentation/components/common/Footer";
import { Navbar } from "@/presentation/components/common/Navbar";
import { ArticlesList } from "../components/common/ArticlesList";
import { ArticlesItems } from "../data/mocks/articleMock";
import { HomeCaroussel } from "../components/common/Caroussel/HomeCaroussel";
import { Banners } from "../data/local/banners";
import { loadUserData } from "../middlewares/loadUserData";

function Home(): JSX.Element {
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


export default loadUserData(Home)