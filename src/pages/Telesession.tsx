import React, { useState } from 'react';
import { VideoIcon, MonitorIcon, ClockIcon, UserIcon, PlusIcon, SettingsIcon } from 'lucide-react';
import { CollapsibleSidebar } from '../components/layout/CollapsibleSidebar';
import { SettingsModal } from '../components/layout/SettingsModal';
import { ChatBubble } from '../components/ChatBubble';
import { TelesessionModal } from '../components/telesession/TelesessionModal';
import { TelesessionSettings } from '../components/telesession/TelesessionSettings';
export const Telesession = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [telesessionModalOpen, setTelesessionModalOpen] = useState(false);
  const [telesessionSettingsOpen, setTelesessionSettingsOpen] = useState(false);
  return <div className="flex h-screen bg-white overflow-hidden">
      <CollapsibleSidebar activeItem="telesession" onSettingsClick={() => setSettingsOpen(true)} />
      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="mb-6 sm:mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Telesession</h1>
              <p className="text-gray-600">
                Conduct secure video sessions with your clients
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <button onClick={() => setTelesessionSettingsOpen(true)} className="inline-flex items-center p-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-label="Telesession Settings">
                <SettingsIcon className="h-5 w-5" />
              </button>
              <button onClick={() => setTelesessionModalOpen(true)} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <PlusIcon className="h-4 w-4 mr-1" />
                New Telesession
              </button>
            </div>
          </div>
          {/* Current Session Status */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 mb-6 sm:mb-8 shadow-md">
            <div className="flex items-center mb-4">
              <MonitorIcon className="h-5 w-5 text-indigo-600 mr-2" />
              <h2 className="text-lg font-medium text-indigo-600">
                Current Session Status
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center py-8 sm:py-10">
              <div className="bg-gray-100 rounded-lg p-4 inline-flex items-center justify-center mb-4">
                <MonitorIcon className="h-10 w-10 sm:h-12 sm:w-12 text-gray-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-gray-700 mb-2">
                No Active Session
              </h3>
              <p className="text-gray-500 text-center max-w-md">
                Start a telesession from your scheduled appointments
              </p>
            </div>
          </div>
          {/* Today's Sessions */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 shadow-md">
            <div className="flex items-center mb-6">
              <ClockIcon className="h-5 w-5 text-indigo-600 mr-2" />
              <h2 className="text-lg font-medium text-indigo-600">
                Today's Sessions
              </h2>
            </div>
            {/* Session 1 */}
            <div className="border border-gray-200 rounded-lg p-4 mb-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-0">
                  <div className="flex flex-col mb-2 sm:mb-0 sm:mr-8">
                    <span className="text-lg font-medium text-gray-900">
                      10:00 AM
                    </span>
                    <span className="text-sm text-gray-500">50 min</span>
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      <UserIcon className="h-4 w-4 text-gray-500 mr-2" />
                      <span className="font-medium text-gray-900">
                        Sarah Johnson
                      </span>
                    </div>
                    <div className="flex items-center">
                      <VideoIcon className="h-4 w-4 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-600">Telesession</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-2 sm:mb-0 sm:mr-2 w-fit">
                    Ready to Join
                  </span>
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium w-full sm:w-auto">
                    Start Session
                  </button>
                </div>
              </div>
            </div>
            {/* Session 2 */}
            <div className="border border-gray-200 rounded-lg p-4 mb-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-0">
                  <div className="flex flex-col mb-2 sm:mb-0 sm:mr-8">
                    <span className="text-lg font-medium text-gray-900">
                      11:30 AM
                    </span>
                    <span className="text-sm text-gray-500">50 min</span>
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      <UserIcon className="h-4 w-4 text-gray-500 mr-2" />
                      <span className="font-medium text-gray-900">
                        Michael Chen
                      </span>
                    </div>
                    <div className="flex items-center">
                      <VideoIcon className="h-4 w-4 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-600">Telesession</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mb-2 sm:mb-0 sm:mr-2 w-fit">
                    Client Waiting
                  </span>
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium w-full sm:w-auto">
                    Join Now
                  </button>
                </div>
              </div>
            </div>
            {/* Session 3 */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-0">
                  <div className="flex flex-col mb-2 sm:mb-0 sm:mr-8">
                    <span className="text-lg font-medium text-gray-900">
                      2:00 PM
                    </span>
                    <span className="text-sm text-gray-500">50 min</span>
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      <UserIcon className="h-4 w-4 text-gray-500 mr-2" />
                      <span className="font-medium text-gray-900">
                        Emma Wilson
                      </span>
                    </div>
                    <div className="flex items-center">
                      <VideoIcon className="h-4 w-4 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-600">Telesession</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium mb-2 sm:mb-0 sm:mr-2 w-fit">
                    Scheduled
                  </span>
                  <button className="bg-gray-200 text-gray-500 px-4 py-2 rounded-md text-sm font-medium cursor-not-allowed w-full sm:w-auto">
                    Not Ready
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SettingsModal isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
      <TelesessionModal isOpen={telesessionModalOpen} onClose={() => setTelesessionModalOpen(false)} />
      <TelesessionSettings isOpen={telesessionSettingsOpen} onClose={() => setTelesessionSettingsOpen(false)} />
      <ChatBubble />
    </div>;
};