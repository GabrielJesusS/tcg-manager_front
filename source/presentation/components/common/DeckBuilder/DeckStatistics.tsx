import {
  deckStatisticsSelector,
  totalDeckCardsAtom,
} from "@/presentation/store/genericAtoms";
import { useRecoilValue } from "recoil";
import { useMemo } from "react";
import { DonutChart } from "../DonutChart";

export const DeckStatistics = (): JSX.Element => {
  const statistics = useRecoilValue(deckStatisticsSelector);
  const totalCards = useRecoilValue(totalDeckCardsAtom);

  const x = useMemo(() => {
    return {
      labels: Object.keys(statistics).map((e)=> e.toUpperCase()),
      datasets: [
        {
          label: "Cartas presentes",
          data: Object.values(statistics),
          backgroundColor: ["#cd3b3b", "#278ccc","#2E7D32"]
        },
      ],
    };
  }, [statistics]);

  return (
    <div className="bg-system shadow-md rounded-2xl w-full py-5 px-6">
      <h2 className="font-bold text-2xl text-center">Estatísticas</h2>
      {totalCards !== 0 ? (
        <DonutChart data={x}></DonutChart>
      ) : (
        <p className="font-bold text-system-200 text-2xl text-center">
          Adicione uma carta para visualizar as estatísticas do deck! =)
        </p>
      )}
    </div>
  );
};