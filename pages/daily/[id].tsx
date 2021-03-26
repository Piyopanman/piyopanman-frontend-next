import Layout from "../../components/Layout";
import { NextPage, GetStaticProps, GetStaticPaths } from "next";
import marked from "marked";
import CategoryList from "../../components/pages/daily/CategoryList";

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
  return (
    <Layout
      title={`${daily.date} - ぴよぱんまん`}
      twitter={`ぴよぱんまんの${daily.date}`}
    >
      <CategoryList />
      <div className="detail-container">
        <h1 className="detail-date">{daily.date}</h1>
        <h1 className="detail-title">大学のこと</h1>
        <div
          dangerouslySetInnerHTML={{ __html: `${marked(`${daily.univ}`)}` }}
          className="detail-content"
        ></div>
        <h1 className="detail-title">勉強</h1>
        <div
          dangerouslySetInnerHTML={{ __html: `${marked(`${daily.study}`)}` }}
          className="detail-content"
        ></div>
        <h1 className="detail-title">その他</h1>
        <div
          dangerouslySetInnerHTML={{ __html: `${marked(`${daily.other}`)}` }}
          className="detail-content"
        ></div>
        <h1 className="detail-title">はじめましてだったこと</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: `${marked(`${daily.first_meet}`)}`,
          }}
          className="detail-content"
        ></div>
        <h1 className="detail-title">やりたいこと</h1>
        <div
          dangerouslySetInnerHTML={{ __html: `${marked(`${daily.wanna_do}`)}` }}
          className="detail-content"
        ></div>
        <h1 className="detail-title">1日のまとめ</h1>
        <div
          dangerouslySetInnerHTML={{ __html: `${marked(`${daily.summary}`)}` }}
          className="detail-content"
        ></div>
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
