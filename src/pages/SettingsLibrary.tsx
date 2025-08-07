import React, { useState } from 'react';
import { CollapsibleSidebar } from '../components/layout/CollapsibleSidebar';
import { SettingsModal } from '../components/layout/SettingsModal';
import { BookOpenIcon, PlusIcon, SearchIcon } from 'lucide-react';
export const SettingsLibrary = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  // Mock library resources
  const resources = [{
    id: 1,
    title: 'Anxiety Management Workbook',
    type: 'PDF',
    date: '15/01/2024',
    category: 'Anxiety'
  }, {
    id: 2,
    title: 'Mindfulness Techniques',
    type: 'PDF',
    date: '10/12/2023',
    category: 'Mindfulness'
  }, {
    id: 3,
    title: 'Sleep Hygiene Guide',
    type: 'PDF',
    date: '05/01/2024',
    category: 'Sleep'
  }];
  return <div className="flex h-screen bg-white">
      <CollapsibleSidebar activeItem="library" onSettingsClick={() => setSettingsOpen(true)} />
      <div className="flex-1 overflow-auto bg-gray-50">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h1 className="text-2xl font-bold text-gray-900 flex items-center">
              <BookOpenIcon className="h-6 w-6 text-indigo-600 mr-2" />
              Resource Library
            </h1>
            <button className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <PlusIcon className="h-4 w-4 mr-2" />
              Add Resource
            </button>
          </div>
          {/* Search */}
          <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon className="h-5 w-5 text-gray-400" />
              </div>
              <input type="text" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Search resources..." />
            </div>
          </div>
          {/* Library Resources */}
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {resources.map(resource => <li key={resource.id}>
                  <div className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                          <BookOpenIcon className="h-5 w-5" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-indigo-600">
                            {resource.title}
                          </div>
                          <div className="text-sm text-gray-500">
                            Type: {resource.type} • Added: {resource.date}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          {resource.category}
                        </span>
                        <button className="inline-flex items-center p-1 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
                          <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>)}
            </ul>
          </div>
        </div>
      </div>
      <SettingsModal isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </div>;
};