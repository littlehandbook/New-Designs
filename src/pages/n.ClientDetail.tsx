import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, MessageSquare, BarChart2, FileText, Settings, Bell, Search, User, Menu, CreditCard, HelpCircle, ArrowUpRight, Mail, Phone, MapPin, AlertTriangle, PencilIcon, CheckCircle, ArrowRight } from 'lucide-react';
import { ChatBubble } from '../components/ChatBubble';
export const ClientDetail = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
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
              <Link to="/practice/client-detail" className="text-sm text-violet-600 hover:text-violet-800 flex items-center">
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
              <Link to="/practice/n/client-detail" className="border-violet-600 text-violet-600 py-4 px-1 border-b-2 font-medium text-sm">
                Overview
              </Link>
              <Link to="/practice/n/client-sessions" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 border-b-2 font-medium text-sm">
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
          {/* Client Information */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Basic Information */}
            <div className="lg:col-span-2">
              <div className="bg-white shadow-sm rounded-lg border border-gray-200 mb-6">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <User className="h-5 w-5 text-violet-600 mr-2" />
                      <h3 className="text-lg font-medium text-gray-900">
                        Basic Information
                      </h3>
                    </div>
                    <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                      <PencilIcon className="h-4 w-4 mr-1.5" />
                      Edit
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex items-start mb-4">
                        <div className="flex-shrink-0 mt-1">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-gray-500">Email</p>
                          <p className="text-sm font-medium text-gray-900 break-all">
                            michael.chen@email.com
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start mb-4">
                        <div className="flex-shrink-0 mt-1">
                          <MapPin className="h-5 w-5 text-gray-400" />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-gray-500">Address</p>
                          <p className="text-sm font-medium text-gray-900">
                            456 Oak Ave, City, ST 67890
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-start mb-4">
                        <div className="flex-shrink-0 mt-1">
                          <Phone className="h-5 w-5 text-gray-400" />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-gray-500">Phone</p>
                          <p className="text-sm font-medium text-gray-900">
                            (555) 234-5678
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start mb-4">
                        <div className="flex-shrink-0 mt-1">
                          <Calendar className="h-5 w-5 text-gray-400" />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm text-gray-500">Date of Birth</p>
                          <p className="text-sm font-medium text-gray-900">
                            22/05/1990
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <AlertTriangle className="h-5 w-5 text-red-500" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-gray-500">
                          Emergency Contact
                        </p>
                        <p className="text-sm font-medium text-gray-900">
                          Lisa Chen (Sister) - (555) 345-6789
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Upcoming Sessions */}
              <div className="bg-white shadow-sm rounded-lg border border-gray-200 mb-6">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-violet-600 mr-2" />
                      <h3 className="text-lg font-medium text-gray-900">
                        Upcoming Sessions
                      </h3>
                    </div>
                    <Link to="/practice/n/calendar" className="text-sm font-medium text-violet-600 hover:text-violet-800">
                      View calendar
                    </Link>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg">
                    <div className="p-4 border-b border-gray-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 text-violet-600 mr-1.5" />
                            <span className="text-sm font-medium text-gray-900">
                              Feb 1, 2024
                            </span>
                          </div>
                          <div className="mt-1 flex items-center">
                            <Clock className="h-4 w-4 text-gray-400 mr-1.5" />
                            <span className="text-sm text-gray-500">
                              2:00 PM - 2:50 PM
                            </span>
                          </div>
                          <div className="mt-1">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              Therapy Session
                            </span>
                          </div>
                        </div>
                        <div className="flex">
                          <Link to="/practice/n/telesession" className="inline-flex items-center px-3 py-1.5 border border-transparent shadow-sm text-xs font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700">
                            <Video className="h-4 w-4 mr-1.5" />
                            Join
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Recent Notes */}
              <div className="bg-white shadow-sm rounded-lg border border-gray-200">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-violet-600 mr-2" />
                      <h3 className="text-lg font-medium text-gray-900">
                        Recent Notes
                      </h3>
                    </div>
                    <Link to="/practice/n/client-session-notes" className="text-sm font-medium text-violet-600 hover:text-violet-800">
                      View all notes
                    </Link>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-gray-400 mr-1.5" />
                          <span className="text-sm font-medium text-gray-900">
                            Jan 25, 2024
                          </span>
                        </div>
                        <span className="text-xs font-medium text-gray-500">
                          SOAP
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">
                        Client reported feeling anxious about work presentation.
                        Discussed coping strategies and practiced breathing
                        exercises.
                      </p>
                      <div className="flex flex-wrap space-x-2">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                          AI: Low Risk
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                          Practitioner: Medium Risk
                        </span>
                      </div>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-gray-400 mr-1.5" />
                          <span className="text-sm font-medium text-gray-900">
                            Jan 18, 2024
                          </span>
                        </div>
                        <span className="text-xs font-medium text-gray-500">
                          BIRP
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">
                        Client demonstrated good engagement in session. Reported
                        improvement in sleep habits after implementing evening
                        routine.
                      </p>
                      <div className="flex flex-wrap space-x-2">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                          AI: Low Risk
                        </span>
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                          Practitioner: Low Risk
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column */}
            <div>
              {/* AI Risk Assessment */}
              <div className="bg-white shadow-sm rounded-lg border border-gray-200 mb-6">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <svg className="h-5 w-5 text-violet-600 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 3.5V2M5.06066 5.06066L4 4M5.06066 13.0607L4 14.1213M13.0607 5.06066L14.1213 4M3.5 9H2M12 17.6569L13.4142 19.0711C14.3668 20.0237 15.6332 20.5 16.9142 20.5C19.1617 20.5 21 18.6617 21 16.4142C21 14.1667 19.1617 12.3284 16.9142 12.3284C16.5051 12.3284 16.1108 12.3928 15.7384 12.5113M12 17.6569V12.3284C12 9.46844 9.53156 7 6.67157 7C3.81158 7 1.34314 9.46844 1.34314 12.3284C1.34314 15.1884 3.81158 17.6569 6.67157 17.6569H12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <h3 className="text-lg font-medium text-gray-900">
                      AI Risk Assessment
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 gap-4 mb-4">
                    <div>
                      <div className="flex items-center mb-1">
                        <CheckCircle className="h-4 w-4 text-violet-600 mr-1" />
                        <p className="text-sm font-medium text-gray-900">
                          AI Risk Rating
                        </p>
                      </div>
                      <div className="bg-yellow-50 px-3 py-2 rounded-md">
                        <p className="text-sm font-medium text-yellow-800">
                          Moderate
                        </p>
                        <p className="text-xs text-yellow-700">Score: 4/10</p>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center mb-1">
                        <FileText className="h-4 w-4 text-violet-600 mr-1" />
                        <p className="text-sm font-medium text-gray-900">
                          AI Risk Reasoning
                        </p>
                      </div>
                      <div className="bg-violet-50 px-3 py-2 rounded-md">
                        <p className="text-sm text-violet-800">
                          Recent career changes and relationship stress require
                          ongoing monitoring. Shows good engagement in therapy
                          but needs consistent support for coping strategies.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Goals Progress */}
              <div className="bg-white shadow-sm rounded-lg border border-gray-200 mb-6">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Goals Progress
                    </h3>
                    <Link to="/practice/n/clients-goals" className="text-sm font-medium text-violet-600 hover:text-violet-800">
                      View all goals
                    </Link>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-900">
                          Reduce anxiety symptoms
                        </span>
                        <span className="text-sm text-gray-500">65%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-violet-600 h-2 rounded-full" style={{
                        width: '65%'
                      }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-900">
                          Improve sleep habits
                        </span>
                        <span className="text-sm text-gray-500">40%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-violet-600 h-2 rounded-full" style={{
                        width: '40%'
                      }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-900">
                          Build assertiveness skills
                        </span>
                        <span className="text-sm text-gray-500">25%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-violet-600 h-2 rounded-full" style={{
                        width: '25%'
                      }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Quick Actions */}
              <div className="bg-white shadow-sm rounded-lg border border-gray-200">
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Quick Actions
                  </h3>
                  <div className="space-y-3">
                    <Link to="/practice/n/client-messaging" className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 mr-3">
                          <MessageSquare className="h-4 w-4" />
                        </div>
                        <span className="text-sm font-medium text-gray-900">
                          Send Message
                        </span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                    </Link>
                    <Link to="/practice/n/calendar" className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 mr-3">
                          <Calendar className="h-4 w-4" />
                        </div>
                        <span className="text-sm font-medium text-gray-900">
                          Schedule Session
                        </span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                    </Link>
                    <Link to="/practice/n/client-documents" className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 mr-3">
                          <FileText className="h-4 w-4" />
                        </div>
                        <span className="text-sm font-medium text-gray-900">
                          Upload Document
                        </span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* Chat Bubble Component */}
      <ChatBubble />
    </div>;
};