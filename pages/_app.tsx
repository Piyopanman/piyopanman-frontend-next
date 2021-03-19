import "../styles/global.scss";
import "../styles/profile.scss";
import type { AppProps /*, AppContext */ } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
