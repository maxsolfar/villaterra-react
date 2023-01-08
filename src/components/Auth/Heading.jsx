import React from 'react';

const Heading = ({ title, ext, subtitle }) => {
  return (
    <section>
      <h2 className="mt-6 text-3xl font-bold tracking-tight text-secondary dark:text-gray-100">
        { title }
      </h2>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
        {ext}{' '}
        <span className="font-medium text-primary-400 hover:text-primary-500">
          {subtitle}
        </span>
      </p>
    </section>
  );
};

export default Heading;
