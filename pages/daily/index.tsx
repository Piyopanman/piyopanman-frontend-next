import Layout from "../../components/Layout";
import DailyContent from "../../components/DailyContent";

interface Props {
  id: number;
  date: string;
  evaluation: string;
}

const DailyIndex = (props: Props[]) => {
  return (
    <Layout title="日報一覧∧( 'Θ' )∧">
      <h1>日報一覧</h1>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://piyopanman.pythonanywhere.com/daily/");
  const json = await res.json();
  //   console.log(json);
  return {
    props: {
      json,
    },
  };
};

export default DailyIndex;
