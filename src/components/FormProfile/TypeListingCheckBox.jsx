import React from 'react';
import { RadioGroup } from '@headlessui/react';
import { CheckCircleIcon } from '@heroicons/react/20/solid';

const TypeListingCheckBox = ({ title, listingType, setListingType, listingTypes }) => {

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className="mt-2 border-t border-gray-200 pt-4">
      <RadioGroup value={listingType} onChange={setListingType}>
        <RadioGroup.Label className="text-lg font-medium text-dark dark:text-light">
          {title}
        </RadioGroup.Label>

        <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
          {listingTypes.map((type) => (
            <RadioGroup.Option
              key={type.id}
              value={type}
              className={({ checked, active }) =>
                classNames(
                  checked ? 'border-transparent' : 'border-gray-300',
                  active ? 'ring-2 ring-primary-500' : '',
                  'relative flex cursor-pointer rounded-lg border bg-light dark:bg-dark dark:border-gray-700 p-4 shadow-sm focus:outline-none'
                )
              }
            >
              {({ checked, active }) => (
                <>
                  <span className="flex flex-1 items-center">
                    <RadioGroup.Label
                      as="span"
                      className="w-8 mr-3 text-primary-500"
                    >
                      <type.icon />
                    </RadioGroup.Label>
                    <span className="flex flex-col">
                      <RadioGroup.Label
                        as="span"
                        className="block text-sm font-medium text-dark dark:text-light"
                      >
                        {type.title}
                      </RadioGroup.Label>
                      <RadioGroup.Description
                        as="span"
                        className="mt-1 flex items-center text-xs text-gray-500 dark:text-gray-400"
                      >
                        {type.description}
                      </RadioGroup.Description>
                    </span>
                  </span>
                  {checked ? (
                    <CheckCircleIcon
                      className="h-5 w-5 text-primary-600"
                      aria-hidden="true"
                    />
                  ) : null}
                  <span
                    className={classNames(
                      active ? 'border' : 'border-2',
                      checked ? 'border-primary-500' : 'border-transparent',
                      'pointer-events-none absolute -inset-px rounded-lg'
                    )}
                    aria-hidden="true"
                  />
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};

export default TypeListingCheckBox;
