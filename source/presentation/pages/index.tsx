import { Footer } from "@/presentation/components/common/Footer";
import { Navbar } from "@/presentation/components/common/Navbar";
import { ArticlesList } from "../components/common/ArticlesList";
import { Deckitem } from "../components/common/Deckitem";
import { Setitem } from "../components/common/Setitem";
import { Articles } from "../data/mocks/articleMock";
import { Deckitems } from "../data/mocks/deckMocks";
import { Setitems } from "../data/mocks/setMocks";
import { HomeCaroussel } from "../components/common/Caroussel/HomeCaroussel";
import { Banners } from "../data/local/banners";

export default function Home(): JSX.Element {
  return (
    <>
      <Navbar></Navbar>
      <main className="my-20">
        <div className="dft-container">
          <HomeCaroussel banners={Banners}></HomeCaroussel>
          <section className="px-safe">
            <ArticlesList
              topicTitle="Recentes"
              articles={Articles}
            ></ArticlesList>
            <ul className="grid grid-cols-2 grid-flow-row gap-2">
              {Deckitems.map((item) => (
                <li key={item.deckId}>
                  <Deckitem {...item}></Deckitem>
                </li>
              ))}
            </ul>
            <ul className="grid grid-cols-2 grid-flow-row gap-2">
              {Setitems.map((item) => (
                <li key={item.setId}>
                  <Setitem {...item}></Setitem>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
