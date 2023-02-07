import React from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const AsideForm = ({ navigation, selectedTab, setSelectedTab }) => {

  const handleActive = (link) => {
    link.current = true;
    setSelectedTab(link);
  };

  return (
    <aside className="py-6 px-2 sm:px-6 lg:col-span-3 lg:py-0 lg:px-0">
      <nav className="space-y-1">
        {navigation.map((link) => {
          return (
            <span
              key={link.name}
              className={classNames(
                selectedTab.name === link.name
                  ? 'bg-light dark:bg-[#151515] text-primary-700 hover:text-primary-700 hover:bg-gray-100 dark:hover:bg-[#000000]'
                  : 'text-secondary dark:text-light hover:text-secondary hover:bg-gray-50 dark:hover:bg-secondary',
                'group rounded-md px-3 py-2 flex items-center text-sm font-medium cursor-pointer'
              )}
              aria-current={link.current ? 'page' : undefined}
              onClick={() => handleActive(link)}
            >
              <link.icon
                className={classNames(
                  selectedTab.name === link.name
                    ? 'text-primary-500 group-hover:text-primary-500'
                    : 'text-gray-400 group-hover:text-gray-500',
                  'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
                )}
                aria-hidden="true"
              />
              <span className="truncate">{link.name}</span>
            </span>
          );
        })}
      </nav>
    </aside>
  );
};

export default AsideForm;
