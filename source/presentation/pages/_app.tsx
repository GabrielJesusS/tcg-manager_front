import React from "react";
import type { AppProps } from "next/app";
import "@/presentation/styles/globals.css";
import favicon from "@/presentation/public/images/logo/favicon.ico"

import {Poppins} from "@next/font/google"

import classNames from "classnames";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: [ "300","400", "500" ,"600", "700", "800"],
  variable: "--font-poppins"
});



function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
    <Head>
      <title>TCG Manager - Pokémon TCG Wiki</title>
      <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
    </Head>
    <div className={classNames(poppins.variable, "font-poppins")}>
      <Component {...pageProps} />
    </div>
    </>
  )
}

export default MyApp