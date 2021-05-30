import { NextPage, GetStaticProps } from "next";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { getEvaluationRatio } from "../../api/getEvaluationRatio";
import Layout from "../../components/Layout";
import CategoryList from "../../components/pages/daily/CategoryList";
import DailyContent from "../../components/pages/daily/DailyContent";
import EvaluationChart from "../../components/pages/daily/EvaluationChart";
import {
  evaluationRatioState,
  Ratio,
} from "../../recoil/atoms/evaluationRatio";

interface Daily {
  id: number;
  date: string;
  evaluation: string;
}

interface Props {
  dailies: Daily[];
}

const DailyIndex: NextPage<Props> = ({ dailies }) => {
  const [evaluationRatio, setEvaluationRatio] =
    useRecoilState(evaluationRatioState);
  useEffect(() => {
    const func = async () => {
      const res = (await getEvaluationRatio()) as Ratio;
      setEvaluationRatio(res);
    };
    func();
  }, []);

  return (
    <div className="main">
      <Layout title="日報一覧 - ぴよぱんまん" twitter="ぴよぱんまんのにっぽ〜">
        <CategoryList />
        <EvaluationChart {...evaluationRatio} />
        <div className="contents-container">
          {dailies.map((d) => (
            <DailyContent key={d.date} {...d} />
          ))}
        </div>
      </Layout>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://piyopanman.pythonanywhere.com/daily/");
  const dailies = (await res.json()) as Props;
  return {
    props: { dailies },
    revalidate: 300,
  };
};

export default DailyIndex;
