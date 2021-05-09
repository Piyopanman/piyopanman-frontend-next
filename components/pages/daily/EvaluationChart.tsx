import { Ratio } from "../../../pages/daily/index";
import { Pie } from "react-chartjs-2";

export const EvaluationChart: React.FC<Ratio> = (props) => {
  const data = {
    labels: ["perfect", "good", "soso", "bad"],
    datasets: [
      {
        label: "# of Votes",
        data: [props.perfect, props.good, props.soso, props.bad],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="evaluation-chart">
      <h1>1日の評価の割合</h1>
      <Pie data={data} type="pie" />
    </div>
  );
};
