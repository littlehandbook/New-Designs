import React, { useEffect, useState, useRef } from 'react';
import { XIcon, MonitorIcon, LayoutIcon, SplitSquareHorizontalIcon, SplitSquareVerticalIcon, MaximizeIcon, MinimizeIcon, ChevronsLeftIcon, ChevronsRightIcon, EyeIcon, MousePointerIcon, PenIcon, EraserIcon, SquareIcon } from 'lucide-react';
interface TelesessionScreenShareProps {
  onClose: () => void;
  isPresenting: boolean;
  setIsPresenting: (value: boolean) => void;
}
type LayoutType = 'side-by-side' | 'picture-in-picture' | 'fullscreen';
type AnnotationTool = 'pointer' | 'pen' | 'highlight' | 'rectangle' | 'eraser' | 'none';
export const TelesessionScreenShare: React.FC<TelesessionScreenShareProps> = ({
  onClose,
  isPresenting,
  setIsPresenting
}) => {
  const [layout, setLayout] = useState<LayoutType>('side-by-side');
  const [showControls, setShowControls] = useState(true);
  const [showAnnotationTools, setShowAnnotationTools] = useState(false);
  const [selectedAnnotationTool, setSelectedAnnotationTool] = useState<AnnotationTool>('none');
  const [availableScreens, setAvailableScreens] = useState([{
    id: 'screen-1',
    name: 'Entire Screen'
  }, {
    id: 'window-1',
    name: 'Chrome - Client Records'
  }, {
    id: 'window-2',
    name: 'Notes - Text Editor'
  }, {
    id: 'window-3',
    name: 'PDF - Treatment Plan'
  }]);
  const controlsTimeoutRef = useRef<number | null>(null);
  // Auto-hide controls after inactivity
  useEffect(() => {
    if (isPresenting) {
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
  }, [isPresenting, showControls]);
  const handleMouseMove = () => {
    if (isPresenting) {
      setShowControls(true);
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
      controlsTimeoutRef.current = window.setTimeout(() => {
        setShowControls(false);
      }, 3000);
    }
  };
  const startScreenShare = () => {
    // In a real implementation, this would trigger the browser's screen sharing API
    setIsPresenting(true);
  };
  const stopScreenShare = () => {
    setIsPresenting(false);
    setSelectedAnnotationTool('none');
    setShowAnnotationTools(false);
  };
  const selectAnnotationTool = (tool: AnnotationTool) => {
    setSelectedAnnotationTool(tool === selectedAnnotationTool ? 'none' : tool);
  };
  // If not presenting, show the screen selection UI
  if (!isPresenting) {
    return <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">
              Share your screen
            </h3>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
              <XIcon className="h-5 w-5" />
            </button>
          </div>
          <div className="p-4">
            <p className="text-sm text-gray-600 mb-4">
              Choose what you'd like to share with your client.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {availableScreens.map(screen => <button key={screen.id} className="border border-gray-300 rounded-lg p-4 hover:border-indigo-500 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors text-left" onClick={startScreenShare}>
                  <div className="bg-gray-200 rounded aspect-video mb-3 flex items-center justify-center">
                    <MonitorIcon className="h-8 w-8 text-gray-500" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {screen.name}
                  </p>
                </button>)}
            </div>
            <div className="bg-indigo-50 rounded-lg p-3 border border-indigo-100">
              <div className="flex items-start">
                <EyeIcon className="h-5 w-5 text-indigo-600 mt-0.5 mr-2" />
                <div>
                  <h4 className="text-sm font-medium text-indigo-900">
                    Privacy notice
                  </h4>
                  <p className="text-xs text-indigo-700 mt-1">
                    When you share your screen, all participants in the session
                    will be able to see its contents. Make sure to close any
                    sensitive or confidential information before sharing.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 flex justify-end border-t border-gray-200 rounded-b-lg">
            <button onClick={onClose} className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 mr-3">
              Cancel
            </button>
            <button onClick={startScreenShare} className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700">
              Share
            </button>
          </div>
        </div>
      </div>;
  }
  // When presenting, show the screen share UI
  return <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center" onMouseMove={handleMouseMove}>
      <div className="relative w-full h-full">
        {/* Shared content */}
        <div className="w-full h-full flex items-center justify-center">
          {layout === 'side-by-side' ? <div className="flex w-full h-full">
              <div className="w-3/4 h-full bg-white flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Shared screen" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="w-1/4 h-full bg-gray-900 flex flex-col">
                <div className="flex-1 p-2">
                  <div className="bg-gray-800 rounded h-full flex items-center justify-center">
                    <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Your video" className="max-w-full max-h-full object-cover" />
                  </div>
                </div>
                <div className="p-2">
                  <div className="bg-gray-800 rounded h-32 flex items-center justify-center">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Client video" className="max-w-full max-h-full object-cover" />
                  </div>
                </div>
              </div>
            </div> : layout === 'picture-in-picture' ? <div className="relative w-full h-full">
              <div className="w-full h-full bg-white flex items-center justify-center">
                <img src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Shared screen" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="absolute bottom-4 right-4 w-48 h-36 bg-gray-800 rounded-lg overflow-hidden border-2 border-white shadow-lg">
                <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Your video" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-4 right-56 w-48 h-36 bg-gray-800 rounded-lg overflow-hidden border-2 border-white shadow-lg">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Client video" className="w-full h-full object-cover" />
              </div>
            </div> : <div className="w-full h-full bg-white flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Shared screen" className="max-w-full max-h-full object-contain" />
            </div>}
        </div>
        {/* Annotation layer */}
        {selectedAnnotationTool !== 'none' && <div className="absolute inset-0 pointer-events-auto cursor-crosshair">
            {/* This would be a canvas element in a real implementation */}
          </div>}
        {/* Top controls */}
        {showControls && <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 rounded-lg text-white px-4 py-2 flex items-center space-x-3">
            <div className="flex items-center">
              <MonitorIcon className="h-4 w-4 mr-2 text-green-400" />
              <span className="text-sm">You are presenting</span>
            </div>
            <div className="h-4 border-l border-gray-500"></div>
            <button onClick={() => setLayout('side-by-side')} className={`p-1.5 rounded-md ${layout === 'side-by-side' ? 'bg-indigo-600' : 'hover:bg-gray-700'}`} title="Side by side view">
              <SplitSquareVerticalIcon className="h-4 w-4" />
            </button>
            <button onClick={() => setLayout('picture-in-picture')} className={`p-1.5 rounded-md ${layout === 'picture-in-picture' ? 'bg-indigo-600' : 'hover:bg-gray-700'}`} title="Picture-in-picture view">
              <LayoutIcon className="h-4 w-4" />
            </button>
            <button onClick={() => setLayout('fullscreen')} className={`p-1.5 rounded-md ${layout === 'fullscreen' ? 'bg-indigo-600' : 'hover:bg-gray-700'}`} title="Fullscreen view">
              <MaximizeIcon className="h-4 w-4" />
            </button>
          </div>}
        {/* Annotation tools */}
        {showControls && <div className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 rounded-lg text-white p-2 flex flex-col space-y-2">
            <button onClick={() => setShowAnnotationTools(!showAnnotationTools)} className={`p-2 rounded-md ${showAnnotationTools ? 'bg-indigo-600' : 'hover:bg-gray-700'}`} title="Annotation tools">
              <PenIcon className="h-5 w-5" />
            </button>
            {showAnnotationTools && <>
                <div className="h-px bg-gray-600 w-full"></div>
                <button onClick={() => selectAnnotationTool('pointer')} className={`p-2 rounded-md ${selectedAnnotationTool === 'pointer' ? 'bg-indigo-600' : 'hover:bg-gray-700'}`} title="Pointer">
                  <MousePointerIcon className="h-5 w-5" />
                </button>
                <button onClick={() => selectAnnotationTool('pen')} className={`p-2 rounded-md ${selectedAnnotationTool === 'pen' ? 'bg-indigo-600' : 'hover:bg-gray-700'}`} title="Pen">
                  <PenIcon className="h-5 w-5" />
                </button>
                <button onClick={() => selectAnnotationTool('rectangle')} className={`p-2 rounded-md ${selectedAnnotationTool === 'rectangle' ? 'bg-indigo-600' : 'hover:bg-gray-700'}`} title="Rectangle">
                  <SquareIcon className="h-5 w-5" />
                </button>
                <button onClick={() => selectAnnotationTool('eraser')} className={`p-2 rounded-md ${selectedAnnotationTool === 'eraser' ? 'bg-indigo-600' : 'hover:bg-gray-700'}`} title="Eraser">
                  <EraserIcon className="h-5 w-5" />
                </button>
              </>}
          </div>}
        {/* Bottom controls */}
        {showControls && <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 rounded-lg text-white px-4 py-2 flex items-center space-x-3">
            <button onClick={stopScreenShare} className="px-3 py-1.5 bg-red-600 hover:bg-red-700 rounded-md text-sm font-medium">
              Stop presenting
            </button>
          </div>}
      </div>
    </div>;
};