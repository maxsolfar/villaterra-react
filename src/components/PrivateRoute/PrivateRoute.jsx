import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Navigate, Outlet } from 'react-router-dom';
import { useStatusAuth } from '../../hooks/useStatusAuth';

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useStatusAuth();
  if (checkingStatus) {
    return (
      <section className='w-full flex items-center justify-center'>
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#00C6BA"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </section>
    );
  }
  return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
