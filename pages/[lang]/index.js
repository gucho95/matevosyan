import { withTranslation } from "../../i18n";
import Point from "components/Point";
import Layout from "components/Layout";
import Head from "next/head";
import { Fragment } from "react";

const Homepage = ({ t, i18n, ...props }) => {
  const { language } = i18n;
  return (
    <Fragment>
      <Head>
        <title>{t("meta:index_title")}</title>
        <meta name='description' content={t("meta:index_description")} />
        <meta name='keywords' content={t("meta:index_keywords")} />
        <meta name='author' content={t("meta:author")} />
        <link rel='alternate' href={`${process.env.NEXT_PUBLIC_DOMAIN}/en`} hrefLang='en' />
        <link rel='alternate' href={`${process.env.NEXT_PUBLIC_DOMAIN}/hy`} hrefLang='hy' />
        <link rel='alternate' href={`${process.env.NEXT_PUBLIC_DOMAIN}/ru`} hrefLang='ru' />
        <link rel='canonical' href={`${process.env.NEXT_PUBLIC_DOMAIN}/${language}`} />
      </Head>
      <Layout>
        <div className='flex  xl:justify-around py-8 xl:flex-row xs:flex-col xs:justify-center xs:text-sm md:text-base'>
          <div className='flex flex-col  xl:items-start xs:items-center '>
            <h1 className='md:text-3xl xs:text-2xl font-bold'>{t("common:name")}</h1>
            <ul>
              <li className='mt-2'>
                <Point icon='code' text={t("common:position")} />
              </li>
              <li className='mt-2'>
                <Point icon='date' text='05/11/1995' />
              </li>
              <li className='mt-2'>
                <Point icon='placemark' text={t("common:country")} />
              </li>
            </ul>
          </div>

          <div className='uppercase xs:mt-16 xl:mt-0 xs:text-xs md:text-base'>
            <div className='border-b-2 border-gray-200 pb-4'>
              <p className='font-bold text'>{t("school")}</p>
              <p className='text-gray-900 text-xs'>2002-2013</p>
            </div>

            <div className='mt-8 border-b-2 border-gray-200 pb-4'>
              <p className='font-bold '>{t("army")}</p>
              <p className='text-gray-900 text-xs'>2013-2015</p>
            </div>

            <div className='mt-8 border-b-2 border-gray-200 pb-4'>
              <p className='font-bold '>{t("university")}</p>
              <p className='text-sm'>{t("faculty")}</p>
              <p className='text-gray-900 text-xs'>2013-2019</p>
            </div>

            <div className='mt-8 border-b-2 border-gray-200 pb-4'>
              <p className='font-bold '>{t("innosoft")}</p>
              <p className='text-sm'>{t("innosoft_position")}</p>
              <p className=' text-gray-900 text-xs'>2017-2019</p>
            </div>

            <div className='mt-8 border-b-2 border-gray-200 pb-4'>
              <p className='font-bold '>{t("armath")}</p>
              <p className='text-sm'>{t("armath_position")}</p>
              <p className='text-gray-900 text-xs'>2018- ...</p>
            </div>

            <div className='mt-8 border-b-2 border-gray-200 pb-4'>
              <p className='font-bold'>{t("tpl")}</p>
              <p className='text-sm'>{t("tpl_position")}</p>
              <p className='text-gray-900 text-xs'>2019- ...</p>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

Homepage.getInitialProps = async () => ({
  namespacesRequired: ["about", "common", "meta"],
});

export default withTranslation(["about"])(Homepage);
