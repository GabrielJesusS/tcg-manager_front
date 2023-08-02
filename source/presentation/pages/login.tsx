import { EventHandler, HTMLAttributes, SyntheticEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Footer } from "../components/common/Footer";
import { Textinput } from "../components/common/Textinput";
import { yupResolver } from "@hookform/resolvers/yup";
import TCGManagerLogo from "@/presentation/public/images/logo/logo-variation.svg";
import Link from "next/link";
import Image from "next/image";
import BackgroundImage from "@/presentation/public/images/rsc/bgs/formbg-1.gif";
import { loginSchema } from "../schemas/loginSchema";
import { PokemonCard } from "../components/common/PokemonCard";
import { createAuthUserUsecase } from "@/factories/createAuthUserUsecase";
import { useGetRandomCard } from "../hooks/useGetRandomCard";
import { useRouter } from "next/router";
import { PageRoutesEnum } from "../enums/PagesEnum";

interface LoginProps extends HTMLAttributes<HTMLDivElement> {}

interface LoginParams {
  email: string;
  password: string;
}

const authUserUsecase = createAuthUserUsecase();

const Login = ({}: LoginProps) => {
  const { push } = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginParams>({
    resolver: yupResolver(loginSchema),
  });
  const [loading, setLoading] = useState<boolean>(false);
  const { data, error, isLoading } = useGetRandomCard();

  const submitData: SubmitHandler<LoginParams> = async (data) => {
    setLoading(true);
    const response = await authUserUsecase.execute(data);

    if (response.isLeft()) {
      setLoading(false);
      return;
    }

    await push(PageRoutesEnum.HOME);
  };

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
              <form className="space-y-6" onSubmit={handleSubmit(submitData)}>
                <Textinput
                  label="E-mail..."
                  type="email"
                  inputProps={{ ...register("email"), placeholder: "Email" }}
                />
                {errors.email && (
                  <span className="text-error">{errors.email.message}</span>
                )}
                <Textinput
                  label="Senha..."
                  type="password"
                  inputProps={{ ...register("password"), placeholder: "Senha" }}
                />
                {errors.password && (
                  <span className="text-error">{errors.password.message}</span>
                )}

                <button
                  disabled={loading}
                  className="btn btn-primary uppercase w-full"
                >
                  Autenticar-se
                </button>
              </form>
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
          <Footer className="relative z-10"></Footer>
        </div>
      </div>
  );
};

export default Login;
