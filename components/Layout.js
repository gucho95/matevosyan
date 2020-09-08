import Menu from "./Menu";
import { Fragment } from "react";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Menu />
      <div className='container'>
        <div className='relative bg-white shadow-lg scale-in-center'>
          <div className='absolute w-full left-0 -top-75px '>
            <img src='/images/avatar.jpg' className='w-150px h-150px rounded-full m-auto border-2 ' />
          </div>
          <div className='text-primary-dark  py-75px px-4' children={children} />
        </div>
      </div>
    </Fragment>
  );
};

export default Layout;
