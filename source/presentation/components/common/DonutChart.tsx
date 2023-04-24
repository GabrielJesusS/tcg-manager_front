import { ChartData, Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

interface IChart {
  data: ChartData<"doughnut">;
}

export const DonutChart = ({ data }: IChart): JSX.Element => {
  return (
    <div className="max-w-xs mx-auto">
      <Doughnut
        data={data}
        options={{
          plugins: {
            legend: {
              position: "right",
            },
          },
        }}
      ></Doughnut>
    </div>
  );
};
