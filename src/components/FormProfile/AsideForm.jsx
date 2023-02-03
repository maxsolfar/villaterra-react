import React from 'react';
import {
  HomeModernIcon,
  KeyIcon,
  SquaresPlusIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Account', href: '#', icon: UserCircleIcon, current: true },
  { name: 'Password', href: '#', icon: KeyIcon, current: false },
  { name: 'My Properties', href: '#', icon: HomeModernIcon, current: false },
  { name: 'Settings', href: '#', icon: SquaresPlusIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const AsideForm = () => {
  return (
    <aside className="py-6 px-2 sm:px-6 lg:col-span-3 lg:py-0 lg:px-0">
      <nav className="space-y-1">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={classNames(
              item.current
                ? 'bg-light dark:bg-[#151515] text-primary-700 hover:text-primary-700 hover:bg-gray-100 dark:hover:bg-[#000000]'
                : 'text-secondary dark:text-light hover:text-secondary hover:bg-gray-50 dark:hover:bg-secondary',
              'group rounded-md px-3 py-2 flex items-center text-sm font-medium'
            )}
            aria-current={item.current ? 'page' : undefined}
          >
            <item.icon
              className={classNames(
                item.current
                  ? 'text-primary-500 group-hover:text-primary-500'
                  : 'text-gray-400 group-hover:text-gray-500',
                'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
              )}
              aria-hidden="true"
            />
            <span className="truncate">{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default AsideForm;
