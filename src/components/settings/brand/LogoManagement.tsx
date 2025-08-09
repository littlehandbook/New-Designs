import React, { useState } from 'react';
import { UploadIcon, AlertTriangleIcon, CheckCircleIcon, XIcon } from 'lucide-react';
interface LogoManagementProps {
  logos: {
    light: string | null;
    dark: string | null;
    favicon: string | null;
    email: string | null;
    login: string | null;
  };
  onUpdateLogo: (type: keyof typeof logos, url: string | null) => void;
}
export const LogoManagement: React.FC<LogoManagementProps> = ({
  logos,
  onUpdateLogo
}) => {
  const [activeVariant, setActiveVariant] = useState<keyof typeof logos>('light');
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const logoVariants = [{
    key: 'light',
    label: 'Light Mode Logo',
    description: 'Used on light backgrounds'
  }, {
    key: 'dark',
    label: 'Dark Mode Logo',
    description: 'Used on dark backgrounds'
  }, {
    key: 'favicon',
    label: 'Favicon',
    description: 'Browser tab icon (square)'
  }, {
    key: 'email',
    label: 'Email Logo',
    description: 'Used in email headers'
  }, {
    key: 'login',
    label: 'Login Page Logo',
    description: 'Displayed on the login screen'
  }];
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileUpload(e.target.files[0]);
    }
  };
  const handleFileUpload = (file: File) => {
    // Check file type
    const validTypes = ['image/jpeg', 'image/png', 'image/svg+xml'];
    if (!validTypes.includes(file.type)) {
      alert('Please upload a valid image file (PNG, JPG, or SVG)');
      return;
    }
    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size should be less than 5MB');
      return;
    }
    // Simulate upload progress
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev === null) return 0;
        if (prev >= 100) {
          clearInterval(interval);
          return null;
        }
        return prev + 10;
      });
    }, 300);
    // Simulate upload completion with a timeout
    setTimeout(() => {
      // In a real app, this would be the URL returned from the server
      const imageUrl = URL.createObjectURL(file);
      onUpdateLogo(activeVariant, imageUrl);
      clearInterval(interval);
      setUploadProgress(null);
    }, 3000);
  };
  const removeLogo = () => {
    onUpdateLogo(activeVariant, null);
  };
  return <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Logo Management
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {logoVariants.map(variant => <button key={variant.key} onClick={() => setActiveVariant(variant.key as keyof typeof logos)} className={`text-left p-4 rounded-lg border ${activeVariant === variant.key ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 hover:border-indigo-300'}`}>
              <div className="font-medium text-sm">{variant.label}</div>
              <div className="text-xs text-gray-500 mt-1">
                {variant.description}
              </div>
            </button>)}
        </div>
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-2">
            {logoVariants.find(v => v.key === activeVariant)?.label}
          </h4>
          {logos[activeVariant] ? <div className="relative">
              <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 flex items-center justify-center">
                <img src={logos[activeVariant] || ''} alt={`${activeVariant} logo`} className="max-h-32 max-w-full object-contain" />
              </div>
              <button onClick={removeLogo} className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-sm border border-gray-200 text-gray-500 hover:text-gray-700" title="Remove logo">
                <XIcon className="h-4 w-4" />
              </button>
            </div> : <div onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop} className={`border-2 border-dashed rounded-lg p-8 text-center ${isDragging ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 hover:border-indigo-300'}`}>
              <div className="flex flex-col items-center">
                <UploadIcon className="h-10 w-10 text-gray-400 mb-3" />
                <p className="text-sm font-medium text-gray-700 mb-1">
                  Drag and drop your logo here
                </p>
                <p className="text-xs text-gray-500 mb-3">
                  PNG, JPG, or SVG (max. 5MB)
                </p>
                <label className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer">
                  <input type="file" className="sr-only" accept="image/png,image/jpeg,image/svg+xml" onChange={handleFileChange} />
                  Select File
                </label>
              </div>
            </div>}
          {uploadProgress !== null && <div className="mt-3">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="text-gray-700">Uploading...</span>
                <span className="text-gray-700">{uploadProgress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div className="bg-indigo-600 h-1.5 rounded-full" style={{
              width: `${uploadProgress}%`
            }}></div>
              </div>
            </div>}
        </div>
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-md border border-blue-100">
            <h4 className="text-sm font-medium text-blue-800 mb-1">
              Logo Requirements
            </h4>
            <ul className="text-xs text-blue-700 space-y-1">
              <li className="flex items-center">
                <CheckCircleIcon className="h-3.5 w-3.5 mr-1 text-blue-500" />
                Recommended formats: PNG or SVG with transparency
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="h-3.5 w-3.5 mr-1 text-blue-500" />
                Light logo: Dark text/elements for light backgrounds
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="h-3.5 w-3.5 mr-1 text-blue-500" />
                Dark logo: Light text/elements for dark backgrounds
              </li>
              <li className="flex items-center">
                <CheckCircleIcon className="h-3.5 w-3.5 mr-1 text-blue-500" />
                Favicon: Square format, minimum 32×32 pixels
              </li>
            </ul>
          </div>
          <div className="p-4 bg-amber-50 rounded-md border border-amber-100">
            <h4 className="text-sm font-medium text-amber-800 mb-1">
              <AlertTriangleIcon className="h-4 w-4 inline mr-1" />
              No Logo?
            </h4>
            <p className="text-xs text-amber-700">
              If no logo is uploaded, your practice name will be displayed as
              text instead.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Logo Preview</h3>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="p-4 bg-gray-50 border-b border-gray-200">
              <div className="text-sm font-medium text-gray-700">
                Light Mode
              </div>
            </div>
            <div className="p-6 bg-white flex items-center justify-center">
              {logos.light ? <img src={logos.light} alt="Light mode logo preview" className="max-h-16 max-w-[200px] object-contain" /> : <div className="text-lg font-semibold text-gray-900">
                  Practice Name
                </div>}
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="p-4 bg-gray-50 border-b border-gray-200">
              <div className="text-sm font-medium text-gray-700">Dark Mode</div>
            </div>
            <div className="p-6 bg-gray-800 flex items-center justify-center">
              {logos.dark ? <img src={logos.dark} alt="Dark mode logo preview" className="max-h-16 max-w-[200px] object-contain" /> : <div className="text-lg font-semibold text-white">
                  Practice Name
                </div>}
            </div>
          </div>
        </div>
      </div>
    </div>;
};