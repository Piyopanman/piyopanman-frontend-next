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
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      />

      <meta name="application-name" content="ぴよぱんまんどっとこむ" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta
        name="apple-mobile-web-app-title"
        content="ぴよぱんまんどっとこむ"
      />
      <meta name="description" content="🐤ぴよぱんまんのサイトです🐤" />
      <meta name="theme-color" content="#7ac0cc" />

      <link rel="apple-touch-icon" href="/hiyoko02.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/hiyoko02.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/hiyoko02.png" />
      <link rel="apple-touch-icon" sizes="167x167" href="/hiyoko02.png" />

      <link rel="icon" type="image/png" sizes="32x32" href="/hiyoko02.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/hiyoko02.png" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="shortcut icon" href="/hiyoko02.png" />

      <meta name="twitter:url" content="https://piyopanman.com" />
      <meta name="twitter:title" content="ぴよぱんまん" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content="🐤ぴよぱんまんのサイトです🐤" />
      <meta name="twitter:site" content="@hiyoko_coder" />
      <meta
        name="twitter:image"
        content="https://piyopanman.com/hiyoko02.png"
      />
      <meta name="twitter:creator" content="@hiyoko_coder" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="🐤ぴよぱんまん🐤" />
      <meta property="og:description" content={`${twitter}`} />
      <meta property="og:site_name" content="🐤ぴよぱんまん🐤" />
      <meta property="og:url" content="https://piyopanman.com" />
      <meta property="og:image" content="https://piyopanman.com/hiyoko02.png" />
    </Head>
    <Header />
    {children}
  </div>
);

export default Layout;
