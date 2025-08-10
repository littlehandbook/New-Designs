import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon, SettingsIcon, BookOpenIcon, PaintBucketIcon, UsersIcon, DollarSignIcon, HomeIcon, CalendarIcon, VideoIcon, LibraryIcon } from 'lucide-react';
import { ProfileModal } from './ProfileModal';
interface SidebarProps {
  activeItem: string;
  onSettingsClick: () => void;
  isSidebarOpen?: boolean;
  toggleSidebar?: () => void;
}
export const CollapsibleSidebar: React.FC<SidebarProps> = ({
  activeItem,
  onSettingsClick,
  isSidebarOpen = true,
  toggleSidebar = () => {}
}) => {
  const [profileOpen, setProfileOpen] = useState(false);
  return <>
      <div className={`${isSidebarOpen ? 'w-64' : 'w-16'} transition-all duration-300 ease-in-out h-dvh bg-gray-100 border-r border-gray-200 flex flex-col z-50 flex-shrink-0 fixed lg:relative`}>
        {/* Sidebar Header */}
        <div className="relative p-4 border-b border-gray-200 flex items-center justify-between">
          {isSidebarOpen ? <div className="flex items-center">
              <div className="h-8 w-8 bg-blue-600 rounded-md flex items-center justify-center text-white font-medium mr-2">
                TP
              </div>
              <span className="text-lg font-semibold text-gray-900">
                Practice Portal
              </span>
            </div> : <div className="flex-1"></div>}
          <button onClick={toggleSidebar} className="p-3 rounded-md text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus-visible:ring-2 focus-visible:ring-indigo-500 absolute right-2 top-2" aria-label={isSidebarOpen ? 'Collapse sidebar' : 'Expand sidebar'}>
            {!isSidebarOpen ? <MenuIcon className="h-5 w-5" aria-hidden="true" /> : <XIcon className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
        {/* Navigation */}
        <nav className="flex-1 pt-4 overflow-y-auto" aria-label="Main navigation">
          <ul>
            <li>
              <Link to="/practice/dashboard" className={`flex items-center px-4 py-3 text-sm font-medium min-h-[44px] ${activeItem === 'dashboard' ? 'text-indigo-700 bg-indigo-50' : 'text-gray-700 hover:text-indigo-700 hover:bg-gray-50'} focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-inset rounded-md`} aria-current={activeItem === 'dashboard' ? 'page' : undefined}>
                <HomeIcon className={`${!isSidebarOpen ? 'mx-auto' : 'mr-3'} h-5 w-5 ${activeItem === 'dashboard' ? 'text-indigo-700' : 'text-gray-500'}`} aria-hidden="true" />
                {isSidebarOpen && <span>Dashboard</span>}
              </Link>
            </li>
            <li>
              <Link to="/practice/clients" className={`flex items-center px-4 py-3 text-sm font-medium min-h-[44px] ${activeItem === 'clients' ? 'text-indigo-700 bg-indigo-50' : 'text-gray-700 hover:text-indigo-700 hover:bg-gray-50'} focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-inset rounded-md`} aria-current={activeItem === 'clients' ? 'page' : undefined}>
                <UsersIcon className={`${!isSidebarOpen ? 'mx-auto' : 'mr-3'} h-5 w-5 ${activeItem === 'clients' ? 'text-indigo-700' : 'text-gray-500'}`} aria-hidden="true" />
                {isSidebarOpen && <span>Clients</span>}
              </Link>
            </li>
            <li>
              <Link to="/practice/calendar" className={`flex items-center px-4 py-3 text-sm font-medium min-h-[44px] ${activeItem === 'calendar' ? 'text-indigo-700 bg-indigo-50' : 'text-gray-700 hover:text-indigo-700 hover:bg-gray-50'} focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-inset rounded-md`} aria-current={activeItem === 'calendar' ? 'page' : undefined}>
                <CalendarIcon className={`${!isSidebarOpen ? 'mx-auto' : 'mr-3'} h-5 w-5 ${activeItem === 'calendar' ? 'text-indigo-700' : 'text-gray-500'}`} aria-hidden="true" />
                {isSidebarOpen && <span>Calendar</span>}
              </Link>
            </li>
            <li>
              <Link to="/practice/telesession" className={`flex items-center px-4 py-3 text-sm font-medium min-h-[44px] ${activeItem === 'telesession' ? 'text-indigo-700 bg-indigo-50' : 'text-gray-700 hover:text-indigo-700 hover:bg-gray-50'} focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-inset rounded-md`} aria-current={activeItem === 'telesession' ? 'page' : undefined}>
                <VideoIcon className={`${!isSidebarOpen ? 'mx-auto' : 'mr-3'} h-5 w-5 ${activeItem === 'telesession' ? 'text-indigo-700' : 'text-gray-500'}`} aria-hidden="true" />
                {isSidebarOpen && <span>Telesession</span>}
              </Link>
            </li>
            <li>
              <Link to="/practice/library" className={`flex items-center px-4 py-3 text-sm font-medium min-h-[44px] ${activeItem === 'resources' ? 'text-indigo-700 bg-indigo-50' : 'text-gray-700 hover:text-indigo-700 hover:bg-gray-50'} focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-inset rounded-md`} aria-current={activeItem === 'resources' ? 'page' : undefined}>
                <LibraryIcon className={`${!isSidebarOpen ? 'mx-auto' : 'mr-3'} h-5 w-5 ${activeItem === 'resources' ? 'text-indigo-700' : 'text-gray-500'}`} aria-hidden="true" />
                {isSidebarOpen && <span>Resources</span>}
              </Link>
            </li>
            <li>
              <Link to="/practice/finance" className={`flex items-center px-4 py-3 text-sm font-medium min-h-[44px] ${activeItem === 'finance' ? 'text-indigo-700 bg-indigo-50' : 'text-gray-700 hover:text-indigo-700 hover:bg-gray-50'} focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-inset rounded-md`} aria-current={activeItem === 'finance' ? 'page' : undefined}>
                <DollarSignIcon className={`${!isSidebarOpen ? 'mx-auto' : 'mr-3'} h-5 w-5 ${activeItem === 'finance' ? 'text-indigo-700' : 'text-gray-500'}`} aria-hidden="true" />
                {isSidebarOpen && <span>Finance</span>}
              </Link>
            </li>
            <li>
              <button onClick={onSettingsClick} className={`w-full flex items-center px-4 py-3 text-sm font-medium min-h-[44px] ${activeItem === 'settings' ? 'text-indigo-700 bg-indigo-50' : 'text-gray-700 hover:text-indigo-700 hover:bg-gray-50'} focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-inset rounded-md`} aria-label="Settings">
                <SettingsIcon className={`${!isSidebarOpen ? 'mx-auto' : 'mr-3'} h-5 w-5 ${activeItem === 'settings' ? 'text-indigo-700' : 'text-gray-500'}`} aria-hidden="true" />
                {isSidebarOpen && <span>Settings</span>}
              </button>
            </li>
          </ul>
        </nav>
        {/* User Profile */}
        <div className="p-4 border-t border-gray-200">
          {!isSidebarOpen ? <div className="flex flex-col items-center">
              <div className="h-8 w-8 rounded-full bg-indigo-700 flex items-center justify-center text-white font-medium cursor-pointer" onClick={() => setProfileOpen(true)} aria-label="User profile">
                U
              </div>
            </div> : <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-indigo-700 flex items-center justify-center text-white font-medium cursor-pointer" onClick={() => setProfileOpen(true)} aria-label="User profile">
                U
              </div>
              <div className="ml-3 flex-grow">
                <p className="text-sm font-medium text-gray-700">
                  Dr. Jane Smith
                </p>
                <button className="text-xs text-gray-500 hover:text-indigo-600 focus:outline-none focus-visible:underline" onClick={() => setProfileOpen(true)} aria-label="View profile">
                  View profile
                </button>
              </div>
            </div>}
        </div>
      </div>
      <ProfileModal isOpen={profileOpen} onClose={() => setProfileOpen(false)} />
    </>;
};