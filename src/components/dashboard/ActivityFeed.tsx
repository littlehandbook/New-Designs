import React from 'react';
import { UserPlusIcon, MessageSquareIcon, FileTextIcon, CalendarIcon } from 'lucide-react';
export const ActivityFeed = () => {
  return <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 sm:p-6 h-full">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h2 className="text-lg font-medium text-gray-900">Recent Activity</h2>
        <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
          View all
        </a>
      </div>
      <div className="space-y-5">
        {/* Activity Item 1 */}
        <div className="flex">
          <div className="mr-4 flex-shrink-0">
            <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
              <UserPlusIcon className="h-4 w-4" />
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">
              New client registered
            </p>
            <p className="text-sm text-gray-500">
              Emma Rodriguez completed registration
            </p>
            <p className="text-xs text-gray-400 mt-1">Today, 9:42 AM</p>
          </div>
        </div>
        {/* Activity Item 2 */}
        <div className="flex">
          <div className="mr-4 flex-shrink-0">
            <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <MessageSquareIcon className="h-4 w-4" />
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">
              New message received
            </p>
            <p className="text-sm text-gray-500">
              Michael Chen sent you a message
            </p>
            <p className="text-xs text-gray-400 mt-1">Today, 8:15 AM</p>
          </div>
        </div>
        {/* Activity Item 3 */}
        <div className="flex">
          <div className="mr-4 flex-shrink-0">
            <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
              <FileTextIcon className="h-4 w-4" />
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">
              Session note updated
            </p>
            <p className="text-sm text-gray-500">
              You updated notes for Sarah Johnson
            </p>
            <p className="text-xs text-gray-400 mt-1">Yesterday, 4:30 PM</p>
          </div>
        </div>
        {/* Activity Item 4 */}
        <div className="flex">
          <div className="mr-4 flex-shrink-0">
            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
              <CalendarIcon className="h-4 w-4" />
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">
              Appointment scheduled
            </p>
            <p className="text-sm text-gray-500">
              Initial consultation with David Lee
            </p>
            <p className="text-xs text-gray-400 mt-1">Yesterday, 2:15 PM</p>
          </div>
        </div>
      </div>
    </div>;
};