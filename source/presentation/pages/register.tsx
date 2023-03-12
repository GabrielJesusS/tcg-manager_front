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
import CardBackplate from "@/presentation/public/images/rsc/mocks/card-back.png";
import { PokemonCard } from "../components/common/PokemonCard";
import { createRegisterUserUsecase } from "@/factories/createRegisterUserUsecase";

interface RegisterProps extends HTMLAttributes<HTMLDivElement> {}

interface RegisterParams {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register = ({}: RegisterProps) => {
  const registerUserUsecase = createRegisterUserUsecase();

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

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="absolute w-full h-full z-0 bg-red-300">
        <picture>
          <img
            className="object-cover w-full h-full"
            src={BackgroundImage.src}
            alt=""
            height={608}
            width={296}
          />
        </picture>
      </div>
      <main className="relative z-10 flex flex-col">
        <div className="relative h-full flex-col flex">
          <section className="min-h-screen grow shrink-0 px-safe flex justify-around max-w-7xl mx-auto w-full items-center">
            <div className="hidden lg:block">
              <PokemonCard></PokemonCard>
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
                <Link href="/login" className="dft-link">
                  aqui!
                </Link>
              </p>
            </div>
          </section>
          <Footer></Footer>
        </div>
      </main>
    </div>
  );
};

export default Register;
