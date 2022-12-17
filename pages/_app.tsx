import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { GlobalStyles } from "../components/Styled/Global";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />

      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
