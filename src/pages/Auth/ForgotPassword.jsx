import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Heading,
  Input,
  RedirectAuth,
} from '../../components';
import { forgotPassword } from '../../firebase/forgotPassword';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const redirectSignIn = () => {
    setTimeout(()=>{
      navigate('/sign-in');
    },2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    forgotPassword(email).then(
      (result) => result === 'success' && redirectSignIn()
    );
  };
  return (
    <>
      <section className="flex min-h-full h-[calc(100vh-64px)]">
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-28">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <Heading
              title={'Forgot Password?'}
              ext={"please"}
              subtitle={"enter the address associated"}
            />
            <section className="mt-8">
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

                  {/* <div className="flex items-center flex-end">
                    <div className="text-sm">
                      <Link
                        to="/forgot-password"
                        className="font-medium text-primary-400 hover:text-primary-500"
                      >
                        Sign in instead?
                      </Link>
                    </div>
                  </div> */}
                  <Button text={'Send reset password'} />
                </form>
                <RedirectAuth type={'Sign up'} link={'/sign-up'} />
              </div>
            </section>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover rounded-bl-[25%]"
            src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
