import { Footer } from "../components/common/Footer";
import TCGManagerLogo from "@/presentation/public/images/logo/logo-variation.svg";
import Link from "next/link";
import Image from "next/image";
import BackgroundImage from "@/presentation/public/images/rsc/bgs/formbg-1.gif";
import { PokemonCard } from "../components/common/PokemonCard";
import { useGetRandomCard } from "../hooks/useGetRandomCard";
import { PageRoutesEnum } from "../enums/PagesEnum";
import { RegisterForm } from "../components/common/Forms/RegisterForm";

const Register = ():JSX.Element => {

  const { data } = useGetRandomCard();

  return (
    <div className="h-screen flex flex-col">
      <div className="fixed -z-10 h-screen w-screen">
        <Image
          className="h-full object-cover object-center w-full"
          src={BackgroundImage.src}
          alt={""}
          fill
        />
      </div>
      <main className="relative z-10 flex flex-col h-full">
        <div className="relative h-full flex-col flex">
          <section className=" grow shrink-0 px-safe flex justify-around max-w-7xl mx-auto w-full items-center">
            <div className="hidden md:block">
              <PokemonCard
                animate
                src={data?.images.small}
                url={data ? `cartas/${data?.id}` : ""}
              />
            </div>
            <div className="bg-white h-fit w-fit my-safe px-6 md:px-12 py-8 rounded-2xl space-y-6">
              <Link href="/">
                <TCGManagerLogo className={"h-28 mx-auto"} />
              </Link>
              <h1 className="uppercase text-center text-2xl font-bold">
                Registro
              </h1>
              <RegisterForm />
              <p className="text-center">
                Já possui registro? Autentique-se{" "}
                <Link href={PageRoutesEnum.LOGIN} className="dft-link">
                  aqui!
                </Link>
              </p>
            </div>
          </section>
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default Register;
