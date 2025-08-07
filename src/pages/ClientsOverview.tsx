import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon, MailIcon, PhoneIcon, CalendarIcon, PlusIcon, UserIcon, AlertTriangleIcon, FlagIcon } from 'lucide-react';
import { SettingsModal } from '../components/layout/SettingsModal';
import { CollapsibleSidebar } from '../components/layout/CollapsibleSidebar';
import { ChatBubble } from '../components/ChatBubble';
export const ClientsOverview = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  // Mock client data
  const clients = [{
    id: 1,
    name: 'Sarah Johnson',
    emoji: '😊',
    email: 'sarah.johnson@email.com',
    phone: '(555) 123-4567',
    dateAdded: '01/12/2023',
    status: 'active',
    riskScore: 2
  }, {
    id: 2,
    name: 'Michael Chen',
    emoji: '🧠',
    email: 'michael.chen@email.com',
    phone: '(555) 234-5678',
    dateAdded: '10/01/2024',
    status: 'inactive',
    riskScore: 4
  }, {
    id: 3,
    name: 'Emma Rodriguez',
    emoji: '🌟',
    email: 'emma.rodriguez@email.com',
    phone: '(555) 345-6789',
    dateAdded: '15/11/2023',
    status: 'suspended',
    riskScore: 7,
    flagged: true
  }];
  // Filter clients based on search query
  const filteredClients = clients.filter(client => client.name.toLowerCase().includes(searchQuery.toLowerCase()) || client.email.toLowerCase().includes(searchQuery.toLowerCase()));
  // Function to get risk score color
  const getRiskScoreColor = score => {
    if (score <= 3) return 'bg-green-100 text-green-800';
    if (score <= 6) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };
  // Function to get status badge color
  const getStatusBadgeClasses = status => {
    switch (status) {
      case 'active':
        return 'bg-indigo-100 text-indigo-800';
      case 'inactive':
        return 'bg-gray-100 text-gray-800';
      case 'suspended':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  // Function to format status text
  const formatStatus = status => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };
  return <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <CollapsibleSidebar activeItem="clients" onSettingsClick={() => setSettingsOpen(true)} isSidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {/* Overlay for mobile sidebar */}
      {sidebarOpen && <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Clients</h1>
              <p className="mt-1 text-sm text-gray-500">
                Manage your client list and their information
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <PlusIcon className="h-4 w-4 mr-2" />
                Add Client
              </button>
            </div>
          </div>
          {/* Search and Filter */}
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="relative flex-1 max-w-2xl">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input type="text" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Search clients by name or email..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
              </div>
              <div className="mt-3 md:mt-0 md:ml-4 text-sm text-gray-500 flex items-center">
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-md">
                  {filteredClients.length} clients
                </span>
              </div>
            </div>
          </div>
          {/* Client Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClients.map(client => <div key={client.id} className="bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden hover:shadow-lg transition-all hover:border-indigo-200 transform hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center">
                      <span className="text-xl mr-2" role="img" aria-label="Client emoji">
                        {client.emoji}
                      </span>
                      {client.id === 3 ? <h2 className="text-lg font-semibold text-gray-900 max-w-[100px] leading-tight">
                          Emma
                          <br />
                          Rodriguez
                        </h2> : <h2 className="text-lg font-semibold text-gray-900">
                          {client.name}
                        </h2>}
                    </div>
                    <div className="flex items-center space-x-2">
                      {client.flagged && <FlagIcon className="h-4 w-4 text-red-500" />}
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeClasses(client.status)}`}>
                        {formatStatus(client.status)}
                      </span>
                      <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getRiskScoreColor(client.riskScore)}`}>
                        <AlertTriangleIcon className="h-3 w-3 mr-1" />
                        {client.riskScore}/10
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <MailIcon className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 truncate">
                        {client.email}
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <PhoneIcon className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{client.phone}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CalendarIcon className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">
                        Added {client.dateAdded}
                      </span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link to="/practice/client-detail" className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>)}
          </div>
          {/* Empty State (shown when no clients match search) */}
          {filteredClients.length === 0 && <div className="bg-white border border-gray-200 rounded-lg shadow-md p-8 flex flex-col items-center justify-center mt-6">
              <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 mb-4">
                <UserIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No clients found
              </h3>
              <p className="text-gray-500 text-center mb-4">
                No clients match your search criteria. Try adjusting your search
                or add a new client.
              </p>
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <PlusIcon className="h-4 w-4 mr-2" />
                Add Client
              </button>
            </div>}
        </div>
      </div>
      {/* Settings Modal */}
      <SettingsModal isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
      <ChatBubble />
    </div>;
};