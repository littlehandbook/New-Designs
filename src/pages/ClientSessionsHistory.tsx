import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon, ClockIcon, EyeIcon, PencilIcon, PlusIcon } from 'lucide-react';
import { ChatBubble } from '../components/ChatBubble';
import { CollapsibleSidebar } from '../components/layout/CollapsibleSidebar';
import { SettingsModal } from '../components/layout/SettingsModal';
export const ClientSessionsHistory = () => {
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
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center mb-4 sm:mb-0">
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
        <div className="border-b border-gray-200 overflow-x-auto no-scrollbar">
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
        <div className="border-b border-gray-200 bg-white overflow-x-auto no-scrollbar">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="-mb-px flex space-x-4 md:space-x-8 whitespace-nowrap">
              <a href="#" className="border-indigo-600 text-indigo-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-xs sm:text-sm">
                Sessions
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-xs sm:text-sm">
                Session Notes
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-xs sm:text-sm">
                Homework
              </a>
            </nav>
          </div>
        </div>

        {/* Session History */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <div className="flex items-center mb-4 sm:mb-0">
              <CalendarIcon className="h-5 w-5 text-indigo-600 mr-2" />
              <h2 className="text-xl font-bold text-gray-900">
                Session History
              </h2>
            </div>
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <PlusIcon className="h-4 w-4 mr-1" />
              New Session
            </button>
          </div>

          {/* Session List */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md">
            {/* Session 1 */}
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-start">
                <div className="mr-0 sm:mr-4 mb-3 sm:mb-0">
                  <CalendarIcon className="h-5 w-5 text-gray-400" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <div className="mb-2 sm:mb-0">
                      <h3 className="text-lg font-medium text-gray-900">
                        25/01/2024
                      </h3>
                      <div className="flex flex-wrap items-center mt-1">
                        <ClockIcon className="h-4 w-4 text-gray-500 mr-1" />
                        <span className="text-sm text-gray-500 mr-2">
                          14:00
                        </span>
                        <span className="text-sm text-gray-500 mr-2">
                          Individual Therapy
                        </span>
                        <span className="text-sm text-gray-500">
                          50 minutes
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mb-2 sm:mb-0 sm:mr-2 w-fit">
                        completed
                      </span>
                      <div className="flex space-x-2">
                        <button className="inline-flex items-center p-1 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
                          <EyeIcon className="h-4 w-4" />
                        </button>
                        <button className="inline-flex items-center p-1 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
                          <PencilIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mt-2">
                    Addressed work-related stress and explored mindfulness
                    techniques for anxiety management.
                  </p>
                </div>
              </div>
            </div>

            {/* Session 2 */}
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-start">
                <div className="mr-0 sm:mr-4 mb-3 sm:mb-0">
                  <CalendarIcon className="h-5 w-5 text-gray-400" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <div className="mb-2 sm:mb-0">
                      <h3 className="text-lg font-medium text-gray-900">
                        18/01/2024
                      </h3>
                      <div className="flex flex-wrap items-center mt-1">
                        <ClockIcon className="h-4 w-4 text-gray-500 mr-1" />
                        <span className="text-sm text-gray-500 mr-2">
                          14:00
                        </span>
                        <span className="text-sm text-gray-500 mr-2">
                          Individual Therapy
                        </span>
                        <span className="text-sm text-gray-500">
                          45 minutes
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mb-2 sm:mb-0 sm:mr-2 w-fit">
                        completed
                      </span>
                      <div className="flex space-x-2">
                        <button className="inline-flex items-center p-1 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
                          <EyeIcon className="h-4 w-4" />
                        </button>
                        <button className="inline-flex items-center p-1 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
                          <PencilIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mt-2">
                    Discussed career pressures and practiced breathing exercises
                    for panic prevention.
                  </p>
                </div>
              </div>
            </div>

            {/* Session 3 (Upcoming) */}
            <div className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-start">
                <div className="mr-0 sm:mr-4 mb-3 sm:mb-0">
                  <CalendarIcon className="h-5 w-5 text-gray-400" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <div className="mb-2 sm:mb-0">
                      <h3 className="text-lg font-medium text-gray-900">
                        01/02/2024
                      </h3>
                      <div className="flex flex-wrap items-center mt-1">
                        <ClockIcon className="h-4 w-4 text-gray-500 mr-1" />
                        <span className="text-sm text-gray-500 mr-2">
                          14:00
                        </span>
                        <span className="text-sm text-gray-500 mr-2">
                          Individual Therapy
                        </span>
                        <span className="text-sm text-gray-500">
                          50 minutes
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mb-2 sm:mb-0 sm:mr-2 w-fit">
                        scheduled
                      </span>
                      <div className="flex space-x-2">
                        <button className="inline-flex items-center p-1 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
                          <EyeIcon className="h-4 w-4" />
                        </button>
                        <button className="inline-flex items-center p-1 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
                          <PencilIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mt-2">
                    Upcoming session to review progress and adjust treatment
                    plan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SettingsModal isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
      <ChatBubble />
    </div>;
};