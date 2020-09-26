import App from "next/app";
import { appWithTranslation } from "../i18n";
import { Fragment } from "react";
import Head from "next/head";
import "../styles/index.css";
import "../styles/animations.css";

const MyApp = ({ Component, pageProps }) => (
  <Fragment>
    <Head>
      <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
      <link rel='icon' href='/favicon.ico' type='image/x-icon' />
      <link
        href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;800;900&display=swap'
        rel='stylesheet'
      />
      <meta name='google-site-verification' content='3FFvixAfe9M59vzdW5JrL5lXVpd96VLc5b08Z2JAIUw' />
      <meta charset='UTF-8' />
      <meta name='description' content='Mkrtich Matevosyan personal website' />
      <meta name='keywords' content='Armenia,Full Stack,Javascript,Developer,Node.js,React.js' />
      <meta name='author' content='Mkrtich Matevosyan' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <title>Mkrtich Matevosyan | Full Stack Developer</title>
    </Head>
    <Component {...pageProps} />
  </Fragment>
);

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};
export default appWithTranslation(MyApp);
