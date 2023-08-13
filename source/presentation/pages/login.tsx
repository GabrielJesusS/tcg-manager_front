import { Footer } from "../components/common/Footer";
import TCGManagerLogo from "@/presentation/public/images/logo/logo-variation.svg";
import Link from "next/link";
import Image from "next/image";
import BackgroundImage from "@/presentation/public/images/rsc/bgs/formbg-1.gif";
import { PokemonCard } from "../components/common/PokemonCard";
import { useGetRandomCard } from "../hooks/useGetRandomCard";
import { PageRoutesEnum } from "../enums/PagesEnum";
import { LoginForm } from "../components/common/Forms/LoginForm";

const Login = (): JSX.Element => {
  const { data } = useGetRandomCard();

  return (
    <div className="h-screen flex flex-col ">
      <div className="fixed -z-10 h-screen w-screen">
        <Image
          className="h-full object-cover object-center w-full"
          src={BackgroundImage.src}
          alt={""}
          fill
        />
      </div>
      <div className="relative h-full flex-col flex">
        <section className=" px-safe grow relative z-10 flex justify-around max-w-7xl mx-auto w-full items-center">
          <div className="bg-white h-fit w-fit px-6 md:px-12 py-8 rounded-2xl space-y-6">
            <Link href="/">
              <TCGManagerLogo className={"h-28 mx-auto"} />
            </Link>
            <h1 className="uppercase text-center text-2xl font-bold">
              Autenticação
            </h1>
            <LoginForm />
            <p className="text-center text-sm md:text-base">
              Não possui registro? Registre-se{" "}
              <Link href={PageRoutesEnum.REGISTER} className="dft-link">
                aqui!
              </Link>
            </p>
          </div>
          <div className="hidden md:block">
            <PokemonCard
              animate
              src={data?.images.small}
              url={data ? `cartas/${data?.id}` : ""}
            />
          </div>
        </section>
        <Footer className="relative z-10" />
      </div>
    </div>
  );
};

export default Login;
