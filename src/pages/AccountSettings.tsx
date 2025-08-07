import React, { useState } from 'react';
import { CollapsibleSidebar } from '../components/layout/CollapsibleSidebar';
import { SettingsSidebar } from '../components/layout/SettingsSidebar';
import { SettingsModal } from '../components/layout/SettingsModal';
export const AccountSettings = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  return <div className="flex h-screen bg-white">
      <CollapsibleSidebar activeItem="settings" onSettingsClick={() => setSettingsOpen(true)} />
      <div className="flex flex-1 overflow-hidden">
        <SettingsSidebar activeItem="account" />
        {/* Main Content */}
        <div className="flex-1 overflow-auto bg-gray-50">
          <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">
              Account Settings
            </h1>
            {/* Account Security Section */}
            <div className="bg-white shadow rounded-lg mb-8">
              <div className="px-6 py-5 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  Account Security
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Manage your account security settings.
                </p>
              </div>
              <div className="px-6 py-5">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Change Password
                </h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                      Current Password
                    </label>
                    <input type="password" id="currentPassword" name="currentPassword" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                  </div>
                  <div>
                    <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                      New Password
                    </label>
                    <input type="password" id="newPassword" name="newPassword" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                  </div>
                  <div>
                    <label htmlFor="confirmNewPassword" className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm New Password
                    </label>
                    <input type="password" id="confirmNewPassword" name="confirmNewPassword" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                  </div>
                  <div>
                    <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Change Password
                    </button>
                  </div>
                </form>
              </div>
              <div className="px-6 py-5 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      Two-Factor Authentication
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Enable 2FA
                      <br />
                      Add an extra layer of security to your account.
                    </p>
                  </div>
                  <div className="relative inline-block w-12 h-6">
                    <input type="checkbox" id="toggle-2fa" className="absolute opacity-0 w-0 h-0" />
                    <label htmlFor="toggle-2fa" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                      <span className="block h-6 w-6 rounded-full bg-white shadow transform transition-transform duration-200 ease-in-out"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="px-6 py-5 border-t border-gray-200">
                <h3 className="text-lg font-medium text-gray-900 mb-1">
                  Sessions
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  Manage your active sessions.
                </p>
                <div className="bg-gray-50 rounded-md p-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      Current Session
                    </p>
                    <p className="text-xs text-gray-500">
                      Last active: Just now
                    </p>
                  </div>
                  <div className="flex items-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mr-2">
                      Active
                    </span>
                    <button type="button" className="inline-flex items-center px-3 py-1 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SettingsModal isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </div>;
};