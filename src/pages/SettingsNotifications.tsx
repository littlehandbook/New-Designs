import React, { useState } from 'react';
import { CollapsibleSidebar } from '../components/layout/CollapsibleSidebar';
import { SettingsModal } from '../components/layout/SettingsModal';
import { BellIcon } from 'lucide-react';
export const SettingsNotifications = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  return <div className="flex h-screen bg-white">
      <CollapsibleSidebar activeItem="settings" onSettingsClick={() => setSettingsOpen(true)} />
      <div className="flex-1 overflow-auto bg-gray-50">
        <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <BellIcon className="h-6 w-6 text-indigo-600 mr-2" />
            Notification Settings
          </h1>
          <div className="bg-white shadow rounded-lg mb-8">
            <div className="px-6 py-5 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                Email Notifications
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Manage your email notification preferences.
              </p>
            </div>
            <div className="px-6 py-5 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Session Reminders
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Receive email reminders before scheduled sessions
                  </p>
                </div>
                <div className="relative inline-block w-12 h-6">
                  <input type="checkbox" id="toggle-session-reminders" className="absolute opacity-0 w-0 h-0" defaultChecked />
                  <label htmlFor="toggle-session-reminders" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                    <span className="block h-6 w-6 rounded-full bg-white shadow transform translate-x-6 transition-transform duration-200 ease-in-out"></span>
                  </label>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    New Client Bookings
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Get notified when a new client books a session
                  </p>
                </div>
                <div className="relative inline-block w-12 h-6">
                  <input type="checkbox" id="toggle-new-bookings" className="absolute opacity-0 w-0 h-0" defaultChecked />
                  <label htmlFor="toggle-new-bookings" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                    <span className="block h-6 w-6 rounded-full bg-white shadow transform translate-x-6 transition-transform duration-200 ease-in-out"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-5 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                SMS Notifications
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Manage your text message notification preferences.
              </p>
            </div>
            <div className="px-6 py-5 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Enable SMS Notifications
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Receive important notifications via text message
                  </p>
                </div>
                <div className="relative inline-block w-12 h-6">
                  <input type="checkbox" id="toggle-sms" className="absolute opacity-0 w-0 h-0" />
                  <label htmlFor="toggle-sms" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                    <span className="block h-6 w-6 rounded-full bg-white shadow transition-transform duration-200 ease-in-out"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SettingsModal isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </div>;
};