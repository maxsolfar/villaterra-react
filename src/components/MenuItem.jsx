import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({ title, url, status, setPage }) => {
  return (
    <>
      {status ? (
        <Link
          to={url}
          onClick={setPage}
          className="inline-flex items-center border-b-2 border-primary px-1 pt-1 text-sm font-medium text-dark dark:text-light"
        >
          {title}
        </Link>
      ) : (
        <Link
          to={url}
          onClick={setPage}
          className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-primary hover:text-gray-700 dark:text-gray-400 dark:hover:text-light transition ease-in-out delay-150 duration-1500"
        >
          {title}
        </Link>
      )}
    </>
  );
};

export default MenuItem;
