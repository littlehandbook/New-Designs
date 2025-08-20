import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';
import { Calendar as CalendarIcon, Clock, Users, MessageSquare, BarChart2, FileText, Settings, Bell, Search, PlusIcon, ChevronLeft, ChevronRight, User, Menu, CreditCard, HelpCircle, ArrowUpRight, Video, X, Filter } from 'lucide-react';
import { ChatBubble } from '../components/ChatBubble';
export const Calendar = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [currentView, setCurrentView] = useState('week');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showNewAppointmentModal, setShowNewAppointmentModal] = useState(false);
  const [isRecurring, setIsRecurring] = useState(false);
  const [sessionType, setSessionType] = useState('in-person');
  // Sample data for demonstration
  const clients = [{
    id: 1,
    name: 'Michael Chen'
  }, {
    id: 2,
    name: 'Sarah Johnson'
  }, {
    id: 3,
    name: 'David Williams'
  }, {
    id: 4,
    name: 'Emma Davis'
  }];
  const appointmentTypes = [{
    id: 1,
    name: 'Initial Consultation',
    duration: 60,
    color: 'bg-blue-500'
  }, {
    id: 2,
    name: 'Follow-up Session',
    duration: 45,
    color: 'bg-green-500'
  }, {
    id: 3,
    name: 'Therapy Session',
    duration: 50,
    color: 'bg-violet-500'
  }, {
    id: 4,
    name: 'Assessment',
    duration: 90,
    color: 'bg-yellow-500'
  }];
  const appointments = [{
    id: 1,
    clientId: 1,
    clientName: 'Michael Chen',
    type: 'Therapy Session',
    typeId: 3,
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 10, 0),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 10, 50),
    color: 'bg-violet-500',
    status: 'confirmed'
  }, {
    id: 2,
    clientId: 2,
    clientName: 'Sarah Johnson',
    type: 'Initial Consultation',
    typeId: 1,
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 13, 0),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 14, 0),
    color: 'bg-blue-500',
    status: 'confirmed'
  }, {
    id: 3,
    clientId: 3,
    clientName: 'David Williams',
    type: 'Follow-up Session',
    typeId: 2,
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1, 11, 0),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1, 11, 45),
    color: 'bg-green-500',
    status: 'confirmed'
  }, {
    id: 4,
    clientId: 4,
    clientName: 'Emma Davis',
    type: 'Assessment',
    typeId: 4,
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 2, 15, 0),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 2, 16, 30),
    color: 'bg-yellow-500',
    status: 'pending'
  }];
  // External calendar events (displayed differently)
  const externalEvents = [{
    id: 101,
    title: 'Team Meeting',
    start: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 9, 0),
    end: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 9, 30),
    source: 'Google Calendar'
  }];
  const navigateDate = direction => {
    const newDate = new Date(currentDate);
    if (currentView === 'day') {
      newDate.setDate(newDate.getDate() + direction);
    } else if (currentView === 'week') {
      newDate.setDate(newDate.getDate() + direction * 7);
    } else if (currentView === 'month') {
      newDate.setMonth(newDate.getMonth() + direction);
    }
    setCurrentDate(newDate);
  };
  const formatDateRange = () => {
    const options = {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    };
    if (currentView === 'day') {
      return currentDate.toLocaleDateString(undefined, options);
    } else if (currentView === 'week') {
      const weekStart = new Date(currentDate);
      weekStart.setDate(currentDate.getDate() - currentDate.getDay());
      const weekEnd = new Date(weekStart);
      weekEnd.setDate(weekStart.getDate() + 6);
      if (weekStart.getMonth() === weekEnd.getMonth()) {
        return `${weekStart.toLocaleDateString(undefined, {
          month: 'long'
        })} ${weekStart.getDate()} - ${weekEnd.getDate()}, ${weekStart.getFullYear()}`;
      } else if (weekStart.getFullYear() === weekEnd.getFullYear()) {
        return `${weekStart.toLocaleDateString(undefined, {
          month: 'long'
        })} ${weekStart.getDate()} - ${weekEnd.toLocaleDateString(undefined, {
          month: 'long'
        })} ${weekEnd.getDate()}, ${weekStart.getFullYear()}`;
      } else {
        return `${weekStart.toLocaleDateString(undefined, {
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        })} - ${weekEnd.toLocaleDateString(undefined, {
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        })}`;
      }
    } else if (currentView === 'month') {
      return currentDate.toLocaleDateString(undefined, {
        month: 'long',
        year: 'numeric'
      });
    }
  };
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 8; hour < 18; hour++) {
      slots.push({
        time: `${hour % 12 || 12}:00 ${hour < 12 ? 'AM' : 'PM'}`,
        hour,
        minute: 0
      });
      slots.push({
        time: `${hour % 12 || 12}:30 ${hour < 12 ? 'AM' : 'PM'}`,
        hour,
        minute: 30
      });
    }
    return slots;
  };
  const generateWeekDays = () => {
    const days = [];
    const weekStart = new Date(currentDate);
    weekStart.setDate(currentDate.getDate() - currentDate.getDay());
    for (let i = 0; i < 7; i++) {
      const day = new Date(weekStart);
      day.setDate(weekStart.getDate() + i);
      days.push(day);
    }
    return days;
  };
  const isToday = date => {
    const today = new Date();
    return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
  };
  const getAppointmentsForTimeSlot = (day, hour, minute) => {
    return appointments.filter(appointment => {
      const appointmentDate = appointment.start;
      return appointmentDate.getDate() === day.getDate() && appointmentDate.getMonth() === day.getMonth() && appointmentDate.getFullYear() === day.getFullYear() && appointmentDate.getHours() === hour && appointmentDate.getMinutes() === minute;
    });
  };
  const getExternalEventsForTimeSlot = (day, hour, minute) => {
    return externalEvents.filter(event => {
      const eventDate = event.start;
      return eventDate.getDate() === day.getDate() && eventDate.getMonth() === day.getMonth() && eventDate.getFullYear() === day.getFullYear() && eventDate.getHours() === hour && eventDate.getMinutes() === minute;
    });
  };
  const handleNewAppointment = (day, hour, minute) => {
    setShowNewAppointmentModal(true);
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
                <Link to="/practice/n/calendar" className="flex items-center px-4 py-2.5 text-sm font-medium text-violet-700 bg-violet-50 rounded-md group">
                  <CalendarIcon className="h-5 w-5 mr-3 text-violet-700" />
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
                  <input id="search-field" className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm" placeholder="Search appointments, clients..." type="search" name="search" />
                </div>
              </form>
            </div>
            <div className="ml-4 flex items-center md:ml-6 space-x-4">
              <Link to="/practice/calendar" className="text-sm text-violet-600 hover:text-violet-800 flex items-center">
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
                Calendar
              </h1>
              <div className="flex space-x-3">
                <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </button>
                <button onClick={() => setShowNewAppointmentModal(true)} className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700">
                  <PlusIcon className="h-4 w-4 mr-2" />
                  New Appointment
                </button>
              </div>
            </div>
          </div>
          {/* Calendar Controls */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
            <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center mb-4 sm:mb-0">
                <button onClick={() => navigateDate(-1)} className="p-1 rounded-full hover:bg-gray-100">
                  <ChevronLeft className="h-5 w-5 text-gray-500" />
                </button>
                <span className="text-lg font-medium text-gray-900 mx-4">
                  {formatDateRange()}
                </span>
                <button onClick={() => navigateDate(1)} className="p-1 rounded-full hover:bg-gray-100">
                  <ChevronRight className="h-5 w-5 text-gray-500" />
                </button>
                <button onClick={() => setCurrentDate(new Date())} className="ml-4 px-3 py-1 text-sm text-violet-600 hover:bg-violet-50 rounded-md">
                  Today
                </button>
              </div>
              <div className="flex items-center">
                <div className="bg-gray-100 rounded-md p-1 flex">
                  <button onClick={() => setCurrentView('day')} className={`px-3 py-1.5 text-sm font-medium rounded-md ${currentView === 'day' ? 'bg-white shadow text-violet-600' : 'text-gray-700'}`}>
                    Day
                  </button>
                  <button onClick={() => setCurrentView('week')} className={`px-3 py-1.5 text-sm font-medium rounded-md ${currentView === 'week' ? 'bg-white shadow text-violet-600' : 'text-gray-700'}`}>
                    Week
                  </button>
                  <button onClick={() => setCurrentView('month')} className={`px-3 py-1.5 text-sm font-medium rounded-md ${currentView === 'month' ? 'bg-white shadow text-violet-600' : 'text-gray-700'}`}>
                    Month
                  </button>
                </div>
              </div>
            </div>
            {/* Week View Calendar */}
            {currentView === 'week' && <div className="overflow-x-auto">
                <div className="min-w-[800px]">
                  {/* Day Headers */}
                  <div className="grid grid-cols-8 border-b border-gray-200">
                    <div className="p-2 text-xs font-medium text-gray-500 text-center border-r border-gray-200 sticky left-0 bg-white z-10">
                      Time
                    </div>
                    {generateWeekDays().map((day, index) => <div key={index} className={`p-2 text-center ${isToday(day) ? 'bg-violet-50' : ''}`}>
                        <div className="text-xs font-medium text-gray-500">
                          {day.toLocaleDateString(undefined, {
                      weekday: 'short'
                    })}
                        </div>
                        <div className={`text-sm font-semibold ${isToday(day) ? 'text-violet-600' : 'text-gray-900'}`}>
                          {day.getDate()}
                        </div>
                      </div>)}
                  </div>
                  {/* Time Slots */}
                  {generateTimeSlots().map((slot, slotIndex) => <div key={slotIndex} className="grid grid-cols-8 border-b border-gray-200">
                      <div className="p-2 text-xs font-medium text-gray-500 border-r border-gray-200 sticky left-0 bg-white z-10 flex items-center justify-center">
                        {slot.time}
                      </div>
                      {generateWeekDays().map((day, dayIndex) => {
                  const appointments = getAppointmentsForTimeSlot(day, slot.hour, slot.minute);
                  const externalEvents = getExternalEventsForTimeSlot(day, slot.hour, slot.minute);
                  return <div key={dayIndex} className={`p-1 min-h-[60px] border-r border-gray-100 relative ${isToday(day) ? 'bg-violet-50/50' : ''}`} onClick={() => handleNewAppointment(day, slot.hour, slot.minute)}>
                            {appointments.map((appointment, appointmentIndex) => <div key={appointmentIndex} className={`${appointment.color} text-white rounded-md p-2 mb-1 cursor-pointer hover:opacity-90 transition-opacity`}>
                                  <div className="text-xs font-medium truncate">
                                    {appointment.clientName}
                                  </div>
                                  <div className="text-xs opacity-90 truncate">
                                    {appointment.type}
                                  </div>
                                </div>)}
                            {externalEvents.map((event, eventIndex) => <div key={eventIndex} className="bg-gray-200 bg-opacity-80 border border-gray-300 text-gray-700 rounded-md p-2 mb-1 cursor-default" style={{
                      backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(0,0,0,0.05) 5px, rgba(0,0,0,0.05) 10px)'
                    }}>
                                <div className="text-xs font-medium truncate">
                                  {event.title}
                                </div>
                                <div className="text-xs opacity-70 truncate">
                                  {event.source}
                                </div>
                              </div>)}
                          </div>;
                })}
                    </div>)}
                </div>
              </div>}
          </div>
        </main>
      </div>
      {/* New Appointment Modal */}
      {showNewAppointmentModal && <div className="fixed inset-0 z-30 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={() => setShowNewAppointmentModal(false)}></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <h3 className="text-xl leading-6 font-semibold text-gray-900 mb-6">
                      New Appointment
                    </h3>
                    <div className="space-y-6">
                      {/* Session Type Selection */}
                      <div className="bg-gray-50 rounded-lg p-4">
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Session Type
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                          <div className={`relative rounded-lg border p-4 cursor-pointer transition-colors shadow-sm ${sessionType === 'in-person' ? 'border-violet-600 bg-violet-50' : 'border-gray-200 hover:border-violet-200'}`} onClick={() => setSessionType('in-person')}>
                            <div className="flex items-center">
                              <input type="radio" name="session-type" checked={sessionType === 'in-person'} onChange={() => setSessionType('in-person')} className="h-4 w-4 text-violet-600 border-gray-300 focus:ring-violet-500" />
                              <label className="ml-3 flex flex-col cursor-pointer">
                                <span className="block text-sm font-medium text-gray-900">
                                  In-person
                                </span>
                                <span className="block text-xs text-gray-500">
                                  Office visit
                                </span>
                              </label>
                            </div>
                          </div>
                          <div className={`relative rounded-lg border p-4 cursor-pointer transition-colors shadow-sm ${sessionType === 'telesession' ? 'border-violet-600 bg-violet-50' : 'border-gray-200 hover:border-violet-200'}`} onClick={() => setSessionType('telesession')}>
                            <div className="flex items-center">
                              <input type="radio" name="session-type" checked={sessionType === 'telesession'} onChange={() => setSessionType('telesession')} className="h-4 w-4 text-violet-600 border-gray-300 focus:ring-violet-500" />
                              <label className="ml-3 flex flex-col cursor-pointer">
                                <span className="block text-sm font-medium text-gray-900">
                                  Telesession
                                </span>
                                <span className="block text-xs text-gray-500">
                                  Video call
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Client Selection */}
                      <div>
                        <label htmlFor="client" className="block text-sm font-medium text-gray-700 mb-1">
                          Client <span className="text-red-500">*</span>
                        </label>
                        <select id="client" name="client" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm rounded-md">
                          <option value="">Select a client</option>
                          {clients.map(client => <option key={client.id} value={client.id}>
                              {client.name}
                            </option>)}
                        </select>
                      </div>
                      {/* Appointment Type */}
                      <div>
                        <label htmlFor="appointmentType" className="block text-sm font-medium text-gray-700 mb-1">
                          Appointment Type{' '}
                          <span className="text-red-500">*</span>
                        </label>
                        <select id="appointmentType" name="appointmentType" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm rounded-md">
                          <option value="">Select appointment type</option>
                          {appointmentTypes.map(type => <option key={type.id} value={type.id}>
                              {type.name} ({type.duration} min)
                            </option>)}
                        </select>
                      </div>
                      {/* Date and Time */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                            Date <span className="text-red-500">*</span>
                          </label>
                          <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <CalendarIcon className="h-5 w-5 text-gray-400" />
                            </div>
                            <input type="date" name="date" id="date" className="focus:ring-violet-500 focus:border-violet-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" defaultValue={currentDate.toISOString().split('T')[0]} />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                            Time <span className="text-red-500">*</span>
                          </label>
                          <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Clock className="h-5 w-5 text-gray-400" />
                            </div>
                            <input type="time" name="time" id="time" className="focus:ring-violet-500 focus:border-violet-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" defaultValue="09:00" />
                          </div>
                        </div>
                      </div>
                      {/* Recurring Appointment Toggle */}
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <input id="isRecurring" name="isRecurring" type="checkbox" className="h-4 w-4 text-violet-600 focus:ring-violet-500 border-gray-300 rounded" checked={isRecurring} onChange={() => setIsRecurring(!isRecurring)} />
                            <label htmlFor="isRecurring" className="ml-2 block text-sm font-medium text-gray-700">
                              Recurring Appointment
                            </label>
                          </div>
                        </div>
                        {/* Recurring Options */}
                        {isRecurring && <div className="mt-4 space-y-4">
                            <div>
                              <label htmlFor="recurrenceType" className="block text-sm font-medium text-gray-700">
                                Repeats
                              </label>
                              <select id="recurrenceType" name="recurrenceType" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm rounded-md">
                                <option value="daily">Daily</option>
                                <option value="weekly">Weekly</option>
                                <option value="monthly">Monthly</option>
                              </select>
                            </div>
                            <div>
                              <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                                End Date
                              </label>
                              <input type="date" name="endDate" id="endDate" className="mt-1 focus:ring-violet-500 focus:border-violet-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                            </div>
                          </div>}
                      </div>
                      {/* Notes */}
                      <div>
                        <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                          Notes
                        </label>
                        <textarea id="notes" name="notes" rows={3} className="mt-1 focus:ring-violet-500 focus:border-violet-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Add any notes about this appointment"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-violet-600 text-base font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 sm:ml-3 sm:w-auto sm:text-sm">
                  Create Appointment
                </button>
                <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => setShowNewAppointmentModal(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>}
      {/* Chat Bubble Component */}
      <ChatBubble />
    </div>;
};