import React from 'react';

const Button = ({ text }) => {
  return (
    <button
      type="submit"
      className="flex w-full justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
    >
      {text}
    </button>
  );
};

export default Button;
