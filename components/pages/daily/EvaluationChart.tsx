import { Ratio } from "../../../pages/daily/index";
import { Pie } from "react-chartjs-2";

const EvaluationChart: React.FC<Ratio> = (props) => {
  const data = {
    labels: ["perfect", "good", "soso", "bad"],
    datasets: [
      {
        data: [props.perfect, props.good, props.soso, props.bad],
        backgroundColor: [
          "rgb(240, 53, 47, 0.5)",
          "rgb(252, 137, 242, 0.5)",
          "rgb(50, 179, 54, 0.5)",
          "rgb(31, 100, 232, 0.5)",
        ],
        borderColor: [
          "rgba(240, 53, 47, 1)",
          "rgba(252, 137, 242, 1)",
          "rgba(50, 179, 54, 1)",
          "rgba(31, 100, 232, 1)",
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

export default EvaluationChart;
