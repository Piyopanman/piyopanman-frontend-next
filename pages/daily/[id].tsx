import Layout from "../../components/Layout";
import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import ReactMarkdown from "react-markdown";
import CategoryList from "../../components/pages/daily/CategoryList";
import { useRecoilValue } from "recoil";
import { evaluationRatioState } from "../../recoil/atoms/evaluationRatio";
import EvaluationChart from "../../components/pages/daily/EvaluationChart";

interface Daily {
  id: number;
  date: string;
  evaluation: string;
}

interface Content {
  id: number;
  date: string;
  univ: string;
  study: string;
  other: string;
  first_meet: string;
  wanna_do: string;
  summary: string;
}

interface Props {
  daily: Content;
}

const DailyDetail: NextPage<Props> = ({ daily }) => {
  const evaluationRatio = useRecoilValue(evaluationRatioState);
  return (
    <Layout
      title={`${daily.date} - ぴよぱんまん`}
      twitter={`ぴよぱんまんの${daily.date}`}
    >
      <CategoryList />
      <EvaluationChart {...evaluationRatio} />
      <div className="detail-container">
        <h1 className="detail-date">{daily.date}</h1>
        <h1 className="detail-title">大学のこと</h1>
        <ReactMarkdown className="detail-content">{daily.univ}</ReactMarkdown>
        <h1 className="detail-title">勉強</h1>
        <ReactMarkdown className="detail-content">{daily.study}</ReactMarkdown>
        <h1 className="detail-title">その他</h1>
        <ReactMarkdown className="detail-content">{daily.other}</ReactMarkdown>
        <h1 className="detail-title">はじめましてだったこと</h1>
        <ReactMarkdown className="detail-content">
          {daily.first_meet}
        </ReactMarkdown>
        <h1 className="detail-title">やりたいこと</h1>
        <ReactMarkdown className="detail-content">
          {daily.wanna_do}
        </ReactMarkdown>
        <h1 className="detail-title">1日のまとめ</h1>
        <ReactMarkdown className="detail-content">
          {daily.summary}
        </ReactMarkdown>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://piyopanman.pythonanywhere.com/daily/post/${params!.id}`
  );
  const daily = await res.json();
  return {
    props: { daily },
    revalidate: 300,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://piyopanman.pythonanywhere.com/daily/");
  const json = (await res.json()) as Daily[];
  const paths = json.map((j) => ({
    params: {
      id: j.id.toString(),
    },
  }));
  return { paths, fallback: "blocking" };
};

export default DailyDetail;
