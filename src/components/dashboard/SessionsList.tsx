import React from 'react';
import { CalendarIcon, ClockIcon, UserIcon, VideoIcon } from 'lucide-react';
export const SessionsList = () => {
  return <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h2 className="text-lg font-medium text-gray-900">Today's Sessions</h2>
        <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
          View all
        </a>
      </div>
      <div className="space-y-4">
        {/* Session 1 */}
        <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col sm:flex-row sm:items-center mb-2 sm:mb-0">
              <div className="flex flex-col mb-2 sm:mb-0 sm:mr-6">
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
            <div className="mt-2 sm:mt-0">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium w-full sm:w-auto">
                Join Session
              </button>
            </div>
          </div>
        </div>
        {/* Session 2 */}
        <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col sm:flex-row sm:items-center mb-2 sm:mb-0">
              <div className="flex flex-col mb-2 sm:mb-0 sm:mr-6">
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
            <div className="mt-2 sm:mt-0">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium w-full sm:w-auto">
                Join Session
              </button>
            </div>
          </div>
        </div>
        {/* Session 3 */}
        <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col sm:flex-row sm:items-center mb-2 sm:mb-0">
              <div className="flex flex-col mb-2 sm:mb-0 sm:mr-6">
                <span className="text-lg font-medium text-gray-900">
                  2:00 PM
                </span>
                <span className="text-sm text-gray-500">50 min</span>
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <UserIcon className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="font-medium text-gray-900">Emma Wilson</span>
                </div>
                <div className="flex items-center">
                  <VideoIcon className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-600">Telesession</span>
                </div>
              </div>
            </div>
            <div className="mt-2 sm:mt-0">
              <button className="bg-gray-200 text-gray-500 px-4 py-2 rounded-md text-sm font-medium cursor-not-allowed w-full sm:w-auto">
                Not Ready
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};