import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

const logos = [
  {
    name: 'AirBnB',
    url: 'https://res.cloudinary.com/dr93y7mmk/image/upload/v1673750300/airbnb-color-svgrepo-com_jegkwn.svg',
  },
  {
    name: 'TripAdvisor',
    url: 'https://res.cloudinary.com/dr93y7mmk/image/upload/v1673749959/tripadvisor-svgrepo-com_p7hsvx.svg',
  },
  {
    name: 'Amazon',
    url: 'https://res.cloudinary.com/dr93y7mmk/image/upload/v1673750104/amazon-color-svgrepo-com_ygae3p.svg',
  },
  {
    name: 'Behance',
    url: 'https://res.cloudinary.com/dr93y7mmk/image/upload/v1673750147/behance-color-svgrepo-com_gd5elr.svg',
  },
  {
    name: 'Intel',
    url: 'https://res.cloudinary.com/dr93y7mmk/image/upload/v1673750474/intel-svgrepo-com_wrcx3h.svg',
  },
  {
    name: 'Uber',
    url: 'https://res.cloudinary.com/dr93y7mmk/image/upload/v1673750528/uber-svgrepo-com_nwejxl.svg',
  },
];

const Partners = () => {
  return (
    <section className="mt-8 sm:mt-16 md:mt-24 lg:mt-32">
      <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-24">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-secondary dark:text-light sm:text-4xl">
              Our Partners
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-7 text-gray-500 dark:text-gray-400">
              Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum
              urna sed consectetur neque tristique pellentesque. Blandit amet,
              sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi
              vel porttitor vitae ut. Amet vitae fames senectus vitae.
            </p>
            <Link className="mt-4 flex items-center hover:text-primary-700">
              <span
                to="/"
                className="text-base font-medium text-primary-500 hover:text-primary-700"
              >
                Meet our partners
              </span>
              <ChevronRightIcon className="max-h-10 text-primary-500" />
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-2 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="col-span-1 flex justify-center rounded-md bg-gray-50 hover:bg-gray-100 dark:bg-secondary dark:hover:bg-gray-700 py-4 px-4"
              >
                <img className="max-h-16" src={logo.url} alt={logo.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
