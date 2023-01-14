import { ChevronRightIcon, StarIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

export default function Example() {
  return (
    <div className="pb-8 sm:pb-12 lg:pb-12">
      <div className="overflow-hidden pt-8 sm:pt-12 lg:relative lg:py-16">
        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div className="mt-10">
            <Link to="/" className="inline-flex space-x-4">
              <span className="rounded bg-primary-50 px-2.5 py-1 text-sm font-semibold text-primary-600">
                What's new
              </span>
              <span className="inline-flex items-center space-x-1 text-sm font-medium text-primary-600">
                <span>Residential & Office</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </span>
            </Link>
            <div className="mt-6 sm:max-w-xl">
              <h1 className="text-4xl font-bold tracking-tight text-secondary dark:text-light sm:text-5xl">
                Find your Smart Living Style
              </h1>
              <p className="mt-6 text-lg text-gray-500">
                Looking for the perfect escape from your previous residence
                with peace and quite? Imagine coming home to this!
              </p>
            </div>
            <form action="#" className="mt-8 sm:flex sm:w-full sm:max-w-lg">
              <div className="min-w-0 flex-1">
                <label htmlFor="hero-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="hero-email"
                  type="email"
                  className="block w-full rounded-md border dark:text-light dark:border-gray-700 dark:bg-[#24272c80] border-gray-300 px-5 py-3 text-base text-secondary placeholder-gray-500 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-3">
                <button
                  type="submit"
                  className="block w-full rounded-md border border-transparent bg-primary-600 px-5 py-3 text-base font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:px-10"
                >
                  Notify me
                </button>
              </div>
            </form>
            <div className="mt-6">
              <div className="inline-flex items-center divide-x divide-gray-300">
                <div className="flex flex-shrink-0 pr-5">
                  <StarIcon
                    className="h-5 w-5 text-yellow-400"
                    aria-hidden="true"
                  />
                  <StarIcon
                    className="h-5 w-5 text-yellow-400"
                    aria-hidden="true"
                  />
                  <StarIcon
                    className="h-5 w-5 text-yellow-400"
                    aria-hidden="true"
                  />
                  <StarIcon
                    className="h-5 w-5 text-yellow-400"
                    aria-hidden="true"
                  />
                  <StarIcon
                    className="h-5 w-5 text-yellow-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="min-w-0 flex-1 py-1 pl-5 text-sm text-gray-500 sm:py-3">
                  <span className="font-medium text-secondary dark:text-light">
                    Rated 5 stars
                  </span>{' '}
                  by over{' '}
                  <span className="font-medium text-primary-600">
                    500 beta users
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:mx-auto sm:max-w-3xl sm:px-6">
          <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-10 lg:w-1/2">
            <div className="relative sm:mx-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none">
              <img
                className="w-full lg:h-full lg:w-auto lg:max-w-none"
                src="https://i.imgur.com/LolTYQF.png"
                alt=""
              />
            </div>
          </div>
        </div>
        </div>

      </div>
    </div>
  );
}
