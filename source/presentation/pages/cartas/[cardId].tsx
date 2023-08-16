import { PokemonCard } from "@/presentation/components/common/PokemonCard";
import { DefaultLayout } from "@/presentation/components/layouts/DefaultLayout";
import { PokemonTypeIcons } from "@/presentation/public/images/icons/types";
import { Fragment } from "react";
import { CardAttacks } from "@/presentation/components/common/CardViewer/CardAttacks";
import { CardAbilities } from "@/presentation/components/common/CardViewer/CardAbilities";
import { CardSubTypes } from "@/presentation/enums/CardSubtypes";
import { checkCardExists } from "@/presentation/middlewares/checkCardExists";
import { useGetCard } from "@/presentation/hooks/useGetCard";
import { pokemonCardIdAtom } from "@/presentation/store/cardAtom";
import { Breadcrumb } from "@/presentation/components/common/Breadcrumb";
import { useRecoilValue } from "recoil";
import { generateRandomId } from "@/utils/generateRandomId";

const CardViewer = (): JSX.Element => {
  const cardId = useRecoilValue(pokemonCardIdAtom);
  const { data } = useGetCard(cardId)

  return (
    <DefaultLayout>
      {data && (
        <div className="bg-background">
          <main className="p-safe mx-auto max-w-7xl space-y-4">
            <Breadcrumb></Breadcrumb>
            <section className="drop-shadow-xl bg-system rounded-lg p-3 lg:p-8 text-xs sm:text-base ">
              <div className="flex space-x-5 mb-3">
                <div className="space-y-2 w-fit">
                  <PokemonCard
                    decorative
                    url={data.data.id}
                    src={data.data.images.small}
                  ></PokemonCard>
                </div>
                <div className="w-full">
                  <h1 className=" text-base  sm:text-xl md:text-3xl font-bold">
                    {data.data.name}
                  </h1>
                  <hr className="h-1 bg-system-200 border-none " />
                  <div className="flex space-x-safe mt-2">
                    <div className="space-y-4 shrink-0 grow ">
                      {data.data.types && (
                        <div className="space-y-1">
                          <p>Tipo:</p>
                          <div className="text-lg flex space-x-1">
                            {data.data.types.map(
                              (type) => PokemonTypeIcons[type]
                            )}
                          </div>
                        </div>
                      )}
                      {!data.data.subtypes.includes(
                        CardSubTypes.SUPPORTER || CardSubTypes.TOOL
                      ) ? (
                        <>
                          {data.data.resistances ? (
                            <div className="space-y-1">
                              <p>Resistência:</p>
                              <div className="flex text-lg">
                                {data.data.resistances?.map((type) => (
                                  <Fragment key={type.type}>
                                    {PokemonTypeIcons[type.type]}
                                    <small className="leading-none">
                                      {type.value}
                                    </small>
                                  </Fragment>
                                ))}
                              </div>
                            </div>
                          ) : null}
                          {data.data.weaknesses ? (
                            <div className="space-y-1">
                              <p>Fraquezas:</p>
                              <div className="flex text-lg items-center">
                                {data.data.weaknesses?.map((type) => (
                                  <Fragment key={type.type}>
                                    {PokemonTypeIcons[type.type]}
                                    <small className="leading-none">
                                      {type.value}
                                    </small>
                                  </Fragment>
                                ))}
                              </div>
                            </div>
                          ) : null}

                          <div className="space-y-1">
                            <p>Custo de recuo:</p>
                            <div className="flex space-x-1 text-lg">
                              {data.data.retreatCost?.map((type) => (
                                <Fragment key={generateRandomId()}>
                                  {PokemonTypeIcons[type]}
                                </Fragment>
                              ))}
                            </div>
                          </div>
                        </>
                      ) : null}
                    </div>
                    <div className="mt-3 hidden md:block space-y-3 lg:mt-0">
                      <div className="space-y-3">
                        <ul className="space-y-3">
                          {data.data.abilities?.map((item) => (
                            <li key={item.name}>
                              <CardAbilities {...item} />
                            </li>
                          ))}
                        </ul>
                        <ul className="space-y-3">
                          {data.data.attacks?.map((item) => (
                            <li key={item.name}>
                              <CardAttacks key={item.name} {...item} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="md:hidden h-1 bg-system-200 border-none " />
              <div className="mt-3 space-y-3 md:hidden md:mt-0">
                <hr className="mt-9 h-1 bg-system-200 border-none lg:block hidden" />
                <ul className="space-y-3">
                  {data.data.abilities?.map((item) => (
                    <li key={item.name}>
                      <CardAbilities {...item} />
                    </li>
                  ))}
                </ul>
                <ul className="space-y-3">
                  {data.data.attacks?.map((item) => (
                    <li key={item.name}>
                      <CardAttacks key={item.name} {...item} />
                    </li>
                  ))}
                </ul>
              </div>
              <hr className="h-1 bg-system-200 border-none " />

              <div className="mt-3 flex w-full justify-between items-center">
                <p className="block">Pokémon - Estagio 2</p>
                <p className="block">Avaliação: 5.0</p>
                <div className="flex space-x-10 items-end">
                  <small className="text-xs lg:text-xl">
                    {data.data.number} / {data.data.set.total}
                  </small>
                  <picture>
                    <img
                      height={30}
                      width={30}
                      className="w-7"
                      src={data.data.set.images.symbol}
                      alt=""
                    />
                  </picture>
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
      )}
    </DefaultLayout>
  );
};

export default checkCardExists(CardViewer);
