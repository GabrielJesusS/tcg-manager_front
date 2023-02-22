import { Footer } from "@/presentation/components/common/Footer";
import { Navbar } from "@/presentation/components/common/Navbar";
import { ArticlesList } from "../components/common/ArticlesList";
import { Deckitem } from "../components/common/Deckitem";
import { Articles } from "../data/mocks/articleMock";
import { Deckitems } from "../data/mocks/deckMocks";

export default function Home(): JSX.Element {
  return (
    <>
      <Navbar></Navbar>
      <main className="my-20">
          <section className="px-safe">
          <ArticlesList topicTitle="Recentes" articles={Articles}></ArticlesList>
          <ul className="grid grid-cols-2 grid-flow-row gap-2">
              {Deckitems.map((item)=>
                <li key={item.deckId}>
                  <Deckitem {...item}></Deckitem>
                </li>
              )}
          </ul>
          </section>
      </main>
      <Footer></Footer>
    </>
  );
}
