import React from 'react';

export const SeparatorText = ({text}) => {
  return (
    <div className="relative mt-6">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="bg-gray-100 dark:bg-[#2b2f35] dark:text-light px-3 py-1 text-secondary-400 dark:text-secondary-400 rounded shadow">
          {text}
        </span>
      </div>
    </div>
  );
};
