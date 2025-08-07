import React from 'react';
import { Link } from 'react-router-dom';
import { UserIcon, CreditCardIcon, BellIcon, BookOpenIcon, PaintBucketIcon, UsersIcon } from 'lucide-react';
interface SettingsSidebarProps {
  activeItem: string;
}
export const SettingsSidebar: React.FC<SettingsSidebarProps> = ({
  activeItem
}) => {
  return <div className="w-64 h-screen bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="text-lg font-semibold text-indigo-700">Settings</div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="py-4">
          <div className="px-4 py-2">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              General
            </h3>
          </div>
          <nav className="mt-1">
            <Link to="/settings/profile" className={`flex items-center px-4 py-2 text-sm font-medium ${activeItem === 'profile' ? 'text-indigo-700 bg-indigo-50' : 'text-gray-700 hover:text-indigo-700 hover:bg-gray-50'}`}>
              <UserIcon className={`mr-3 h-5 w-5 ${activeItem === 'profile' ? 'text-indigo-700' : 'text-gray-500'}`} />
              Profile
            </Link>
            <Link to="/settings/account" className={`flex items-center px-4 py-2 text-sm font-medium ${activeItem === 'account' ? 'text-indigo-700 bg-indigo-50' : 'text-gray-700 hover:text-indigo-700 hover:bg-gray-50'}`}>
              <CreditCardIcon className={`mr-3 h-5 w-5 ${activeItem === 'account' ? 'text-indigo-700' : 'text-gray-500'}`} />
              Account
            </Link>
            <Link to="/settings/notifications" className={`flex items-center px-4 py-2 text-sm font-medium ${activeItem === 'notifications' ? 'text-indigo-700 bg-indigo-50' : 'text-gray-700 hover:text-indigo-700 hover:bg-gray-50'}`}>
              <BellIcon className={`mr-3 h-5 w-5 ${activeItem === 'notifications' ? 'text-indigo-700' : 'text-gray-500'}`} />
              Notifications
            </Link>
            <Link to="/settings/library" className={`flex items-center px-4 py-2 text-sm font-medium ${activeItem === 'library' ? 'text-indigo-700 bg-indigo-50' : 'text-gray-700 hover:text-indigo-700 hover:bg-gray-50'}`}>
              <BookOpenIcon className={`mr-3 h-5 w-5 ${activeItem === 'library' ? 'text-indigo-700' : 'text-gray-500'}`} />
              Library
            </Link>
            <Link to="/settings/brand" className={`flex items-center px-4 py-2 text-sm font-medium ${activeItem === 'brand' ? 'text-indigo-700 bg-indigo-50' : 'text-gray-700 hover:text-indigo-700 hover:bg-gray-50'}`}>
              <PaintBucketIcon className={`mr-3 h-5 w-5 ${activeItem === 'brand' ? 'text-indigo-700' : 'text-gray-500'}`} />
              Brand
            </Link>
            <Link to="/settings/users" className={`flex items-center px-4 py-2 text-sm font-medium ${activeItem === 'users' ? 'text-indigo-700 bg-indigo-50' : 'text-gray-700 hover:text-indigo-700 hover:bg-gray-50'}`}>
              <UsersIcon className={`mr-3 h-5 w-5 ${activeItem === 'users' ? 'text-indigo-700' : 'text-gray-500'}`} />
              Users
            </Link>
          </nav>
        </div>
      </div>
      <div className="p-4 border-t border-gray-200 text-xs text-gray-500">
        Practice Portal v1.3.279
      </div>
    </div>;
};