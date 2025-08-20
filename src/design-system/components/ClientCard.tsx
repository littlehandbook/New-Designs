import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MailIcon, PhoneIcon, CalendarIcon, ClockIcon, BellIcon, CheckIcon, AlertTriangleIcon, FlagIcon, ChevronLeftIcon, ChevronRightIcon, VideoIcon, HelpCircleIcon } from 'lucide-react';
export interface ClientAlert {
  type: 'journal' | 'form' | 'report' | 'risk';
  message: string;
}
export interface ClientSession {
  date: string;
  time: string;
  type: string;
  duration: string;
}
export interface ClientData {
  id: number;
  name: string;
  emoji?: string | null;
  emojiDate?: string;
  email: string;
  phone: string;
  dateAdded: string;
  status: 'active' | 'inactive' | 'suspended';
  riskScore: number;
  flagged?: boolean;
  alerts: ClientAlert[];
  nextSession: ClientSession | null;
}
interface ClientCardProps {
  /**
   * Client data to display in the card
   */
  client: ClientData;
  /**
   * Link for the "View Details" button
   * @default "/client-detail"
   */
  detailsLink?: string;
  /**
   * Additional classes to apply to the card
   */
  className?: string;
  /**
   * If true, shows the email in the contact information
   * @default true
   */
  showEmail?: boolean;
  /**
   * If true, shows the phone number in the contact information
   * @default true
   */
  showPhone?: boolean;
  /**
   * If true, shows the date added in the contact information
   * @default true
   */
  showDateAdded?: boolean;
  /**
   * If true, shows alerts in the alerts section
   * @default true
   */
  showAlerts?: boolean;
  /**
   * If true, shows the next session information
   * @default true
   */
  showNextSession?: boolean;
}
export const ClientCard: React.FC<ClientCardProps> = ({
  client,
  detailsLink = '/client-detail',
  className = '',
  showEmail = true,
  showPhone = true,
  showDateAdded = true,
  showAlerts = true,
  showNextSession = true
}) => {
  // State to track which slide is active
  const [activeSlide, setActiveSlide] = useState(0);
  // Function to get risk score color
  const getRiskScoreColor = (score: number) => {
    if (score <= 3) return 'bg-green-100 text-green-800';
    if (score <= 6) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };
  // Function to get status badge color
  const getStatusBadgeClasses = (status: string) => {
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
  const formatStatus = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };
  // Function to get alert icon
  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'journal':
        return <div className="mr-2 mt-0.5 flex-shrink-0">
            <BellIcon className="h-4 w-4 text-indigo-500" />
          </div>;
      case 'form':
        return <div className="mr-2 mt-0.5 flex-shrink-0">
            <BellIcon className="h-4 w-4 text-blue-500" />
          </div>;
      case 'report':
        return <div className="mr-2 mt-0.5 flex-shrink-0">
            <BellIcon className="h-4 w-4 text-orange-500" />
          </div>;
      case 'risk':
        return <div className="mr-2 mt-0.5 flex-shrink-0">
            <AlertTriangleIcon className="h-4 w-4 text-red-500" />
          </div>;
      default:
        return <div className="mr-2 mt-0.5 flex-shrink-0">
            <BellIcon className="h-4 w-4 text-gray-500" />
          </div>;
    }
  };
  // Function to navigate carousel
  const navigateSlide = (direction: number) => {
    const newSlide = (activeSlide + direction + 3) % 3; // Ensure we wrap around properly
    setActiveSlide(newSlide);
  };
  return <div className={`bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden hover:shadow-lg transition-all hover:border-indigo-200 transform hover:-translate-y-1 ${className}`}>
      <div className="p-6">
        {/* Client Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            {client.emoji ? <div className="relative group">
                <span className="text-xl mr-2" role="img" aria-label="Client mood emoji">
                  {client.emoji}
                </span>
                {client.emojiDate && <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                    Client-reported mood ({client.emojiDate})
                  </div>}
              </div> : <div className="h-6 w-6 mr-2 flex items-center justify-center text-gray-400">
                <div className="relative group">
                  <HelpCircleIcon className="h-5 w-5" />
                  <div className="absolute bottom-full left-0 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                    No mood reported
                  </div>
                </div>
              </div>}
            <h2 className="text-lg font-semibold text-gray-900">
              {client.name}
            </h2>
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
            <button onClick={() => navigateSlide(-1)} className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600" aria-label="Previous slide">
              <ChevronLeftIcon className="h-4 w-4" />
            </button>
          </div>
          <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 z-10">
            <button onClick={() => navigateSlide(1)} className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600" aria-label="Next slide">
              <ChevronRightIcon className="h-4 w-4" />
            </button>
          </div>
          {/* Carousel Content */}
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-300 ease-in-out" style={{
            transform: `translateX(-${activeSlide * 100}%)`
          }}>
              {/* Slide 1: Contact Information */}
              <div className="w-full flex-shrink-0">
                <div className="space-y-3">
                  {showEmail && <div className="flex items-center text-sm">
                      <MailIcon className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 truncate">
                        {client.email}
                      </span>
                    </div>}
                  {showPhone && <div className="flex items-center text-sm">
                      <PhoneIcon className="h-4 w-4 text-gray-400 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{client.phone}</span>
                    </div>}
                  {showDateAdded && <div className="flex items-center text-sm">
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
                  {showAlerts && client.alerts && client.alerts.length > 0 ? client.alerts.map((alert, index) => <div key={index} className="flex items-start text-sm">
                        {getAlertIcon(alert.type)}
                        <span className="text-gray-600">{alert.message}</span>
                      </div>) : <div className="flex items-center text-sm">
                      <CheckIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">No pending alerts</span>
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
                  {showNextSession && client.nextSession ? <>
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
            {[0, 1, 2].map(index => <button key={index} onClick={() => setActiveSlide(index)} className={`h-1.5 rounded-full transition-all ${activeSlide === index ? 'w-4 bg-indigo-500' : 'w-2 bg-gray-300'}`} aria-label={`Go to slide ${index + 1}`} />)}
          </div>
        </div>
        {/* Action Button */}
        <div className="mt-6">
          <Link to={detailsLink} className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            View Details
          </Link>
        </div>
      </div>
    </div>;
};