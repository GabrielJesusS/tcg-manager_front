import { useRecoilValue } from "recoil";
import { PokemonCard } from "../PokemonCard";
import { CardAbilities } from "./CardAbilities";
import { CardAttacks } from "./CardAttacks";
import { CardTypes } from "./CardTypes";
import { CardTypesValues } from "./CardTypesValues";
import { useGetCard } from "@/presentation/hooks/useGetCard";
import { pokemonCardIdAtom } from "@/presentation/store/cardAtom";
import { generateRandomId } from "@/utils/generateRandomId";
import { SuperTypeEnum } from "@/presentation/enums/SuperTypeEnum";

export const CardInfoViewer = (): JSX.Element => {
  const cardId = useRecoilValue(pokemonCardIdAtom);
  const { data } = useGetCard(cardId);

  const isPokemonType = ![SuperTypeEnum.ENERGY, SuperTypeEnum.TRAINER].includes(
    data?.data.supertype.toLowerCase() as SuperTypeEnum
  );

  return (
    <section className="drop-shadow-xl bg-system rounded-lg p-3 lg:p-8 text-xs sm:text-base ">
      {data ? (
        <>
          <div className="flex flex-col md:flex-row md:space-x-5 mb-3">
            <div className="space-y-2 w-fit mx-auto">
              <PokemonCard
                decorative
                src={data.data.images.small}
              ></PokemonCard>
            </div>
            <div className="w-full">
              <h1 className=" text-base  sm:text-xl md:text-3xl font-bold">
                {data.data.name}
              </h1>
              <hr className="h-1 bg-system-200 border-none " />
              <div className="flex space-x-safe mt-2">
                {isPokemonType ? (
                  <div className="space-y-4 shrink-0 grow ">
                    {data.data.types && (
                      <CardTypes label="Tipo:" types={data.data.types} />
                    )}
                    {data.data.resistances ? (
                      <CardTypesValues
                        label="Resistência:"
                        types={data.data.resistances}
                      />
                    ) : null}
                    {data.data.weaknesses ? (
                      <CardTypesValues
                        label="Fraquezas:"
                        types={data.data.weaknesses}
                      />
                    ) : null}
                    {data.data.retreatCost ? (
                      <CardTypes
                        label="Custo de recuo:"
                        types={data.data.retreatCost}
                      />
                    ) : null}
                  </div>
                ) : null}
                <div className="mt-3 hidden md:block space-y-3 lg:mt-0">
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
                  <ul>
                    <li>
                      <h3 className="font-semibold text-lg">Regras</h3>
                    </li>
                    <li>
                      <ul className="space-y">
                        {data.data.rules?.map((e) => (
                          <li key={generateRandomId()}>{e}</li>
                        ))}
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

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
            <ul>
              <li>
                <h3>Regras</h3>
              </li>
              <li>
                <ul className="space-y">
                  {data.data.rules?.map((e) => (
                    <li key={generateRandomId()}>{e}</li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
          <hr className="h-1 bg-system-200 border-none " />
          <div className="mt-3 flex w-full justify-between items-center">
            <ul>
              {data.data.subtypes.map((e) => (
                <li key={e} className="inline">
                  {e}
                </li>
              ))}
            </ul>
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
        </>
      ) : null}
    </section>
  );
};
