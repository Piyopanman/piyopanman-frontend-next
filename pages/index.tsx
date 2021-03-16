import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js!! 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
      <br />
      <Link href="/hoge">
        <a>hoge</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
