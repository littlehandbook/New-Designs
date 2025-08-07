import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
import { ProfileModal } from '../layout/ProfileModal';
export const Sidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return <>
      {/* Mobile Sidebar Toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-20">
        <button onClick={toggleSidebar} className="p-2 rounded-md bg-white shadow-md border border-gray-200 text-gray-500 focus:outline-none">
          {sidebarOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transform transition-transform duration-200 ease-in-out fixed lg:static inset-y-0 left-0 z-10 h-screen bg-white border-r border-gray-200 w-64 flex flex-col`}>
        <div className="p-4 border-b border-gray-200">
          <div className="text-lg font-semibold text-indigo-700">
            Practice Portal
          </div>
        </div>
        <nav className="flex-1 pt-4 overflow-y-auto">
          <ul>
            <li>
              <Link to="/dashboard" className="flex items-center px-4 py-3 text-sm font-medium text-indigo-700 bg-indigo-50" onClick={() => setSidebarOpen(false)}>
                <svg className="mr-3 h-5 w-5 text-indigo-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/clients" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:text-indigo-700 hover:bg-gray-50" onClick={() => setSidebarOpen(false)}>
                <svg className="mr-3 h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Clients
              </Link>
            </li>
            <li>
              <Link to="/calendar" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:text-indigo-700 hover:bg-gray-50" onClick={() => setSidebarOpen(false)}>
                <svg className="mr-3 h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Calendar
              </Link>
            </li>
            <li>
              <Link to="/telesession" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:text-indigo-700 hover:bg-gray-50" onClick={() => setSidebarOpen(false)}>
                <svg className="mr-3 h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 10L19.5528 7.72361C20.2177 7.39116 21 7.87465 21 8.61803V15.382C21 16.1253 20.2177 16.6088 19.5528 16.2764L15 14M5 18H13C14.1046 18 15 17.1046 15 16V8C15 6.89543 14.1046 6 13 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Telesession
              </Link>
            </li>
            <li>
              <Link to="/settings" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:text-indigo-700 hover:bg-gray-50" onClick={() => setSidebarOpen(false)}>
                <svg className="mr-3 h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Settings
              </Link>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-indigo-700 flex items-center justify-center text-white font-medium cursor-pointer" onClick={() => setProfileOpen(true)}>
              U
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700">
                Dr. Jane Smith
              </p>
              <button className="text-xs text-gray-500 hover:text-indigo-600 focus:outline-none focus-visible:underline" onClick={() => setProfileOpen(true)}>
                View profile
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-0 lg:hidden" onClick={() => setSidebarOpen(false)} />}
      <ProfileModal isOpen={profileOpen} onClose={() => setProfileOpen(false)} />
    </>;
};