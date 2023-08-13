import { EditorNavBar } from "@/presentation/components/common/EditorNavbar";
import { Footer } from "@/presentation/components/common/Footer";
import { ArticleEditModal } from "@/presentation/components/common/modals/ArticleEditModal";
import { RichText } from "@/presentation/components/richText";
import { loadUserData } from "@/presentation/middlewares/loadUserData";

const NewArticle = (): JSX.Element => {
  return (
    <>
      {" "}
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
