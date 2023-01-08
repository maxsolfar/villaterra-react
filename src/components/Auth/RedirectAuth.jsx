import React from 'react';
import { Link } from 'react-router-dom';

const RedirectAuth = ({ type, link }) => {
  return (
    <div className="text-sm py-4 text-center">
      <span className="font-medium text-secondary dark:text-gray-50 mr-2">
        {type === 'Sign in'
          ? 'Already have an Account'
          : "Don't Have an Account?"}
      </span>
      <Link
        to={link}
        className="font-semibold text-md text-primary-400 hover:text-primary-500"
      >
        {type}
      </Link>
    </div>
  );
};

export default RedirectAuth;
