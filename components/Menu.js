import Icons from "components/Icons";
import { withTranslation } from "../i18n";
import { useState, Fragment } from "react";
import Link from "next/link";
import Items from "constants/menu";

const Menu = ({ t, i18n }) => {
  const [visible, setVisible] = useState(false);
  const { language } = i18n;
  return (
    <Fragment>
      <div
        className={`w-12 xl:fixed xs:absolute right-0 top-0 mr-12 xl:mt-12 xs:mt-6 cursor-pointer hover:opacity-75 z-50 transition-all duration-300 select-none ${
          visible ? "text-white" : "text-black"
        }`}
        children={visible ? Icons.close : Icons.menu}
        onClick={() => setVisible(!visible)}
      />

      {visible ? (
        <div className='w-full h-full fixed bg-black text-white z-40 top-0 left-0 flex justify-center items-center   '>
          <ul className='menu-in-anim'>
            {Items(language).map((item, key) => (
              <li
                className='md:text-6xl xs:text-3xl text-center  hover:opacity-75 hover:animate-border-white border-2 border-transparent'
                key={key}
              >
                <Link href={item.href}>
                  <a children={t(item.t_key)} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </Fragment>
  );
};

export default withTranslation("menu")(Menu);
