import Layout from "../../../components/Layout";
import { GetStaticProps, GetStaticPaths } from "next";
import CategoryContent from "../../../components/pages/daily/CategoryContent";

interface Props {
  context: Context[];
  category: string;
}

interface Context {
  date: string;
  content: string;
}

//Sass書く方法調べる

const DailyCategoryView: React.FC<Props> = ({ context, category }) => {
  let title: string;
  if (category === "univ") {
    title = "大学のこと";
  } else if (category === "study") {
    title = "勉強";
  } else if (category === "other") {
    title = "その他";
  } else if (category === "first_meet") {
    title = "はじましてだったこと";
  } else if (category === "wanna_do") {
    title = "やりたいこと";
  } else {
    title = "1日のまとめ";
  }

  return (
    <Layout title={`${title} - ぴよぱんまん`}>
      <h1>{title}</h1>
      {context.map((c) => (
        <CategoryContent key={c.date} {...c} />
      ))}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(
    `https://piyopanman.pythonanywhere.com/daily/post/${params!.category}`
  );
  const category = params!.category;

  const context = await res.json();
  return {
    props: { context, category },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    "https://piyopanman.pythonanywhere.com/daily/categories/"
  );
  const json = (await res.json()) as string[];
  const paths = json.map((j) => ({
    params: {
      category: j,
    },
  }));
  return { paths, fallback: false };
};

export default DailyCategoryView;
