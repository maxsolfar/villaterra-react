import React from 'react';

const Input = ({labelText, type, name, value, onChange}) => {
  return (
    <div>
      <label
        htmlFor={type}
        className="block text-sm font-medium text-gray-700 dark:text-gray-200"
      >
        {labelText}
      </label>
      <div className="mt-1">
        <input
          id={name || type}
          name={name || type}
          type={type || name}
          autoComplete={name || type}
          value={value}
          onChange={onChange}
          required
          className="block w-full appearance-none rounded-md border dark:text-light dark:border-gray-700 dark:bg-[#24272c80] border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
        />
      </div>
    </div>
  );
};

export default Input;
