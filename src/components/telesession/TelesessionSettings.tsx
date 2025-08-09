import React, { useEffect, useState } from 'react';
import { XIcon, VideoIcon, MicIcon, MonitorIcon, ImageIcon, ChevronRightIcon, ArrowLeftIcon, CheckCircleIcon, ShieldIcon, UsersIcon, BellIcon, EyeIcon, WifiIcon, SlackIcon, SunIcon, VolumeIcon, FileTextIcon, BookmarkIcon, HeadphonesIcon, PlusIcon } from 'lucide-react';
import { BackgroundUpload } from './BackgroundUpload';
import { BackgroundGallery } from './BackgroundGallery';
// Define the navigation sections
type NavigationSection = 'main' | 'background' | 'audio' | 'devices' | 'accessibility' | 'security' | 'checklist' | 'profiles';
type BackgroundSection = 'gallery' | 'upload' | 'blur' | 'effects';
interface TelesessionSettingsProps {
  isOpen: boolean;
  onClose: () => void;
}
export const TelesessionSettings: React.FC<TelesessionSettingsProps> = ({
  isOpen,
  onClose
}) => {
  // Animation state
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);
  // Navigation state
  const [currentSection, setCurrentSection] = useState<NavigationSection>('main');
  const [previousSections, setPreviousSections] = useState<NavigationSection[]>([]);
  const [backgroundSection, setBackgroundSection] = useState<BackgroundSection | null>(null);
  // Settings state
  const [blurBackground, setBlurBackground] = useState(false);
  const [blurIntensity, setBlurIntensity] = useState(50);
  const [muteMicrophone, setMuteMicrophone] = useState(false);
  const [noiseSuppression, setNoiseSuppression] = useState(true);
  const [selectedBackground, setSelectedBackground] = useState<number | null>(null);
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  const [checklistItems, setChecklistItems] = useState({
    network: false,
    audio: false,
    video: false,
    lighting: false,
    privacy: false,
    notes: false
  });
  // Handle animation timing
  useEffect(() => {
    if (isOpen && !isVisible) {
      // First make it visible but off-screen
      setIsVisible(true);
      setIsAnimatingOut(false);
      setIsAnimatingIn(true);
      // Then after a frame, start the animation in
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimatingIn(false);
        });
      });
    } else if (!isOpen && isVisible) {
      // Animation out logic remains the same
      setIsAnimatingOut(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300); // Match this duration with the CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isOpen, isVisible]);
  // If not open and not animating, don't render anything
  if (!isVisible) return null;
  // Handle close with animation
  const handleClose = () => {
    setIsAnimatingOut(true);
    const timer = setTimeout(() => {
      onClose();
    }, 300); // Match this duration with the CSS transition duration
  };
  // Navigation helpers
  const navigateTo = (section: NavigationSection) => {
    setPreviousSections([...previousSections, currentSection]);
    setCurrentSection(section);
  };
  const navigateBack = () => {
    if (previousSections.length > 0) {
      const previous = previousSections[previousSections.length - 1];
      setCurrentSection(previous);
      setPreviousSections(previousSections.slice(0, -1));
      setBackgroundSection(null);
    }
  };
  const navigateToBackgroundSection = (section: BackgroundSection) => {
    setBackgroundSection(section);
  };
  const toggleChecklistItem = (item: keyof typeof checklistItems) => {
    setChecklistItems({
      ...checklistItems,
      [item]: !checklistItems[item]
    });
  };
  // Mock backgrounds
  const backgrounds = [{
    id: 1,
    name: 'Office',
    url: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  }, {
    id: 2,
    name: 'Bookshelf',
    url: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  }, {
    id: 3,
    name: 'Living Room',
    url: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  }, {
    id: 4,
    name: 'Plants',
    url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  }];
  // Mock client profiles
  const clientProfiles = [{
    id: 'sarah',
    name: 'Sarah Johnson',
    background: 'blur',
    captions: false,
    audio: 'enhanced'
  }, {
    id: 'michael',
    name: 'Michael Chen',
    background: 'office',
    captions: true,
    audio: 'standard'
  }, {
    id: 'emma',
    name: 'Emma Wilson',
    background: 'bookshelf',
    captions: true,
    audio: 'enhanced'
  }];
  // Render the main settings menu
  const renderMainMenu = () => <div className="flex-1 overflow-y-auto p-4">
      <div className="space-y-1 mb-6">
        <h3 className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-3">
          Quick Actions
        </h3>
        <div className="grid grid-cols-4 gap-2 mb-4">
          <button className="flex flex-col items-center justify-center p-3 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
            <VideoIcon className="h-5 w-5 text-indigo-600 mb-1" />
            <span className="text-xs text-indigo-700">Camera</span>
          </button>
          <button className="flex flex-col items-center justify-center p-3 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
            <MicIcon className="h-5 w-5 text-indigo-600 mb-1" />
            <span className="text-xs text-indigo-700">Mic</span>
          </button>
          <button className="flex flex-col items-center justify-center p-3 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
            <ImageIcon className="h-5 w-5 text-indigo-600 mb-1" />
            <span className="text-xs text-indigo-700">BG</span>
          </button>
          <button className="flex flex-col items-center justify-center p-3 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
            <SunIcon className="h-5 w-5 text-indigo-600 mb-1" />
            <span className="text-xs text-indigo-700">Light</span>
          </button>
        </div>
      </div>
      {/* Main menu options */}
      <div className="space-y-1 mb-6">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
          Settings
        </h3>
        <button onClick={() => navigateTo('background')} className="w-full flex items-center justify-between p-3 text-left text-sm text-gray-700 hover:bg-gray-50 rounded-md">
          <div className="flex items-center">
            <ImageIcon className="h-5 w-5 text-gray-500 mr-3" />
            <span>Background & Appearance</span>
          </div>
          <ChevronRightIcon className="h-4 w-4 text-gray-400" />
        </button>
        <button onClick={() => navigateTo('audio')} className="w-full flex items-center justify-between p-3 text-left text-sm text-gray-700 hover:bg-gray-50 rounded-md">
          <div className="flex items-center">
            <VolumeIcon className="h-5 w-5 text-gray-500 mr-3" />
            <span>Audio Controls</span>
          </div>
          <ChevronRightIcon className="h-4 w-4 text-gray-400" />
        </button>
        <button onClick={() => navigateTo('devices')} className="w-full flex items-center justify-between p-3 text-left text-sm text-gray-700 hover:bg-gray-50 rounded-md">
          <div className="flex items-center">
            <MonitorIcon className="h-5 w-5 text-gray-500 mr-3" />
            <span>Device Settings</span>
          </div>
          <ChevronRightIcon className="h-4 w-4 text-gray-400" />
        </button>
        <button onClick={() => navigateTo('checklist')} className="w-full flex items-center justify-between p-3 text-left text-sm text-gray-700 hover:bg-gray-50 rounded-md">
          <div className="flex items-center">
            <CheckCircleIcon className="h-5 w-5 text-gray-500 mr-3" />
            <span>Session Preparation</span>
          </div>
          <ChevronRightIcon className="h-4 w-4 text-gray-400" />
        </button>
      </div>
      <div className="space-y-1 mb-6">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
          Advanced
        </h3>
        <button onClick={() => navigateTo('profiles')} className="w-full flex items-center justify-between p-3 text-left text-sm text-gray-700 hover:bg-gray-50 rounded-md">
          <div className="flex items-center">
            <UsersIcon className="h-5 w-5 text-gray-500 mr-3" />
            <span>Client-Specific Settings</span>
          </div>
          <ChevronRightIcon className="h-4 w-4 text-gray-400" />
        </button>
        <button onClick={() => navigateTo('accessibility')} className="w-full flex items-center justify-between p-3 text-left text-sm text-gray-700 hover:bg-gray-50 rounded-md">
          <div className="flex items-center">
            <HeadphonesIcon className="h-5 w-5 text-gray-500 mr-3" />
            <span>Accessibility</span>
          </div>
          <ChevronRightIcon className="h-4 w-4 text-gray-400" />
        </button>
        <button onClick={() => navigateTo('security')} className="w-full flex items-center justify-between p-3 text-left text-sm text-gray-700 hover:bg-gray-50 rounded-md">
          <div className="flex items-center">
            <ShieldIcon className="h-5 w-5 text-gray-500 mr-3" />
            <span>Security & Privacy</span>
          </div>
          <ChevronRightIcon className="h-4 w-4 text-gray-400" />
        </button>
      </div>
      {/* Upcoming session reminder */}
      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <BellIcon className="h-5 w-5 text-blue-500" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-blue-800">
              Upcoming Session
            </h3>
            <p className="text-sm text-blue-700 mt-1">
              Session with Michael Chen in 15 minutes
            </p>
            <button className="mt-2 text-xs font-medium text-blue-600 hover:text-blue-800">
              Load preferred settings
            </button>
          </div>
        </div>
      </div>
    </div>;
  // Render the background settings
  const renderBackgroundSettings = () => <div className="flex-1 overflow-y-auto p-4">
      <div className="mb-6">
        <div className="bg-gray-50 rounded-lg overflow-hidden mb-4">
          <div className="aspect-video relative">
            {selectedBackground ? <img src={backgrounds.find(bg => bg.id === selectedBackground)?.url} alt="Background preview" className={`w-full h-full object-cover ${blurBackground ? 'filter blur-sm' : ''}`} /> : <div className={`w-full h-full bg-gray-200 flex items-center justify-center ${blurBackground ? 'filter blur-sm' : ''}`}>
                <span className="text-gray-500">Background Preview</span>
              </div>}
            <div className="absolute bottom-4 right-4">
              <div className="bg-black bg-opacity-50 text-white text-xs py-1 px-2 rounded">
                {blurBackground ? 'Blur: On' : 'Blur: Off'}
                {selectedBackground && ` • ${backgrounds.find(bg => bg.id === selectedBackground)?.name}`}
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <VideoIcon className="h-5 w-5 text-gray-500 mr-3" />
              <span className="text-sm text-gray-700">Blur background</span>
            </div>
            <div className="relative inline-block w-10 h-6">
              <input type="checkbox" id="toggle-blur" className="sr-only" checked={blurBackground} onChange={() => setBlurBackground(!blurBackground)} />
              <label htmlFor="toggle-blur" className={`block overflow-hidden h-6 rounded-full cursor-pointer ${blurBackground ? 'bg-indigo-600' : 'bg-gray-300'}`}>
                <span className={`block h-6 w-6 rounded-full bg-white shadow transform transition-transform duration-200 ease-in-out ${blurBackground ? 'translate-x-4' : 'translate-x-0'}`}></span>
              </label>
            </div>
          </div>
          {blurBackground && <div className="pl-8 pr-2">
              <label htmlFor="blur-intensity" className="block text-sm text-gray-700 mb-1">
                Blur intensity: {blurIntensity}%
              </label>
              <input type="range" id="blur-intensity" min="0" max="100" value={blurIntensity} onChange={e => setBlurIntensity(parseInt(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
            </div>}
          <button onClick={() => navigateToBackgroundSection('gallery')} className="w-full flex items-center justify-between py-2 px-3 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
            <div className="flex items-center">
              <MonitorIcon className="h-5 w-5 text-gray-500 mr-3" />
              <span>Choose a background</span>
            </div>
            <ChevronRightIcon className="h-4 w-4 text-gray-400" />
          </button>
          <button onClick={() => navigateToBackgroundSection('upload')} className="w-full flex items-center justify-between py-2 px-3 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
            <div className="flex items-center">
              <ImageIcon className="h-5 w-5 text-gray-500 mr-3" />
              <span>Upload background</span>
            </div>
            <ChevronRightIcon className="h-4 w-4 text-gray-400" />
          </button>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-900 mb-3">
          Background Effects
        </h3>
        <div className="grid grid-cols-2 gap-2">
          <button className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors text-sm text-center">
            Soft Focus
          </button>
          <button className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors text-sm text-center">
            Warm Light
          </button>
          <button className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors text-sm text-center">
            Professional
          </button>
          <button className="bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition-colors text-sm text-center">
            Neutral
          </button>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">
          Lighting Adjustment
        </h3>
        <div className="space-y-3">
          <div>
            <label htmlFor="brightness" className="block text-sm text-gray-700 mb-1">
              Brightness
            </label>
            <input type="range" id="brightness" min="0" max="100" defaultValue="50" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
          </div>
          <div>
            <label htmlFor="contrast" className="block text-sm text-gray-700 mb-1">
              Contrast
            </label>
            <input type="range" id="contrast" min="0" max="100" defaultValue="50" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
          </div>
        </div>
      </div>
    </div>;
  // Render the audio settings
  const renderAudioSettings = () => <div className="flex-1 overflow-y-auto p-4">
      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <MicIcon className="h-5 w-5 text-gray-500 mr-3" />
            <span className="text-sm text-gray-700">Mute microphone</span>
          </div>
          <div className="relative inline-block w-10 h-6">
            <input type="checkbox" id="toggle-mute" className="sr-only" checked={muteMicrophone} onChange={() => setMuteMicrophone(!muteMicrophone)} />
            <label htmlFor="toggle-mute" className={`block overflow-hidden h-6 rounded-full cursor-pointer ${muteMicrophone ? 'bg-indigo-600' : 'bg-gray-300'}`}>
              <span className={`block h-6 w-6 rounded-full bg-white shadow transform transition-transform duration-200 ease-in-out ${muteMicrophone ? 'translate-x-4' : 'translate-x-0'}`}></span>
            </label>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <SlackIcon className="h-5 w-5 text-gray-500 mr-3" />
            <span className="text-sm text-gray-700">Noise suppression</span>
          </div>
          <div className="relative inline-block w-10 h-6">
            <input type="checkbox" id="toggle-noise" className="sr-only" checked={noiseSuppression} onChange={() => setNoiseSuppression(!noiseSuppression)} />
            <label htmlFor="toggle-noise" className={`block overflow-hidden h-6 rounded-full cursor-pointer ${noiseSuppression ? 'bg-indigo-600' : 'bg-gray-300'}`}>
              <span className={`block h-6 w-6 rounded-full bg-white shadow transform transition-transform duration-200 ease-in-out ${noiseSuppression ? 'translate-x-4' : 'translate-x-0'}`}></span>
            </label>
          </div>
        </div>
        <div className="py-2">
          <label htmlFor="microphone" className="block text-sm text-gray-700 mb-1">
            Microphone
          </label>
          <select id="microphone" className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <option>Default Microphone</option>
            <option>External Microphone</option>
            <option>Headset Microphone</option>
          </select>
        </div>
        <div className="py-2">
          <label htmlFor="speaker" className="block text-sm text-gray-700 mb-1">
            Speaker
          </label>
          <select id="speaker" className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <option>Default Speaker</option>
            <option>External Speaker</option>
            <option>Headphones</option>
          </select>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-900 mb-3">
          Voice Enhancement
        </h3>
        <div className="space-y-3">
          <div>
            <label htmlFor="voice-clarity" className="block text-sm text-gray-700 mb-1">
              Voice Clarity
            </label>
            <select id="voice-clarity" className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              <option>Standard</option>
              <option>Enhanced</option>
              <option>Maximum</option>
            </select>
          </div>
          <div>
            <label htmlFor="echo-cancellation" className="block text-sm text-gray-700 mb-1">
              Echo Cancellation
            </label>
            <select id="echo-cancellation" className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              <option>Auto</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">
          Music & Sound
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <VolumeIcon className="h-5 w-5 text-gray-500 mr-3" />
              <span className="text-sm text-gray-700">Waiting room music</span>
            </div>
            <div className="relative inline-block w-10 h-6">
              <input type="checkbox" id="toggle-music" className="sr-only" />
              <label htmlFor="toggle-music" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                <span className="block h-6 w-6 rounded-full bg-white shadow transform transition-transform duration-200 ease-in-out"></span>
              </label>
            </div>
          </div>
          <div className="py-2">
            <label htmlFor="music-style" className="block text-sm text-gray-700 mb-1">
              Music Style
            </label>
            <select id="music-style" className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              <option>Ambient</option>
              <option>Classical</option>
              <option>Nature Sounds</option>
              <option>Soft Jazz</option>
            </select>
          </div>
        </div>
      </div>
    </div>;
  // Render the device settings
  const renderDeviceSettings = () => <div className="flex-1 overflow-y-auto p-4">
      <div className="space-y-4 mb-6">
        <div className="py-2">
          <label htmlFor="camera" className="block text-sm text-gray-700 mb-1">
            Camera
          </label>
          <select id="camera" className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <option>Default Camera</option>
            <option>External Webcam</option>
            <option>Built-in Camera</option>
          </select>
        </div>
        <div className="py-2">
          <label htmlFor="resolution" className="block text-sm text-gray-700 mb-1">
            Video Quality
          </label>
          <select id="resolution" className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <option>Standard (480p)</option>
            <option>High Definition (720p)</option>
            <option>Full HD (1080p)</option>
          </select>
        </div>
        <div className="py-2">
          <label htmlFor="bandwidth" className="block text-sm text-gray-700 mb-1">
            Bandwidth Usage
          </label>
          <select id="bandwidth" className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
            <option>Auto (Recommended)</option>
            <option>Low - Save Data</option>
            <option>Medium</option>
            <option>High - Best Quality</option>
          </select>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-900 mb-3">Network</h3>
        <div className="bg-green-50 p-4 rounded-lg mb-4 flex items-start">
          <WifiIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-green-800">
              Strong connection
            </p>
            <p className="text-xs text-green-700 mt-1">
              Your network is stable for video calls
            </p>
          </div>
        </div>
        <button className="w-full flex items-center justify-center py-2 px-3 text-sm text-indigo-600 hover:bg-indigo-50 rounded-md border border-indigo-200">
          Run Network Test
        </button>
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">Advanced</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <MonitorIcon className="h-5 w-5 text-gray-500 mr-3" />
              <span className="text-sm text-gray-700">
                Hardware acceleration
              </span>
            </div>
            <div className="relative inline-block w-10 h-6">
              <input type="checkbox" id="toggle-hardware" className="sr-only" defaultChecked />
              <label htmlFor="toggle-hardware" className="block overflow-hidden h-6 rounded-full bg-indigo-600 cursor-pointer">
                <span className="block h-6 w-6 rounded-full bg-white shadow transform translate-x-4 transition-transform duration-200 ease-in-out"></span>
              </label>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <EyeIcon className="h-5 w-5 text-gray-500 mr-3" />
              <span className="text-sm text-gray-700">Self view</span>
            </div>
            <div className="relative inline-block w-10 h-6">
              <input type="checkbox" id="toggle-self-view" className="sr-only" defaultChecked />
              <label htmlFor="toggle-self-view" className="block overflow-hidden h-6 rounded-full bg-indigo-600 cursor-pointer">
                <span className="block h-6 w-6 rounded-full bg-white shadow transform translate-x-4 transition-transform duration-200 ease-in-out"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>;
  // Render the session preparation checklist
  const renderSessionChecklist = () => <div className="flex-1 overflow-y-auto p-4">
      <div className="bg-indigo-50 p-4 rounded-lg mb-6">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <BellIcon className="h-5 w-5 text-indigo-500" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-indigo-800">
              Session with Michael Chen
            </h3>
            <p className="text-sm text-indigo-700 mt-1">
              Starting in 15 minutes
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-start">
          <div className="flex items-center h-5 mt-1">
            <input id="network-check" name="network-check" type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" checked={checklistItems.network} onChange={() => toggleChecklistItem('network')} />
          </div>
          <div className="ml-3">
            <label htmlFor="network-check" className="text-sm font-medium text-gray-700">
              Check network connection
            </label>
            <p className="text-xs text-gray-500">
              Ensure you have a stable internet connection for video calls
            </p>
            <button className="mt-1 text-xs font-medium text-indigo-600 hover:text-indigo-800" onClick={() => toggleChecklistItem('network')}>
              Run test
            </button>
          </div>
        </div>
        <div className="flex items-start">
          <div className="flex items-center h-5 mt-1">
            <input id="audio-check" name="audio-check" type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" checked={checklistItems.audio} onChange={() => toggleChecklistItem('audio')} />
          </div>
          <div className="ml-3">
            <label htmlFor="audio-check" className="text-sm font-medium text-gray-700">
              Test audio devices
            </label>
            <p className="text-xs text-gray-500">
              Check that your microphone and speakers are working properly
            </p>
            <button className="mt-1 text-xs font-medium text-indigo-600 hover:text-indigo-800" onClick={() => toggleChecklistItem('audio')}>
              Test audio
            </button>
          </div>
        </div>
        <div className="flex items-start">
          <div className="flex items-center h-5 mt-1">
            <input id="video-check" name="video-check" type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" checked={checklistItems.video} onChange={() => toggleChecklistItem('video')} />
          </div>
          <div className="ml-3">
            <label htmlFor="video-check" className="text-sm font-medium text-gray-700">
              Check video quality
            </label>
            <p className="text-xs text-gray-500">
              Ensure your camera is working and positioned correctly
            </p>
            <button className="mt-1 text-xs font-medium text-indigo-600 hover:text-indigo-800" onClick={() => toggleChecklistItem('video')}>
              Test video
            </button>
          </div>
        </div>
        <div className="flex items-start">
          <div className="flex items-center h-5 mt-1">
            <input id="lighting-check" name="lighting-check" type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" checked={checklistItems.lighting} onChange={() => toggleChecklistItem('lighting')} />
          </div>
          <div className="ml-3">
            <label htmlFor="lighting-check" className="text-sm font-medium text-gray-700">
              Check lighting
            </label>
            <p className="text-xs text-gray-500">
              Make sure your face is well-lit and visible
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="flex items-center h-5 mt-1">
            <input id="privacy-check" name="privacy-check" type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" checked={checklistItems.privacy} onChange={() => toggleChecklistItem('privacy')} />
          </div>
          <div className="ml-3">
            <label htmlFor="privacy-check" className="text-sm font-medium text-gray-700">
              Ensure privacy
            </label>
            <p className="text-xs text-gray-500">
              Confirm you're in a private, quiet space for the session
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <div className="flex items-center h-5 mt-1">
            <input id="notes-check" name="notes-check" type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" checked={checklistItems.notes} onChange={() => toggleChecklistItem('notes')} />
          </div>
          <div className="ml-3">
            <label htmlFor="notes-check" className="text-sm font-medium text-gray-700">
              Review session notes
            </label>
            <p className="text-xs text-gray-500">
              Check previous session notes for this client
            </p>
            <button className="mt-1 text-xs font-medium text-indigo-600 hover:text-indigo-800" onClick={() => toggleChecklistItem('notes')}>
              Open notes
            </button>
          </div>
        </div>
      </div>
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">
            Checklist completion
          </span>
          <span className="text-sm font-medium text-indigo-600">
            {Object.values(checklistItems).filter(Boolean).length}/6
          </span>
        </div>
        <div className="mt-2 bg-gray-200 rounded-full h-2.5">
          <div className="bg-indigo-600 h-2.5 rounded-full" style={{
          width: `${Object.values(checklistItems).filter(Boolean).length / 6 * 100}%`
        }}></div>
        </div>
      </div>
    </div>;
  // Render client profiles
  const renderClientProfiles = () => <div className="flex-1 overflow-y-auto p-4">
      <div className="mb-6">
        <p className="text-sm text-gray-600 mb-4">
          Set and save preferred settings for each client. These will be
          automatically applied when you start a session.
        </p>
        <div className="space-y-3">
          {clientProfiles.map(profile => <div key={profile.id} className={`border rounded-lg p-4 cursor-pointer transition-colors ${selectedProfile === profile.id ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 hover:border-indigo-300'}`} onClick={() => setSelectedProfile(profile.id)}>
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-medium text-gray-900">
                  {profile.name}
                </h3>
                {selectedProfile === profile.id && <CheckCircleIcon className="h-5 w-5 text-indigo-600" />}
              </div>
              <div className="mt-2 grid grid-cols-2 gap-2 text-xs text-gray-500">
                <div className="flex items-center">
                  <ImageIcon className="h-3 w-3 mr-1" />
                  <span>Background: {profile.background}</span>
                </div>
                <div className="flex items-center">
                  <FileTextIcon className="h-3 w-3 mr-1" />
                  <span>Captions: {profile.captions ? 'On' : 'Off'}</span>
                </div>
                <div className="flex items-center">
                  <VolumeIcon className="h-3 w-3 mr-1" />
                  <span>Audio: {profile.audio}</span>
                </div>
                <div className="flex items-center">
                  <BookmarkIcon className="h-3 w-3 mr-1" />
                  <span>Saved: Yes</span>
                </div>
              </div>
            </div>)}
        </div>
      </div>
      <div className="border-t border-gray-200 pt-6">
        <button className="w-full flex items-center justify-center py-2 px-3 text-sm text-indigo-600 hover:bg-indigo-50 rounded-md border border-indigo-200">
          <PlusIcon className="h-4 w-4 mr-1" />
          Create New Profile
        </button>
      </div>
    </div>;
  // Render accessibility settings
  const renderAccessibilitySettings = () => <div className="flex-1 overflow-y-auto p-4">
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-900 mb-3">
          Closed Captioning
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FileTextIcon className="h-5 w-5 text-gray-500 mr-3" />
              <span className="text-sm text-gray-700">Enable captions</span>
            </div>
            <div className="relative inline-block w-10 h-6">
              <input type="checkbox" id="toggle-captions" className="sr-only" />
              <label htmlFor="toggle-captions" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                <span className="block h-6 w-6 rounded-full bg-white shadow transform transition-transform duration-200 ease-in-out"></span>
              </label>
            </div>
          </div>
          <div className="py-2">
            <label htmlFor="caption-language" className="block text-sm text-gray-700 mb-1">
              Caption Language
            </label>
            <select id="caption-language" className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
            </select>
          </div>
          <div className="py-2">
            <label htmlFor="caption-size" className="block text-sm text-gray-700 mb-1">
              Caption Size
            </label>
            <select id="caption-size" className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-900 mb-3">
          Visual Accessibility
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <MonitorIcon className="h-5 w-5 text-gray-500 mr-3" />
              <span className="text-sm text-gray-700">High contrast mode</span>
            </div>
            <div className="relative inline-block w-10 h-6">
              <input type="checkbox" id="toggle-contrast" className="sr-only" />
              <label htmlFor="toggle-contrast" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                <span className="block h-6 w-6 rounded-full bg-white shadow transform transition-transform duration-200 ease-in-out"></span>
              </label>
            </div>
          </div>
          <div className="py-2">
            <label htmlFor="font-size" className="block text-sm text-gray-700 mb-1">
              Font Size
            </label>
            <select id="font-size" className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              <option>Default</option>
              <option>Large</option>
              <option>Extra Large</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">
          Keyboard Shortcuts
        </h3>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-700">Toggle mute</span>
              <span className="font-mono text-gray-500">Alt+M</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Toggle video</span>
              <span className="font-mono text-gray-500">Alt+V</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Toggle screen share</span>
              <span className="font-mono text-gray-500">Alt+S</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">End call</span>
              <span className="font-mono text-gray-500">Alt+E</span>
            </div>
          </div>
        </div>
      </div>
    </div>;
  // Render security settings
  const renderSecuritySettings = () => <div className="flex-1 overflow-y-auto p-4">
      <div className="bg-green-50 p-4 rounded-lg mb-6">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            <ShieldIcon className="h-5 w-5 text-green-500" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-green-800">
              Secure Connection
            </h3>
            <p className="text-sm text-green-700 mt-1">
              Your connection is encrypted and HIPAA compliant
            </p>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-900 mb-3">
          Privacy Controls
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <EyeIcon className="h-5 w-5 text-gray-500 mr-3" />
              <span className="text-sm text-gray-700">Privacy mode</span>
            </div>
            <div className="relative inline-block w-10 h-6">
              <input type="checkbox" id="toggle-privacy" className="sr-only" defaultChecked />
              <label htmlFor="toggle-privacy" className="block overflow-hidden h-6 rounded-full bg-indigo-600 cursor-pointer">
                <span className="block h-6 w-6 rounded-full bg-white shadow transform translate-x-4 transition-transform duration-200 ease-in-out"></span>
              </label>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <ShieldIcon className="h-5 w-5 text-gray-500 mr-3" />
              <span className="text-sm text-gray-700">Session lock</span>
            </div>
            <div className="relative inline-block w-10 h-6">
              <input type="checkbox" id="toggle-lock" className="sr-only" defaultChecked />
              <label htmlFor="toggle-lock" className="block overflow-hidden h-6 rounded-full bg-indigo-600 cursor-pointer">
                <span className="block h-6 w-6 rounded-full bg-white shadow transform translate-x-4 transition-transform duration-200 ease-in-out"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-900 mb-3">
          Recording Controls
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <VideoIcon className="h-5 w-5 text-gray-500 mr-3" />
              <span className="text-sm text-gray-700">Allow recording</span>
            </div>
            <div className="relative inline-block w-10 h-6">
              <input type="checkbox" id="toggle-recording" className="sr-only" />
              <label htmlFor="toggle-recording" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                <span className="block h-6 w-6 rounded-full bg-white shadow transform transition-transform duration-200 ease-in-out"></span>
              </label>
            </div>
          </div>
          <div className="py-2">
            <label htmlFor="recording-consent" className="block text-sm text-gray-700 mb-1">
              Recording Consent
            </label>
            <select id="recording-consent" className="block w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              <option>Ask every time</option>
              <option>Always require</option>
              <option>Use client preferences</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-3">Compliance</h3>
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="space-y-2">
            <div className="flex items-start">
              <div className="flex items-center h-5 mt-0.5">
                <input id="hipaa" name="hipaa" type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" defaultChecked disabled />
              </div>
              <div className="ml-3">
                <label htmlFor="hipaa" className="text-sm font-medium text-gray-700">
                  HIPAA Compliant
                </label>
                <p className="text-xs text-gray-500">
                  Your sessions meet HIPAA security requirements
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5 mt-0.5">
                <input id="encryption" name="encryption" type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" defaultChecked disabled />
              </div>
              <div className="ml-3">
                <label htmlFor="encryption" className="text-sm font-medium text-gray-700">
                  End-to-end encryption
                </label>
                <p className="text-xs text-gray-500">
                  Your communications are fully encrypted
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
  // Render the appropriate content based on the current section
  const renderContent = () => {
    switch (currentSection) {
      case 'main':
        return renderMainMenu();
      case 'background':
        return renderBackgroundSettings();
      case 'audio':
        return renderAudioSettings();
      case 'devices':
        return renderDeviceSettings();
      case 'checklist':
        return renderSessionChecklist();
      case 'profiles':
        return renderClientProfiles();
      case 'accessibility':
        return renderAccessibilitySettings();
      case 'security':
        return renderSecuritySettings();
      default:
        return renderMainMenu();
    }
  };
  // Determine the title for the current section
  const getSectionTitle = () => {
    switch (currentSection) {
      case 'main':
        return 'Telesession Settings';
      case 'background':
        return 'Background & Appearance';
      case 'audio':
        return 'Audio Controls';
      case 'devices':
        return 'Device Settings';
      case 'checklist':
        return 'Session Preparation';
      case 'profiles':
        return 'Client-Specific Settings';
      case 'accessibility':
        return 'Accessibility';
      case 'security':
        return 'Security & Privacy';
      default:
        return 'Telesession Settings';
    }
  };
  return <div className="fixed inset-0 z-[9999] overflow-hidden">
      {/* Overlay */}
      <div className={`absolute inset-0 bg-gray-800 transition-opacity duration-300 ${isAnimatingOut ? 'opacity-0' : 'opacity-50'}`} onClick={handleClose} />
      {/* Settings Panel */}
      <div className={`absolute inset-y-0 right-0 max-w-sm w-full bg-white shadow-xl flex flex-col transform transition-transform duration-300 ease-in-out ${isAnimatingOut ? 'translate-x-full' : isAnimatingIn ? 'translate-x-full' : 'translate-x-0'}`}>
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center">
            {previousSections.length > 0 && <button onClick={navigateBack} className="text-gray-400 hover:text-gray-500 mr-2 focus:outline-none">
                <ArrowLeftIcon className="h-5 w-5" />
              </button>}
            <h2 className="text-lg font-semibold text-gray-900">
              {getSectionTitle()}
            </h2>
          </div>
          <button onClick={handleClose} className="text-gray-400 hover:text-gray-500 focus:outline-none">
            <XIcon className="h-5 w-5" />
          </button>
        </div>
        {/* Content area */}
        {renderContent()}
        {/* Footer */}
        <div className="p-4 border-t border-gray-200">
          <button onClick={handleClose} className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Save Settings
          </button>
        </div>
      </div>
      {/* Background Upload Panel */}
      {currentSection === 'background' && backgroundSection === 'upload' && <BackgroundUpload isOpen={true} onClose={() => setBackgroundSection(null)} onBack={() => setBackgroundSection(null)} />}
      {/* Background Gallery Panel */}
      {currentSection === 'background' && backgroundSection === 'gallery' && <BackgroundGallery isOpen={true} onClose={() => setBackgroundSection(null)} onBack={() => setBackgroundSection(null)} />}
    </div>;
};