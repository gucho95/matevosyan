import App from "next/app";
import { appWithTranslation } from "../i18n";
import { Fragment } from "react";
import Head from "next/head";
import "../styles/index.css";
import "../styles/animations.css";

const MyApp = ({ Component, pageProps }) => (
  <Fragment>
    <Head>
      <link href='https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap' rel='stylesheet' />
    </Head>
    <Component {...pageProps} />
  </Fragment>
);

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};
export default appWithTranslation(MyApp);
