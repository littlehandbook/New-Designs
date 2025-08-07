import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SendIcon, MenuIcon, XIcon, BellIcon, MailIcon, PhoneIcon, SlackIcon, SunIcon, MoonIcon, SettingsIcon, EyeIcon, FileTextIcon, ArrowUpRightIcon, ClockIcon } from 'lucide-react';
import { SettingsModal } from '../components/layout/SettingsModal';
import { CollapsibleSidebar } from '../components/layout/CollapsibleSidebar';
export const ClientMessagingDropdown = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [messagingSettingsOpen, setMessagingSettingsOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  // Messaging settings panel animation states
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);
  // Handle messaging settings panel animation
  useEffect(() => {
    if (messagingSettingsOpen && !isVisible) {
      setIsVisible(true);
      setIsAnimatingOut(false);
      setIsAnimatingIn(true);
      const timer = setTimeout(() => {
        setIsAnimatingIn(false);
      }, 10); // Short timeout to trigger the animation
      return () => clearTimeout(timer);
    } else if (!messagingSettingsOpen && isVisible) {
      setIsAnimatingOut(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300); // Match this duration with the CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [messagingSettingsOpen, isVisible]);
  // Handle close messaging settings with animation
  const handleCloseMessagingSettings = () => {
    setIsAnimatingOut(true);
    const timer = setTimeout(() => {
      setMessagingSettingsOpen(false);
    }, 300);
    return () => clearTimeout(timer);
  };
  return <div className="flex h-screen bg-white overflow-hidden">
      {/* Sidebar */}
      <CollapsibleSidebar activeItem="clients" onSettingsClick={() => setSettingsOpen(true)} isSidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Client Header */}
        <div className="bg-gray-50 p-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700">
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
              <div className="flex space-x-3">
                <button onClick={() => setMessagingSettingsOpen(true)} className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <SettingsIcon className="h-4 w-4 mr-2" />
                  Message Settings
                </button>
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.2322 5.23223L18.7677 8.76777M16.7322 3.73223C17.7085 2.75592 19.2914 2.75592 20.2677 3.73223C21.244 4.70854 21.244 6.29146 20.2677 7.26777L6.5 21.0355H3V17.4644L16.7322 3.73223Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Edit Client
                </button>
              </div>
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
              <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-xs sm:text-sm">
                Journal
              </a>
              <a href="#" className="border-indigo-600 text-indigo-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-xs sm:text-sm">
                Messaging
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-xs sm:text-sm">
                Billing
              </a>
            </nav>
          </div>
        </div>
        {/* Messaging Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Send Message
            </h2>
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="messageType" className="block text-sm font-medium text-gray-700 mb-1">
                    Message Type
                  </label>
                  <div className="relative">
                    <select id="messageType" name="messageType" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                      <option>Email</option>
                      <option>SMS</option>
                      <option>Portal Notification</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-3">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input type="text" name="subject" id="subject" placeholder="Enter email subject" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea id="message" name="message" rows={6} placeholder="Type your message here..." className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
              </div>
              <div className="flex justify-end">
                <button type="button" className="inline-flex items-center px-4 py-2 sm:px-6 sm:py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <SendIcon className="h-4 w-4 mr-2" />
                  Send Message
                </button>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Message History
            </h2>
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 space-y-4">
              {/* Sent Email Message */}
              <div className="flex flex-col items-end">
                <div className="bg-indigo-600 text-white rounded-lg rounded-tr-none p-4 max-w-[85%]">
                  <div className="flex items-center mb-1">
                    <svg className="h-4 w-4 text-white mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 8L10.8906 13.2604C11.5624 13.7083 12.4376 13.7083 13.1094 13.2604L21 8M5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="font-medium">Email</span>
                    <span className="mx-1 text-indigo-200 text-xs">sent</span>
                    <span className="text-indigo-200 text-xs">read</span>
                  </div>
                  <p>
                    Hello! I wanted to follow up on our last session and see how
                    you are feeling.
                  </p>
                </div>
                <span className="text-xs text-gray-500 mt-1 mr-2">
                  15/01/2024, 10:30:00
                </span>
              </div>
              {/* Received SMS Message */}
              <div className="flex flex-col items-start">
                <div className="bg-gray-100 text-gray-800 rounded-lg rounded-tl-none p-4 max-w-[85%]">
                  <div className="flex items-center mb-1">
                    <svg className="h-4 w-4 text-gray-600 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 10H8.01M12 10H12.01M16 10H16.01M9 16H5C3.89543 16 3 15.1046 3 14V6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V14C21 15.1046 20.1046 16 19 16H14L9 21V16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="font-medium text-gray-800">SMS</span>
                    <span className="mx-1 text-gray-600 text-xs">received</span>
                    <span className="text-gray-600 text-xs">delivered</span>
                  </div>
                  <p>
                    Thank you for checking in. I'm doing much better and
                    practicing the techniques we discussed.
                  </p>
                </div>
                <span className="text-xs text-gray-500 mt-1 ml-2">
                  15/01/2024, 14:20:00
                </span>
              </div>
              {/* Sent Portal Message */}
              <div className="flex flex-col items-end">
                <div className="bg-indigo-600 text-white rounded-lg rounded-tr-none p-4 max-w-[85%]">
                  <div className="flex items-center mb-1">
                    <svg className="h-4 w-4 text-white mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="font-medium">Portal Notification</span>
                    <span className="mx-1 text-indigo-200 text-xs">sent</span>
                    <span className="text-indigo-200 text-xs">unread</span>
                  </div>
                  <p>
                    Your next appointment is scheduled for January 25th at 2:00
                    PM. Please confirm your availability.
                  </p>
                </div>
                <span className="text-xs text-gray-500 mt-1 mr-2">
                  18/01/2024, 09:15:00
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Messaging Settings Panel */}
      {isVisible && <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Overlay */}
          <div className={`absolute inset-0 bg-gray-800 transition-opacity duration-300 ${isAnimatingOut ? 'opacity-0' : 'opacity-50'}`} onClick={handleCloseMessagingSettings} />
          {/* Settings Panel */}
          <div className={`absolute inset-y-0 right-0 max-w-md w-full bg-white shadow-xl flex flex-col transform transition-transform duration-300 ease-in-out ${isAnimatingOut ? 'translate-x-full' : isAnimatingIn ? 'translate-x-full' : 'translate-x-0'}`}>
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                Messaging Settings
              </h2>
              <button onClick={handleCloseMessagingSettings} className="text-gray-400 hover:text-gray-500 focus:outline-none">
                <XIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Message Delivery Preferences
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <MailIcon className="h-5 w-5 text-gray-500 mr-3" />
                        <span className="text-sm text-gray-700">
                          Email notifications
                        </span>
                      </div>
                      <div className="relative inline-block w-10 h-6">
                        <input type="checkbox" id="toggle-email-notifications" className="sr-only" defaultChecked />
                        <label htmlFor="toggle-email-notifications" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                          <span className="block h-6 w-6 rounded-full bg-white shadow transform translate-x-4 transition-transform duration-200 ease-in-out"></span>
                        </label>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <PhoneIcon className="h-5 w-5 text-gray-500 mr-3" />
                        <span className="text-sm text-gray-700">
                          SMS notifications
                        </span>
                      </div>
                      <div className="relative inline-block w-10 h-6">
                        <input type="checkbox" id="toggle-sms-notifications" className="sr-only" defaultChecked />
                        <label htmlFor="toggle-sms-notifications" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                          <span className="block h-6 w-6 rounded-full bg-white shadow transform translate-x-4 transition-transform duration-200 ease-in-out"></span>
                        </label>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <BellIcon className="h-5 w-5 text-gray-500 mr-3" />
                        <span className="text-sm text-gray-700">
                          Portal notifications
                        </span>
                      </div>
                      <div className="relative inline-block w-10 h-6">
                        <input type="checkbox" id="toggle-portal-notifications" className="sr-only" defaultChecked />
                        <label htmlFor="toggle-portal-notifications" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                          <span className="block h-6 w-6 rounded-full bg-white shadow transform translate-x-4 transition-transform duration-200 ease-in-out"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Message Templates
                  </h3>
                  <div className="space-y-3">
                    <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-sm font-medium text-gray-900">
                          Appointment Reminder
                        </h4>
                        <div className="flex space-x-2">
                          <button className="text-xs text-indigo-600 hover:text-indigo-800">
                            Edit
                          </button>
                          <button className="text-xs text-gray-500 hover:text-gray-700">
                            Duplicate
                          </button>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 line-clamp-2">
                        Hi [Client Name], this is a reminder that your
                        appointment is scheduled for [Date] at [Time]. Please
                        let us know if you need to reschedule.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-sm font-medium text-gray-900">
                          Session Follow-up
                        </h4>
                        <div className="flex space-x-2">
                          <button className="text-xs text-indigo-600 hover:text-indigo-800">
                            Edit
                          </button>
                          <button className="text-xs text-gray-500 hover:text-gray-700">
                            Duplicate
                          </button>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 line-clamp-2">
                        Hi [Client Name], I wanted to follow up on our session
                        today. How are you feeling? Please let me know if you
                        have any questions.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-md border border-gray-200">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="text-sm font-medium text-gray-900">
                          Document Request
                        </h4>
                        <div className="flex space-x-2">
                          <button className="text-xs text-indigo-600 hover:text-indigo-800">
                            Edit
                          </button>
                          <button className="text-xs text-gray-500 hover:text-gray-700">
                            Duplicate
                          </button>
                        </div>
                      </div>
                      <p className="text-xs text-gray-600 line-clamp-2">
                        Hi [Client Name], could you please upload [Document
                        Name] to your client portal? This will help us with
                        [Purpose].
                      </p>
                    </div>
                    <button className="w-full flex items-center justify-center py-2 px-3 text-sm text-indigo-600 hover:bg-indigo-50 rounded-md border border-dashed border-indigo-300">
                      + Create New Template
                    </button>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Automated Messages
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <ClockIcon className="h-5 w-5 text-gray-500 mr-3" />
                        <span className="text-sm text-gray-700">
                          24h appointment reminders
                        </span>
                      </div>
                      <div className="relative inline-block w-10 h-6">
                        <input type="checkbox" id="toggle-appointment-reminders" className="sr-only" defaultChecked />
                        <label htmlFor="toggle-appointment-reminders" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                          <span className="block h-6 w-6 rounded-full bg-white shadow transform translate-x-4 transition-transform duration-200 ease-in-out"></span>
                        </label>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <FileTextIcon className="h-5 w-5 text-gray-500 mr-3" />
                        <span className="text-sm text-gray-700">
                          Session summary emails
                        </span>
                      </div>
                      <div className="relative inline-block w-10 h-6">
                        <input type="checkbox" id="toggle-session-summary" className="sr-only" />
                        <label htmlFor="toggle-session-summary" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                          <span className="block h-6 w-6 rounded-full bg-white shadow transition-transform duration-200 ease-in-out"></span>
                        </label>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <ArrowUpRightIcon className="h-5 w-5 text-gray-500 mr-3" />
                        <span className="text-sm text-gray-700">
                          Homework reminders
                        </span>
                      </div>
                      <div className="relative inline-block w-10 h-6">
                        <input type="checkbox" id="toggle-homework-reminders" className="sr-only" defaultChecked />
                        <label htmlFor="toggle-homework-reminders" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                          <span className="block h-6 w-6 rounded-full bg-white shadow transform translate-x-4 transition-transform duration-200 ease-in-out"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Message Privacy
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <EyeIcon className="h-5 w-5 text-gray-500 mr-3" />
                        <span className="text-sm text-gray-700">
                          Hide sensitive information in SMS
                        </span>
                      </div>
                      <div className="relative inline-block w-10 h-6">
                        <input type="checkbox" id="toggle-hide-sensitive" className="sr-only" defaultChecked />
                        <label htmlFor="toggle-hide-sensitive" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                          <span className="block h-6 w-6 rounded-full bg-white shadow transform translate-x-4 transition-transform duration-200 ease-in-out"></span>
                        </label>
                      </div>
                    </div>
                    <div className="py-2">
                      <label htmlFor="message-retention" className="block text-sm text-gray-700 mb-1">
                        Message Retention Period
                      </label>
                      <select id="message-retention" className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                        <option>Forever (Default)</option>
                        <option>1 Year</option>
                        <option>6 Months</option>
                        <option>3 Months</option>
                        <option>1 Month</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">
                    Appearance
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <SunIcon className="h-5 w-5 text-gray-500 mr-3" />
                        <span className="text-sm text-gray-700">
                          Light Mode
                        </span>
                      </div>
                      <div className="relative inline-block w-10 h-6">
                        <input type="radio" id="toggle-light-mode" name="theme-mode" className="sr-only" defaultChecked />
                        <label htmlFor="toggle-light-mode" className="block overflow-hidden h-6 rounded-full bg-indigo-600 cursor-pointer">
                          <span className="block h-6 w-6 rounded-full bg-white shadow transform translate-x-4 transition-transform duration-200 ease-in-out"></span>
                        </label>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <MoonIcon className="h-5 w-5 text-gray-500 mr-3" />
                        <span className="text-sm text-gray-700">Dark Mode</span>
                      </div>
                      <div className="relative inline-block w-10 h-6">
                        <input type="radio" id="toggle-dark-mode" name="theme-mode" className="sr-only" />
                        <label htmlFor="toggle-dark-mode" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                          <span className="block h-6 w-6 rounded-full bg-white shadow transition-transform duration-200 ease-in-out"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-gray-200">
              <button onClick={handleCloseMessagingSettings} className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Save Settings
              </button>
            </div>
          </div>
        </div>}
      {/* Settings Modal */}
      <SettingsModal isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </div>;
};