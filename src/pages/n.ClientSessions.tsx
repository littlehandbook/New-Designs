import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, MessageSquare, BarChart2, FileText, Settings, Bell, Search, User, Menu, CreditCard, HelpCircle, ArrowUpRight, PlusIcon, Video, Eye, PencilIcon } from 'lucide-react';
import { ChatBubble } from '../components/ChatBubble';
export const ClientSessions = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  // Sample sessions data
  const sessions = [{
    id: 1,
    date: '25/01/2024',
    time: '14:00',
    type: 'Individual Therapy',
    duration: '50 minutes',
    status: 'completed',
    notes: 'Addressed work-related stress and explored mindfulness techniques for anxiety management.'
  }, {
    id: 2,
    date: '18/01/2024',
    time: '14:00',
    type: 'Individual Therapy',
    duration: '45 minutes',
    status: 'completed',
    notes: 'Discussed career pressures and practiced breathing exercises for panic prevention.'
  }, {
    id: 3,
    date: '01/02/2024',
    time: '14:00',
    type: 'Individual Therapy',
    duration: '50 minutes',
    status: 'scheduled',
    notes: 'Upcoming session to review progress and adjust treatment plan.'
  }];
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
                <Link to="/practice/n/clients" className="flex items-center px-4 py-2.5 text-sm font-medium text-violet-700 bg-violet-50 rounded-md group">
                  <Users className="h-5 w-5 mr-3 text-violet-700" />
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
                <Link to="/practice/n/client-documents" className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md group">
                  <FileText className="h-5 w-5 mr-3 text-gray-500 group-hover:text-violet-600" />
                  {!isSidebarCollapsed && <span>Documents</span>}
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
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-violet-100 flex items-center justify-center">
                <User className="h-6 w-6 text-violet-600" />
              </div>
              <div className="ml-3">
                <h1 className="text-lg font-semibold text-gray-900">
                  Michael Chen
                </h1>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500 mr-1.5"></span>
                  Active Client • 28 years old
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/practice/client-sessions" className="text-sm text-violet-600 hover:text-violet-800 flex items-center">
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
        {/* Client navigation */}
        <div className="bg-white border-b border-gray-200">
          <div className="px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-8 overflow-x-auto no-scrollbar" aria-label="Client sections">
              <Link to="/practice/n/client-detail" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 border-b-2 font-medium text-sm">
                Overview
              </Link>
              <Link to="/practice/n/client-sessions" className="border-violet-600 text-violet-600 py-4 px-1 border-b-2 font-medium text-sm">
                Sessions
              </Link>
              <Link to="/practice/n/client-session-notes" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 border-b-2 font-medium text-sm">
                Notes
              </Link>
              <Link to="/practice/n/client-documents" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 border-b-2 font-medium text-sm">
                Documents
              </Link>
              <Link to="/practice/n/client-homework" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 border-b-2 font-medium text-sm">
                Homework
              </Link>
              <Link to="/practice/n/clients-goals" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 border-b-2 font-medium text-sm">
                Goals
              </Link>
              <Link to="/practice/n/client-journal" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 border-b-2 font-medium text-sm">
                Journal
              </Link>
            </nav>
          </div>
        </div>
        {/* Main content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-6 lg:p-8">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 text-violet-600 mr-2" />
              <h2 className="text-xl font-bold text-gray-900">
                Session History
              </h2>
            </div>
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500">
              <PlusIcon className="h-4 w-4 mr-1" />
              New Session
            </button>
          </div>
          {/* Session List */}
          {sessions.length > 0 ? <div className="bg-white shadow-sm rounded-lg border border-gray-200">
              {sessions.map((session, index) => <div key={session.id} className={`p-6 ${index < sessions.length - 1 ? 'border-b border-gray-200' : ''}`}>
                  <div className="flex flex-col sm:flex-row sm:items-start">
                    <div className="mr-0 sm:mr-4 mb-3 sm:mb-0">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <div className="mb-2 sm:mb-0">
                          <h3 className="text-lg font-medium text-gray-900">
                            {session.date}
                          </h3>
                          <div className="flex flex-wrap items-center mt-1">
                            <Clock className="h-4 w-4 text-gray-500 mr-1" />
                            <span className="text-sm text-gray-500 mr-2">
                              {session.time}
                            </span>
                            <span className="text-sm text-gray-500 mr-2">
                              {session.type}
                            </span>
                            <span className="text-sm text-gray-500">
                              {session.duration}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${session.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'} mb-2 sm:mb-0 sm:mr-2 w-fit`}>
                            {session.status}
                          </span>
                          <div className="flex space-x-2">
                            <button className="inline-flex items-center p-1 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
                              <Eye className="h-4 w-4" />
                            </button>
                            <button className="inline-flex items-center p-1 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
                              <PencilIcon className="h-4 w-4" />
                            </button>
                            {session.status === 'scheduled' && <Link to="/practice/n/telesession" className="inline-flex items-center px-2 py-1 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700">
                                <Video className="h-3 w-3 mr-1" />
                                Join
                              </Link>}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mt-2">
                        {session.notes}
                      </p>
                    </div>
                  </div>
                </div>)}
            </div> : <div className="bg-white border border-gray-200 rounded-lg shadow-md p-8 flex flex-col items-center justify-center">
              <div className="bg-gray-100 rounded-full p-4 mb-4">
                <Calendar className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No sessions recorded yet
              </h3>
              <p className="text-gray-500 text-center mb-4">
                Schedule the first session to get started
              </p>
            </div>}
        </main>
      </div>
      {/* Chat Bubble Component */}
      <ChatBubble />
    </div>;
};