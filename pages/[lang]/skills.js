import Layout from "components/Layout";
import skills from "constants/skills";
import Head from "next/head";
import { withTranslation } from "../../i18n";
import { Fragment } from "react";

const Skills = ({ t, i18n }) => {
  const { language } = i18n;
  return (
    <Fragment>
      <Head>
        <title>{t("meta:skills_title")}</title>
        <meta name='description' content={t("meta:skills_description")} />
        <meta name='keywords' content={t("meta:skills_keywords")} />
        <meta name='author' content={t("meta:author")} />
        <link rel='alternate' href={`${process.env.NEXT_PUBLIC_DOMAIN}/en`} hrefLang='en' />
        <link rel='alternate' href={`${process.env.NEXT_PUBLIC_DOMAIN}/hy`} hrefLang='hy' />
        <link rel='alternate' href={`${process.env.NEXT_PUBLIC_DOMAIN}/ru`} hrefLang='ru' />
        <link rel='canonical' href={`${process.env.NEXT_PUBLIC_DOMAIN}/${language}/skills`} />
      </Head>
      <Layout>
        <div className='flex flex-wrap justify-center gap-6 py-16'>
          {skills.map((skill, key) => (
            <div
              className=' flex justify-center items-center flex-col  w-150px shadow-xs border-2 border-transparent  transition-all duration-500 hover:animate-border select-none'
              key={key}
            >
              <img src={skill.icon} className='h-150px w-auto object-contain p-4' />
              <p className='text-center py-2 bg-black text-white w-full mx-0 px-0'>{skill.name}</p>
            </div>
          ))}
        </div>
      </Layout>
    </Fragment>
  );
};

Skills.getInitialProps = async () => ({
  namespacesRequired: ["meta"],
});

export default withTranslation(["meta"])(Skills);
