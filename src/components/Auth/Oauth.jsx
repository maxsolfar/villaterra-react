import React from 'react';
import { AiOutlineGoogle } from 'react-icons/ai';

const Oauth = ({ type }) => {
  return (
    <div>
      <p className="text-sm font-medium text-gray-700 dark:text-gray-200 pb-1">
        {type} with
      </p>
      <button
        //onClick={}
        className="mt-1 inline-flex w-full justify-center rounded-md border dark:border-gray-700 dark:bg-[#24272c] dark:hover:bg-dark border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-100"
      >
        <span className="sr-only">{type} with Google</span>
        <AiOutlineGoogle className="text-xl text-primary-500 mr-2" />
        {type} with Google
      </button>
    </div>
  );
};

export default Oauth;
