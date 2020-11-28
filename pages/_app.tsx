import App from "next/app";
import { AppProps } from "next/dist/next-server/lib/router/router";
import React from "react";
import '../styles/index.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { AppProps } from "next/dist/next-server/lib/router/router";

function MyApp ({ Component, pageProps }: AppProps  ) {
    return (<Component {...pageProps} />)
}
export default MyApp;
