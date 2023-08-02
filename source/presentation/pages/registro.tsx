import { HTMLAttributes } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Footer } from "../components/common/Footer";
import { Textinput } from "../components/common/Textinput";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../schemas/registerSchema";
import TCGManagerLogo from "@/presentation/public/images/logo/logo-variation.svg";
import Link from "next/link";
import Image from "next/image";
import BackgroundImage from "@/presentation/public/images/rsc/bgs/formbg-1.gif";
import { PokemonCard } from "../components/common/PokemonCard";
import { createRegisterUserUsecase } from "@/factories/createRegisterUserUsecase";
import { useGetRandomCard } from "../hooks/useGetRandomCard";
import { PageRoutesEnum } from "../enums/PagesEnum";

interface RegisterProps extends HTMLAttributes<HTMLDivElement> {}

interface RegisterParams {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = ({}: RegisterProps) => {
  const registerUserUsecase = createRegisterUserUsecase();
  const { data, error, isLoading, update } = useGetRandomCard();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterParams>({
    resolver: yupResolver(registerSchema),
  });

  const submitData: SubmitHandler<RegisterParams> = async (data) => {
    try {
      const response = await registerUserUsecase.execute(data);
    } catch (error) {}
  };

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
              <form className="space-y-6" onSubmit={handleSubmit(submitData)}>
                <Textinput
                  label="Nome de usuário..."
                  type="text"
                  inputProps={{
                    ...register("userName"),
                    placeholder: "Nome de usuário",
                  }}
                />
                {errors.userName && (
                  <span className="text-error">{errors.userName.message}</span>
                )}
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
                <Textinput
                  label="Confirmar senha..."
                  type="password"
                  inputProps={{
                    ...register("confirmPassword"),
                    placeholder: "Confirmar senha",
                  }}
                />
                {errors.confirmPassword && (
                  <span className="text-error">
                    {errors.confirmPassword.message}
                  </span>
                )}
                <button className="btn btn-primary uppercase w-full">
                  Registar-se
                </button>
              </form>
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
