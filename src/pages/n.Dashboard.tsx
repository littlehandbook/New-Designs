import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, MessageSquare, BarChart2, FileText, Settings, Bell, Search, PlusCircle, ChevronRight, User, CheckCircle, XCircle, AlertCircle, ArrowUpRight, Menu, CreditCard, HelpCircle, UserCircle } from 'lucide-react';
import { ChatBubble } from '../components/ChatBubble';
export const Dashboard = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  // Mock data
  const upcomingSessions = [{
    id: 1,
    clientName: 'Sarah Johnson',
    time: '11:00 AM - 12:00 PM',
    type: 'Individual Therapy',
    status: 'confirmed'
  }, {
    id: 2,
    clientName: 'Michael Chen',
    time: '2:00 PM - 3:00 PM',
    type: 'Initial Assessment',
    status: 'confirmed'
  }, {
    id: 3,
    clientName: 'Emma Wilson',
    time: '4:30 PM - 5:30 PM',
    type: 'Follow-up Session',
    status: 'pending'
  }];
  const recentClients = [{
    id: 1,
    name: 'Sarah Johnson',
    lastSession: '2 days ago',
    nextSession: 'Today, 11:00 AM',
    status: 'active',
    alerts: 2
  }, {
    id: 2,
    name: 'Michael Chen',
    lastSession: '1 week ago',
    nextSession: 'Today, 2:00 PM',
    status: 'active',
    alerts: 0
  }, {
    id: 3,
    name: 'Emma Wilson',
    lastSession: '3 days ago',
    nextSession: 'Today, 4:30 PM',
    status: 'active',
    alerts: 1
  }, {
    id: 4,
    name: 'David Rodriguez',
    lastSession: '2 weeks ago',
    nextSession: 'Tomorrow, 10:00 AM',
    status: 'active',
    alerts: 0
  }, {
    id: 5,
    name: 'Lisa Taylor',
    lastSession: '1 month ago',
    nextSession: 'Not scheduled',
    status: 'inactive',
    alerts: 3
  }];
  const tasks = [{
    id: 1,
    title: 'Complete Sarah Johnson session notes',
    dueDate: 'Today',
    priority: 'high',
    completed: false
  }, {
    id: 2,
    title: 'Review treatment plan for Michael Chen',
    dueDate: 'Tomorrow',
    priority: 'medium',
    completed: false
  }, {
    id: 3,
    title: 'Send follow-up resources to Emma Wilson',
    dueDate: 'Today',
    priority: 'medium',
    completed: true
  }, {
    id: 4,
    title: 'Update billing information for David Rodriguez',
    dueDate: 'Mar 18',
    priority: 'low',
    completed: false
  }];
  const notifications = [{
    id: 1,
    title: 'New message from Sarah Johnson',
    time: '10 minutes ago',
    type: 'message'
  }, {
    id: 2,
    title: 'Emma Wilson completed homework assignment',
    time: '1 hour ago',
    type: 'task'
  }, {
    id: 3,
    title: 'Upcoming session with Michael Chen',
    time: '3 hours ago',
    type: 'calendar'
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
                <Link to="/practice/n/dashboard" className="flex items-center px-4 py-2.5 text-sm font-medium text-violet-700 bg-violet-50 rounded-md group">
                  <BarChart2 className="h-5 w-5 mr-3 text-violet-700" />
                  {!isSidebarCollapsed && <span>Dashboard</span>}
                </Link>
              </li>
              <li>
                <Link to="/practice/n/clients-goals" className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md group">
                  <Users className="h-5 w-5 mr-3 text-gray-500 group-hover:text-violet-600" />
                  {!isSidebarCollapsed && <span>Clients</span>}
                </Link>
              </li>
              <li>
                <Link to="/practice/calendar" className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md group">
                  <Calendar className="h-5 w-5 mr-3 text-gray-500 group-hover:text-violet-600" />
                  {!isSidebarCollapsed && <span>Calendar</span>}
                </Link>
              </li>
              <li>
                <Link to="/practice/client-messaging" className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md group">
                  <MessageSquare className="h-5 w-5 mr-3 text-gray-500 group-hover:text-violet-600" />
                  {!isSidebarCollapsed && <span>Messages</span>}
                </Link>
              </li>
              <li>
                <Link to="/practice/client-documents" className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md group">
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
                  <Link to="/practice/finance" className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md group">
                    <CreditCard className="h-5 w-5 mr-3 text-gray-500 group-hover:text-violet-600" />
                    <span>Billing</span>
                  </Link>
                </li>
                <li>
                  <Link to="/practice/settings" className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md group">
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
            <div className="flex-1 flex">
              <form className="w-full flex md:ml-0" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                    <Search className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <input id="search-field" className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm" placeholder="Search clients, notes, documents..." type="search" name="search" />
                </div>
              </form>
            </div>
            <div className="ml-4 flex items-center md:ml-6 space-x-4">
              <Link to="/practice/dashboard" className="text-sm text-violet-600 hover:text-violet-800 flex items-center">
                <span className="hidden sm:inline">Switch to classic view</span>
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </Link>
              <button className="p-1 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none">
                <span className="sr-only">View notifications</span>
                <Bell className="h-6 w-6" aria-hidden="true" />
              </button>
              <button className="p-1 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none">
                <span className="sr-only">Get help</span>
                <HelpCircle className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </header>
        {/* Main content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-6 lg:p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="mt-1 text-sm text-gray-500">
              Welcome back, Dr. Smith. Here's what's happening today.
            </p>
          </div>
          {/* Dashboard grid */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Main column */}
            <div className="grid grid-cols-1 gap-6 lg:col-span-2">
              {/* Today's sessions */}
              <section aria-labelledby="today-sessions-heading" className="bg-white shadow-sm rounded-lg border border-gray-200">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h2 id="today-sessions-heading" className="text-lg font-medium text-gray-900">
                      Today's Sessions
                    </h2>
                    <Link to="/practice/calendar" className="text-sm font-medium text-violet-600 hover:text-violet-800">
                      View calendar
                    </Link>
                  </div>
                  <div className="mt-6 flow-root">
                    <ul className="divide-y divide-gray-200">
                      {upcomingSessions.map(session => <li key={session.id} className="py-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                              <div className="h-10 w-10 rounded-full bg-violet-100 flex items-center justify-center">
                                <UserCircle className="h-6 w-6 text-violet-600" />
                              </div>
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-medium text-gray-900 truncate">
                                {session.clientName}
                              </p>
                              <p className="text-sm text-gray-500 truncate">
                                {session.type}
                              </p>
                            </div>
                            <div className="flex items-center">
                              <div className="flex flex-col items-end text-sm text-gray-500">
                                <div className="flex items-center">
                                  <Clock className="h-4 w-4 mr-1" />
                                  <span>{session.time}</span>
                                </div>
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mt-1 ${session.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                  {session.status}
                                </span>
                              </div>
                            </div>
                            <div>
                              <Link to={`/practice/telesession`} className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500">
                                Join
                              </Link>
                            </div>
                          </div>
                        </li>)}
                    </ul>
                  </div>
                </div>
              </section>
              {/* Tasks */}
              <section aria-labelledby="tasks-heading" className="bg-white shadow-sm rounded-lg border border-gray-200">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h2 id="tasks-heading" className="text-lg font-medium text-gray-900">
                      Tasks
                    </h2>
                    <button className="text-sm font-medium text-violet-600 hover:text-violet-800">
                      View all
                    </button>
                  </div>
                  <div className="mt-6 flow-root">
                    <ul className="divide-y divide-gray-200">
                      {tasks.map(task => <li key={task.id} className="py-4">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 pt-0.5">
                              <button type="button" className={`h-5 w-5 rounded-full border ${task.completed ? 'bg-violet-600 border-violet-600 text-white' : 'border-gray-300 text-transparent'} flex items-center justify-center`}>
                                {task.completed && <CheckCircle className="h-4 w-4" />}
                              </button>
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className={`text-sm font-medium ${task.completed ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
                                {task.title}
                              </p>
                              <div className="mt-1 flex items-center">
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${task.priority === 'high' ? 'bg-red-100 text-red-800' : task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>
                                  {task.priority}
                                </span>
                                <span className="text-xs text-gray-500 ml-2">
                                  Due: {task.dueDate}
                                </span>
                              </div>
                            </div>
                            <div>
                              <button className="text-gray-400 hover:text-gray-600">
                                <span className="sr-only">Edit</span>
                                <ChevronRight className="h-5 w-5" />
                              </button>
                            </div>
                          </div>
                        </li>)}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <button type="button" className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500">
                      <PlusCircle className="h-4 w-4 mr-2" />
                      Add New Task
                    </button>
                  </div>
                </div>
              </section>
            </div>
            {/* Secondary column */}
            <div className="grid grid-cols-1 gap-6">
              {/* Recent clients */}
              <section aria-labelledby="recent-clients-heading" className="bg-white shadow-sm rounded-lg border border-gray-200">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h2 id="recent-clients-heading" className="text-lg font-medium text-gray-900">
                      Recent Clients
                    </h2>
                    <Link to="/practice/clients" className="text-sm font-medium text-violet-600 hover:text-violet-800">
                      View all
                    </Link>
                  </div>
                  <div className="mt-6 flow-root">
                    <ul className="divide-y divide-gray-200">
                      {recentClients.slice(0, 3).map(client => <li key={client.id} className="py-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                              <div className="h-10 w-10 rounded-full bg-violet-100 flex items-center justify-center">
                                <User className="h-6 w-6 text-violet-600" />
                              </div>
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-medium text-gray-900 truncate">
                                {client.name}
                              </p>
                              <p className="text-sm text-gray-500 truncate">
                                Next: {client.nextSession}
                              </p>
                            </div>
                            <div>
                              <Link to={`/practice/client-detail`} className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500">
                                View
                              </Link>
                            </div>
                          </div>
                          {client.alerts > 0 && <div className="mt-2 bg-red-50 border-l-4 border-red-400 p-2 rounded">
                              <div className="flex items-center">
                                <div className="flex-shrink-0">
                                  <AlertCircle className="h-4 w-4 text-red-500" />
                                </div>
                                <div className="ml-2">
                                  <p className="text-xs text-red-700">
                                    {client.alerts} alert
                                    {client.alerts > 1 ? 's' : ''} requiring
                                    attention
                                  </p>
                                </div>
                              </div>
                            </div>}
                        </li>)}
                    </ul>
                  </div>
                </div>
              </section>
              {/* Notifications */}
              <section aria-labelledby="notifications-heading" className="bg-white shadow-sm rounded-lg border border-gray-200">
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h2 id="notifications-heading" className="text-lg font-medium text-gray-900">
                      Notifications
                    </h2>
                    <button className="text-sm font-medium text-violet-600 hover:text-violet-800">
                      Mark all as read
                    </button>
                  </div>
                  <div className="mt-6 flow-root">
                    <ul className="divide-y divide-gray-200">
                      {notifications.map(notification => <li key={notification.id} className="py-4">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 pt-0.5">
                              <div className={`h-8 w-8 rounded-full flex items-center justify-center ${notification.type === 'message' ? 'bg-blue-100 text-blue-600' : notification.type === 'task' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>
                                {notification.type === 'message' ? <MessageSquare className="h-4 w-4" /> : notification.type === 'task' ? <CheckCircle className="h-4 w-4" /> : <Calendar className="h-4 w-4" />}
                              </div>
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-sm text-gray-900">
                                {notification.title}
                              </p>
                              <p className="mt-1 text-xs text-gray-500">
                                {notification.time}
                              </p>
                            </div>
                            <div>
                              <button className="text-gray-400 hover:text-gray-600">
                                <XCircle className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </li>)}
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
      {/* Chat Bubble Component */}
      <ChatBubble />
    </div>;
};