import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, MessageSquare, BarChart2, FileText, Settings, Bell, User, Menu, CreditCard, HelpCircle, ArrowUpRight, Video, Monitor, Play, Pause, Phone, PhoneOff, Mic, MicOff, Camera, CameraOff, Share, Maximize, Volume2 } from 'lucide-react';
import { ChatBubble } from '../components/ChatBubble';
export const Telesession = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isInSession, setIsInSession] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const startSession = () => {
    setIsInSession(true);
  };
  const endSession = () => {
    setIsInSession(false);
    setIsMuted(false);
    setIsVideoOff(false);
  };
  return <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <aside className={`${isSidebarCollapsed ? 'w-20' : 'w-64'} bg-white border-r border-gray-200 transition-all duration-300 ease-in-out flex flex-col h-full`}>
        {/* Logo */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-violet-600 rounded-md flex items-center justify-center text-white font-bold">
              PP
            </div>
            {!isSidebarCollapsed && <span className="ml-2 text-lg font-semibold text-gray-900">
                Practitioner
              </span>}
          </div>
          <button onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)} className="text-gray-500 hover:text-gray-700">
            <Menu className="h-5 w-5" />
          </button>
        </div>
        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          <div className="px-4 mb-4">
            {!isSidebarCollapsed && <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Main
              </h3>}
            <ul className="mt-2 space-y-1">
              <li>
                <Link to="/practice/n/dashboard" className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md group">
                  <BarChart2 className="h-5 w-5 mr-3 text-gray-500 group-hover:text-violet-600" />
                  {!isSidebarCollapsed && <span>Dashboard</span>}
                </Link>
              </li>
              <li>
                <Link to="/practice/n/clients" className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md group">
                  <Users className="h-5 w-5 mr-3 text-gray-500 group-hover:text-violet-600" />
                  {!isSidebarCollapsed && <span>Clients</span>}
                </Link>
              </li>
              <li>
                <Link to="/practice/n/calendar" className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md group">
                  <Calendar className="h-5 w-5 mr-3 text-gray-500 group-hover:text-violet-600" />
                  {!isSidebarCollapsed && <span>Calendar</span>}
                </Link>
              </li>
              <li>
                <Link to="/practice/n/client-messaging" className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md group">
                  <MessageSquare className="h-5 w-5 mr-3 text-gray-500 group-hover:text-violet-600" />
                  {!isSidebarCollapsed && <span>Messages</span>}
                </Link>
              </li>
              <li>
                <Link to="/practice/n/telesession" className="flex items-center px-4 py-2.5 text-sm font-medium text-violet-700 bg-violet-50 rounded-md group">
                  <Video className="h-5 w-5 mr-3 text-violet-700" />
                  {!isSidebarCollapsed && <span>Telesession</span>}
                </Link>
              </li>
            </ul>
          </div>
          {!isSidebarCollapsed && <div className="px-4 mb-4">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Admin
              </h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <Link to="/practice/n/finance" className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md group">
                    <CreditCard className="h-5 w-5 mr-3 text-gray-500 group-hover:text-violet-600" />
                    <span>Billing</span>
                  </Link>
                </li>
                <li>
                  <Link to="/practice/n/settings" className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md group">
                    <Settings className="h-5 w-5 mr-3 text-gray-500 group-hover:text-violet-600" />
                    <span>Settings</span>
                  </Link>
                </li>
              </ul>
            </div>}
        </nav>
        {/* User profile */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-9 w-9 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User profile" />
            </div>
            {!isSidebarCollapsed && <div className="ml-3 text-left">
                <p className="text-sm font-medium text-gray-900">
                  Dr. Jane Smith
                </p>
                <p className="text-xs text-gray-500">Premium Plan</p>
              </div>}
          </div>
        </div>
      </aside>
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Telesession</h1>
              <p className="text-sm text-gray-500">
                Secure video sessions with your clients
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/practice/telesession" className="text-sm text-violet-600 hover:text-violet-800 flex items-center">
                <span className="hidden sm:inline">Switch to classic view</span>
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </Link>
              <button className="p-1 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none">
                <Bell className="h-6 w-6" />
              </button>
              <button className="p-1 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none">
                <HelpCircle className="h-6 w-6" />
              </button>
            </div>
          </div>
        </header>
        {/* Main content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-6 lg:p-8">
          {isInSession ?
        // Active session view
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-full">
              <div className="relative h-full">
                {/* Video area */}
                <div className="h-full bg-gray-900 rounded-lg overflow-hidden relative">
                  <div className="w-full h-full flex items-center justify-center">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Client video" className="w-full h-full object-cover" />
                  </div>
                  {/* Self view */}
                  <div className="absolute bottom-4 right-4 w-48 h-36 bg-gray-800 rounded-lg overflow-hidden border-2 border-white shadow-lg">
                    {!isVideoOff ? <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Your video" className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center bg-gray-700">
                        <User className="h-10 w-10 text-gray-400" />
                      </div>}
                  </div>
                  {/* Session info */}
                  <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-md text-sm">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>00:15:32</span>
                    </div>
                  </div>
                  {/* Controls */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 px-4 py-3">
                    <div className="flex justify-center items-center space-x-4">
                      <button onClick={() => setIsMuted(!isMuted)} className={`p-3 rounded-full ${isMuted ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-700'} hover:bg-opacity-90 transition-colors`}>
                        {isMuted ? <MicOff className="h-6 w-6" /> : <Mic className="h-6 w-6" />}
                      </button>
                      <button onClick={() => setIsVideoOff(!isVideoOff)} className={`p-3 rounded-full ${isVideoOff ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-700'} hover:bg-opacity-90 transition-colors`}>
                        {isVideoOff ? <CameraOff className="h-6 w-6" /> : <Camera className="h-6 w-6" />}
                      </button>
                      <button className="p-3 rounded-full bg-gray-100 text-gray-700 hover:bg-opacity-90 transition-colors">
                        <Share className="h-6 w-6" />
                      </button>
                      <button className="p-3 rounded-full bg-gray-100 text-gray-700 hover:bg-opacity-90 transition-colors">
                        <MessageSquare className="h-6 w-6" />
                      </button>
                      <button className="p-3 rounded-full bg-gray-100 text-gray-700 hover:bg-opacity-90 transition-colors">
                        <Settings className="h-6 w-6" />
                      </button>
                      <button className="p-3 rounded-full bg-gray-100 text-gray-700 hover:bg-opacity-90 transition-colors">
                        <Maximize className="h-6 w-6" />
                      </button>
                      <button onClick={endSession} className="p-3 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors">
                        <PhoneOff className="h-6 w-6" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div> :
        // Session selection view
        <div className="space-y-6">
              {/* Current status */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center mb-4">
                  <Monitor className="h-5 w-5 text-violet-600 mr-2" />
                  <h2 className="text-lg font-semibold text-gray-900">
                    Session Status
                  </h2>
                </div>
                <div className="flex flex-col items-center justify-center py-8">
                  <div className="bg-gray-100 rounded-lg p-4 inline-flex items-center justify-center mb-4">
                    <Monitor className="h-10 w-10 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-700 mb-2">
                    No Active Session
                  </h3>
                  <p className="text-gray-500 text-center">
                    Start a session from your scheduled appointments below
                  </p>
                </div>
              </div>
              {/* Today's sessions */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center mb-6">
                  <Clock className="h-5 w-5 text-violet-600 mr-2" />
                  <h2 className="text-lg font-semibold text-gray-900">
                    Today's Sessions
                  </h2>
                </div>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
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
                            <User className="h-4 w-4 text-gray-500 mr-2" />
                            <span className="font-medium text-gray-900">
                              Sarah Johnson
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Video className="h-4 w-4 text-gray-500 mr-2" />
                            <span className="text-sm text-gray-600">
                              Telesession
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-2 sm:mb-0 sm:mr-2 w-fit">
                          Ready to Join
                        </span>
                        <button onClick={startSession} className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-md text-sm font-medium w-full sm:w-auto">
                          Start Session
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
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
                            <User className="h-4 w-4 text-gray-500 mr-2" />
                            <span className="font-medium text-gray-900">
                              Michael Chen
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Video className="h-4 w-4 text-gray-500 mr-2" />
                            <span className="text-sm text-gray-600">
                              Telesession
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center">
                        <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mb-2 sm:mb-0 sm:mr-2 w-fit">
                          Client Waiting
                        </span>
                        <button onClick={startSession} className="bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-md text-sm font-medium w-full sm:w-auto">
                          Join Now
                        </button>
                      </div>
                    </div>
                  </div>
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
                            <User className="h-4 w-4 text-gray-500 mr-2" />
                            <span className="font-medium text-gray-900">
                              Emma Wilson
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Video className="h-4 w-4 text-gray-500 mr-2" />
                            <span className="text-sm text-gray-600">
                              Telesession
                            </span>
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
            </div>}
        </main>
      </div>
      {/* Chat Bubble Component */}
      <ChatBubble />
    </div>;
};