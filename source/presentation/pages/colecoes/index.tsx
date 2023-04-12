import { Header } from "@/presentation/components/common/Header";
import { Setitem } from "@/presentation/components/common/Setitem";
import { Textinput } from "@/presentation/components/common/Textinput";
import { DefaultLayout } from "@/presentation/components/layouts/DefaultLayout";
import { Setitems } from "@/presentation/data/mocks/setMocks";

const Sets = ({}) => {
  return (
    <DefaultLayout>
      <main>
        <Header>Coleções</Header>

        <section className="p-safe mx-auto max-w-7xl space-y-4">
          <header>
            <h2 className="font-bold">Mais recentes</h2>
          </header>
          <div className="mt-4">
            <ol className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
              {Setitems.map((item) => (
                <li key={item.setId}>
                  <Setitem {...item} />
                </li>
              ))}
            </ol>
          </div>

          <form action="" className="space-y-6">
            <Textinput label="" placeholder="Buscar por..." type="text">
              {" "}
            </Textinput>
            <button className="btn btn-primary w-full">Filtrar</button>
          </form>

          <div>
            <ol className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
              {Setitems.map((item) => (
                <li key={item.setId}>
                  <Setitem {...item} />
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
};

export default Sets;
