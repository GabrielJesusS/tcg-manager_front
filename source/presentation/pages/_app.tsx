import React from "react";
import type { AppProps } from "next/app";
import "@/presentation/styles/globals.css";
import favicon from "@/presentation/public/images/logo/favicon.ico";
import 'react-toastify/dist/ReactToastify.css'

import { Poppins } from "@next/font/google";

import classNames from "classnames";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <Head>
        <title>TCG Manager - Pokémon TCG Wiki</title>
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
      </Head>
      <div className={"font-poppins"}>
        <Component {...pageProps} />
      </div>
      <ToastContainer />
    </RecoilRoot>
  );
}

export default MyApp;
