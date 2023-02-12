import { useState } from 'react';
import AsideForm from './AsideForm';
import {
  HomeModernIcon,
  ChartBarIcon,
  SquaresPlusIcon,
  UserCircleIcon,
  PlusCircleIcon
} from '@heroicons/react/24/outline';
import MyReports from './MyReports';
import Settings from './Settings';
import MyProperties from './MyProperties';
import Account from './Account';
import CreateProperty from './CreateProperty';

export default function FormProfile({ user, setRender }) {
  const navigation = [
    { name: 'Account', icon: UserCircleIcon, component: <Account user={user} setRender={setRender} />, current: true },
    { name: 'My Properties', icon: HomeModernIcon,component: <MyProperties />, current: false },
    { name: 'New Property', icon: PlusCircleIcon,component: <CreateProperty />, current: false },
    { name: 'My Reports', icon: ChartBarIcon,component: <MyReports />, current: false },
    { name: 'Settings', icon: SquaresPlusIcon,component: <Settings />, current: false },
  ];
  const [selectedTab, setSelectedTab] = useState(navigation.find(tab => tab.current));

  return (
    <section className="mt-2 pb-8 sm:mt-4 md:mt-6 lg:mt-8">
      <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
          <AsideForm navigation={navigation} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <div className="space-y-6 sm:px-6 lg:col-span-9 lg:px-0">
            {selectedTab.component}
          </div>
        </div>
      </div>
    </section>
  );
}