import React from 'react';
import { Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
const MobileMenuItem = ({ title, url, status, setPage }) => {
  return (
    <>
      {status ? (
        <Disclosure.Button
          as={Link}
          to={url}
          onClick={setPage}
          className="block border-l-4 border-primary-500 bg-primary-50 py-2 pl-3 pr-4 text-base font-medium text-dark sm:pl-5 sm:pr-6"
        >
          {title}
        </Disclosure.Button>
      ) : (
        <Disclosure.Button
          as={Link}
          to={url}
          onClick={setPage}
          className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-400 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
        >
          {title}
        </Disclosure.Button>
      )}
    </>
  );
};

export default MobileMenuItem;
