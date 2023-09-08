import { Footer } from "../components/common/Footer";
import Unknow2x from "@/presentation/public/images/rsc/unknow-2x.png";
import Unknow from "@/presentation/public/images/rsc/unknow.png";
import BackgroundRoad2x from "@/presentation/public/images/rsc/bgs/bg_404-2x.png";
import BackgroundRoad from "@/presentation/public/images/rsc/bgs/bg_404.png";
import { useRouter } from "next/router";

export default function NotFound(): JSX.Element {
  const { back } = useRouter();

  function returnNavigation(): void {
    back();
  }

  return (
    <div className="h-screen flex flex-col">
      <section className="h-full relative text-system">
        <div className="p-5 pt-16 bg-gradient-to-b from-black flex flex-col-reverse text-center h-full relative z-10">
          <h1 className="text-6xl font-extrabold uppercase grow">Erro 404</h1>
          <div className="grow">
            <p className="font-semibold text-xl mb-10">
              Desculpe, não entendi o que você esta procurando...
            </p>
            <p>A página que você procura não existe ou esta indisponivel</p>
            <picture>
              <source
                height={705}
                width={656}
                media="(min-width:1024px)"
                srcSet={Unknow2x.src}
                type="png"
              />
              <img
                height={353}
                width={328}
                src={Unknow.src}
                alt="pokemon unknow image"
                className="mx-auto"
              />
            </picture>
            <button
              onClick={returnNavigation}
              className="text-2xl hover:text-secondary-light duration-150 transition-all"
            >
              Voltar
            </button>
          </div>
        </div>
        <div className="absolute top-0 h-full w-full overflow-hidden">
          <picture>
            <source
              height={1024}
              width={1366}
              media="(min-width:1024px)"
              srcSet={BackgroundRoad2x.src}
              type="png"
            />
            <img
              height={512}
              width={684}
              className="h-full w-full object-cover"
              src={BackgroundRoad.src}
              alt="background road"
            />
          </picture>
        </div>
      </section>
      <Footer />
    </div>
  );
}
