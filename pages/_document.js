import Document, { Html, Head, Main, NextScript } from "next/document";
import { withTranslation } from "../i18n";

const schemaWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Mkrtich Matevosyan - Personal website",
  url: "http://matevosyan.vercel.app/",
};

const schemaPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  url: "https://matevosyan.vercel.app/",
  image: "https://matevosyan.vercel.app/images/avatar.jpg",
  email: "matevosyanmko@gmail.com",
  foundingDate: "2020",
  foundingLocation: "Yerevan, Armenia",
  location: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "Armenia",
      addressLocality: "Yerevan",
    },
  },
  description: "Mkrtich Matevosyan - Full Stack Developer ",
  name: "Mkrtich Matevosyan",
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "+374 98 599 599",
    },
  ],
};

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
          <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebsite) }} />
          <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaPerson) }} />
        </body>
      </Html>
    );
  }
}

export default withTranslation("common")(MyDocument);
