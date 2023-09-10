import { deckStatisticsSelector } from "@/presentation/store/genericAtoms";
import { useRecoilValue } from "recoil";
import { useMemo } from "react";
import { DonutChart } from "../DonutChart";
import classNames from "classnames";

export const DeckStatistics = (): JSX.Element => {
  const totalCards = useRecoilValue(deckStatisticsSelector);

  const dataset = useMemo(() => {
    const statistics = {
      pokemon: totalCards.pokemon,
      trainer: totalCards.trainer,
      energy: totalCards.energy,
    };

    return {
      labels: Object.keys(statistics).map((e) => e.toUpperCase()),
      datasets: [
        {
          label: "Cartas presentes",
          data: Object.values(statistics),
          backgroundColor: ["#cd3b3b", "#278ccc", "#2E7D32"],
        },
      ],
    };
  }, [totalCards]);

  const reachedTheLimit = useMemo(() => {
    return totalCards.total === 60;
  }, [totalCards]);

  return (
    <div className="bg-system shadow-md rounded-2xl w-full py-5 px-6">
      <h2 className="font-bold text-2xl text-center">Estatísticas</h2>
      <p className="w-full text-center">
        Total de cartas:{" "}
        <span
          className={classNames("font-bold",
            reachedTheLimit ? "text-secondary" : "text-error"
          )}
        >
          {totalCards.total}
        </span>
      </p>
      {totalCards.total !== 0 ? (
        <DonutChart data={dataset}></DonutChart>
      ) : (
        <p className="font-bold text-system-200 text-2xl text-center">
          Adicione uma carta para visualizar as estatísticas do deck! =)
        </p>
      )}
    </div>
  );
};
