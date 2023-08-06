import { EditorNavBar } from "@/presentation/components/common/EditorNavbar";
import { Footer } from "@/presentation/components/common/Footer";
import { Textarea } from "@/presentation/components/common/Textarea";
import { Textinput } from "@/presentation/components/common/Textinput";
import { ArticleEditModal } from "@/presentation/components/common/modals/ArticleEditModal";
import { LinkEditModal } from "@/presentation/components/common/modals/LinkEditModal";
import { DefaultLayout } from "@/presentation/components/layouts/DefaultLayout";
import { RichText } from "@/presentation/components/richText";
import ArrowIcon from "@/presentation/public/images/icons/chevron.svg";
import { useSlate } from "slate-react";

const NewArticle = ({}) => {
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
      <ArticleEditModal/>
    </>
  );
};

export default NewArticle;
