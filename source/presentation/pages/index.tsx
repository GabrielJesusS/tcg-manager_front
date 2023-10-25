import { HomeCaroussel } from "../components/common/Caroussel/HomeCaroussel";
import { Banners } from "../data/local/banners";
import { useGetRandomCard } from "../hooks/useGetRandomCard";
import { DefaultLayout } from "../components/layouts/DefaultLayout";
import { PokemonCard } from "../components/common/PokemonCard";
import { ArticleCollection } from "../components/common/ArticlesList/ArticleCollection";
import { DeckCollection } from "../components/common/DeckList/DeckCollection";

function Home(): JSX.Element {
  const { data } = useGetRandomCard();

  return (
    <>
      <DefaultLayout>
        <main className="bg-bg-pattern grow ">
          <div className="dft-container bg-system h-full">
            <HomeCaroussel banners={Banners}></HomeCaroussel>
            <section className="px-safe py-safe space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 gap-6 h-full">
              <div className="w-full flex items-center flex-col space-y-4">
                <h2 className="text-2xl font-bold text-center">
                  Sua carta da sorte!
                </h2>
                <PokemonCard url={data ? `cartas/${data?.id}` : ""} src={data?.images.small} />
              </div>
              <div>
                <ArticleCollection />
              </div>
              <div className="col-span-2">
                <DeckCollection />
              </div>
            </section>
          </div>
        </main>
      </DefaultLayout>
    </>
  );
}

export default Home;
