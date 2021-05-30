import "../styles/global.scss";
import "../styles/profile.scss";
import "../styles/contact.scss";
import { RecoilRoot } from "recoil";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
