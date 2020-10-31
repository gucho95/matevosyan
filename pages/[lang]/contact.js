import Layout from "components/Layout";
import contacts from "constants/contacts";
import Head from "next/head";
import { withTranslation } from "../../i18n";
import { Fragment } from "react";

const Contact = ({ t, i18n }) => {
  const { language } = i18n;
  return (
    <Fragment>
      <Head>
        <title>{t("meta:contact_title")}</title>
        <meta name='description' content={t("meta:contact_description")} />
        <meta name='keywords' content={t("meta:contact_keywords")} />
        <meta name='author' content={t("meta:author")} />
        <link rel='alternate' href={`${process.env.NEXT_PUBLIC_DOMAIN}/en`} hrefLang='en' />
        <link rel='alternate' href={`${process.env.NEXT_PUBLIC_DOMAIN}/hy`} hrefLang='hy' />
        <link rel='alternate' href={`${process.env.NEXT_PUBLIC_DOMAIN}/ru`} hrefLang='ru' />
        <link rel='canonical' href={`${process.env.NEXT_PUBLIC_DOMAIN}/${language}/contact`} />
      </Head>
      <Layout>
        <div className='grid xs:grid-cols-1 xl:grid-cols-2 py-8 gap-6'>
          {contacts.map((item, key) => (
            <div
              key={key}
              className='flex justify-between items-center p-2  shadow-xs hover:opacity-75  duration-500 transition-all '
            >
              <div className='w-1/12'>
                <img src={item.icon} alt={item.name} />
              </div>
              <div className='w-10/12 overflow-hidden truncate'>
                <a
                  href={item.linkType ? `${item.linkType}: ${item.path}` : item.path}
                  target='_blank'
                  children={item.path}
                  className=' whitespace-pre-line'
                />
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </Fragment>
  );
};
Contact.getInitialProps = async () => ({
  namespacesRequired: ["meta"],
});

export default withTranslation(["meta"])(Contact);
