import React, { Fragment, useState } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  MoonIcon,
  SunIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/20/solid';
import { MenuItem, MobileMenuItem } from '../index.js';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { useStatusAuth } from '../../hooks/useStatusAuth.jsx';
import { Grid } from 'react-loader-spinner';

const NavBar = ({ theme, handleThemeSwitch }) => {
  const [page, setPage] = useState('/');
  const { loggedIn, setLoggedIn, checkingStatus } = useStatusAuth();
  const auth = getAuth();
  const navigate = useNavigate();
  const links = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'About',
      url: '/about',
    },
    {
      title: 'Services',
      url: '/services',
    },
    {
      title: 'Offers',
      url: '/offers',
    },
  ];

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ');
  };

  const onLogout = () => {
    auth.signOut();
    setLoggedIn(false);
    navigate('/sign-in');
  };

  return (
    <Disclosure
      as="nav"
      className="bg-light dark:bg-dark shadow dark:shadow-secondary-900"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between py-2">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                    <span className="sr-only">Open menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto"
                    src={
                      theme === 'dark'
                        ? 'https://i.imgur.com/LwjVSyj.png'
                        : 'https://i.imgur.com/MoaCcZ6.png'
                    }
                    alt="Villa Terra Logo"
                  />
                </div>
                {/* Mobile menu button */}
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  {links?.map(({ title, url }, index) => {
                    return (
                      <MenuItem
                        key={index}
                        status={page === url ? true : false}
                        title={title}
                        url={url}
                        setPage={() => setPage(url)}
                      />
                    );
                  })}
                </div>
              </div>
              {checkingStatus ? (
                <section className="w-full flex justify-end items-center">
                  <Grid
                    height="30"
                    width="30"
                    color="#00C6BA"
                    ariaLabel="grid-loading"
                    radius="12.5"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                  />
                </section>
              ) : (
                <div className="flex items-center">
                  {!loggedIn && (
                    <div className="hidden md:block md:flex-shrink-0">
                      <Link to="/sign-in">
                        <button
                          type="button"
                          className="relative inline-flex items-center rounded-md border border-transparent bg-secondary hover:bg-gray-800 dark:bg-primary-500 px-4 py-2 text-sm font-medium text-white shadow-sm dark:hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-terceary focus:ring-offset-2"
                        >
                          <ArrowRightOnRectangleIcon
                            className="-ml-1 mr-2 h-5 w-5"
                            aria-hidden="true"
                          />
                          <span>Sign In</span>
                        </button>
                      </Link>
                    </div>
                  )}

                  <div className="md:ml-3 md:flex md:flex-shrink-0 md:items-center">
                    <button
                      type="button"
                      onClick={handleThemeSwitch}
                      className="rounded-full border border-gray-300 dark:border-gray-600 bg-transparent p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-terceary focus:ring-offset-2"
                    >
                      <span className="sr-only">View notifications</span>
                      {theme === 'dark' ? (
                        <SunIcon className="block h-5 w-5" aria-hidden="true" />
                      ) : (
                        <MoonIcon
                          className="block h-5 w-5"
                          aria-hidden="true"
                        />
                      )}
                    </button>

                    {/* Profile dropdown */}
                    {loggedIn && (
                      <Menu
                        as="div"
                        className="hidden md:block md:relative ml-3"
                      >
                        <div>
                          <Menu.Button className="flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-10 w-10 rounded-full border border-gray-300 dark:border-gray-600 p-0.5 object-cover"
                              src={auth.currentUser.photoURL}
                              referrerPolicy="no-referrer"
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/profile"
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  Your Profile
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <Link
                                  to="/"
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  Settings
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={onLogout}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700 w-full text-left'
                                  )}
                                >
                                  Sign out
                                </button>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 pt-2 pb-3">
              {links?.map(({ title, url }, index) => {
                return (
                  <MobileMenuItem
                    key={index}
                    status={page === url ? true : false}
                    title={title}
                    url={url}
                    setPage={() => setPage(url)}
                  />
                );
              })}
            </div>
            {!loggedIn && (
              <div className="border-t-2 border-primary-500">
                <Link
                  to="/sign-in"
                  className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-400 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
                >
                  Sign In
                </Link>
              </div>
            )}
            {!checkingStatus && loggedIn && (
              <div className="border-t border-gray-200 pt-4 pb-3">
                <div className="flex items-center px-4 sm:px-6">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-600">
                      M??ximo Solis
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                      e@email.com
                    </div>
                  </div>
                </div>
                <div className="mt-3 space-y-1">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
                  >
                    Your Profile
                  </Link>
                  <Link
                    to="/"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
                  >
                    Settings
                  </Link>
                  <Disclosure.Button
                    onClick={() => onLogout()}
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
                  >
                    Sign out
                  </Disclosure.Button>
                </div>
              </div>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default NavBar;
