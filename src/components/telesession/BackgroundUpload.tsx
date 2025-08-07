import React, { useState } from 'react';
import { XIcon, ArrowLeftIcon, UploadIcon } from 'lucide-react';
interface BackgroundUploadProps {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
}
export const BackgroundUpload: React.FC<BackgroundUploadProps> = ({
  isOpen,
  onClose,
  onBack
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  if (!isOpen) return null;
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };
  return <div className="absolute inset-y-0 right-0 max-w-sm w-full bg-white shadow-xl flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center">
          <button onClick={onBack} className="text-gray-400 hover:text-gray-500 mr-2 focus:outline-none">
            <ArrowLeftIcon className="h-5 w-5" />
          </button>
          <h2 className="text-lg font-semibold text-gray-900">
            Upload Background
          </h2>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-500 focus:outline-none">
          <XIcon className="h-5 w-5" />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <div className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center h-64 ${isDragging ? 'border-indigo-400 bg-indigo-50' : 'border-gray-300 bg-gray-50'}`} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
          {uploadedFile ? <div className="text-center">
              <div className="bg-green-100 rounded-full p-3 inline-flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-900 mb-1">
                File uploaded successfully
              </p>
              <p className="text-xs text-gray-500">{uploadedFile.name}</p>
            </div> : <>
              <UploadIcon className="h-12 w-12 text-gray-400 mb-3" />
              <p className="text-sm font-medium text-gray-900 mb-1">
                Drag and drop your image here
              </p>
              <p className="text-xs text-gray-500 mb-4">
                PNG, JPG, JPEG up to 5MB
              </p>
              <label className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer">
                Browse Files
                <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
              </label>
            </>}
        </div>
        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-900 mb-2">
            Background Requirements
          </h3>
          <ul className="text-xs text-gray-500 space-y-1">
            <li>• Recommended resolution: 1920 x 1080 pixels</li>
            <li>• Maximum file size: 5MB</li>
            <li>• Supported formats: PNG, JPG, JPEG</li>
            <li>• Avoid busy patterns that may distract during sessions</li>
          </ul>
        </div>
      </div>
      <div className="p-4 border-t border-gray-200">
        <button onClick={onClose} className={`w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${uploadedFile ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-400 cursor-not-allowed'}`} disabled={!uploadedFile}>
          Apply Background
        </button>
      </div>
    </div>;
};