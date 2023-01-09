import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Button,
  Heading,
  Input,
  Oauth,
  RedirectAuth,
  SeparatorText,
} from '../../components';
import { signIn } from '../../firebase/signIn';

const SignIn = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = data;
  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const redirectHome = () => {
    setTimeout(()=>{
      navigate('/');
    },2500);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    signIn(email, password).then(
      (result) => result === 'success' && redirectHome()
    );
  };
  return (
    <>
      <section className="flex min-h-full h-[calc(100vh-64px)]">
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-28">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <Heading
              title={'Sign in to your account'}
              ext={'and'}
              subtitle={"let's get started"}
            />
            <section className="mt-8">
              <div>
                <Oauth type={'Sign in'} />
                <SeparatorText text={'Or continue with'} />
              </div>
              <div className="mt-6">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <Input
                    labelText={'Email address'}
                    type={'email'}
                    value={email}
                    onChange={handleChange}
                  />
                  <Input
                    labelText={'Password'}
                    type={'password'}
                    value={password}
                    onChange={handleChange}
                  />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded dark:border-gray-700 dark:bg-[#24272c80] border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-gray-900 dark:text-gray-200"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <Link
                        to="/forgot-password"
                        className="font-medium text-primary-400 hover:text-primary-500"
                      >
                        Forgot your password?
                      </Link>
                    </div>
                  </div>
                  <Button text={'Sign in'} />
                </form>
                <RedirectAuth type={'Sign up'} link={'/sign-up'} />
              </div>
            </section>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover rounded-bl-[25%]"
            src="https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default SignIn;
