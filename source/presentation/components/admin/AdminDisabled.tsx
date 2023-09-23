import TCGLogo from "@/presentation/public/images/logo/logo.svg";

export const AdminDisabled = (): JSX.Element => {
  return (
    <div className="w-screen h-screen bg-primary flex justify-center items-center">
      <div className="space-y-4 p-safe">
        <TCGLogo className={"h-12 mx-auto"} />
        <h1 className="text-xl text-system text-center">
          Desculpe, mas o sistema não está disponível nessa resolução
        </h1>
      </div>
    </div>
  );
};
