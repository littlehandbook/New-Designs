import React, { useEffect, useRef } from 'react';
import { CheckIcon, MicIcon, VolumeIcon, SlidersIcon } from 'lucide-react';
interface TelesessionAudioControlsProps {
  onClose: () => void;
}
export const TelesessionAudioControls: React.FC<TelesessionAudioControlsProps> = ({
  onClose
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);
  return <div ref={ref} className="absolute bottom-16 left-0 bg-gray-900 rounded-md shadow-lg py-2 w-64 text-white z-50" onClick={e => e.stopPropagation()}>
      <div className="px-3 py-2 text-sm font-medium border-b border-gray-700">
        Select a microphone
      </div>
      <div className="py-1">
        <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-800">
          <span>Same as system (Headset Microphone)</span>
        </button>
        <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-800">
          <span>Microphone (HD Pro Webcam C920)</span>
        </button>
        <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-800 flex items-center justify-between">
          <span>Headset Microphone (Plantronics)</span>
          <CheckIcon className="h-4 w-4 text-indigo-400" />
        </button>
      </div>
      <div className="px-3 py-2 text-sm font-medium border-t border-b border-gray-700">
        Select a speaker
      </div>
      <div className="py-1">
        <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-800">
          <span>Same as system (Speakers)</span>
        </button>
        <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-800">
          <span>LG FULL HD (NVIDIA Audio)</span>
        </button>
        <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-800 flex items-center justify-between">
          <span>Headset Earphone (Plantronics)</span>
          <CheckIcon className="h-4 w-4 text-indigo-400" />
        </button>
        <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-800">
          <span>Speakers (High Definition Audio)</span>
        </button>
        <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-800">
          <span>Digital Output (Audio Device)</span>
        </button>
      </div>
      <div className="border-t border-gray-700 py-1">
        <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-800 flex items-center">
          <span>Test speaker & microphone...</span>
        </button>
        <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-800 flex items-center">
          <span>Switch to phone audio...</span>
        </button>
        <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-800 flex items-center">
          <span>Leave computer audio</span>
        </button>
      </div>
      <div className="border-t border-gray-700 py-1">
        <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-800 flex items-center">
          <span>Audio settings...</span>
        </button>
      </div>
    </div>;
};