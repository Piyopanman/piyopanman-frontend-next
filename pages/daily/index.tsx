import { NextPage, GetStaticProps } from "next";
import Layout from "../../components/Layout";
import CategoryList from "../../components/pages/daily/CategoryList";
import DailyContent from "../../components/pages/daily/DailyContent";

interface Daily {
  id: number;
  date: string;
  evaluation: string;
}

interface Props {
  dailies: Daily[];
}

const DailyIndex: NextPage<Props> = ({ dailies }) => {
  return (
    <div className="main">
      <Layout title="日報一覧 - ぴよぱんまん" twitter="ぴよぱんまんのにっぽ〜">
        <CategoryList />
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
    revalidate: 30,
  };
};

export default DailyIndex;
