import { PokemonCard } from "@/presentation/components/common/PokemonCard";
import { DefaultLayout } from "@/presentation/components/layouts/DefaultLayout";
import { checkCardExists } from "@/presentation/utils/checkCardExists";
import { IconComponent } from "@/presentation/public/images/icons/types";
import { Fragment } from "react";

const CardViewer = () => {
  const defaultIconClass: string = "h-5";

  const data = checkCardExists();

  return (
    <DefaultLayout>
      {data && (
        <div className="bg-background">
          <main className="p-safe mx-auto max-w-7xl space-y-4">
            <section className="drop-shadow-xl bg-system rounded-lg p-3 lg:p-8 text-xs sm:text-base lg:flex">
              <div className="flex space-x-5 mb-3">
                <div className="space-y-2 w-fit">
                  <PokemonCard
                    url={data.id}
                    src={data.images.small}
                  ></PokemonCard>
                  <p className="block">Pokémon - Estagio 2</p>
                  <p className="block">Avaliação: 5.0</p>
                  <div className="flex justify-between items-end">
                    <small className="text-xs lg:text-xl">
                      {data.number} / {data.set.total}
                    </small>
                    <picture>
                      <img
                        height={30}
                        width={30}
                        className="w-7"
                        src={data.set.images.symbol}
                        alt=""
                      />
                    </picture>
                  </div>
                </div>
                <div className="w-full">
                  <h1 className=" text-base  sm:text-xl md:text-3xl font-bold">
                    {data.name}
                  </h1>
                  <hr className="h-1 bg-system-200 border-none " />
                  <div className="flex space-x-safe mt-2">
                    <div className="space-y-4 shrink-0 grow ">
                      <div className="space-y-1">
                        <p>Tipo:</p>
                        <div className="text-lg">
                          {data.types.map((type) => (
                            <IconComponent key={type} name={type} />
                          ))}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p>Resistência:</p>
                        <div className="flex text-lg">
                          {data.resistances &&
                            data.resistances.map((type) => (
                              <Fragment key={type.type}>
                                <IconComponent name={type.type} />
                                <small className="leading-none">
                                  {type.value}
                                </small>
                              </Fragment>
                            ))}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p>Fraquezas:</p>
                        <div className="flex text-lg items-center">
                          {data.weaknesses &&
                            data.weaknesses.map((type) => (
                              <Fragment key={type.type}>
                                <IconComponent name={type.type} />
                                <small className="leading-none">
                                  {type.value}
                                </small>
                              </Fragment>
                            ))}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p>Custo de recuo:</p>
                        <div className="flex space-x-1 text-lg">
                          {data.retreatCost &&
                            data.retreatCost.map((type, index) => (
                              <Fragment key={type + index}>
                                <IconComponent name={type} />
                              </Fragment>
                            ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 hidden lg:block space-y-3 lg:mt-0">
                      <div>
                        <p className="text-base sm:text-lg font-semibold">
                          <span>Passivas:</span>
                          <span>Poké-Body</span>
                        </p>
                        <p>
                          Each Pokémon that has any damage counters on it (both
                          yours and your opponent's) can't use any Poké-Powers."
                        </p>
                      </div>
                      <div>
                        <p className="text-base sm:text-lg font-semibold">
                          <span>Passivas:</span>
                          <span>Poké-Body</span>
                        </p>
                        <p>
                          Each Pokémon that has any damage counters on it (both
                          yours and your opponent's) can't use any Poké-Powers."
                        </p>
                      </div>
                      <div>
                        <p className="text-base sm:text-lg font-semibold">
                          <span>Passivas:</span>
                          <span>Poké-Body</span>
                        </p>
                        <p>
                          Each Pokémon that has any damage counters on it (both
                          yours and your opponent's) can't use any Poké-Powers."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="lg:hidden h-1 bg-system-200 border-none " />
              <div className="mt-3 space-y-3 lg:hidden lg:mt-0">
                <hr className="mt-9 h-1 bg-system-200 border-none lg:block hidden" />
                <ul className="space-y-3">
                  {data.abilities &&
                    data.abilities.map((item) => (
                      <li key={item.name}>
                        <p className="text-base sm:text-lg font-semibold">
                          <span>{item.type}: </span>
                          <span>{item.name}</span>
                        </p>
                        <p>{item.text}</p>
                      </li>
                    ))}
                </ul>
                <ul className="space-y-3">
                  {data.attacks &&
                    data.attacks.map((item) => (
                      <li key={item.name}>
                        <p className="text-base flex w-full justify-between sm:text-lg font-semibold">
                          <span className="flex w-full items-center space-x-6">
                            <span>{item.name}: </span>
                            <span className="flex space-x-1">
                              {item.cost.map((cost, index) => (
                                <Fragment key={cost + index}>
                                  <IconComponent name={cost} />
                                </Fragment>
                              ))}
                            </span>
                          </span>
                          <span>{item.damage}</span>
                        </p>
                        <p>{item.text}</p>
                      </li>
                    ))}
                </ul>
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
      )}
    </DefaultLayout>
  );
};

export default CardViewer;
