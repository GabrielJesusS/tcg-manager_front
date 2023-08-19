import { DefaultLayout } from "@/presentation/components/layouts/DefaultLayout";
import { checkCardExists } from "@/presentation/middlewares/checkCardExists";
import { Breadcrumb } from "@/presentation/components/common/Breadcrumb";
import { CardInfoViewer } from "@/presentation/components/common/CardViewer/CardInfoViewer";

const CardViewer = (): JSX.Element => {
  return (
    <DefaultLayout>
      <div className="bg-background grow">
        <main className="p-safe mx-auto max-w-7xl space-y-4">
          <Breadcrumb />
          <CardInfoViewer />
          <section>
            <h2 className="font-bold">Decks recomendados</h2>
          </section>
          <section>
            <h2 className="font-bold">Decks comentários</h2>
          </section>
        </main>
      </div>
    </DefaultLayout>
  );
};

export default checkCardExists(CardViewer);
