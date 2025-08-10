import React, { useEffect, useState, useRef } from 'react';
import { VideoIcon, MonitorIcon, ClockIcon, UserIcon, PlusIcon, SettingsIcon, XIcon, MicIcon, MicOffIcon, PhoneOffIcon, ShareIcon, MaximizeIcon, MinimizeIcon, MessageSquareIcon, DollarSignIcon, PlayIcon, PauseIcon, ChevronRightIcon, ChevronLeftIcon, MoreHorizontalIcon, WifiIcon, CameraIcon, CameraOffIcon, MonitorOffIcon, HandIcon, UsersIcon, FileTextIcon, LayoutIcon, PanelLeftIcon, PanelRightIcon, UserPlusIcon, ZapIcon, SlidersIcon, ChevronUpIcon, CheckIcon } from 'lucide-react';
import { CollapsibleSidebar } from '../components/layout/CollapsibleSidebar';
import { SettingsModal } from '../components/layout/SettingsModal';
import { ChatBubble } from '../components/ChatBubble';
import { TelesessionModal } from '../components/telesession/TelesessionModal';
import { TelesessionSettings } from '../components/telesession/TelesessionSettings';
import { TelesessionChat } from '../components/telesession/TelesessionChat';
import { TelesessionVideoControls } from '../components/telesession/TelesessionVideoControls';
import { TelesessionAudioControls } from '../components/telesession/TelesessionAudioControls';
import { TelesessionParticipants } from '../components/telesession/TelesessionParticipants';
import { TelesessionNotes } from '../components/telesession/TelesessionNotes';
import { TelesessionScreenShare } from '../components/telesession/TelesessionScreenShare';
export const Telesession = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [telesessionModalOpen, setTelesessionModalOpen] = useState(false);
  const [telesessionSettingsOpen, setTelesessionSettingsOpen] = useState(false);
  const [activeSession, setActiveSession] = useState(false);
  const [activeClient, setActiveClient] = useState<{
    name: string;
    time: string;
  } | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showParticipants, setShowParticipants] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [billingActive, setBillingActive] = useState(false);
  const [billingTime, setBillingTime] = useState(0);
  const [videoSettingsOpen, setVideoSettingsOpen] = useState(false);
  const [audioSettingsOpen, setAudioSettingsOpen] = useState(false);
  const [showScreenShareModal, setShowScreenShareModal] = useState(false);
  const [sessionLayout, setSessionLayout] = useState<'default' | 'focused' | 'grid'>('default');
  const [showQuickActions, setShowQuickActions] = useState(false);
  const billingIntervalRef = useRef<number | null>(null);
  const controlsTimeoutRef = useRef<number | null>(null);
  // Effect for handling billing timer
  useEffect(() => {
    if (billingActive) {
      billingIntervalRef.current = window.setInterval(() => {
        setBillingTime(prev => prev + 1);
      }, 1000);
    } else if (billingIntervalRef.current) {
      clearInterval(billingIntervalRef.current);
    }
    return () => {
      if (billingIntervalRef.current) {
        clearInterval(billingIntervalRef.current);
      }
    };
  }, [billingActive]);
  // Effect for auto-hiding controls in maximized view
  useEffect(() => {
    if (isMaximized && showControls) {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
      controlsTimeoutRef.current = window.setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, [isMaximized, showControls]);
  const startSession = (clientName: string, sessionTime: string) => {
    setActiveSession(true);
    setActiveClient({
      name: clientName,
      time: sessionTime
    });
  };
  const endSession = () => {
    setActiveSession(false);
    setActiveClient(null);
    setIsMuted(false);
    setIsVideoOff(false);
    setIsScreenSharing(false);
    setIsMaximized(false);
    setShowChat(false);
    setShowParticipants(false);
    setShowNotes(false);
    setBillingActive(false);
    setBillingTime(0);
  };
  const toggleBilling = () => {
    setBillingActive(!billingActive);
  };
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(seconds % 3600 / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  const handleMouseMove = () => {
    if (isMaximized) {
      setShowControls(true);
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
      controlsTimeoutRef.current = window.setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
  };
  const toggleScreenSharing = () => {
    if (isScreenSharing) {
      setIsScreenSharing(false);
    } else {
      setShowScreenShareModal(true);
    }
  };
  return <div className="flex h-screen bg-white overflow-hidden">
      {!isMaximized && <CollapsibleSidebar activeItem="telesession" onSettingsClick={() => setSettingsOpen(true)} />}
      {/* Main Content */}
      <div className={`${isMaximized ? 'w-full h-full' : 'flex-1'} overflow-auto bg-gray-50`}>
        {!isMaximized && <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            <div className="mb-6 sm:mb-8 flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Telesession
                </h1>
                <p className="text-gray-600">
                  Conduct secure video sessions with your clients
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button onClick={() => setTelesessionSettingsOpen(true)} className="inline-flex items-center p-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" aria-label="Telesession Settings">
                  <SettingsIcon className="h-5 w-5" />
                </button>
                <button onClick={() => setTelesessionModalOpen(true)} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <PlusIcon className="h-4 w-4 mr-1" />
                  New Telesession
                </button>
              </div>
            </div>
          </div>}
        {activeSession ?
      // Active Conference Session
      <div className={`${isMaximized ? 'h-full' : 'bg-white rounded-lg border border-gray-200 p-4 sm:p-6 mb-6 sm:mb-8 shadow-md mx-4 sm:mx-6 lg:mx-8'}`} onMouseMove={handleMouseMove}>
            {!isMaximized && <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <VideoIcon className="h-5 w-5 text-green-600 mr-2" />
                  <h2 className="text-lg font-medium text-green-600">
                    Active Session with {activeClient?.name}
                  </h2>
                </div>
                <div className="text-sm text-gray-500">
                  Started at {activeClient?.time}
                </div>
              </div>}
            <div className="flex h-full">
              {/* Main video area */}
              <div className={`relative ${(showChat || showParticipants || showNotes) && !isMaximized ? 'w-3/4' : 'w-full'} h-full`}>
                <div className={`relative ${isMaximized ? 'h-full' : 'aspect-video'} bg-gray-900 rounded-lg overflow-hidden`}>
                  {/* Layout options for different views */}
                  {sessionLayout === 'default' && <div className="w-full h-full flex items-center justify-center">
                      <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Client video" className="w-full h-full object-cover" />
                    </div>}
                  {sessionLayout === 'focused' && <div className="w-full h-full flex items-center justify-center bg-gray-950">
                      <div className="w-3/4 h-full flex items-center justify-center">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Client video" className="max-w-full max-h-full object-contain" />
                      </div>
                    </div>}
                  {sessionLayout === 'grid' && <div className="w-full h-full grid grid-cols-2 gap-2 p-2">
                      <div className="bg-gray-800 rounded-lg overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Client video" className="w-full h-full object-cover" />
                      </div>
                      <div className="bg-gray-800 rounded-lg overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Your video" className="w-full h-full object-cover" />
                      </div>
                    </div>}
                  {/* Self view */}
                  {sessionLayout !== 'grid' && <div className="absolute bottom-4 right-4 w-48 h-36 bg-gray-800 rounded-lg overflow-hidden border-2 border-white shadow-lg">
                      <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Your video" className={`w-full h-full object-cover ${isVideoOff ? 'hidden' : ''}`} />
                      {isVideoOff && <div className="w-full h-full flex items-center justify-center bg-gray-700">
                          <UserIcon className="h-10 w-10 text-gray-400" />
                        </div>}
                    </div>}
                  {/* Session info overlay */}
                  <div className="absolute top-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-md text-sm">
                    <div className="flex items-center">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      <span>00:34:12</span>
                    </div>
                  </div>
                  {/* Billing timer overlay */}
                  {billingActive && <div className="absolute top-4 left-32 bg-green-600 bg-opacity-90 text-white px-3 py-1 rounded-md text-sm">
                      <div className="flex items-center">
                        <DollarSignIcon className="h-4 w-4 mr-1" />
                        <span>{formatTime(billingTime)} - Billing Active</span>
                      </div>
                    </div>}
                  {/* Connection quality indicator */}
                  <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded-md text-xs flex items-center">
                    <WifiIcon className="h-3 w-3 mr-1 text-green-400" />
                    <span>Good connection</span>
                  </div>
                  {/* Quick actions floating button */}
                  {(showControls || !isMaximized) && <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                      <div className="relative">
                        <button onClick={() => setShowQuickActions(!showQuickActions)} className="p-3 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70">
                          <SlidersIcon className="h-5 w-5" />
                        </button>
                        {showQuickActions && <div className="absolute right-0 mt-2 bg-black bg-opacity-70 rounded-lg p-2 space-y-2 w-40">
                            <button onClick={() => setSessionLayout('default')} className={`w-full flex items-center justify-between px-3 py-2 text-sm text-white rounded-md ${sessionLayout === 'default' ? 'bg-indigo-600' : 'hover:bg-gray-700'}`}>
                              <span>Default view</span>
                              {sessionLayout === 'default' && <CheckIcon className="h-4 w-4" />}
                            </button>
                            <button onClick={() => setSessionLayout('focused')} className={`w-full flex items-center justify-between px-3 py-2 text-sm text-white rounded-md ${sessionLayout === 'focused' ? 'bg-indigo-600' : 'hover:bg-gray-700'}`}>
                              <span>Focused view</span>
                              {sessionLayout === 'focused' && <CheckIcon className="h-4 w-4" />}
                            </button>
                            <button onClick={() => setSessionLayout('grid')} className={`w-full flex items-center justify-between px-3 py-2 text-sm text-white rounded-md ${sessionLayout === 'grid' ? 'bg-indigo-600' : 'hover:bg-gray-700'}`}>
                              <span>Grid view</span>
                              {sessionLayout === 'grid' && <CheckIcon className="h-4 w-4" />}
                            </button>
                            <div className="border-t border-gray-600 my-1"></div>
                            <button onClick={() => setTelesessionSettingsOpen(true)} className="w-full flex items-center px-3 py-2 text-sm text-white rounded-md hover:bg-gray-700">
                              <SettingsIcon className="h-4 w-4 mr-2" />
                              <span>Settings</span>
                            </button>
                          </div>}
                      </div>
                    </div>}
                  {/* Controls overlay - shown only in maximized mode or when hovering */}
                  {(showControls || !isMaximized) && <div className={`absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 px-4 py-3 ${isMaximized ? 'transition-opacity duration-300' : ''}`}>
                      <div className="flex justify-center items-center space-x-4">
                        {/* Audio controls */}
                        <div className="relative">
                          <button onClick={() => setIsMuted(!isMuted)} className={`p-3 rounded-full ${isMuted ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-700'} hover:bg-opacity-90 transition-colors`}>
                            {isMuted ? <MicOffIcon className="h-6 w-6" /> : <MicIcon className="h-6 w-6" />}
                          </button>
                          <button onClick={() => setAudioSettingsOpen(!audioSettingsOpen)} className="absolute -top-1 -right-1 p-0.5 rounded-full bg-gray-800 text-white hover:bg-gray-700">
                            <ChevronUpIcon className="h-3 w-3" />
                          </button>
                          {audioSettingsOpen && <TelesessionAudioControls onClose={() => setAudioSettingsOpen(false)} />}
                        </div>
                        {/* Video controls */}
                        <div className="relative">
                          <button onClick={() => setIsVideoOff(!isVideoOff)} className={`p-3 rounded-full ${isVideoOff ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-700'} hover:bg-opacity-90 transition-colors`}>
                            {isVideoOff ? <CameraOffIcon className="h-6 w-6" /> : <CameraIcon className="h-6 w-6" />}
                          </button>
                          <button onClick={() => setVideoSettingsOpen(!videoSettingsOpen)} className="absolute -top-1 -right-1 p-0.5 rounded-full bg-gray-800 text-white hover:bg-gray-700">
                            <ChevronUpIcon className="h-3 w-3" />
                          </button>
                          {videoSettingsOpen && <TelesessionVideoControls onClose={() => setVideoSettingsOpen(false)} />}
                        </div>
                        {/* Screen sharing */}
                        <button onClick={toggleScreenSharing} className={`p-3 rounded-full ${isScreenSharing ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700'} hover:bg-opacity-90 transition-colors`}>
                          {isScreenSharing ? <MonitorOffIcon className="h-6 w-6" /> : <ShareIcon className="h-6 w-6" />}
                        </button>
                        {/* Participants */}
                        <button onClick={() => setShowParticipants(!showParticipants)} className={`p-3 rounded-full ${showParticipants ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'} hover:bg-opacity-90 transition-colors`}>
                          <UsersIcon className="h-6 w-6" />
                        </button>
                        {/* Chat toggle */}
                        <button onClick={() => setShowChat(!showChat)} className={`p-3 rounded-full ${showChat ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'} hover:bg-opacity-90 transition-colors`}>
                          <MessageSquareIcon className="h-6 w-6" />
                        </button>
                        {/* Notes toggle */}
                        <button onClick={() => setShowNotes(!showNotes)} className={`p-3 rounded-full ${showNotes ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'} hover:bg-opacity-90 transition-colors`}>
                          <FileTextIcon className="h-6 w-6" />
                        </button>
                        {/* Billing toggle */}
                        <button onClick={toggleBilling} className={`p-3 rounded-full ${billingActive ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700'} hover:bg-opacity-90 transition-colors`}>
                          {billingActive ? <PauseIcon className="h-6 w-6" /> : <DollarSignIcon className="h-6 w-6" />}
                        </button>
                        {/* Layout toggle */}
                        <button onClick={() => setSessionLayout(prev => prev === 'default' ? 'focused' : prev === 'focused' ? 'grid' : 'default')} className="p-3 rounded-full bg-gray-100 text-gray-700 hover:bg-opacity-90 transition-colors">
                          <LayoutIcon className="h-6 w-6" />
                        </button>
                        {/* Raise hand */}
                        <button className="p-3 rounded-full bg-gray-100 text-gray-700 hover:bg-opacity-90 transition-colors">
                          <HandIcon className="h-6 w-6" />
                        </button>
                        {/* Settings */}
                        <button onClick={() => setTelesessionSettingsOpen(true)} className="p-3 rounded-full bg-gray-100 text-gray-700 hover:bg-opacity-90 transition-colors">
                          <SettingsIcon className="h-6 w-6" />
                        </button>
                        {/* Maximize/Minimize */}
                        <button onClick={() => setIsMaximized(!isMaximized)} className="p-3 rounded-full bg-gray-100 text-gray-700 hover:bg-opacity-90 transition-colors">
                          {isMaximized ? <MinimizeIcon className="h-6 w-6" /> : <MaximizeIcon className="h-6 w-6" />}
                        </button>
                        {/* More options */}
                        <button className="p-3 rounded-full bg-gray-100 text-gray-700 hover:bg-opacity-90 transition-colors">
                          <MoreHorizontalIcon className="h-6 w-6" />
                        </button>
                        {/* End call */}
                        <button onClick={endSession} className="p-3 rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors">
                          <PhoneOffIcon className="h-6 w-6" />
                        </button>
                      </div>
                    </div>}
                </div>
              </div>
              {/* Side panel - only shown when not maximized or explicitly toggled */}
              {(showChat || showParticipants || showNotes) && <div className={`${isMaximized ? 'absolute right-0 top-0 bottom-0 w-80 bg-white shadow-lg z-10' : 'w-1/4 ml-4'}`}>
                  {showChat && <TelesessionChat clientName={activeClient?.name || ''} onClose={() => setShowChat(false)} isMaximized={isMaximized} />}
                  {showParticipants && <TelesessionParticipants clientName={activeClient?.name || ''} onClose={() => setShowParticipants(false)} isMaximized={isMaximized} />}
                  {showNotes && <TelesessionNotes clientName={activeClient?.name || ''} onClose={() => setShowNotes(false)} isMaximized={isMaximized} sessionStartTime={activeClient?.time || ''} billingTime={billingTime} />}
                </div>}
            </div>
          </div> :
      // When no active session
      <>
            {!isMaximized && <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 mb-6 sm:mb-8 shadow-md mx-4 sm:mx-6 lg:mx-8">
                <div className="flex items-center mb-4">
                  <MonitorIcon className="h-5 w-5 text-indigo-600 mr-2" />
                  <h2 className="text-lg font-medium text-indigo-600">
                    Current Session Status
                  </h2>
                </div>
                <div className="flex flex-col items-center justify-center py-8 sm:py-10">
                  <div className="bg-gray-100 rounded-lg p-4 inline-flex items-center justify-center mb-4">
                    <MonitorIcon className="h-10 w-10 sm:h-12 sm:w-12 text-gray-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-medium text-gray-700 mb-2">
                    No Active Session
                  </h3>
                  <p className="text-gray-500 text-center max-w-md">
                    Start a telesession from your scheduled appointments
                  </p>
                </div>
              </div>}
            {/* Today's Sessions */}
            {!isMaximized && <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6 shadow-md mx-4 sm:mx-6 lg:mx-8">
                <div className="flex items-center mb-6">
                  <ClockIcon className="h-5 w-5 text-indigo-600 mr-2" />
                  <h2 className="text-lg font-medium text-indigo-600">
                    Today's Sessions
                  </h2>
                </div>
                {/* Session 1 */}
                <div className="border border-gray-200 rounded-lg p-4 mb-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-0">
                      <div className="flex flex-col mb-2 sm:mb-0 sm:mr-8">
                        <span className="text-lg font-medium text-gray-900">
                          10:00 AM
                        </span>
                        <span className="text-sm text-gray-500">50 min</span>
                      </div>
                      <div>
                        <div className="flex items-center mb-1">
                          <UserIcon className="h-4 w-4 text-gray-500 mr-2" />
                          <span className="font-medium text-gray-900">
                            Sarah Johnson
                          </span>
                        </div>
                        <div className="flex items-center">
                          <VideoIcon className="h-4 w-4 text-gray-500 mr-2" />
                          <span className="text-sm text-gray-600">
                            Telesession
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-2 sm:mb-0 sm:mr-2 w-fit">
                        Ready to Join
                      </span>
                      <button onClick={() => startSession('Sarah Johnson', '10:00 AM')} className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium w-full sm:w-auto">
                        Start Session
                      </button>
                    </div>
                  </div>
                </div>
                {/* Session 2 */}
                <div className="border border-gray-200 rounded-lg p-4 mb-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-0">
                      <div className="flex flex-col mb-2 sm:mb-0 sm:mr-8">
                        <span className="text-lg font-medium text-gray-900">
                          11:30 AM
                        </span>
                        <span className="text-sm text-gray-500">50 min</span>
                      </div>
                      <div>
                        <div className="flex items-center mb-1">
                          <UserIcon className="h-4 w-4 text-gray-500 mr-2" />
                          <span className="font-medium text-gray-900">
                            Michael Chen
                          </span>
                        </div>
                        <div className="flex items-center">
                          <VideoIcon className="h-4 w-4 text-gray-500 mr-2" />
                          <span className="text-sm text-gray-600">
                            Telesession
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mb-2 sm:mb-0 sm:mr-2 w-fit">
                        Client Waiting
                      </span>
                      <button onClick={() => startSession('Michael Chen', '11:30 AM')} className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium w-full sm:w-auto">
                        Join Now
                      </button>
                    </div>
                  </div>
                </div>
                {/* Session 3 */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-0">
                      <div className="flex flex-col mb-2 sm:mb-0 sm:mr-8">
                        <span className="text-lg font-medium text-gray-900">
                          2:00 PM
                        </span>
                        <span className="text-sm text-gray-500">50 min</span>
                      </div>
                      <div>
                        <div className="flex items-center mb-1">
                          <UserIcon className="h-4 w-4 text-gray-500 mr-2" />
                          <span className="font-medium text-gray-900">
                            Emma Wilson
                          </span>
                        </div>
                        <div className="flex items-center">
                          <VideoIcon className="h-4 w-4 text-gray-500 mr-2" />
                          <span className="text-sm text-gray-600">
                            Telesession
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center">
                      <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium mb-2 sm:mb-0 sm:mr-2 w-fit">
                        Scheduled
                      </span>
                      <button className="bg-gray-200 text-gray-500 px-4 py-2 rounded-md text-sm font-medium cursor-not-allowed w-full sm:w-auto">
                        Not Ready
                      </button>
                    </div>
                  </div>
                </div>
              </div>}
          </>}
      </div>
      <SettingsModal isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
      <TelesessionModal isOpen={telesessionModalOpen} onClose={() => setTelesessionModalOpen(false)} />
      <TelesessionSettings isOpen={telesessionSettingsOpen} onClose={() => setTelesessionSettingsOpen(false)} />
      {showScreenShareModal && <TelesessionScreenShare onClose={() => setShowScreenShareModal(false)} isPresenting={isScreenSharing} setIsPresenting={setIsScreenSharing} />}
      {!activeSession && <ChatBubble />}
    </div>;
};