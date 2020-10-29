import Menu from "./Menu";
import LanguageSwitcher from "./LanguageSwitcher";
import { Fragment } from "react";
import Link from "next/link";
import { withTranslation } from "../i18n";

const Layout = ({ children, i18n }) => {
  const { language } = i18n;
  return (
    <Fragment>
      <LanguageSwitcher i18n={i18n} />
      <Menu />
      <div className='container'>
        <div className='relative bg-white shadow-lg scale-in-center' itemScope itemType='http://schema.org/Person'>
          <div className='absolute w-full left-0 md:-top-75px xs:-top-50px '>
            <Link href={`/${language}`}>
              <a>
                <img
                  src='/images/avatar.jpg'
                  className='md:w-150px md:h-150px xs:w-100px xs:h-100px rounded-full m-auto  transition-all duration-300 hover:animate-border border-2 border-transparent '
                  itemProp='image'
                />
              </a>
            </Link>
          </div>
          <div className='text-primary-dark  py-75px px-4' children={children} />
        </div>
      </div>
    </Fragment>
  );
};

export default withTranslation()(Layout);
