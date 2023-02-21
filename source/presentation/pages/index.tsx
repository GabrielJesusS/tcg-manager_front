import { Footer } from "@/presentation/components/common/Footer";
import { Navbar } from "@/presentation/components/common/Navbar";
import { ArticlesList } from "../components/common/ArticlesList";
import { Articles } from "../data/mocks/articleMock";

export default function Home(): JSX.Element {
  return (
    <>
      <Navbar></Navbar>
      <main className="my-20">
          <section className="px-safe">
          <ArticlesList topicTitle="Recentes" articles={Articles}></ArticlesList>
          </section>
      </main>
      <Footer></Footer>
    </>
  );
}
