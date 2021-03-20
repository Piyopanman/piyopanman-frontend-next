import Layout from "../../../components/Layout";
import { GetStaticProps, GetStaticPaths } from "next";
import CategoryContent from "../../../components/pages/daily/CategoryContent";
import CategoryList from "../../../components/pages/daily/CategoryList";

interface Props {
  context: Context[];
  category: string;
}

interface Context {
  date: string;
  content: string;
}

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
    <Layout
      title={`${title} - ぴよぱんまん`}
      twitter={`ぴよぱんまんの${title}`}
    >
      <CategoryList />
      <div className="categoryView-container">
        <h1 className="category-title">{title}</h1>
        {context.map((c) => (
          <CategoryContent key={c.date} {...c} />
        ))}
      </div>
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
    revalidate: 30,
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
  return { paths, fallback: "blocking" };
};

export default DailyCategoryView;
