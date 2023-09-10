import React from "react";
import type { AppProps } from "next/app";
import "@/presentation/styles/globals.css";
import favicon from "@/presentation/public/images/logo/favicon.ico";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <Head>
        <title>TCG Manager - Pokémon TCG Wiki</title>
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
      </Head>
      <div className="font-sans">
        <Component {...pageProps} />
      </div>
      <ToastContainer />
    </RecoilRoot>
  );
}

export default MyApp;
