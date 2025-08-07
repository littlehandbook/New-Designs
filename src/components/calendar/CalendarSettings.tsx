import React, { useEffect, useState } from 'react';
import { XIcon, ClockIcon, CalendarIcon, BellIcon, CheckIcon, PlugIcon, GlobeIcon } from 'lucide-react';
interface CalendarSettingsProps {
  isOpen: boolean;
  onClose: () => void;
}
export const CalendarSettings: React.FC<CalendarSettingsProps> = ({
  isOpen,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState('general');
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);
  // Handle animation timing
  useEffect(() => {
    if (isOpen && !isVisible) {
      // First make it visible but off-screen
      setIsVisible(true);
      setIsAnimatingOut(false);
      setIsAnimatingIn(true);
      // Then after a frame, start the animation in
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimatingIn(false);
        });
      });
    } else if (!isOpen && isVisible) {
      // Animation out logic remains the same
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
  return <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Overlay */}
      <div className={`absolute inset-0 bg-gray-800 transition-opacity duration-300 ${isAnimatingOut ? 'opacity-0' : 'opacity-50'}`} onClick={handleClose} />
      {/* Settings Panel */}
      <div className={`absolute inset-y-0 right-0 max-w-md w-full bg-white shadow-xl flex flex-col transform transition-transform duration-300 ease-in-out ${isAnimatingOut ? 'translate-x-full' : isAnimatingIn ? 'translate-x-full' : 'translate-x-0'}`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            Calendar Settings
          </h2>
          <button onClick={handleClose} className="text-gray-400 hover:text-gray-500 focus:outline-none">
            <XIcon className="h-5 w-5" />
          </button>
        </div>
        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          <button onClick={() => setActiveTab('general')} className={`flex-1 py-3 text-sm font-medium text-center ${activeTab === 'general' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
            General
          </button>
          <button onClick={() => setActiveTab('workHours')} className={`flex-1 py-3 text-sm font-medium text-center ${activeTab === 'workHours' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
            Working Hours
          </button>
          <button onClick={() => setActiveTab('integrations')} className={`flex-1 py-3 text-sm font-medium text-center ${activeTab === 'integrations' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}>
            Integrations
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          {/* General Settings */}
          {activeTab === 'general' && <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">
                  Default View
                </h3>
                <div className="bg-gray-50 rounded-md p-1 flex">
                  <button className="flex-1 px-3 py-1.5 text-sm font-medium rounded-md bg-white shadow text-indigo-600">
                    Week
                  </button>
                  <button className="flex-1 px-3 py-1.5 text-sm font-medium rounded-md text-gray-700">
                    Day
                  </button>
                  <button className="flex-1 px-3 py-1.5 text-sm font-medium rounded-md text-gray-700">
                    Month
                  </button>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">
                  Default Session Duration
                </h3>
                <select className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                  <option>30 minutes</option>
                  <option>45 minutes</option>
                  <option selected>50 minutes</option>
                  <option>60 minutes</option>
                  <option>90 minutes</option>
                </select>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">
                  Appointment Types
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-white p-3 border border-gray-200 rounded-md">
                    <div className="flex items-center">
                      <div className="h-4 w-4 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">
                        Initial Consultation
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">60 min</div>
                  </div>
                  <div className="flex items-center justify-between bg-white p-3 border border-gray-200 rounded-md">
                    <div className="flex items-center">
                      <div className="h-4 w-4 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">
                        Follow-up Session
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">45 min</div>
                  </div>
                  <div className="flex items-center justify-between bg-white p-3 border border-gray-200 rounded-md">
                    <div className="flex items-center">
                      <div className="h-4 w-4 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-sm text-gray-700">
                        Therapy Session
                      </span>
                    </div>
                    <div className="text-sm text-gray-500">50 min</div>
                  </div>
                  <button className="w-full flex items-center justify-center py-2 px-3 text-sm text-indigo-600 hover:bg-indigo-50 rounded-md border border-dashed border-indigo-300">
                    + Add Appointment Type
                  </button>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">
                  Notification Preferences
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <BellIcon className="h-5 w-5 text-gray-500 mr-3" />
                      <span className="text-sm text-gray-700">
                        Email reminders
                      </span>
                    </div>
                    <div className="relative inline-block w-10 h-6">
                      <input type="checkbox" id="toggle-email" className="absolute opacity-0 w-0 h-0" defaultChecked />
                      <label htmlFor="toggle-email" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                        <span className="block h-6 w-6 rounded-full bg-white shadow transform translate-x-6 transition-transform duration-200 ease-in-out"></span>
                      </label>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <BellIcon className="h-5 w-5 text-gray-500 mr-3" />
                      <span className="text-sm text-gray-700">
                        SMS notifications
                      </span>
                    </div>
                    <div className="relative inline-block w-10 h-6">
                      <input type="checkbox" id="toggle-sms" className="absolute opacity-0 w-0 h-0" />
                      <label htmlFor="toggle-sms" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                        <span className="block h-6 w-6 rounded-full bg-white shadow transition-transform duration-200 ease-in-out"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>}
          {/* Working Hours Settings */}
          {activeTab === 'workHours' && <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">
                  Time Zone
                </h3>
                <div className="flex items-center mb-3">
                  <GlobeIcon className="h-5 w-5 text-gray-500 mr-3" />
                  <span className="text-sm text-gray-700">
                    Select your default time zone
                  </span>
                </div>
                <select className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                  <option>(GMT-08:00) Pacific Time (US & Canada)</option>
                  <option>(GMT-07:00) Mountain Time (US & Canada)</option>
                  <option>(GMT-06:00) Central Time (US & Canada)</option>
                  <option>(GMT-05:00) Eastern Time (US & Canada)</option>
                  <option>(GMT-04:00) Atlantic Time (Canada)</option>
                  <option>(GMT) Greenwich Mean Time</option>
                  <option>(GMT+01:00) Central European Time</option>
                  <option>(GMT+02:00) Eastern European Time</option>
                  <option>(GMT+03:00) Moscow, St. Petersburg</option>
                  <option>
                    (GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi
                  </option>
                  <option>(GMT+08:00) Beijing, Hong Kong, Singapore</option>
                  <option>(GMT+09:00) Tokyo, Seoul</option>
                  <option>(GMT+10:00) Sydney, Melbourne</option>
                  <option>(GMT+12:00) Auckland</option>
                </select>
                <p className="mt-2 text-xs text-gray-500">
                  All appointments will be displayed in this time zone. Clients
                  will see times converted to their local time zone.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">
                  Working Days
                </h3>
                <div className="grid grid-cols-7 gap-2">
                  {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => <button key={index} className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-medium ${index === 0 || index === 6 ? 'bg-gray-100 text-gray-400' : 'bg-indigo-100 text-indigo-700'}`}>
                      {day}
                    </button>)}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">
                  Working Hours
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <ClockIcon className="h-5 w-5 text-gray-500 mr-3" />
                      <span className="text-sm text-gray-700">
                        Monday - Friday
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">
                        Start Time
                      </label>
                      <select className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                        <option>8:00 AM</option>
                        <option selected>9:00 AM</option>
                        <option>10:00 AM</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">
                        End Time
                      </label>
                      <select className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                        <option>4:00 PM</option>
                        <option selected>5:00 PM</option>
                        <option>6:00 PM</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">
                  Break Time
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <ClockIcon className="h-5 w-5 text-gray-500 mr-3" />
                      <span className="text-sm text-gray-700">Lunch Break</span>
                    </div>
                    <div className="relative inline-block w-10 h-6">
                      <input type="checkbox" id="toggle-break" className="absolute opacity-0 w-0 h-0" defaultChecked />
                      <label htmlFor="toggle-break" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                        <span className="block h-6 w-6 rounded-full bg-white shadow transform translate-x-6 transition-transform duration-200 ease-in-out"></span>
                      </label>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">
                        Start Time
                      </label>
                      <select className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                        <option>12:00 PM</option>
                        <option selected>1:00 PM</option>
                        <option>2:00 PM</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">
                        Duration
                      </label>
                      <select className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                        <option>30 minutes</option>
                        <option selected>60 minutes</option>
                        <option>90 minutes</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">
                  Custom Hours for Specific Days
                </h3>
                <button className="w-full flex items-center justify-center py-2 px-3 text-sm text-indigo-600 hover:bg-indigo-50 rounded-md border border-dashed border-indigo-300">
                  + Add Custom Hours
                </button>
              </div>
            </div>}
          {/* Integrations Settings */}
          {activeTab === 'integrations' && <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">
                  Calendar Integrations
                </h3>
                <div className="space-y-4">
                  {/* Google Calendar */}
                  <div className="bg-white p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-white border border-gray-200 flex items-center justify-center mr-3">
                          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 8.5V4.5C6 3.67157 6.67157 3 7.5 3H16.5C17.3284 3 18 3.67157 18 4.5V8.5M6 8.5V19.5C6 20.3284 6.67157 21 7.5 21H16.5C17.3284 21 18 20.3284 18 19.5V8.5M6 8.5H18" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9.5 13H14.5" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9.5 17H14.5" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">
                            Google Calendar
                          </h4>
                          <p className="text-xs text-gray-500">
                            Sync events with Google Calendar
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mr-2">
                          Connected
                        </span>
                        <CheckIcon className="h-5 w-5 text-green-500" />
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">
                      Connected as: jane.smith@example.com
                    </div>
                  </div>
                  {/* iCloud Calendar */}
                  <div className="bg-white p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-white border border-gray-200 flex items-center justify-center mr-3">
                          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 8C6 4.68629 8.68629 2 12 2C15.3137 2 18 4.68629 18 8C18 11.3137 15.3137 14 12 14" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17 20.6623C17 18.0913 14.7614 16 12 16C9.23858 16 7 18.0913 7 20.6623C7 21.3441 7.44772 21.9454 8.10909 22H15.8909C16.5523 21.9454 17 21.3441 17 20.6623Z" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">
                            iCloud Calendar
                          </h4>
                          <p className="text-xs text-gray-500">
                            Sync events with iCloud Calendar
                          </p>
                        </div>
                      </div>
                      <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-indigo-600 hover:bg-indigo-700">
                        Connect
                      </button>
                    </div>
                  </div>
                  {/* Microsoft Exchange */}
                  <div className="bg-white p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-white border border-gray-200 flex items-center justify-center mr-3">
                          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 8V16C21 17.1046 20.1046 18 19 18H5C3.89543 18 3 17.1046 3 16V8M21 8L12 13L3 8M21 8L12 3L3 8" stroke="#0078D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">
                            Microsoft Exchange
                          </h4>
                          <p className="text-xs text-gray-500">
                            Sync with Outlook/Exchange calendar
                          </p>
                        </div>
                      </div>
                      <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-indigo-600 hover:bg-indigo-700">
                        Connect
                      </button>
                    </div>
                  </div>
                  {/* Calendly */}
                  <div className="bg-white p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-white border border-gray-200 flex items-center justify-center mr-3">
                          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="3" y="4" width="18" height="18" rx="2" stroke="#006BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16 2V6" stroke="#006BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M8 2V6" stroke="#006BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3 10H21" stroke="#006BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900">
                            Calendly
                          </h4>
                          <p className="text-xs text-gray-500">
                            Allow clients to book appointments
                          </p>
                        </div>
                      </div>
                      <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-white bg-indigo-600 hover:bg-indigo-700">
                        Connect
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">
                  Integration Settings
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <PlugIcon className="h-5 w-5 text-gray-500 mr-3" />
                      <span className="text-sm text-gray-700">
                        Show external calendars
                      </span>
                    </div>
                    <div className="relative inline-block w-10 h-6">
                      <input type="checkbox" id="toggle-external" className="absolute opacity-0 w-0 h-0" defaultChecked />
                      <label htmlFor="toggle-external" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                        <span className="block h-6 w-6 rounded-full bg-white shadow transform translate-x-6 transition-transform duration-200 ease-in-out"></span>
                      </label>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <PlugIcon className="h-5 w-5 text-gray-500 mr-3" />
                      <span className="text-sm text-gray-700">
                        Two-way sync
                      </span>
                    </div>
                    <div className="relative inline-block w-10 h-6">
                      <input type="checkbox" id="toggle-two-way" className="absolute opacity-0 w-0 h-0" defaultChecked />
                      <label htmlFor="toggle-two-way" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                        <span className="block h-6 w-6 rounded-full bg-white shadow transform translate-x-6 transition-transform duration-200 ease-in-out"></span>
                      </label>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <PlugIcon className="h-5 w-5 text-gray-500 mr-3" />
                      <span className="text-sm text-gray-700">
                        Auto-accept bookings
                      </span>
                    </div>
                    <div className="relative inline-block w-10 h-6">
                      <input type="checkbox" id="toggle-auto-accept" className="absolute opacity-0 w-0 h-0" />
                      <label htmlFor="toggle-auto-accept" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                        <span className="block h-6 w-6 rounded-full bg-white shadow transition-transform duration-200 ease-in-out"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>}
        </div>
        <div className="p-4 border-t border-gray-200">
          <button onClick={handleClose} className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Save Settings
          </button>
        </div>
      </div>
    </div>;
};