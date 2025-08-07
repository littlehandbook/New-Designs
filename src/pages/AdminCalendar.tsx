import React, { useEffect, useState, useRef } from 'react';
import { PlusIcon, ChevronLeftIcon, ChevronRightIcon, CalendarIcon, ClockIcon, UserIcon, CheckIcon, FilterIcon } from 'lucide-react';
import { CollapsibleSidebar } from '../components/layout/CollapsibleSidebar';
import { SettingsModal } from '../components/layout/SettingsModal';
// Sample practitioners data
const practitioners = [{
  id: 1,
  firstName: 'Jane',
  lastName: 'Smith',
  role: 'Psychologist',
  color: 'bg-purple-500'
}, {
  id: 2,
  firstName: 'Michael',
  lastName: 'Brown',
  role: 'Therapist',
  color: 'bg-blue-500'
}, {
  id: 3,
  firstName: 'Sarah',
  lastName: 'Wilson',
  role: 'Counselor',
  color: 'bg-green-500'
}, {
  id: 4,
  firstName: 'David',
  lastName: 'Thompson',
  role: 'Psychiatrist',
  color: 'bg-orange-500'
}, {
  id: 5,
  firstName: 'Emily',
  lastName: 'Davis',
  role: 'Psychologist',
  color: 'bg-pink-500'
}];
// Generate sample appointments for each practitioner
const generateAppointmentsForPractitioner = (practitionerId, baseDate, practitionerColor) => {
  const appointments = [];
  const clientNames = ['Alex Johnson', 'Taylor Smith', 'Jamie Williams', 'Casey Miller', 'Jordan Lee'];
  const appointmentTypes = ['Initial Consultation', 'Follow-up', 'Therapy Session', 'Assessment'];
  // Generate 3-5 appointments for each practitioner
  const numAppointments = 3 + Math.floor(Math.random() * 3);
  for (let i = 0; i < numAppointments; i++) {
    // Random day offset (-1, 0, 1, 2) from the current date
    const dayOffset = Math.floor(Math.random() * 4) - 1;
    // Random hour between 9 AM and 4 PM
    const hour = 9 + Math.floor(Math.random() * 8);
    // Random minute (0 or 30)
    const minute = Math.random() > 0.5 ? 0 : 30;
    // Random duration (30, 45, or 60 minutes)
    const durations = [30, 45, 60];
    const duration = durations[Math.floor(Math.random() * durations.length)];
    const start = new Date(baseDate);
    start.setDate(start.getDate() + dayOffset);
    start.setHours(hour, minute, 0, 0);
    const end = new Date(start);
    end.setMinutes(end.getMinutes() + duration);
    appointments.push({
      id: `p${practitionerId}-${i}`,
      practitionerId,
      clientName: clientNames[Math.floor(Math.random() * clientNames.length)],
      type: appointmentTypes[Math.floor(Math.random() * appointmentTypes.length)],
      start,
      end,
      duration,
      color: practitionerColor,
      status: Math.random() > 0.2 ? 'confirmed' : 'pending'
    });
  }
  return appointments;
};
export const AdminCalendar = () => {
  const [currentView, setCurrentView] = useState('week');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedPractitioners, setSelectedPractitioners] = useState([practitioners[0].id]);
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [showNewAppointmentModal, setShowNewAppointmentModal] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const scrollContainerRef = useRef(null);
  // Generate appointments when the component mounts or when the date changes
  useEffect(() => {
    let allAppointments = [];
    practitioners.forEach(practitioner => {
      const practitionerAppointments = generateAppointmentsForPractitioner(practitioner.id, currentDate, practitioner.color);
      allAppointments = [...allAppointments, ...practitionerAppointments];
    });
    setAppointments(allAppointments);
  }, [currentDate]);
  // Check if scroll buttons should be shown
  useEffect(() => {
    const checkScroll = () => {
      if (scrollContainerRef.current) {
        const {
          scrollWidth,
          clientWidth
        } = scrollContainerRef.current;
        setShowScrollButtons(scrollWidth > clientWidth);
      }
    };
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);
  // Scroll handlers
  const scroll = direction => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollLeft += direction * scrollAmount;
    }
  };
  // Toggle practitioner selection
  const togglePractitioner = practitionerId => {
    setSelectedPractitioners(prev => {
      if (prev.includes(practitionerId)) {
        // Remove practitioner if already selected
        return prev.filter(id => id !== practitionerId);
      } else {
        // Add practitioner if not selected
        return [...prev, practitionerId];
      }
    });
  };
  // Date navigation
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
    if (currentView === 'week') {
      const weekStart = new Date(currentDate);
      weekStart.setDate(currentDate.getDate() - currentDate.getDay());
      const weekEnd = new Date(weekStart);
      weekEnd.setDate(weekStart.getDate() + 6);
      if (weekStart.getMonth() === weekEnd.getMonth()) {
        return `${weekStart.toLocaleDateString(undefined, {
          month: 'long'
        })} ${weekStart.getDate()} - ${weekEnd.getDate()}, ${weekStart.getFullYear()}`;
      } else {
        return `${weekStart.toLocaleDateString(undefined, {
          month: 'long'
        })} ${weekStart.getDate()} - ${weekEnd.toLocaleDateString(undefined, {
          month: 'long'
        })} ${weekEnd.getDate()}, ${weekStart.getFullYear()}`;
      }
    }
    return currentDate.toLocaleDateString(undefined, options);
  };
  // Generate time slots for the calendar grid
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
  // Generate days for the week view
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
  // Get appointments for a specific time slot and day
  const getAppointmentsForTimeSlot = (day, hour, minute) => {
    return appointments.filter(appointment => {
      const appointmentDate = appointment.start;
      return selectedPractitioners.includes(appointment.practitionerId) && appointmentDate.getDate() === day.getDate() && appointmentDate.getMonth() === day.getMonth() && appointmentDate.getFullYear() === day.getFullYear() && appointmentDate.getHours() === hour && appointmentDate.getMinutes() === minute;
    });
  };
  // Get practitioner name by ID
  const getPractitionerName = id => {
    const practitioner = practitioners.find(p => p.id === id);
    return practitioner ? `${practitioner.firstName} ${practitioner.lastName}` : '';
  };
  // Get practitioner's first name + last initial
  const getPractitionerShortName = id => {
    const practitioner = practitioners.find(p => p.id === id);
    return practitioner ? `${practitioner.firstName} ${practitioner.lastName.charAt(0)}.` : '';
  };
  // Handle new appointment
  const handleNewAppointment = (day, hour, minute) => {
    // Here you would typically set state for the selected time slot
    // For now, just show the modal
    setShowNewAppointmentModal(true);
  };
  return <div className="flex h-screen bg-gray-50">
      <CollapsibleSidebar activeItem="admin-calendar" onSettingsClick={() => setSettingsOpen(true)} />
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-4 sm:p-6 lg:p-8">
          {/* Calendar Header */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                <CalendarIcon className="h-6 w-6 text-indigo-600 mr-2" />
                Calendar Admin View
              </h1>
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700" onClick={() => setShowNewAppointmentModal(true)}>
                <PlusIcon className="h-4 w-4 mr-1" />
                New Appointment
              </button>
            </div>
            {/* Selected Practitioners Summary */}
            <div className="mb-4 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center text-sm text-gray-600 mb-2">
                <FilterIcon className="h-4 w-4 mr-2 text-indigo-500" />
                <span>Viewing calendars for:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedPractitioners.length > 0 ? practitioners.filter(p => selectedPractitioners.includes(p.id)).map(practitioner => <span key={practitioner.id} className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${practitioner.color.replace('bg-', 'bg-opacity-20 text-')}`}>
                        {practitioner.firstName} {practitioner.lastName}
                      </span>) : <span className="text-sm text-gray-500 italic">
                    No practitioners selected
                  </span>}
              </div>
            </div>
            {/* Practitioner Selection */}
            <div className="relative">
              {showScrollButtons && <button onClick={() => scroll(-1)} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-white shadow-md border border-gray-200 text-gray-500 hover:bg-gray-50">
                  <ChevronLeftIcon className="h-5 w-5" />
                </button>}
              <div ref={scrollContainerRef} className="overflow-x-auto scrollbar-hide relative flex items-center space-x-2 px-8" style={{
              scrollBehavior: 'smooth'
            }}>
                {practitioners.map(practitioner => <button key={practitioner.id} onClick={() => togglePractitioner(practitioner.id)} className={`flex items-center px-4 py-2 rounded-full whitespace-nowrap transition-colors ${selectedPractitioners.includes(practitioner.id) ? `${practitioner.color} text-white` : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'}`}>
                    {selectedPractitioners.includes(practitioner.id) ? <CheckIcon className="h-4 w-4 mr-2" /> : <UserIcon className="h-4 w-4 mr-2" />}
                    {`${practitioner.firstName} ${practitioner.lastName.charAt(0)}.`}
                  </button>)}
              </div>
              {showScrollButtons && <button onClick={() => scroll(1)} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-white shadow-md border border-gray-200 text-gray-500 hover:bg-gray-50">
                  <ChevronRightIcon className="h-5 w-5" />
                </button>}
            </div>
          </div>
          {/* Calendar Controls */}
          <div className="bg-white rounded-lg shadow mb-6">
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
                  const dayAppointments = getAppointmentsForTimeSlot(day, slot.hour, slot.minute);
                  return <div key={dayIndex} className={`p-1 min-h-[60px] border-r border-gray-100 relative ${isToday(day) ? 'bg-indigo-50/50' : ''}`} onClick={() => handleNewAppointment(day, slot.hour, slot.minute)}>
                            {dayAppointments.map(appointment => {
                      const practitioner = practitioners.find(p => p.id === appointment.practitionerId);
                      return <div key={appointment.id} className={`${appointment.color} text-white rounded-md p-2 mb-1 cursor-pointer hover:opacity-90 transition-opacity`}>
                                  <div className="text-xs font-medium truncate">
                                    {appointment.clientName}
                                  </div>
                                  <div className="text-xs opacity-90 truncate">
                                    {appointment.type}
                                  </div>
                                  <div className="text-xs opacity-80 truncate mt-0.5">
                                    {getPractitionerShortName(appointment.practitionerId)}
                                  </div>
                                </div>;
                    })}
                          </div>;
                })}
                    </div>)}
                </div>
              </div>}
            {/* Day View */}
            {currentView === 'day' && <div className="p-4 text-center text-gray-500">
                <p>Day view coming soon</p>
              </div>}
            {/* Month View */}
            {currentView === 'month' && <div className="p-4 text-center text-gray-500">
                <p>Month view coming soon</p>
              </div>}
            {/* Empty state if no practitioners selected */}
            {selectedPractitioners.length === 0 && <div className="p-8 text-center">
                <div className="inline-flex items-center justify-center p-4 bg-gray-100 rounded-full mb-4">
                  <UserIcon className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No practitioners selected
                </h3>
                <p className="text-gray-500 max-w-md mx-auto mb-4">
                  Please select at least one practitioner to view their calendar
                </p>
              </div>}
          </div>
        </div>
      </div>
      {/* New Appointment Modal - Simplified version */}
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
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="practitioner" className="block text-sm font-medium text-gray-700 mb-1">
                          Practitioner <span className="text-red-500">*</span>
                        </label>
                        <select id="practitioner" name="practitioner" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                          <option value="">Select a practitioner</option>
                          {practitioners.map(practitioner => <option key={practitioner.id} value={practitioner.id}>
                              {practitioner.firstName} {practitioner.lastName}
                            </option>)}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="client" className="block text-sm font-medium text-gray-700 mb-1">
                          Client <span className="text-red-500">*</span>
                        </label>
                        <select id="client" name="client" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                          <option value="">Select a client</option>
                          <option value="1">Alex Johnson</option>
                          <option value="2">Taylor Smith</option>
                          <option value="3">Jamie Williams</option>
                        </select>
                      </div>
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
      <SettingsModal isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </div>;
};