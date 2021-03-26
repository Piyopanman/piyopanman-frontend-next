import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "./Header";
import styles from "./layout.module.scss";

type Props = {
  children?: ReactNode;
  title?: string;
  twitter?: string;
};

const Layout = ({
  children,
  title = "ぴよぱんまん",
  twitter = "🐤ぴよぱんまん🐤",
}: Props) => (
  <div className={styles.container}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="🐤ぴよぱんまんのサイトです🐤" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@hiyoko_coder" />
      <meta property="og:url" content="https://piyopanman.com" />
      <meta property="og:title" content="ぴよぱんまん" />
      <meta property="og:description" content={`${twitter}`} />
      <meta
        property="og:image"
        content="https://piyopanman-piyopanman.vercel.app/logo192.png"
      />
    </Head>
    <Header />
    {children}
  </div>
);

export default Layout;
