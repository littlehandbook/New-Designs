import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, MessageSquare, BarChart2, FileText, Settings, Bell, Search, User, Menu, CreditCard, HelpCircle, ArrowUpRight, PlusIcon, Calendar as CalendarIcon, XCircle, CheckCircle, AlertTriangle } from 'lucide-react';
import { ChatBubble } from '../components/ChatBubble';
export const ClientSessionNotes = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);
  // Sample notes data
  const notes = [{
    id: 1,
    date: '15/01/2024',
    type: 'SOAP',
    content: {
      subjective: 'Client reported feeling anxious about upcoming work presentation. Mentioned difficulty sleeping for the past week.',
      objective: 'Client appeared tired with visible tension in shoulders and face. Speech was rapid at times.',
      assessment: 'Experiencing acute anxiety related to work stressors. Sleep disruption is exacerbating symptoms.',
      plan: 'Introduced breathing techniques for immediate anxiety management. Discussed sleep hygiene practices. Will follow up on implementation next session.'
    },
    aiRisk: 'Low',
    practitionerRisk: 'Medium'
  }, {
    id: 2,
    date: '08/01/2024',
    type: 'BIRP',
    content: {
      behavior: 'Client arrived on time and was well-engaged throughout session. Maintained good eye contact and was forthcoming with information.',
      intervention: 'Explored sources of work-related stress. Introduced concept of cognitive restructuring for negative thought patterns.',
      response: 'Client showed interest in cognitive techniques and practiced reframing one negative thought during session with success.',
      plan: 'Client will practice identifying and logging negative thoughts daily. Will introduce additional coping strategies next session.'
    },
    aiRisk: 'Low',
    practitionerRisk: 'Low'
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
              <Link to="/practice/client-session-notes" className="text-sm text-violet-600 hover:text-violet-800 flex items-center">
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
              <Link to="/practice/n/client-sessions" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 border-b-2 font-medium text-sm">
                Sessions
              </Link>
              <Link to="/practice/n/client-session-notes" className="border-violet-600 text-violet-600 py-4 px-1 border-b-2 font-medium text-sm">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Session Notes List */}
            <div className="md:col-span-1">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-violet-600 mr-2" />
                  <h2 className="text-lg font-medium text-gray-900">
                    Session Notes
                  </h2>
                </div>
                <button className="inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500">
                  <PlusIcon className="h-4 w-4 mr-1" />
                  New
                </button>
              </div>
              {notes.map(note => <div key={note.id} className={`bg-white border ${selectedNote && selectedNote.id === note.id ? 'border-violet-300 ring-1 ring-violet-500' : 'border-gray-200'} rounded-lg shadow-sm p-4 mb-4 cursor-pointer hover:border-violet-300`} onClick={() => setSelectedNote(note)}>
                  <div className="flex items-center mb-2">
                    <CalendarIcon className="h-4 w-4 text-gray-500 mr-1" />
                    <span className="text-sm font-medium text-gray-900">
                      {note.date}
                    </span>
                    <span className="ml-auto text-xs font-medium text-gray-500">
                      {note.type}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">
                    {note.type === 'SOAP' ? note.content.subjective.substring(0, 70) + '...' : note.content.behavior.substring(0, 70) + '...'}
                  </p>
                  <div className="mt-2 flex flex-wrap space-x-2">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${note.aiRisk === 'Low' ? 'bg-green-100 text-green-800' : note.aiRisk === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'} mb-1`}>
                      AI: {note.aiRisk}
                    </span>
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${note.practitionerRisk === 'Low' ? 'bg-green-100 text-green-800' : note.practitionerRisk === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'} mb-1`}>
                      Practitioner: {note.practitionerRisk}
                    </span>
                  </div>
                </div>)}
            </div>
            {/* Note Detail View */}
            <div className="md:col-span-2">
              {selectedNote ? <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 h-full">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Session Note - {selectedNote.date}
                      </h3>
                      <div className="flex items-center mt-1">
                        <span className="text-sm text-gray-500 mr-2">
                          {selectedNote.type} Format
                        </span>
                        <div className="flex space-x-2">
                          <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${selectedNote.aiRisk === 'Low' ? 'bg-green-100 text-green-800' : selectedNote.aiRisk === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                            AI Risk: {selectedNote.aiRisk}
                          </span>
                          <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${selectedNote.practitionerRisk === 'Low' ? 'bg-green-100 text-green-800' : selectedNote.practitionerRisk === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                            Practitioner Risk: {selectedNote.practitionerRisk}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                        Edit
                      </button>
                      <button onClick={() => setSelectedNote(null)} className="text-gray-400 hover:text-gray-500">
                        <XCircle className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  {selectedNote.type === 'SOAP' ? <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-1">
                          Subjective
                        </h4>
                        <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-md">
                          {selectedNote.content.subjective}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-1">
                          Objective
                        </h4>
                        <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-md">
                          {selectedNote.content.objective}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-1">
                          Assessment
                        </h4>
                        <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-md">
                          {selectedNote.content.assessment}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-1">
                          Plan
                        </h4>
                        <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-md">
                          {selectedNote.content.plan}
                        </p>
                      </div>
                    </div> : <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-1">
                          Behavior
                        </h4>
                        <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-md">
                          {selectedNote.content.behavior}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-1">
                          Intervention
                        </h4>
                        <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-md">
                          {selectedNote.content.intervention}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-1">
                          Response
                        </h4>
                        <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-md">
                          {selectedNote.content.response}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-1">
                          Plan
                        </h4>
                        <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-md">
                          {selectedNote.content.plan}
                        </p>
                      </div>
                    </div>}
                  {/* Risk Assessment */}
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="flex items-center mb-2">
                      <AlertTriangle className="h-4 w-4 text-amber-500 mr-1.5" />
                      <h4 className="text-sm font-medium text-gray-900">
                        Risk Assessment
                      </h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-violet-50 rounded-lg p-3">
                        <div className="flex items-center mb-1">
                          <span className="text-xs font-medium text-violet-700">
                            AI Risk Assessment
                          </span>
                          <span className={`ml-auto inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${selectedNote.aiRisk === 'Low' ? 'bg-green-100 text-green-800' : selectedNote.aiRisk === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                            {selectedNote.aiRisk}
                          </span>
                        </div>
                        <p className="text-xs text-violet-700">
                          AI analysis suggests{' '}
                          {selectedNote.aiRisk.toLowerCase()} risk based on
                          content patterns and clinical indicators.
                        </p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3">
                        <div className="flex items-center mb-1">
                          <span className="text-xs font-medium text-blue-700">
                            Practitioner Assessment
                          </span>
                          <span className={`ml-auto inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${selectedNote.practitionerRisk === 'Low' ? 'bg-green-100 text-green-800' : selectedNote.practitionerRisk === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                            {selectedNote.practitionerRisk}
                          </span>
                        </div>
                        <p className="text-xs text-blue-700">
                          Clinician evaluated risk as{' '}
                          {selectedNote.practitionerRisk.toLowerCase()} based on
                          direct observation and clinical judgment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div> : <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 h-full flex flex-col items-center justify-center text-center">
                  <div className="bg-gray-100 rounded-full p-4 mb-4">
                    <FileText className="h-10 w-10 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No Note Selected
                  </h3>
                  <p className="text-gray-500 text-center max-w-md">
                    Select a session note from the list to view details or
                    create a new note.
                  </p>
                </div>}
            </div>
          </div>
        </main>
      </div>
      {/* Chat Bubble Component */}
      <ChatBubble />
    </div>;
};