import Layout from "components/Layout";
import works from "constants/works";
import Head from "next/head";
import { withTranslation } from "../../i18n";
import { Fragment } from "react";

const Works = ({ t, i18n }) => {
  const { language } = i18n;
  return (
    <Fragment>
      <Head>
        <title>{t("meta:works_title")}</title>
        <meta name='description' content={t("meta:works_description")} />
        <meta name='keywords' content={t("meta:works_keywords")} />
        <meta name='author' content={t("meta:author")} />
        <link rel='alternate' href={`${process.env.NEXT_PUBLIC_DOMAIN}/en`} hrefLang='en' />
        <link rel='alternate' href={`${process.env.NEXT_PUBLIC_DOMAIN}/hy`} hrefLang='hy' />
        <link rel='alternate' href={`${process.env.NEXT_PUBLIC_DOMAIN}/ru`} hrefLang='ru' />
        <link rel='canonical' href={`${process.env.NEXT_PUBLIC_DOMAIN}/${language}/works`} />
      </Head>
      <Layout>
        <div className='grid xl:grid-cols-3 flex-wrap gap-6 py-16'>
          {works.map((work, key) => (
            <Fragment key={key}>
              <div className='group shadow-xs    transition-all duration-500  select-none relative border-2 border-transparent  '>
                <div className=' overflow-hidden transition-all duration-300 '>
                  <img src={work.image} className='w-full ' />
                  <p className='text-center py-2   text-white w-full mx-0 px-0  bg-black  group-hover:text-red-600'>
                    {work.name}
                  </p>
                </div>
                <div className=' transform group-hover:scale-100 group-hover:overflow-auto group-hover:opacity-100 bg-overlay  overflow-hidden transition-all duration-100 absolute h-full w-full scale-90  opacity-0 top-0 left-0 text-white  text-center  '>
                  <div className='m-8'>
                    <a
                      href={work.path}
                      target='_blank'
                      className='underline border-2 border-white xl:p-4 xs:p-1 hover:bg-white hover:text-black block '
                    >
                      {t("open_project")}
                    </a>
                  </div>
                  <div className='flex flex-wrap gap-3 justify-center mt-16 p-4  '>
                    {work.tags.map((tag) => (
                      <div className='bg-white text-black p-2 rounded-lg opacity-75 shadow-md' key={tag}>
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </Layout>
    </Fragment>
  );
};

Works.getInitialProps = async () => ({
  namespacesRequired: ["common", "meta"],
});

export default withTranslation("common")(Works);
