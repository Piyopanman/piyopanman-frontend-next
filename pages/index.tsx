import { NextPage } from "next";
import Layout from "../components/Layout";

const IndexPage: NextPage = () => (
  <Layout title="ぴよぱんまん" twitter="🐤ぴよぱんまんどっとこむ🐤">
    <div className="top">
      <h1>ぴよぱんまんのサイトです</h1>
      <p>∧( 'Θ' )∧</p>
      <img src="/hiyoko_dummy.png" />
    </div>
  </Layout>
);

export default IndexPage;
