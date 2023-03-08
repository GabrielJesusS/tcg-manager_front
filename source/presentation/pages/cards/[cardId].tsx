import { PokemonCard } from "@/presentation/components/common/PokemonCard";
import { DefaultLayout } from "@/presentation/components/layouts/DefaultLayout";
import { pokemonTypeIcons } from "@/presentation/public/images/icons/types";

interface ICARD {}

const CardViewer = ({}) => {
  const Icon: Function = pokemonTypeIcons["Colorless"];
  const defaultIconClass: string = "h-5";

  return (
    <DefaultLayout>
      <div className="">
        <main className="p-safe mx-auto max-w-7xl space-y-4">
          <section className="bg-system rounded-lg p-3 text-xs sm:text-base lg:flex">
            <div className="grid grid-cols-2 gap-5 mb-3">
              <div className="space-y-2 ">
                <PokemonCard />
                <p className="block">Pokémon - Estagio 2</p>
                <p className="block">Avaliação: 5.0</p>
                <div className="flex">
                  <small>1/127</small>
                  <picture>
                    <img src="" alt="" />
                  </picture>
                </div>
              </div>
              <div>
                <h1 className="text-xl sm:text-3xl font-bold">Fletchinder</h1>
                <hr className="h-1 bg-system-200 border-none " />
                <div className="space-y-4 mt-2">
                  <div className="space-y-1">
                    <p>Tipo:</p>
                    <div>
                      <Icon className={defaultIconClass}></Icon>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p>Resistência:</p>
                    <div className="flex">
                      <Icon className={defaultIconClass}></Icon>{" "}
                      <small>+30</small>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p>Fraquezas:</p>
                    <div className="flex">
                      <Icon className={defaultIconClass}></Icon>{" "}
                      <small>+30</small>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p>Custo de recuo:</p>
                    <div className="flex space-x-1">
                      {Array.from({ length: 4 }).map((i, index) => (
                        <Icon className={defaultIconClass}></Icon>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="lg:hidden h-1 bg-system-200 border-none " />
            <div className="mt-3 space-y-3 lg:mt-0">
              <hr className="mt-9 h-1 bg-system-200 border-none lg:block hidden" />
              <div>
                <p className="text-base sm:text-lg font-semibold">
                  <span>Passivas:</span>
                  <span>Poké-Body</span>
                </p>
                <p>
                  Each Pokémon that has any damage counters on it (both yours
                  and your opponent's) can't use any Poké-Powers."
                </p>
              </div>
              <div>
                <p className="text-base sm:text-lg font-semibold">
                  <span>Passivas:</span>
                  <span>Poké-Body</span>
                </p>
                <p>
                  Each Pokémon that has any damage counters on it (both yours
                  and your opponent's) can't use any Poké-Powers."
                </p>
              </div>
              <div>
                <p className="text-base sm:text-lg font-semibold">
                  <span>Passivas:</span>
                  <span>Poké-Body</span>
                </p>
                <p>
                  Each Pokémon that has any damage counters on it (both yours
                  and your opponent's) can't use any Poké-Powers."
                </p>
              </div>
            </div>
          </section>
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

export default CardViewer;
