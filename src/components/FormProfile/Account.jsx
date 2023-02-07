import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { uploadImageCloudinary } from '../../utils/sendCloudinary';
import { updateUserProfile } from '../../firebase/updateProfile';
import InputImage from './InputImage';

const Account = ({user, setRender}) => {
  const hiddenFileInput = useRef(null);
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: user.name,
    email: user.email,
    photoURL: user.photoURL,
    description: user.description,
    imageProfile: user.imageProfile,
  });
  const { name, email, description, photoURL, imageProfile } = data;

  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const getImageLink = async (e) => {
    const link = await uploadImageCloudinary(e);
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: link,
    }));
  };

  const handleClick = (e) => {
    hiddenFileInput.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserProfile(name, description, imageProfile, photoURL);
    setRender(true);
    setTimeout(()=>{
      navigate("/profile");
    }, 1500)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="shadow sm:overflow-hidden sm:rounded-md">
        <div className="space-y-6 bg-light dark:bg-secondary py-6 px-4 sm:p-6">
          <div>
            <h3 className="text-lg font-medium leading-6 text-secondary dark:text-light">
              Profile
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
          <div className="col-span-3">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">
              Avatar Image
            </label>
            <div className="mt-1 flex items-center">
              <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100 dark:bg-[#000000]">
                {photoURL ? (
                  <img
                    src={photoURL}
                    alt="avatar user"
                    className="opacity-75 w-12 h-12 object-cover"
                  />
                ) : (
                  <svg
                    className="h-full w-full text-gray-300 dark:text-gray-700"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
              </span>
              <button
                type="button"
                onClick={handleClick}
                className="ml-5 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-secondary py-2 px-3 text-sm font-medium leading-4 text-gray-700 dark:text-gray-400 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Change Avatar
              </button>
              <input
                type="file"
                id="photoURL"
                name="photoURL"
                ref={hiddenFileInput}
                onChange={getImageLink}
                className="hidden"
              />
            </div>
          </div>

          <div className="col-span-3">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-400"
            >
              Email
            </label>
            <div className="mt-1 flex rounded-md shadow-sm">
              <input
                type="email"
                id="email"
                value={email}
                disabled={true}
                onChange={handleChange}
                className="block w-full disabled:opacity-50 rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm dark:text-gray-300 dark:border-gray-700 dark:bg-[#24272c80]"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-3">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-400"
              >
                Name
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={handleChange}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm dark:text-gray-300 dark:border-gray-700 dark:bg-[#24272c80]"
                />
              </div>
            </div>

            <div className="col-span-3">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 dark:text-gray-400"
              >
                About
              </label>
              <div className="mt-1">
                <textarea
                  id="description"
                  name="description"
                  value={description}
                  onChange={handleChange}
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm dark:text-gray-300 dark:border-gray-700 dark:bg-[#24272c80]"
                  placeholder="Type here about..."
                />
              </div>
            </div>

            <div className="col-span-3">
              <label className="block text-sm font-medium text-gray-700">
                Cover Profile Photo
              </label>
              <InputImage onChange={getImageLink} />
            </div>
          </div>
        </div>
        <div className="bg-gray-50 dark:bg-secondary px-4 py-3 text-right sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-primary-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </form>
  );
};

export default Account;
