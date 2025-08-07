import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon, SmileIcon } from 'lucide-react';
import { SettingsModal } from '../components/layout/SettingsModal';
import { ChatBubble } from '../components/ChatBubble';
import { CollapsibleSidebar } from '../components/layout/CollapsibleSidebar';
export const ClientJournal = () => {
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
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 lg:ml-0 ml-12">
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
              <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-xs sm:text-sm">
                Sessions & Notes
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-xs sm:text-sm">
                Documents
              </a>
              <a href="#" className="border-indigo-600 text-indigo-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-xs sm:text-sm">
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
        {/* Journal Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex items-center mb-6">
            <svg className="h-6 w-6 text-indigo-600 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6.25278V19.2528M12 6.25278C10.8321 5.47686 9.24649 5 7.5 5C5.75351 5 4.16789 5.47686 3 6.25278V19.2528C4.16789 18.4769 5.75351 18 7.5 18C9.24649 18 10.8321 18.4769 12 19.2528M12 6.25278C13.1679 5.47686 14.7535 5 16.5 5C18.2465 5 19.8321 5.47686 21 6.25278V19.2528C19.8321 18.4769 18.2465 18 16.5 18C14.7535 18 13.1679 18.4769 12 19.2528" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h2 className="text-xl font-bold text-gray-900 lg:ml-0 ml-12">
              Client Journal Entries
            </h2>
          </div>
          <p className="text-sm text-gray-600 mb-8">
            Journal entries shared by the client for your review
          </p>
          {/* Journal Entry 1 */}
          <div className="bg-white border border-gray-200 rounded-lg mb-6 overflow-hidden shadow-md">
            <div className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div className="flex items-center mb-2 sm:mb-0">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Anxiety Management Progress
                  </h3>
                  <div className="ml-2">
                    <SmileIcon className="h-5 w-5 text-yellow-500" />
                  </div>
                </div>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium w-fit">
                  Shared
                </span>
              </div>
              <div className="flex flex-wrap text-xs text-gray-500 mb-4">
                <div className="flex items-center mr-4 mb-2 sm:mb-0">
                  <CalendarIcon className="h-3 w-3 mr-1" />
                  <span>Session: 15/01/2024</span>
                </div>
                <div className="flex items-center mr-4 mb-2 sm:mb-0">
                  <CalendarIcon className="h-3 w-3 mr-1" />
                  <span>Created: 20/01/2024</span>
                </div>
                <div className="flex items-center mb-2 sm:mb-0">
                  <CalendarIcon className="h-3 w-3 mr-1" />
                  <span>Shared: 20/01/2024</span>
                </div>
              </div>
              <p className="text-gray-700">
                Today I practiced the breathing exercises we discussed. I
                noticed my anxiety levels were much lower during the team
                meeting. The techniques are really helping me stay calm in
                stressful situations.
              </p>
            </div>
          </div>
          {/* Journal Entry 2 */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
            <div className="p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div className="flex items-center mb-2 sm:mb-0">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Weekly Reflection
                  </h3>
                  <div className="ml-2">
                    <SmileIcon className="h-5 w-5 text-yellow-500" />
                  </div>
                </div>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium w-fit">
                  Shared
                </span>
              </div>
              <div className="flex flex-wrap text-xs text-gray-500 mb-4">
                <div className="flex items-center mr-4 mb-2 sm:mb-0">
                  <CalendarIcon className="h-3 w-3 mr-1" />
                  <span>Session: 22/01/2024</span>
                </div>
                <div className="flex items-center mr-4 mb-2 sm:mb-0">
                  <CalendarIcon className="h-3 w-3 mr-1" />
                  <span>Created: 25/01/2024</span>
                </div>
                <div className="flex items-center mb-2 sm:mb-0">
                  <CalendarIcon className="h-3 w-3 mr-1" />
                  <span>Shared: 25/01/2024</span>
                </div>
              </div>
              <p className="text-gray-700">
                This week has been challenging but I can see progress. I was
                able to identify my negative thought patterns more quickly and
                use the reframing techniques. Still struggling with sleep but
                the worry journal is helping.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Settings Modal */}
      <SettingsModal isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
      <ChatBubble />
    </div>;
};