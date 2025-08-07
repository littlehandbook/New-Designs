import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserIcon, AlertTriangleIcon, PencilIcon, UsersIcon, PlusIcon, MenuIcon, XIcon } from 'lucide-react';
import { SettingsModal } from '../components/layout/SettingsModal';
import { CollapsibleSidebar } from '../components/layout/CollapsibleSidebar';
import { ChatBubble } from '../components/ChatBubble';
export const ClientDetail = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return <div className="flex h-screen bg-white overflow-hidden">
      {/* Sidebar */}
      <CollapsibleSidebar activeItem="clients" onSettingsClick={() => setSettingsOpen(true)} isSidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {/* Overlay for mobile sidebar */}
      {sidebarOpen && <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Client Header */}
        <div className="bg-gray-50 p-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-700">
                  <UserIcon className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-bold text-gray-900">
                    Michael Chen
                  </h2>
                  <p className="text-sm text-gray-500">Client Details</p>
                </div>
              </div>
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <PencilIcon className="mr-2 h-4 w-4" />
                Edit Client
              </button>
            </div>
          </div>
        </div>
        {/* Tabs */}
        <div className="border-b border-gray-200 overflow-x-auto no-scrollbar">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="-mb-px flex space-x-4 md:space-x-8 whitespace-nowrap">
              <a href="#" className="border-indigo-600 text-indigo-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-xs sm:text-sm">
                Overview
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-xs sm:text-sm">
                Goals
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-xs sm:text-sm">
                Sessions
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-xs sm:text-sm">
                Documents
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-xs sm:text-sm">
                Journal
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-xs sm:text-sm">
                Messaging
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-xs sm:text-sm">
                Billing
              </a>
            </nav>
          </div>
        </div>
        {/* Client Information */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {/* Basic Information */}
          <div className="bg-white border border-gray-200 rounded-lg mb-6 sm:mb-8 shadow-md">
            <div className="p-4 sm:p-6">
              <div className="flex items-center mb-4">
                <UserIcon className="h-5 w-5 text-indigo-600 mr-2" />
                <h3 className="text-lg font-medium text-gray-900">
                  Basic Information
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-gray-500">Email</p>
                      <p className="text-sm font-medium text-gray-900 break-all">
                        michael.chen@email.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 5.5L5 3.5M5 3.5L12 10.5M5 3.5V13.5C5 14.0523 5.44772 14.5 6 14.5H8M21 5.5L19 3.5M19 3.5L12 10.5M19 3.5V13.5C19 14.0523 18.5523 14.5 18 14.5H16M8 14.5C8.55228 14.5 9 14.9477 9 15.5V20.5C9 20.7761 9.22386 21 9.5 21H14.5C14.7761 21 15 20.7761 15 20.5V15.5C15 14.9477 15.4477 14.5 16 14.5M8 14.5H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="text-sm font-medium text-gray-900">
                        456 Oak Ave, City, ST 67890
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 5.5C3 14.0604 9.93959 21 18.5 21C19.2373 21 19.9573 20.9311 20.6546 20.7994C21.1681 20.7019 21.5 20.2287 21.5 19.7033V16.7033C21.5 16.2322 21.1947 15.8282 20.7354 15.7155L16.7354 14.7155C16.3055 14.6113 15.8734 14.8146 15.6632 15.2102L14.5395 17.4205C12.5667 16.5328 10.9672 14.9333 10.0795 12.9605L12.2898 11.8368C12.6854 11.6266 12.8887 11.1945 12.7845 10.7646L11.7845 6.76457C11.6718 6.30534 11.2678 6 10.7967 6H7.79672C7.27135 6 6.79814 6.33193 6.70058 6.84542C6.56889 7.54267 6.5 8.26267 6.5 9C6.5 14.5228 11.4772 19.5 17 19.5C17.7373 19.5 18.4573 19.4311 19.1546 19.2994C19.6681 19.2019 20 18.7287 20 18.2033V15.2033C20 14.7322 19.6947 14.3282 19.2354 14.2155L15.2354 13.2155C14.8055 13.1113 14.3734 13.3146 14.1632 13.7102L13.0395 15.9205C11.0667 15.0328 9.46718 13.4333 8.57947 11.4605L10.7898 10.3368C11.1854 10.1266 11.3887 9.69454 11.2845 9.26457L10.2845 5.26457C10.1718 4.80534 9.76776 4.5 9.29672 4.5H6.29672C5.77135 4.5 5.29814 4.83193 5.20058 5.34542C5.06889 6.04267 5 6.76267 5 7.5C5 13.0228 9.97715 18 15.5 18C16.2373 18 16.9573 17.9311 17.6546 17.7994C18.1681 17.7019 18.5 17.2287 18.5 16.7033V13.7033C18.5 13.2322 18.1947 12.8282 17.7354 12.7155L13.7354 11.7155C13.3055 11.6113 12.8734 11.8146 12.6632 12.2102L11.5395 14.4205C9.56672 13.5328 7.96718 11.9333 7.07947 9.96045L9.28982 8.83682C9.68544 8.62662 9.88866 8.19454 9.78452 7.76457L8.78452 3.76457C8.67178 3.30534 8.26776 3 7.79672 3H4.79672C4.27135 3 3.79814 3.33193 3.70058 3.84542C3.56889 4.54267 3.5 5.26267 3.5 6C3.5 11.5228 8.47715 16.5 14 16.5C14.7373 16.5 15.4573 16.4311 16.1546 16.2994C16.6681 16.2019 17 15.7287 17 15.2033V12.2033C17 11.7322 16.6947 11.3282 16.2354 11.2155L12.2354 10.2155C11.8055 10.1113 11.3734 10.3146 11.1632 10.7102L10.0395 12.9205C8.06672 12.0328 6.46718 10.4333 5.57947 8.46045L7.78982 7.33682C8.18544 7.12662 8.38866 6.69454 8.28452 6.26457L7.28452 2.26457C7.17178 1.80534 6.76776 1.5 6.29672 1.5H3.29672C2.77135 1.5 2.29814 1.83193 2.20058 2.34542C2.06889 3.04267 2 3.76267 2 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="text-sm font-medium text-gray-900">
                        (555) 234-5678
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start mb-4">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-gray-500">Date of Birth</p>
                      <p className="text-sm font-medium text-gray-900">
                        22/05/1990
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <AlertTriangleIcon className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">Emergency Contact</p>
                    <p className="text-sm font-medium text-gray-900">
                      Lisa Chen (Sister) - (555) 345-6789
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* AI Risk Assessment */}
          <div className="bg-white border border-gray-200 rounded-lg mb-6 sm:mb-8 shadow-md">
            <div className="p-4 sm:p-6">
              <div className="flex items-center mb-4">
                <svg className="h-5 w-5 text-indigo-600 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 3.5V2M5.06066 5.06066L4 4M5.06066 13.0607L4 14.1213M13.0607 5.06066L14.1213 4M3.5 9H2M12 17.6569L13.4142 19.0711C14.3668 20.0237 15.6332 20.5 16.9142 20.5C19.1617 20.5 21 18.6617 21 16.4142C21 14.1667 19.1617 12.3284 16.9142 12.3284C16.5051 12.3284 16.1108 12.3928 15.7384 12.5113M12 17.6569V12.3284C12 9.46844 9.53156 7 6.67157 7C3.81158 7 1.34314 9.46844 1.34314 12.3284C1.34314 15.1884 3.81158 17.6569 6.67157 17.6569H12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900">
                  AI Risk Assessment
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-4">
                <div>
                  <div className="flex items-center mb-1">
                    <svg className="h-4 w-4 text-indigo-600 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-sm font-medium text-gray-900">
                      AI Risk Rating
                    </p>
                  </div>
                  <div className="bg-yellow-50 px-3 py-2 rounded-md">
                    <p className="text-sm font-medium text-yellow-800">
                      Moderate
                    </p>
                    <p className="text-xs text-yellow-700">Score: 4/10</p>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="flex items-center mb-1">
                    <svg className="h-4 w-4 text-indigo-600 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 5H6C4.89543 5 4 5.89543 4 7V18C4 19.1046 4.89543 20 6 20H17C18.1046 20 19 19.1046 19 18V13M17.5858 3.58579C18.3668 2.80474 19.6332 2.80474 20.4142 3.58579C21.1953 4.36683 21.1953 5.63316 20.4142 6.41421L11.8284 15H9L9 12.1716L17.5858 3.58579Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-sm font-medium text-gray-900">
                      AI Risk Reasoning
                    </p>
                  </div>
                  <div className="bg-blue-50 px-3 py-2 rounded-md">
                    <p className="text-sm text-blue-800">
                      Recent career changes and relationship stress require
                      ongoing monitoring. Shows good engagement in therapy but
                      needs consistent support for coping strategies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Settings Modal */}
      <SettingsModal isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
      <ChatBubble />
    </div>;
};