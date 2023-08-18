import { Footer } from "@/presentation/components/common/Footer";
import { loadUserData } from "@/presentation/middlewares/loadUserData";
import dynamic from "next/dynamic";

const RichText = dynamic(
  async () =>
    await import("@/presentation/components/richText").then(
      (mod) => mod.RichText
    ),
  {
    ssr: false,
  }
);

const EditorNavBar = dynamic(
  async () =>
    await import("@/presentation/components/common/EditorNavbar").then(
      (mod) => mod.EditorNavBar
    ),
  {
    ssr: false,
  }
);

const ArticleEditModal = dynamic(
  async () =>
    await import(
      "@/presentation/components/common/modals/ArticleEditModal"
    ).then((mod) => mod.ArticleEditModal),
  {
    ssr: false,
  }
);

const NewArticle = (): JSX.Element => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <EditorNavBar />
        <main className="flex flex-col flex-1 justify-center items-center h-full grow my-4">
          <section className="max-w-7xl flex-1 space-y-5 w-full text-system-800 mx-auto px-safe flex flex-col">
            <RichText />
          </section>
        </main>
        <Footer />
      </div>
      <ArticleEditModal />
    </>
  );
};

export default loadUserData(NewArticle);
