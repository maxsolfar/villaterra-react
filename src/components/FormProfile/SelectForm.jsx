import React from 'react';

const SelectForm = ({labelText, name, options, value, onChange}) => {
  return (
    <>
      <label
        htmlFor="location"
        className="block text-sm font-medium text-gray-700 dark:text-light"
      >
        {labelText}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 block w-full rounded-md dark:bg-[#24272c] border-gray-300 dark:border-gray-700 py-2 pl-3 pr-10 text-base focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm dark:text-light"
      >
        {options.map((option,index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </>
  );
};

export default SelectForm;
