import React from 'react';
import { Button, Heading, Input, Oauth, RedirectAuth, SeparatorText } from '../components';

const SignIn = () => {
  return (
    <>
      <section className="flex min-h-full h-[calc(100vh-64px)]">
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-28">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <Heading title={"Sign in to your account"} ext={"and"} subtitle={"let's get started"}/>
            <section className="mt-8">
              <div>
                <Oauth type={'Sign in'} />
                <SeparatorText text={'Or continue with'} />
              </div>
              <div className="mt-6">
                <form action="#" method="POST" className="space-y-6">
                  <Input labelText={'Email address'} type={'email'} />
                  <Input labelText={'Password'} type={'password'} />
                
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
                      <a
                        href="/"
                        className="font-medium text-primary-400 hover:text-primary-500"
                      >
                        Forgot your password?
                      </a>
                    </div>
                  </div>
                  <Button text={"Sign in"}/>
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
