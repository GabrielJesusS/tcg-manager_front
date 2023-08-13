import Link from "next/link";
import TCGLogo from "@/presentation/public/images/logo/logo-variation.svg";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { articleEditAtom } from "@/presentation/store/modal";
import { useLockBody } from "@/presentation/hooks/useLockBody";
import { articleTitleAtom } from "@/presentation/store/editor";

export const EditorNavBar = (): JSX.Element => {
  const setModalOpen = useSetRecoilState(articleEditAtom);

  const [lock] = useLockBody();

  function handleModalOpen(): void {
    lock();
    setModalOpen(true);
  }

  return (
    <header className="w-full sticky bg-white z-20 top-0 flex flex-col md:flex-row items-center justify-between px-8">
      <div className="md:px-6 py-2 flex flex-col md:flex-row md:items-center md:w-fit w-full justify-between overflow-hidden">
        <Link href={"/"} className="w-fit">
          <TCGLogo className={"h-12"} />
        </Link>
        <NavbarTitle />
      </div>
      <button
        onClick={handleModalOpen}
        className="btn btn-primary w-full  md:w-fit h-fit shrink-0"
      >
        Publicar novo artigo
      </button>
    </header>
  );
};

const NavbarTitle = (): JSX.Element => {
  const title = useRecoilValue(articleTitleAtom);
  return (
    <h1 className="px-2 truncate  md:text-3xl w-full min-w-0 ">
      {title || "Titulo do artigo"}
    </h1>
  );
};
