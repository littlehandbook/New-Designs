import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, MessageSquare, BarChart2, FileText, Settings, Bell, Search, User, Menu, CreditCard, HelpCircle, ArrowUpRight, PlusIcon, Filter, CheckCircle, AlertCircle, ChevronDown, Calendar as CalendarIcon, Clock } from 'lucide-react';
import { ChatBubble } from '../components/ChatBubble';
export const ClientsOverview = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  // Sample client data
  const clients = [{
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    phone: '(555) 123-4567',
    status: 'active',
    lastSession: '2 days ago',
    nextSession: {
      date: 'Today',
      time: '11:00 AM'
    },
    alerts: 2
  }, {
    id: 2,
    name: 'Michael Chen',
    email: 'michael.chen@example.com',
    phone: '(555) 234-5678',
    status: 'active',
    lastSession: '1 week ago',
    nextSession: {
      date: 'Today',
      time: '2:00 PM'
    },
    alerts: 0
  }, {
    id: 3,
    name: 'Emma Wilson',
    email: 'emma.wilson@example.com',
    phone: '(555) 345-6789',
    status: 'active',
    lastSession: '3 days ago',
    nextSession: {
      date: 'Today',
      time: '4:30 PM'
    },
    alerts: 1
  }, {
    id: 4,
    name: 'David Rodriguez',
    email: 'david.rodriguez@example.com',
    phone: '(555) 456-7890',
    status: 'active',
    lastSession: '2 weeks ago',
    nextSession: {
      date: 'Tomorrow',
      time: '10:00 AM'
    },
    alerts: 0
  }, {
    id: 5,
    name: 'Lisa Taylor',
    email: 'lisa.taylor@example.com',
    phone: '(555) 567-8901',
    status: 'inactive',
    lastSession: '1 month ago',
    nextSession: {
      date: 'Not scheduled',
      time: ''
    },
    alerts: 3
  }];
  // Filter clients based on search query and status filter
  const filteredClients = clients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchQuery.toLowerCase()) || client.email.toLowerCase().includes(searchQuery.toLowerCase()) || client.phone.includes(searchQuery);
    const matchesStatus = statusFilter === 'all' || client.status === statusFilter;
    return matchesSearch && matchesStatus;
  });
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
            <div className="flex-1 flex">
              <form className="w-full flex md:ml-0" action="#" method="GET">
                <label htmlFor="search-field" className="sr-only">
                  Search
                </label>
                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                    <Search className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <input id="search-field" className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm" placeholder="Search clients by name, email, or phone..." type="search" name="search" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
                </div>
              </form>
            </div>
            <div className="ml-4 flex items-center md:ml-6 space-x-4">
              <Link to="/practice/clients" className="text-sm text-violet-600 hover:text-violet-800 flex items-center">
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
          <div className="mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h1 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-0">
                Clients
              </h1>
              <div className="flex space-x-3">
                <div className="relative">
                  <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </button>
                  {/* Filter dropdown would go here */}
                </div>
                <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700">
                  <PlusIcon className="h-4 w-4 mr-2" />
                  Add Client
                </button>
              </div>
            </div>
          </div>
          {/* Status Filter Tabs */}
          <div className="mb-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="px-4 py-2 border-b border-gray-200 flex space-x-4">
                <button onClick={() => setStatusFilter('all')} className={`px-3 py-2 text-sm font-medium rounded-md ${statusFilter === 'all' ? 'bg-violet-50 text-violet-700' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}>
                  All Clients
                </button>
                <button onClick={() => setStatusFilter('active')} className={`px-3 py-2 text-sm font-medium rounded-md ${statusFilter === 'active' ? 'bg-violet-50 text-violet-700' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}>
                  Active
                </button>
                <button onClick={() => setStatusFilter('inactive')} className={`px-3 py-2 text-sm font-medium rounded-md ${statusFilter === 'inactive' ? 'bg-violet-50 text-violet-700' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}>
                  Inactive
                </button>
              </div>
              {/* Clients List */}
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Client
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Contact
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Last Session
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Next Session
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredClients.length === 0 ? <tr>
                        <td colSpan={6} className="px-6 py-4 text-center text-sm text-gray-500">
                          No clients found matching your search criteria.
                        </td>
                      </tr> : filteredClients.map(client => <tr key={client.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-violet-100 flex items-center justify-center">
                                <User className="h-6 w-6 text-violet-600" />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {client.name}
                                </div>
                                {client.alerts > 0 && <div className="mt-1 flex items-center">
                                    <AlertCircle className="h-4 w-4 text-red-500 mr-1" />
                                    <span className="text-xs text-red-700">
                                      {client.alerts} alert
                                      {client.alerts > 1 ? 's' : ''}
                                    </span>
                                  </div>}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {client.email}
                            </div>
                            <div className="text-sm text-gray-500">
                              {client.phone}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${client.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                              {client.status === 'active' && <CheckCircle className="h-3 w-3 mr-1" />}
                              {client.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {client.lastSession}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {client.nextSession.date !== 'Not scheduled' ? <div className="text-sm">
                                <div className="font-medium text-gray-900">
                                  {client.nextSession.date}
                                </div>
                                <div className="text-gray-500 flex items-center">
                                  <Clock className="h-3 w-3 mr-1" />
                                  {client.nextSession.time}
                                </div>
                              </div> : <span className="text-sm text-gray-500">
                                Not scheduled
                              </span>}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Link to="/practice/n/client-detail" className="text-violet-600 hover:text-violet-900">
                              View
                            </Link>
                          </td>
                        </tr>)}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* Chat Bubble Component */}
      <ChatBubble />
    </div>;
};