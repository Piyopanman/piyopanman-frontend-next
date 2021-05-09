import { NextPage, GetStaticProps } from "next";
import Layout from "../../components/Layout";
import CategoryList from "../../components/pages/daily/CategoryList";
import DailyContent from "../../components/pages/daily/DailyContent";
import EvaluationChart from "../../components/pages/daily/EvaluationChart";

interface Daily {
  id: number;
  date: string;
  evaluation: string;
}

export interface Ratio {
  perfect: number;
  good: number;
  soso: number;
  bad: number;
}

interface Props {
  dailies: Daily[];
  ratio: Ratio;
}

const DailyIndex: NextPage<Props> = ({ dailies, ratio }) => {
  return (
    <div className="main">
      <Layout title="日報一覧 - ぴよぱんまん" twitter="ぴよぱんまんのにっぽ〜">
        <CategoryList />
        <EvaluationChart {...ratio} />
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
  const res1 = await fetch("https://piyopanman.pythonanywhere.com/daily/");
  const dailies = (await res1.json()) as Props;
  const res2 = await fetch(
    "https://piyopanman.pythonanywhere.com/daily/ratio/"
  );
  const ratio = (await res2.json()) as Props;
  return {
    props: { dailies, ratio },
    revalidate: 300,
  };
};

export default DailyIndex;
