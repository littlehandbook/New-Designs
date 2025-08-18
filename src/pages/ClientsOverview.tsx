import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon, MailIcon, PhoneIcon, CalendarIcon, PlusIcon, UserIcon, AlertTriangleIcon, FlagIcon, ChevronLeftIcon, ChevronRightIcon, BellIcon, ClockIcon, CheckIcon, FileTextIcon, BookOpenIcon, SettingsIcon, XIcon, VideoIcon, HelpCircleIcon } from 'lucide-react';
import { SettingsModal } from '../components/layout/SettingsModal';
import { CollapsibleSidebar } from '../components/layout/CollapsibleSidebar';
import { ChatBubble } from '../components/ChatBubble';
export const ClientsOverview = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [clientSettingsOpen, setClientSettingsOpen] = useState(false);
  // State to track which slide is active for each client
  const [activeSlides, setActiveSlides] = useState({});
  // Settings for client card display
  const [cardSettings, setCardSettings] = useState({
    showEmail: true,
    showPhone: true,
    showDateAdded: true,
    showAlerts: true,
    showJournalNotifications: true,
    showReportDue: true,
    showNextSession: true,
    showSessionType: true,
    showSessionDuration: true
  });
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  // Function to handle carousel navigation
  const navigateSlide = (clientId, direction) => {
    const currentSlide = activeSlides[clientId] || 0;
    const newSlide = (currentSlide + direction + 3) % 3; // Ensure we wrap around properly
    setActiveSlides({
      ...activeSlides,
      [clientId]: newSlide
    });
  };
  // Mock client data
  const clients = [{
    id: 1,
    name: 'Sarah Johnson',
    emoji: '😊',
    emojiDate: 'Today, 9:15 AM',
    email: 'sarah.johnson@email.com',
    phone: '(555) 123-4567',
    dateAdded: '01/12/2023',
    status: 'active',
    riskScore: 2,
    alerts: [{
      type: 'journal',
      message: 'New journal entry available'
    }, {
      type: 'form',
      message: 'Intake form completed'
    }],
    nextSession: {
      date: '05/03/2024',
      time: '10:00 AM',
      type: 'In-person',
      duration: '50 min'
    }
  }, {
    id: 2,
    name: 'Michael Chen',
    emoji: null,
    email: 'michael.chen@email.com',
    phone: '(555) 234-5678',
    dateAdded: '10/01/2024',
    status: 'inactive',
    riskScore: 4,
    alerts: [{
      type: 'report',
      message: 'Progress report due'
    }],
    nextSession: {
      date: '08/03/2024',
      time: '2:30 PM',
      type: 'Telesession',
      duration: '45 min'
    }
  }, {
    id: 3,
    name: 'Emma Rodriguez',
    emoji: '😔',
    emojiDate: 'Yesterday, 7:32 PM',
    email: 'emma.rodriguez@email.com',
    phone: '(555) 345-6789',
    dateAdded: '15/11/2023',
    status: 'suspended',
    riskScore: 7,
    flagged: true,
    alerts: [{
      type: 'risk',
      message: 'Risk assessment needed'
    }, {
      type: 'journal',
      message: 'New journal entry available'
    }, {
      type: 'form',
      message: 'Follow-up questionnaire pending'
    }],
    nextSession: {
      date: '12/03/2024',
      time: '11:15 AM',
      type: 'In-person',
      duration: '60 min'
    }
  }, {
    id: 4,
    name: 'David Wilson',
    emoji: '😴',
    emojiDate: 'Today, 6:45 AM',
    email: 'david.wilson@email.com',
    phone: '(555) 456-7890',
    dateAdded: '05/02/2024',
    status: 'active',
    riskScore: 1,
    alerts: [],
    nextSession: {
      date: '10/03/2024',
      time: '3:00 PM',
      type: 'Telesession',
      duration: '50 min'
    }
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
  // Function to get alert icon
  const getAlertIcon = type => {
    switch (type) {
      case 'journal':
        return <BookOpenIcon className="h-4 w-4 text-indigo-500" />;
      case 'form':
        return <FileTextIcon className="h-4 w-4 text-blue-500" />;
      case 'report':
        return <FileTextIcon className="h-4 w-4 text-orange-500" />;
      case 'risk':
        return <AlertTriangleIcon className="h-4 w-4 text-red-500" />;
      default:
        return <BellIcon className="h-4 w-4 text-gray-500" />;
    }
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
            <div className="mt-4 md:mt-0 flex space-x-2">
              <button onClick={() => setClientSettingsOpen(true)} className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <SettingsIcon className="h-4 w-4 mr-2" />
                Card Settings
              </button>
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
                      {client.emoji ? <div className="relative group">
                          <span className="text-xl mr-2" role="img" aria-label="Client mood emoji">
                            {client.emoji}
                          </span>
                          <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                            Client-reported mood ({client.emojiDate})
                          </div>
                        </div> : <div className="h-6 w-6 mr-2 flex items-center justify-center text-gray-400">
                          <div className="relative group">
                            <HelpCircleIcon className="h-5 w-5" />
                            <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                              No mood reported
                            </div>
                          </div>
                        </div>}
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
                  {/* Client Card Carousel */}
                  <div className="relative">
                    {/* Carousel Navigation */}
                    <div className="absolute top-1/2 -left-1 transform -translate-y-1/2 z-10">
                      <button onClick={() => navigateSlide(client.id, -1)} className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600" aria-label="Previous slide">
                        <ChevronLeftIcon className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 z-10">
                      <button onClick={() => navigateSlide(client.id, 1)} className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600" aria-label="Next slide">
                        <ChevronRightIcon className="h-4 w-4" />
                      </button>
                    </div>
                    {/* Carousel Content */}
                    <div className="overflow-hidden">
                      <div className="flex transition-transform duration-300 ease-in-out" style={{
                    transform: `translateX(-${(activeSlides[client.id] || 0) * 100}%)`
                  }}>
                        {/* Slide 1: Contact Information */}
                        <div className="w-full flex-shrink-0">
                          <div className="space-y-3">
                            {cardSettings.showEmail && <div className="flex items-center text-sm">
                                <MailIcon className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0" />
                                <span className="text-gray-600 truncate">
                                  {client.email}
                                </span>
                              </div>}
                            {cardSettings.showPhone && <div className="flex items-center text-sm">
                                <PhoneIcon className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0" />
                                <span className="text-gray-600">
                                  {client.phone}
                                </span>
                              </div>}
                            {cardSettings.showDateAdded && <div className="flex items-center text-sm">
                                <CalendarIcon className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0" />
                                <span className="text-gray-600">
                                  Added {client.dateAdded}
                                </span>
                              </div>}
                          </div>
                        </div>
                        {/* Slide 2: Alerts & Follow-ups */}
                        <div className="w-full flex-shrink-0">
                          <div className="space-y-3">
                            <div className="flex items-center text-sm font-medium text-gray-700 mb-1">
                              <BellIcon className="h-4 w-4 text-indigo-500 mr-2" />
                              <span>Alerts & Follow-ups</span>
                            </div>
                            {client.alerts && client.alerts.length > 0 ? client.alerts.map((alert, index) => <div key={index} className="flex items-start text-sm">
                                  <div className="mr-2 mt-0.5 flex-shrink-0">
                                    {getAlertIcon(alert.type)}
                                  </div>
                                  <span className="text-gray-600">
                                    {alert.message}
                                  </span>
                                </div>) : <div className="flex items-center text-sm">
                                <CheckIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                <span className="text-gray-600">
                                  No pending alerts
                                </span>
                              </div>}
                          </div>
                        </div>
                        {/* Slide 3: Next Session */}
                        <div className="w-full flex-shrink-0">
                          <div className="space-y-3">
                            <div className="flex items-center text-sm font-medium text-gray-700 mb-1">
                              <CalendarIcon className="h-4 w-4 text-indigo-500 mr-2" />
                              <span>Next Session</span>
                            </div>
                            {client.nextSession ? <>
                                <div className="flex items-center text-sm">
                                  <CalendarIcon className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0" />
                                  <span className="text-gray-600">
                                    {client.nextSession.date}
                                  </span>
                                </div>
                                <div className="flex items-center text-sm">
                                  <ClockIcon className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0" />
                                  <span className="text-gray-600">
                                    {client.nextSession.time}
                                  </span>
                                </div>
                                <div className="flex items-center text-sm">
                                  <VideoIcon className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0" />
                                  <span className="text-gray-600">
                                    {client.nextSession.type} (
                                    {client.nextSession.duration})
                                  </span>
                                </div>
                              </> : <div className="flex items-center text-sm">
                                <AlertTriangleIcon className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                                <span className="text-gray-600">
                                  No upcoming sessions
                                </span>
                              </div>}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Carousel Indicators */}
                    <div className="flex justify-center mt-3 space-x-1">
                      {[0, 1, 2].map(index => <button key={index} onClick={() => setActiveSlides({
                    ...activeSlides,
                    [client.id]: index
                  })} className={`h-1.5 rounded-full transition-all ${(activeSlides[client.id] || 0) === index ? 'w-4 bg-indigo-500' : 'w-2 bg-gray-300'}`} aria-label={`Go to slide ${index + 1}`} />)}
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
      {/* Main Settings Modal */}
      <SettingsModal isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
      {/* Client Card Settings Panel */}
      {clientSettingsOpen && <>
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-40" onClick={() => setClientSettingsOpen(false)} />
          <div className="fixed right-0 top-0 bottom-0 w-80 bg-white shadow-xl z-50 overflow-y-auto transform transition-transform duration-300 ease-in-out">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">
                Client Card Settings
              </h3>
              <button onClick={() => setClientSettingsOpen(false)} className="text-gray-400 hover:text-gray-500">
                <XIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4">
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  Contact Information
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label htmlFor="showEmail" className="text-sm text-gray-600">
                      Show Email
                    </label>
                    <div className="relative inline-block w-10 h-5">
                      <input type="checkbox" id="showEmail" checked={cardSettings.showEmail} onChange={() => setCardSettings({
                    ...cardSettings,
                    showEmail: !cardSettings.showEmail
                  })} className="opacity-0 w-0 h-0" />
                      <span className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-full transition-colors ${cardSettings.showEmail ? 'bg-indigo-600' : 'bg-gray-300'}`}>
                        <span className={`absolute h-4 w-4 left-0.5 bottom-0.5 bg-white rounded-full transition-transform ${cardSettings.showEmail ? 'transform translate-x-5' : ''}`}></span>
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="showPhone" className="text-sm text-gray-600">
                      Show Phone
                    </label>
                    <div className="relative inline-block w-10 h-5">
                      <input type="checkbox" id="showPhone" checked={cardSettings.showPhone} onChange={() => setCardSettings({
                    ...cardSettings,
                    showPhone: !cardSettings.showPhone
                  })} className="opacity-0 w-0 h-0" />
                      <span className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-full transition-colors ${cardSettings.showPhone ? 'bg-indigo-600' : 'bg-gray-300'}`}>
                        <span className={`absolute h-4 w-4 left-0.5 bottom-0.5 bg-white rounded-full transition-transform ${cardSettings.showPhone ? 'transform translate-x-5' : ''}`}></span>
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="showDateAdded" className="text-sm text-gray-600">
                      Show Date Added
                    </label>
                    <div className="relative inline-block w-10 h-5">
                      <input type="checkbox" id="showDateAdded" checked={cardSettings.showDateAdded} onChange={() => setCardSettings({
                    ...cardSettings,
                    showDateAdded: !cardSettings.showDateAdded
                  })} className="opacity-0 w-0 h-0" />
                      <span className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-full transition-colors ${cardSettings.showDateAdded ? 'bg-indigo-600' : 'bg-gray-300'}`}>
                        <span className={`absolute h-4 w-4 left-0.5 bottom-0.5 bg-white rounded-full transition-transform ${cardSettings.showDateAdded ? 'transform translate-x-5' : ''}`}></span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  Alerts & Follow-ups
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label htmlFor="showAlerts" className="text-sm text-gray-600">
                      Show Alerts
                    </label>
                    <div className="relative inline-block w-10 h-5">
                      <input type="checkbox" id="showAlerts" checked={cardSettings.showAlerts} onChange={() => setCardSettings({
                    ...cardSettings,
                    showAlerts: !cardSettings.showAlerts
                  })} className="opacity-0 w-0 h-0" />
                      <span className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-full transition-colors ${cardSettings.showAlerts ? 'bg-indigo-600' : 'bg-gray-300'}`}>
                        <span className={`absolute h-4 w-4 left-0.5 bottom-0.5 bg-white rounded-full transition-transform ${cardSettings.showAlerts ? 'transform translate-x-5' : ''}`}></span>
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="showJournalNotifications" className="text-sm text-gray-600">
                      Journal Notifications
                    </label>
                    <div className="relative inline-block w-10 h-5">
                      <input type="checkbox" id="showJournalNotifications" checked={cardSettings.showJournalNotifications} onChange={() => setCardSettings({
                    ...cardSettings,
                    showJournalNotifications: !cardSettings.showJournalNotifications
                  })} className="opacity-0 w-0 h-0" />
                      <span className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-full transition-colors ${cardSettings.showJournalNotifications ? 'bg-indigo-600' : 'bg-gray-300'}`}>
                        <span className={`absolute h-4 w-4 left-0.5 bottom-0.5 bg-white rounded-full transition-transform ${cardSettings.showJournalNotifications ? 'transform translate-x-5' : ''}`}></span>
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="showReportDue" className="text-sm text-gray-600">
                      Report Due Notices
                    </label>
                    <div className="relative inline-block w-10 h-5">
                      <input type="checkbox" id="showReportDue" checked={cardSettings.showReportDue} onChange={() => setCardSettings({
                    ...cardSettings,
                    showReportDue: !cardSettings.showReportDue
                  })} className="opacity-0 w-0 h-0" />
                      <span className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-full transition-colors ${cardSettings.showReportDue ? 'bg-indigo-600' : 'bg-gray-300'}`}>
                        <span className={`absolute h-4 w-4 left-0.5 bottom-0.5 bg-white rounded-full transition-transform ${cardSettings.showReportDue ? 'transform translate-x-5' : ''}`}></span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  Next Session
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label htmlFor="showNextSession" className="text-sm text-gray-600">
                      Show Next Session
                    </label>
                    <div className="relative inline-block w-10 h-5">
                      <input type="checkbox" id="showNextSession" checked={cardSettings.showNextSession} onChange={() => setCardSettings({
                    ...cardSettings,
                    showNextSession: !cardSettings.showNextSession
                  })} className="opacity-0 w-0 h-0" />
                      <span className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-full transition-colors ${cardSettings.showNextSession ? 'bg-indigo-600' : 'bg-gray-300'}`}>
                        <span className={`absolute h-4 w-4 left-0.5 bottom-0.5 bg-white rounded-full transition-transform ${cardSettings.showNextSession ? 'transform translate-x-5' : ''}`}></span>
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="showSessionType" className="text-sm text-gray-600">
                      Show Session Type
                    </label>
                    <div className="relative inline-block w-10 h-5">
                      <input type="checkbox" id="showSessionType" checked={cardSettings.showSessionType} onChange={() => setCardSettings({
                    ...cardSettings,
                    showSessionType: !cardSettings.showSessionType
                  })} className="opacity-0 w-0 h-0" />
                      <span className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-full transition-colors ${cardSettings.showSessionType ? 'bg-indigo-600' : 'bg-gray-300'}`}>
                        <span className={`absolute h-4 w-4 left-0.5 bottom-0.5 bg-white rounded-full transition-transform ${cardSettings.showSessionType ? 'transform translate-x-5' : ''}`}></span>
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="showSessionDuration" className="text-sm text-gray-600">
                      Show Session Duration
                    </label>
                    <div className="relative inline-block w-10 h-5">
                      <input type="checkbox" id="showSessionDuration" checked={cardSettings.showSessionDuration} onChange={() => setCardSettings({
                    ...cardSettings,
                    showSessionDuration: !cardSettings.showSessionDuration
                  })} className="opacity-0 w-0 h-0" />
                      <span className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 rounded-full transition-colors ${cardSettings.showSessionDuration ? 'bg-indigo-600' : 'bg-gray-300'}`}>
                        <span className={`absolute h-4 w-4 left-0.5 bottom-0.5 bg-white rounded-full transition-transform ${cardSettings.showSessionDuration ? 'transform translate-x-5' : ''}`}></span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end pt-4 border-t border-gray-200">
                <button onClick={() => setClientSettingsOpen(false)} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Save Settings
                </button>
              </div>
            </div>
          </div>
        </>}
      <ChatBubble />
    </div>;
};