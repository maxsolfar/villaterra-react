import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Heading,
  Input,
  Oauth,
  RedirectAuth,
  SeparatorText,
} from '../../components';
import { signUp } from '../../firebase/signUp';

const SignUp = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const { name, email, password, confirmPassword } = data;
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
    signUp(email, password, name, data).then(
      (result) => result === 'success' && redirectHome()
    );
  };

  return (
    <>
      <section className="flex min-h-full h-[calc(100vh-64px)]">
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-28">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <Heading
              title={'Create Account'}
              ext={'and'}
              subtitle={"join VillaTerra's community"}
            />
            <section className="mt-8">
              <div>
                <Oauth type={'Sign up'} />
                <SeparatorText text={'Or continue with'} />
              </div>
              <div className="mt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    labelText={'Full Name'}
                    type={'text'}
                    name={'name'}
                    value={name}
                    onChange={handleChange}
                  />
                  <Input
                    labelText={'Email Address'}
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
                  <Input
                    labelText={'Confirm Password'}
                    type={'password'}
                    name={'confirmPassword'}
                    value={confirmPassword}
                    onChange={handleChange}
                  />
                  <Button text={'Sign up'} />
                </form>
                <RedirectAuth type={'Sign in'} link={'/sign-in'} />
              </div>
            </section>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover rounded-bl-[25%]"
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default SignUp;
