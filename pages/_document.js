import Document, { Html, Head, Main, NextScript } from "next/document";
import { withTranslation } from "../i18n";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, lang: ctx.query.lang };
  }

  render() {
    const { lang } = this.props;
    return (
      <Html lang={lang}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default withTranslation("common")(MyDocument);
