import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon, PlusIcon, ChevronLeftIcon, ChevronRightIcon, CalendarIcon, ClockIcon, UserIcon, SettingsIcon } from 'lucide-react';
import { CalendarSettings } from '../components/calendar/CalendarSettings';
export const Calendar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentView, setCurrentView] = useState('week');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showNewAppointmentModal, setShowNewAppointmentModal] = useState(false);
  const [isRecurring, setIsRecurring] = useState(false);
  const [sessionType, setSessionType] = useState('in-person');
  const [calendarSettingsOpen, setCalendarSettingsOpen] = useState(false);
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
  const practitioners = [{
    id: 1,
    firstName: 'Jane',
    lastName: 'Smith',
    role: 'Psychologist'
  }, {
    id: 2,
    firstName: 'Michael',
    lastName: 'Brown',
    role: 'Therapist'
  }, {
    id: 3,
    firstName: 'Sarah',
    lastName: 'Wilson',
    role: 'Counselor'
  }, {
    id: 4,
    firstName: 'David',
    lastName: 'Thompson',
    role: 'Psychiatrist'
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
    color: 'bg-purple-500'
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
    color: 'bg-purple-500',
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
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
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
    // Here you would typically set state for the selected time slot
    // For now, just show the modal
    setShowNewAppointmentModal(true);
  };
  return <div className="flex h-screen bg-gray-50">
      {/* Mobile Sidebar Toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-20">
        <button onClick={toggleSidebar} className="p-2 rounded-md bg-white shadow-md border border-gray-200 text-gray-500 focus:outline-none">
          {sidebarOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transform transition-transform duration-200 ease-in-out fixed lg:static inset-y-0 left-0 z-10 h-screen bg-gray-100 border-r border-gray-200 w-64 flex flex-col`}>
        <div className="p-4 border-b border-gray-200">
          <div className="text-lg font-semibold text-indigo-700">
            Practice Portal
          </div>
        </div>
        <nav className="flex-1 pt-4 overflow-y-auto">
          <ul>
            <li>
              <Link to="/practice/dashboard" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:text-indigo-700 hover:bg-gray-50" onClick={() => setSidebarOpen(false)}>
                <svg className="mr-3 h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/practice/clients" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:text-indigo-700 hover:bg-gray-50" onClick={() => setSidebarOpen(false)}>
                <svg className="mr-3 h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Clients
              </Link>
            </li>
            <li>
              <Link to="/practice/calendar" className="flex items-center px-4 py-3 text-sm font-medium text-indigo-700 bg-indigo-50" onClick={() => setSidebarOpen(false)}>
                <svg className="mr-3 h-5 w-5 text-indigo-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1046 21 21 20.1046 21 19V7C21 5.89543 20.1046 5 19 5H5C3.89543 5 3 5.89543 3 7V19C3 20.1046 3.89543 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Calendar
              </Link>
            </li>
            <li>
              <Link to="/practice/telesession" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:text-indigo-700 hover:bg-gray-50" onClick={() => setSidebarOpen(false)}>
                <svg className="mr-3 h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 10L19.5528 7.72361C20.2177 7.39116 21 7.87465 21 8.61803V15.382C21 16.1253 20.2177 16.6088 19.5528 16.2764L15 14M5 18H13C14.1046 18 15 17.1046 15 16V8C15 6.89543 14.1046 6 13 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Telesession
              </Link>
            </li>
            <li>
              <Link to="/practice/settings" className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:text-indigo-700 hover:bg-gray-50" onClick={() => setSidebarOpen(false)}>
                <svg className="mr-3 h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Settings
              </Link>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-indigo-700 flex items-center justify-center text-white font-medium">
              U
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700">
                Dr. Jane Smith
              </p>
              <p className="text-xs text-gray-500">View profile</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-0 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-4 sm:p-6 lg:p-8">
          {/* Calendar Header */}
          <div className="mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 lg:ml-0 ml-12 mb-4 sm:mb-0">
                <CalendarIcon className="h-6 w-6 inline-block mr-2 text-indigo-600" />
                Calendar
              </h1>
              <div className="flex items-center space-x-2">
                <button onClick={() => setCalendarSettingsOpen(true)} className="inline-flex items-center p-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50" aria-label="Calendar Settings">
                  <SettingsIcon className="h-5 w-5" />
                </button>
                <button onClick={() => setShowNewAppointmentModal(true)} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <PlusIcon className="h-4 w-4 mr-1" />
                  New Appointment
                </button>
              </div>
            </div>
          </div>

          {/* Calendar Controls */}
          <div className="bg-white rounded-lg shadow-md mb-6">
            <div className="p-4 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center mb-4 sm:mb-0">
                <button onClick={() => navigateDate(-1)} className="p-1 rounded-full hover:bg-gray-100">
                  <ChevronLeftIcon className="h-5 w-5 text-gray-500" />
                </button>
                <span className="text-lg font-medium text-gray-900 mx-4">
                  {formatDateRange()}
                </span>
                <button onClick={() => navigateDate(1)} className="p-1 rounded-full hover:bg-gray-100">
                  <ChevronRightIcon className="h-5 w-5 text-gray-500" />
                </button>
                <button onClick={() => setCurrentDate(new Date())} className="ml-4 px-3 py-1 text-sm text-indigo-600 hover:bg-indigo-50 rounded-md">
                  Today
                </button>
              </div>
              <div className="flex items-center">
                <div className="bg-gray-100 rounded-md p-1 flex">
                  <button onClick={() => setCurrentView('day')} className={`px-3 py-1.5 text-sm font-medium rounded-md ${currentView === 'day' ? 'bg-white shadow text-indigo-600' : 'text-gray-700'}`}>
                    Day
                  </button>
                  <button onClick={() => setCurrentView('week')} className={`px-3 py-1.5 text-sm font-medium rounded-md ${currentView === 'week' ? 'bg-white shadow text-indigo-600' : 'text-gray-700'}`}>
                    Week
                  </button>
                  <button onClick={() => setCurrentView('month')} className={`px-3 py-1.5 text-sm font-medium rounded-md ${currentView === 'month' ? 'bg-white shadow text-indigo-600' : 'text-gray-700'}`}>
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
                    {generateWeekDays().map((day, index) => <div key={index} className={`p-2 text-center ${isToday(day) ? 'bg-indigo-50' : ''}`}>
                        <div className="text-xs font-medium text-gray-500">
                          {day.toLocaleDateString(undefined, {
                      weekday: 'short'
                    })}
                        </div>
                        <div className={`text-sm font-semibold ${isToday(day) ? 'text-indigo-600' : 'text-gray-900'}`}>
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
                  return <div key={dayIndex} className={`p-1 min-h-[60px] border-r border-gray-100 relative ${isToday(day) ? 'bg-indigo-50/50' : ''}`} onClick={() => handleNewAppointment(day, slot.hour, slot.minute)}>
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
        </div>
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
                          <div className={`relative rounded-lg border p-4 cursor-pointer transition-colors shadow-sm ${sessionType === 'in-person' ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200 hover:border-indigo-200'}`} onClick={() => setSessionType('in-person')}>
                            <div className="flex items-center">
                              <input type="radio" name="session-type" checked={sessionType === 'in-person'} onChange={() => setSessionType('in-person')} className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
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
                          <div className={`relative rounded-lg border p-4 cursor-pointer transition-colors shadow-sm ${sessionType === 'telesession' ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200 hover:border-indigo-200'}`} onClick={() => setSessionType('telesession')}>
                            <div className="flex items-center">
                              <input type="radio" name="session-type" checked={sessionType === 'telesession'} onChange={() => setSessionType('telesession')} className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500" />
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

                      {/* Practitioner Selection */}
                      <div>
                        <label htmlFor="practitioner" className="block text-sm font-medium text-gray-700 mb-1">
                          Practitioner <span className="text-red-500">*</span>
                        </label>
                        <select id="practitioner" name="practitioner" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                          <option value="">Select a practitioner</option>
                          {practitioners.map(practitioner => <option key={practitioner.id} value={practitioner.id}>
                              {practitioner.firstName} {practitioner.lastName} -{' '}
                              {practitioner.role}
                            </option>)}
                        </select>
                      </div>

                      {/* Client Selection */}
                      <div>
                        <label htmlFor="client" className="block text-sm font-medium text-gray-700 mb-1">
                          Client <span className="text-red-500">*</span>
                        </label>
                        <select id="client" name="client" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
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
                        <select id="appointmentType" name="appointmentType" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
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
                            <input type="date" name="date" id="date" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" defaultValue={currentDate.toISOString().split('T')[0]} />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                            Time <span className="text-red-500">*</span>
                          </label>
                          <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <ClockIcon className="h-5 w-5 text-gray-400" />
                            </div>
                            <input type="time" name="time" id="time" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" defaultValue="09:00" />
                          </div>
                        </div>
                      </div>

                      {/* Recurring Appointment Toggle */}
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <input id="isRecurring" name="isRecurring" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" checked={isRecurring} onChange={() => setIsRecurring(!isRecurring)} />
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
                              <select id="recurrenceType" name="recurrenceType" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                                <option value="daily">Daily</option>
                                <option value="weekly">Weekly</option>
                                <option value="monthly">Monthly</option>
                              </select>
                            </div>
                            <div>
                              <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
                                End Date
                              </label>
                              <input type="date" name="endDate" id="endDate" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                            </div>
                          </div>}
                      </div>

                      {/* Notes */}
                      <div>
                        <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                          Notes
                        </label>
                        <textarea id="notes" name="notes" rows={3} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Add any notes about this appointment"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm">
                  Create Appointment
                </button>
                <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => setShowNewAppointmentModal(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>}

      {/* Calendar Settings Panel */}
      <CalendarSettings isOpen={calendarSettingsOpen} onClose={() => setCalendarSettingsOpen(false)} />
    </div>;
};