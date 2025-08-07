import React, { useState } from 'react';
import { XIcon, ArrowLeftIcon, CheckIcon } from 'lucide-react';
interface BackgroundGalleryProps {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
}
export const BackgroundGallery: React.FC<BackgroundGalleryProps> = ({
  isOpen,
  onClose,
  onBack
}) => {
  const [selectedBackground, setSelectedBackground] = useState<number | null>(null);
  if (!isOpen) return null;
  // Mock background images
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
  }, {
    id: 5,
    name: 'Minimal',
    url: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  }, {
    id: 6,
    name: 'Gradient',
    url: 'https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  }];
  return <div className="absolute inset-y-0 right-0 max-w-sm w-full bg-white shadow-xl flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center">
          <button onClick={onBack} className="text-gray-400 hover:text-gray-500 mr-2 focus:outline-none">
            <ArrowLeftIcon className="h-5 w-5" />
          </button>
          <h2 className="text-lg font-semibold text-gray-900">
            Choose Background
          </h2>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-500 focus:outline-none">
          <XIcon className="h-5 w-5" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <div className="grid grid-cols-2 gap-4">
          {backgrounds.map(background => <div key={background.id} className={`relative rounded-lg overflow-hidden cursor-pointer border-2 ${selectedBackground === background.id ? 'border-indigo-600' : 'border-transparent'}`} onClick={() => setSelectedBackground(background.id)}>
              <img src={background.url} alt={background.name} className="w-full h-32 object-cover" />
              <div className="absolute inset-0 flex items-center justify-center">
                {selectedBackground === background.id && <div className="bg-indigo-600 rounded-full p-1">
                    <CheckIcon className="h-5 w-5 text-white" />
                  </div>}
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs py-1 px-2">
                {background.name}
              </div>
            </div>)}
        </div>
      </div>
      <div className="p-4 border-t border-gray-200">
        <button onClick={onClose} className={`w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${selectedBackground ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-400 cursor-not-allowed'}`} disabled={!selectedBackground}>
          Apply Background
        </button>
      </div>
    </div>;
};