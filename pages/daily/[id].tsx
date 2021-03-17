import Layout from "../../components/Layout";
import { GetStaticProps, GetStaticPaths } from "next";

interface Daily {
  id: number;
  date: string;
  evaluation: string;
}

interface Props {
  dailies: Daily[];
}

interface Props {
  id: number;
  date: string;
  univ: string;
  study: string;
  other: string;
  first_meet: string;
  wanna_do: string;
  summary: string;
}

const DailyDetail: React.FC<Props> = (daily) => {
  return (
    <Layout title="hoge">
      <h1>hoge</h1>
      <h1>
        {daily.id}、{daily.date}、{daily.study}
      </h1>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch("https://piyopanman.pythonanywhere.com/daily/");
  const json = (await res.json()) as Daily[];
  const paths = json.map((j) => ({
    params: {
      id: j.id.toString(),
    },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://piyopanman.pythonanywhere.com/daily/post/${params!.id}` //非nullアサーション
  );
  const daily = await res.json();
  return {
    props: daily,
  };
};

export default DailyDetail;
