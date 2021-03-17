import Layout from "../../components/Layout";
import DailyContent from "../../components/pages/daily/DailyContent";

interface Daily {
  id: number;
  date: string;
  evaluation: string;
}

interface Props {
  dailies: Daily[];
}

const DailyIndex: React.FC<Props> = ({ dailies }) => {
  return (
    <Layout title="日報一覧∧( 'Θ' )∧">
      <h1>日報一覧</h1>
      <div>
        {dailies.map((d) => (
          <DailyContent key={d.date} {...d} />
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://piyopanman.pythonanywhere.com/daily/");
  const dailies = (await res.json()) as Props;
  return {
    props: {
      dailies,
    },
  };
};

export default DailyIndex;
