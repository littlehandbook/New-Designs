import React, { useEffect, useState } from 'react';
import { XIcon, UserIcon, CreditCardIcon, BellIcon, PaintBucketIcon, UsersIcon } from 'lucide-react';
interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose
}) => {
  const [activeSection, setActiveSection] = useState('profile');
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);
  // Handle animation timing
  useEffect(() => {
    if (isOpen && !isVisible) {
      setIsVisible(true);
      setIsAnimatingOut(false);
      setIsAnimatingIn(true);
      const timer = setTimeout(() => {
        setIsAnimatingIn(false);
      }, 10); // Short timeout to trigger the animation
      return () => clearTimeout(timer);
    } else if (!isOpen && isVisible) {
      setIsAnimatingOut(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300); // Match this duration with the CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isOpen, isVisible]);
  // If not open and not animating, don't render anything
  if (!isVisible) return null;
  // Handle close with animation
  const handleClose = () => {
    setIsAnimatingOut(true);
    const timer = setTimeout(() => {
      onClose();
    }, 300); // Match this duration with the CSS transition duration
  };
  return <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${isAnimatingOut ? 'opacity-0' : 'bg-opacity-50'}`} onClick={handleClose} />
      {/* Modal */}
      <div className={`bg-white w-full max-w-5xl h-[90vh] rounded-lg shadow-xl overflow-hidden flex transform transition-all duration-300 ease-in-out ${isAnimatingOut ? 'scale-95 opacity-0' : isAnimatingIn ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}>
        {/* Left Sidebar */}
        <div className="w-64 h-full border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-indigo-600">Settings</h2>
          </div>
          <div className="flex-1 overflow-y-auto">
            <div className="py-4">
              <div className="px-4 py-2">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  GENERAL
                </h3>
              </div>
              <nav className="mt-1">
                <button onClick={() => setActiveSection('profile')} className={`w-full flex items-center px-4 py-2 text-sm font-medium ${activeSection === 'profile' ? 'text-indigo-700 bg-indigo-50' : 'text-gray-700 hover:text-indigo-700 hover:bg-gray-50'}`}>
                  <UserIcon className={`mr-3 h-5 w-5 ${activeSection === 'profile' ? 'text-indigo-700' : 'text-gray-500'}`} />
                  Profile
                </button>
                <button onClick={() => setActiveSection('account')} className={`w-full flex items-center px-4 py-2 text-sm font-medium ${activeSection === 'account' ? 'text-indigo-700 bg-indigo-50' : 'text-gray-700 hover:text-indigo-700 hover:bg-gray-50'}`}>
                  <CreditCardIcon className={`mr-3 h-5 w-5 ${activeSection === 'account' ? 'text-indigo-700' : 'text-gray-500'}`} />
                  Account
                </button>
                <button onClick={() => setActiveSection('notifications')} className={`w-full flex items-center px-4 py-2 text-sm font-medium ${activeSection === 'notifications' ? 'text-indigo-700 bg-indigo-50' : 'text-gray-700 hover:text-indigo-700 hover:bg-gray-50'}`}>
                  <BellIcon className={`mr-3 h-5 w-5 ${activeSection === 'notifications' ? 'text-indigo-700' : 'text-gray-500'}`} />
                  Notifications
                </button>
                <button onClick={() => setActiveSection('configuration')} className={`w-full flex items-center px-4 py-2 text-sm font-medium ${activeSection === 'configuration' ? 'text-indigo-700 bg-indigo-50' : 'text-gray-700 hover:text-indigo-700 hover:bg-gray-50'}`}>
                  <div className={`mr-3 h-5 w-5 ${activeSection === 'configuration' ? 'text-indigo-700' : 'text-gray-500'}`} />
                  Configuration
                </button>
                <button onClick={() => setActiveSection('brand')} className={`w-full flex items-center px-4 py-2 text-sm font-medium ${activeSection === 'brand' ? 'text-indigo-700 bg-indigo-50' : 'text-gray-700 hover:text-indigo-700 hover:bg-gray-50'}`}>
                  <PaintBucketIcon className={`mr-3 h-5 w-5 ${activeSection === 'brand' ? 'text-indigo-700' : 'text-gray-500'}`} />
                  Brand
                </button>
                <button onClick={() => setActiveSection('users')} className={`w-full flex items-center px-4 py-2 text-sm font-medium ${activeSection === 'users' ? 'text-indigo-700 bg-indigo-50' : 'text-gray-700 hover:text-indigo-700 hover:bg-gray-50'}`}>
                  <UsersIcon className={`mr-3 h-5 w-5 ${activeSection === 'users' ? 'text-indigo-700' : 'text-gray-500'}`} />
                  Users
                </button>
              </nav>
            </div>
          </div>
          <div className="p-4 border-t border-gray-200 text-xs text-gray-500">
            Practice Portal v1.3.279
          </div>
        </div>
        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden bg-gray-50">
          <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              {activeSection === 'profile' && 'Profile Settings'}
              {activeSection === 'account' && 'Account Settings'}
              {activeSection === 'notifications' && 'Notification Settings'}
              {activeSection === 'configuration' && 'Configuration'}
              {activeSection === 'brand' && 'Brand Settings'}
              {activeSection === 'users' && 'User Management'}
            </h2>
            <button onClick={handleClose} className="text-gray-500 hover:text-gray-700">
              <XIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 overflow-auto p-6">
            {activeSection === 'notifications' && <div>
                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Notification Preferences
                  </h3>
                  <p className="text-sm text-gray-600">
                    Manage how you receive notifications.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Email Notifications
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Session Reminders
                        </p>
                        <p className="text-xs text-gray-500">
                          Receive reminders before scheduled sessions.
                        </p>
                      </div>
                      <div className="relative inline-block w-12 h-6">
                        <input type="checkbox" id="toggle-session-reminders" className="absolute opacity-0 w-0 h-0" defaultChecked />
                        <label htmlFor="toggle-session-reminders" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                          <span className="block h-6 w-6 rounded-full bg-white shadow transform translate-x-6 transition-transform duration-200 ease-in-out"></span>
                        </label>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          New Client Bookings
                        </p>
                        <p className="text-xs text-gray-500">
                          Get notified when a new client books a session.
                        </p>
                      </div>
                      <div className="relative inline-block w-12 h-6">
                        <input type="checkbox" id="toggle-client-bookings" className="absolute opacity-0 w-0 h-0" defaultChecked />
                        <label htmlFor="toggle-client-bookings" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                          <span className="block h-6 w-6 rounded-full bg-white shadow transform translate-x-6 transition-transform duration-200 ease-in-out"></span>
                        </label>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Document Uploads
                        </p>
                        <p className="text-xs text-gray-500">
                          Notifications for new document uploads.
                        </p>
                      </div>
                      <div className="relative inline-block w-12 h-6">
                        <input type="checkbox" id="toggle-document-uploads" className="absolute opacity-0 w-0 h-0" defaultChecked />
                        <label htmlFor="toggle-document-uploads" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                          <span className="block h-6 w-6 rounded-full bg-white shadow transform translate-x-6 transition-transform duration-200 ease-in-out"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    SMS Notifications
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between py-3 border-b border-gray-200">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Enable SMS notifications
                        </p>
                        <p className="text-xs text-gray-500">
                          Receive important notifications via text message.
                        </p>
                      </div>
                      <div className="relative inline-block w-12 h-6">
                        <input type="checkbox" id="toggle-sms" className="absolute opacity-0 w-0 h-0" />
                        <label htmlFor="toggle-sms" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                          <span className="block h-6 w-6 rounded-full bg-white shadow transition-transform duration-200 ease-in-out"></span>
                        </label>
                      </div>
                    </div>
                    <div className="py-3">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number for SMS
                      </label>
                      <input type="text" id="phone" name="phone" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="(555) 123-4567" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Save Notification Settings
                  </button>
                </div>
              </div>}
            {activeSection === 'profile' && <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Profile Information
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  Update your personal information and profile settings.
                </p>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input type="text" id="fullName" name="fullName" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" defaultValue="Dr. Jane Smith" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input type="email" id="email" name="email" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" defaultValue="jane.smith@example.com" />
                  </div>
                </div>
              </div>}
            {activeSection === 'account' && <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Account Security
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  Manage your account security settings.
                </p>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-md font-medium text-gray-900 mb-4">
                      Change Password
                    </h4>
                    <div className="space-y-4">
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
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                          Confirm New Password
                        </label>
                        <input type="password" id="confirmPassword" name="confirmPassword" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>}
          </div>
        </div>
      </div>
    </div>;
};