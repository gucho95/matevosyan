import { useState, Fragment } from "react";
const LanguageSwitcher = ({ i18n }) => {
  const [visible, setVisible] = useState(false);
  const {
    options: { otherLanguages },
    language,
  } = i18n;

  return (
    <div
      className={`xl:fixed xs:absolute left-0 top-0 ml-12 xl:mt-12 xs:mt-6 cursor-pointer hover:opacity-75 z-50 transition-all duration-300 select-none focus:outline-none  `}
    >
      <div className='relative inline-block text-right'>
        <div>
          <span className='rounded-md shadow-sm'>
            <button
              type='button'
              className='inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150 uppercase'
              id='options-menu'
              aria-haspopup='true'
              aria-expanded='true'
              onClick={() => setVisible(!visible)}
            >
              {i18n.language}
              <svg className='-mr-1 ml-2 h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
                <path
                  fillRule='evenodd'
                  d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </span>
        </div>

        {visible ? (
          <div className='origin-top-right absolute right-0 mt-2 w-full  rounded-md shadow-lg'>
            <div
              className='rounded-md bg-white shadow-xs'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='options-menu'
            >
              {otherLanguages.map((lng) =>
                lng !== language ? (
                  <Fragment key={lng}>
                    <div className='py-1'>
                      <a
                        onClick={() => {
                          i18n.changeLanguage(lng);
                          setVisible(false);
                        }}
                        className='block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 text-center uppercase'
                        role='menuitem'
                      >
                        {lng}
                      </a>
                    </div>
                    <div className='border-t border-gray-100'></div>
                  </Fragment>
                ) : null
              )}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
