import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserIcon, PlusIcon, PencilIcon } from 'lucide-react';
import { SettingsModal } from '../components/layout/SettingsModal';
import { ChatBubble } from '../components/ChatBubble';
import { CollapsibleSidebar } from '../components/layout/CollapsibleSidebar';
export const ClientRiskAssessment = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <CollapsibleSidebar activeItem="clients" onSettingsClick={() => setSettingsOpen(true)} isSidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Client Header */}
        <div className="bg-gray-50 p-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 lg:ml-0 ml-12">
                  U
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700">
                    Dr. Jane Smith
                  </p>
                  <p className="text-xs text-gray-500">View profile</p>
                </div>
              </div>
              <div className="flex items-center"></div>
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
                Risk Assessment
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-xs sm:text-sm">
                Referrals
              </a>
            </nav>
          </div>
        </div>

        {/* AI Risk Assessment Section */}
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-8">
            <div className="flex items-center mb-6">
              <svg className="h-6 w-6 text-indigo-600 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 3.5V2M5.06066 5.06066L4 4M5.06066 13.0607L4 14.1213M13.0607 5.06066L14.1213 4M3.5 9H2M12 17.6569L13.4142 19.0711C14.3668 20.0237 15.6332 20.5 16.9142 20.5C19.1617 20.5 21 18.6617 21 16.4142C21 14.1667 19.1617 12.3284 16.9142 12.3284C16.5051 12.3284 16.1108 12.3928 15.7384 12.5113M12 17.6569V12.3284C12 9.46844 9.53156 7 6.67157 7C3.81158 7 1.34314 9.46844 1.34314 12.3284C1.34314 15.1884 3.81158 17.6569 6.67157 17.6569H12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h2 className="text-xl font-semibold text-gray-900 lg:ml-0 ml-12">
                AI Risk Assessment
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <div className="flex items-center mb-2">
                  <svg className="h-5 w-5 text-indigo-600 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-sm font-medium text-gray-900">
                    AI Risk Rating
                  </p>
                </div>
                <div className="bg-yellow-50 px-4 py-3 rounded-md">
                  <p className="text-sm font-medium text-yellow-800">
                    Moderate
                  </p>
                  <p className="text-xs text-yellow-700">Score: 4/10</p>
                </div>
              </div>
              <div className="md:col-span-2 flex items-center justify-between">
                <div>
                  <div className="flex items-center mb-2">
                    <svg className="h-5 w-5 text-indigo-600 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-sm font-medium text-gray-900">
                      Last Assessment
                    </p>
                  </div>
                  <p className="text-sm text-gray-700">20/01/2024</p>
                </div>
                <div className="flex items-center">
                  <div className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full flex items-center">
                    <span className="font-medium">AI Risk Score:</span>
                    <span className="ml-1">4/10</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <svg className="h-5 w-5 text-indigo-600 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 5H6C4.89543 5 4 5.89543 4 7V18C4 19.1046 4.89543 20 6 20H17C18.1046 20 19 19.1046 19 18V13M17.5858 3.58579C18.3668 2.80474 19.6332 2.80474 20.4142 3.58579C21.1953 4.36683 21.1953 5.63316 20.4142 6.41421L11.8284 15H9L9 12.1716L17.5858 3.58579Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-sm font-medium text-gray-900">
                  AI Risk Reasoning
                </p>
              </div>
              <div className="bg-blue-50 px-4 py-3 rounded-md">
                <p className="text-sm text-blue-800">
                  Recent career changes and relationship stress require ongoing
                  monitoring. Shows good engagement in therapy but needs
                  consistent support for coping strategies.
                </p>
              </div>
            </div>
          </div>
          {/* Practitioner Risk Assessment Section */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <svg className="h-6 w-6 text-indigo-600 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 9V11M12 15H12.01M5.07183 19H18.9282C20.4678 19 21.4301 17.3333 20.6603 16L13.7321 4C12.9623 2.66667 11.0378 2.66667 10.268 4L3.33978 16C2.56998 17.3333 3.53223 19 5.07183 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h2 className="text-xl font-semibold text-gray-900">
                  Practitioner Risk Assessment
                </h2>
              </div>
              <PencilIcon className="h-5 w-5 text-gray-400 cursor-pointer hover:text-indigo-600" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <div className="flex items-center mb-2">
                  <svg className="h-5 w-5 text-indigo-600 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="text-sm font-medium text-gray-900">
                    Practitioner Score
                  </p>
                </div>
                <div className="bg-green-50 px-4 py-3 rounded-md">
                  <p className="text-sm font-medium text-green-800">3/10</p>
                </div>
              </div>
              <div className="md:col-span-2 flex items-center">
                <div>
                  <div className="flex items-center mb-2">
                    <svg className="h-5 w-5 text-indigo-600 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="text-sm font-medium text-gray-900">
                      Last Assessment
                    </p>
                  </div>
                  <p className="text-sm text-gray-700">20/01/2024</p>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <svg className="h-5 w-5 text-indigo-600 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 5H6C4.89543 5 4 5.89543 4 7V18C4 19.1046 4.89543 20 6 20H17C18.1046 20 19 19.1046 19 18V13M17.5858 3.58579C18.3668 2.80474 19.6332 2.80474 20.4142 3.58579C21.1953 4.36683 21.1953 5.63316 20.4142 6.41421L11.8284 15H9L9 12.1716L17.5858 3.58579Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-sm font-medium text-gray-900">Risk Notes</p>
              </div>
              <div className="bg-gray-50 px-4 py-3 rounded-md">
                <p className="text-sm text-gray-800">
                  Low risk. Stable mood, good coping strategies. No current
                  suicidal or homicidal ideation. Has strong support system and
                  good treatment compliance.
                </p>
              </div>
            </div>
          </div>
          {/* Referrals Section */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <svg className="h-6 w-6 text-indigo-600 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.0002 12.0001L16.0002 11.0001M16.0002 11.0001L17.0002 10.0001M16.0002 11.0001L15.0002 10.0001M16.0002 11.0001L17.0002 12.0001M12 15L3 15M12 3L3 3M21 7L3 7M21 19L3 19M3 23L21 23C22.1046 23 23 22.1046 23 21L23 3C23 1.89543 22.1046 1 21 1L3 1C1.89543 1 1 1.89543 1 3L1 21C1 22.1046 1.89543 23 3 23Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h2 className="text-xl font-semibold text-gray-900">
                  Referrals
                </h2>
              </div>
              <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <PlusIcon className="h-4 w-4 mr-1" />
                Add Referral
              </button>
            </div>
            {/* Psychiatrist Referral */}
            <div className="border border-gray-200 rounded-lg p-4 mb-4 shadow-sm">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-base font-medium text-gray-900 mb-1">
                    Psychiatrist
                  </h3>
                  <p className="text-sm text-gray-700">
                    Dr. Sarah Johnson - Metro Mental Health
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Medication evaluation for anxiety and depression symptoms
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    Referred: 15/01/2024
                  </p>
                </div>
                <div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    active
                  </span>
                </div>
              </div>
            </div>
            {/* Psychologist Referral */}
            <div className="border border-gray-200 rounded-lg p-4 shadow-sm">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-base font-medium text-gray-900 mb-1">
                    Psychologist
                  </h3>
                  <p className="text-sm text-gray-700">
                    Dr. Michael Chen - Cognitive Therapy Center
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Neuropsychological assessment for ADHD
                  </p>
                  <p className="text-xs text-gray-500 mt-2">
                    Referred: 10/12/2023
                  </p>
                </div>
                <div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    completed
                  </span>
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