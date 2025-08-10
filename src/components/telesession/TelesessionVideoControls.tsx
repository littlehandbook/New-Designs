import React, { useEffect, useRef } from 'react';
import { CheckIcon, CameraIcon, SettingsIcon } from 'lucide-react';
interface TelesessionVideoControlsProps {
  onClose: () => void;
}
export const TelesessionVideoControls: React.FC<TelesessionVideoControlsProps> = ({
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
        Select a camera
      </div>
      <div className="py-1">
        <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-800">
          <span>Built-in Camera</span>
        </button>
        <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-800 flex items-center justify-between">
          <span>HD Pro Webcam C920</span>
          <CheckIcon className="h-4 w-4 text-indigo-400" />
        </button>
        <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-800">
          <span>Virtual Camera</span>
        </button>
      </div>
      <div className="px-3 py-2 text-sm font-medium border-t border-b border-gray-700">
        Video settings
      </div>
      <div className="py-1">
        <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-800">
          <span>HD (720p)</span>
        </button>
        <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-800 flex items-center justify-between">
          <span>Full HD (1080p)</span>
          <CheckIcon className="h-4 w-4 text-indigo-400" />
        </button>
        <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-800">
          <span>Standard (480p)</span>
        </button>
      </div>
      <div className="border-t border-gray-700 py-1">
        <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-800 flex items-center">
          <span>Mirror my video</span>
        </button>
        <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-800 flex items-center">
          <span>Enable HD</span>
        </button>
        <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-800 flex items-center">
          <span>Touch up my appearance</span>
        </button>
      </div>
      <div className="border-t border-gray-700 py-1">
        <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-800 flex items-center">
          <span>Video settings...</span>
        </button>
      </div>
    </div>;
};