import React from 'react';
import { Switch } from '@headlessui/react';

const LabelSwitch = ({title, description, switchOption, onChange}) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  return (
    <Switch.Group as="li" className="flex items-center justify-between py-4">
      <div className="flex flex-col">
        <Switch.Label
          as="p"
          className="text-sm font-medium text-gray-900"
          passive
        >
          {title}
        </Switch.Label>
        <Switch.Description className="text-sm text-gray-500">
          {description}
        </Switch.Description>
      </div>
      <Switch
        checked={switchOption}
        onChange={onChange}
        className={classNames(
          switchOption ? 'bg-teal-500' : 'bg-gray-200',
          'relative ml-4 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2'
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            switchOption ? 'translate-x-5' : 'translate-x-0',
            'inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
          )}
        />
      </Switch>
    </Switch.Group>
  );
};

export default LabelSwitch;
