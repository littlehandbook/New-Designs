import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon, PlusIcon, MenuIcon, XIcon } from 'lucide-react';
import { SettingsModal } from '../components/layout/SettingsModal';
import { CollapsibleSidebar } from '../components/layout/CollapsibleSidebar';
export const ClientSessionNotes = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return <div className="flex h-screen bg-white overflow-hidden">
      {/* Sidebar */}
      <CollapsibleSidebar activeItem="clients" onSettingsClick={() => setSettingsOpen(true)} isSidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Client Header */}
        <div className="bg-gray-50 p-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-700">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-bold text-gray-900">
                    Michael Chen
                  </h2>
                  <p className="text-sm text-gray-500">Client Details</p>
                </div>
              </div>
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.2322 5.23223L18.7677 8.76777M16.7322 3.73223C17.7085 2.75592 19.2914 2.75592 20.2677 3.73223C21.244 4.70854 21.244 6.29146 20.2677 7.26777L6.5 21.0355H3V17.4644L16.7322 3.73223Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Edit Client
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 overflow-x-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="-mb-px flex space-x-4 md:space-x-8 whitespace-nowrap">
              <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-xs sm:text-sm">
                Overview
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-xs sm:text-sm">
                Goals
              </a>
              <a href="#" className="border-indigo-600 text-indigo-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-xs sm:text-sm">
                Sessions & Notes
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

        {/* Sub Tabs */}
        <div className="border-b border-gray-200 bg-white overflow-x-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="-mb-px flex space-x-4 md:space-x-8 whitespace-nowrap">
              <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-xs sm:text-sm">
                Sessions
              </a>
              <a href="#" className="border-indigo-600 text-indigo-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-xs sm:text-sm">
                Session Notes
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-xs sm:text-sm">
                Homework
              </a>
            </nav>
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Session Notes List */}
            <div className="md:col-span-1">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-indigo-600 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <h2 className="text-lg font-medium text-gray-900">
                    Session Notes
                  </h2>
                </div>
                <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <PlusIcon className="h-4 w-4 mr-1" />
                  New
                </button>
              </div>
              {/* Note 1 */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 mb-4 cursor-pointer hover:border-indigo-300">
                <div className="flex items-center mb-2">
                  <CalendarIcon className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm font-medium text-gray-900">
                    15/01/2024
                  </span>
                  <span className="ml-auto text-xs font-medium text-gray-500">
                    SOAP
                  </span>
                </div>
                <p className="text-sm text-gray-700">
                  Client reported feeling anxious about work presentation.
                </p>
                <div className="mt-2 flex flex-wrap space-x-2">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 mb-1">
                    AI: Low
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800 mb-1">
                    Practitioner: Medium
                  </span>
                </div>
              </div>
              {/* Note 2 */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 cursor-pointer hover:border-indigo-300">
                <div className="flex items-center mb-2">
                  <CalendarIcon className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm font-medium text-gray-900">
                    08/01/2024
                  </span>
                  <span className="ml-auto text-xs font-medium text-gray-500">
                    BIRP
                  </span>
                </div>
                <p className="text-sm text-gray-700">
                  Client demonstrated good engagement in session.
                </p>
                <div className="mt-2 flex flex-wrap space-x-2">
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 mb-1">
                    AI: Low
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800 mb-1">
                    Practitioner: Low
                  </span>
                </div>
              </div>
            </div>

            {/* Note Detail View */}
            <div className="md:col-span-2">
              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 h-full flex flex-col items-center justify-center text-center">
                <div className="bg-gray-100 rounded-full p-4 mb-4">
                  <svg className="h-10 w-10 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12H15M9 16H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No Note Selected
                </h3>
                <p className="text-gray-500 text-center max-w-md">
                  Select a session note from the list to view details or create
                  a new note.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Modal */}
      <SettingsModal isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </div>;
};