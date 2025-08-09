import React, { useState } from 'react';
import { ColorCustomization } from './brand/ColorCustomization';
import { LogoManagement } from './brand/LogoManagement';
import { ThemePresets } from './brand/ThemePresets';
import { LivePreview } from './brand/LivePreview';
import { ImageIcon, LayoutTemplateIcon, EyeIcon, CodeIcon } from 'lucide-react';
type BrandTab = 'overview' | 'colors' | 'logos' | 'presets' | 'preview' | 'advanced';
export const BrandSettings = () => {
  const [activeTab, setActiveTab] = useState<BrandTab>('overview');
  const [splitView, setSplitView] = useState(false);
  // Mock brand data
  const [brandData, setBrandData] = useState({
    lastUpdated: '2 days ago',
    themeInUse: 'Custom',
    logoStatus: 'Uploaded',
    lightMode: {
      primary: '#4f46e5',
      primaryHover: '#4338ca',
      secondary: '#6b7280',
      tertiary: '#8b5cf6',
      background: '#f9fafb',
      surface: '#ffffff',
      textPrimary: '#111827',
      textSecondary: '#4b5563',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6',
      border: '#e5e7eb',
      focus: '#818cf8'
    },
    darkMode: {
      primary: '#6366f1',
      primaryHover: '#4f46e5',
      secondary: '#9ca3af',
      tertiary: '#a78bfa',
      background: '#111827',
      surface: '#1f2937',
      textPrimary: '#f9fafb',
      textSecondary: '#d1d5db',
      success: '#34d399',
      warning: '#fbbf24',
      error: '#f87171',
      info: '#60a5fa',
      border: '#374151',
      focus: '#818cf8'
    },
    logos: {
      light: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      dark: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      favicon: null,
      email: null,
      login: null
    }
  });
  const updateBrandColors = (mode: 'lightMode' | 'darkMode', colors: any) => {
    setBrandData({
      ...brandData,
      [mode]: {
        ...brandData[mode],
        ...colors
      },
      lastUpdated: 'Just now'
    });
  };
  const updateLogo = (type: keyof typeof brandData.logos, url: string | null) => {
    setBrandData({
      ...brandData,
      logos: {
        ...brandData.logos,
        [type]: url
      },
      lastUpdated: 'Just now',
      logoStatus: url ? 'Uploaded' : 'Not set'
    });
  };
  const applyPreset = (preset: any) => {
    setBrandData({
      ...brandData,
      lightMode: preset.lightMode,
      darkMode: preset.darkMode,
      themeInUse: preset.name,
      lastUpdated: 'Just now'
    });
  };
  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Current Brand Preview
              </h3>
              <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
                <div className="h-32 w-full relative" style={{
                backgroundColor: brandData.lightMode.primary
              }}>
                  {brandData.logos.light && <div className="absolute inset-0 flex items-center justify-center">
                      <img src={brandData.logos.light} alt="Practice logo" className="max-h-16 max-w-[200px] object-contain" />
                    </div>}
                </div>
                <div className="p-4 bg-white">
                  <div className="flex space-x-2 mb-3">
                    {['primary', 'secondary', 'tertiary', 'success', 'warning', 'error'].map(color => <div key={color} className="h-6 w-6 rounded-full border border-gray-200" style={{
                    backgroundColor: brandData.lightMode[color as keyof typeof brandData.lightMode]
                  }} />)}
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">
                      Theme: {brandData.themeInUse}
                    </span>
                    <span className="text-gray-500">
                      Last updated: {brandData.lastUpdated}
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm font-medium text-gray-900 mb-1">
                    Last Updated
                  </div>
                  <div className="text-sm text-gray-600">
                    {brandData.lastUpdated}
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm font-medium text-gray-900 mb-1">
                    Theme in Use
                  </div>
                  <div className="text-sm text-gray-600">
                    {brandData.themeInUse}
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm font-medium text-gray-900 mb-1">
                    Logo Status
                  </div>
                  <div className="text-sm text-gray-600">
                    {brandData.logoStatus}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button onClick={() => setActiveTab('colors')} className="flex flex-col items-center justify-center p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
                  <div className="h-8 w-8 text-indigo-600 mb-2" />
                  <span className="text-sm font-medium text-indigo-700">
                    Edit Colors
                  </span>
                </button>
                <button onClick={() => setActiveTab('logos')} className="flex flex-col items-center justify-center p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
                  <ImageIcon className="h-8 w-8 text-indigo-600 mb-2" />
                  <span className="text-sm font-medium text-indigo-700">
                    Upload Logo
                  </span>
                </button>
                <button onClick={() => setActiveTab('presets')} className="flex flex-col items-center justify-center p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
                  <LayoutTemplateIcon className="h-8 w-8 text-indigo-600 mb-2" />
                  <span className="text-sm font-medium text-indigo-700">
                    Choose Preset
                  </span>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  Live Preview Mode
                </h3>
                <p className="text-xs text-gray-500">
                  See changes in real-time as you edit
                </p>
              </div>
              <div className="relative inline-block w-12 h-6">
                <input type="checkbox" id="toggle-preview" className="sr-only" checked={splitView} onChange={() => setSplitView(!splitView)} />
                <label htmlFor="toggle-preview" className={`block overflow-hidden h-6 rounded-full cursor-pointer ${splitView ? 'bg-indigo-600' : 'bg-gray-300'}`}>
                  <span className={`block h-6 w-6 rounded-full bg-white shadow transform transition-transform duration-200 ease-in-out ${splitView ? 'translate-x-6' : 'translate-x-0'}`}></span>
                </label>
              </div>
            </div>
          </div>;
      case 'colors':
        return <ColorCustomization lightModeColors={brandData.lightMode} darkModeColors={brandData.darkMode} onUpdateColors={updateBrandColors} />;
      case 'logos':
        return <LogoManagement logos={brandData.logos} onUpdateLogo={updateLogo} />;
      case 'presets':
        return <ThemePresets currentTheme={brandData.themeInUse} onApplyPreset={applyPreset} />;
      case 'preview':
        return <LivePreview brandData={brandData} />;
      case 'advanced':
        return <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Advanced Settings
            </h3>
            <div className="space-y-6">
              <div>
                <label htmlFor="custom-css" className="block text-sm font-medium text-gray-700 mb-1">
                  Custom CSS
                </label>
                <textarea id="custom-css" rows={6} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md" placeholder=":root { --custom-property: value; }"></textarea>
                <p className="mt-1 text-xs text-gray-500">
                  For advanced users. Add custom CSS to override default styles.
                </p>
              </div>
              <div>
                <label htmlFor="font-selection" className="block text-sm font-medium text-gray-700 mb-1">
                  Font Selection
                </label>
                <select id="font-selection" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                  <option>System Default</option>
                  <option>Inter</option>
                  <option>Roboto</option>
                  <option>Open Sans</option>
                  <option>Lato</option>
                </select>
              </div>
              <div>
                <label htmlFor="border-radius" className="block text-sm font-medium text-gray-700 mb-1">
                  Border Radius
                </label>
                <div className="flex items-center">
                  <input type="range" id="border-radius" min="0" max="16" defaultValue="4" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
                  <span className="ml-2 text-sm text-gray-600">4px</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-700">
                    Export/Import Settings
                  </h4>
                  <p className="text-xs text-gray-500">
                    Save your theme or import from another practice
                  </p>
                </div>
                <div className="space-x-2">
                  <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Export
                  </button>
                  <button className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Import
                  </button>
                </div>
              </div>
            </div>
          </div>;
      default:
        return null;
    }
  };
  return <div className={splitView ? 'flex h-full' : ''}>
      <div className={splitView ? 'w-1/2 pr-2 overflow-auto' : 'w-full'}>
        <div className="mb-6">
          <div className="flex overflow-x-auto space-x-1 pb-2">
            <button onClick={() => setActiveTab('overview')} className={`px-3 py-2 text-sm font-medium rounded-md whitespace-nowrap ${activeTab === 'overview' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}>
              Overview
            </button>
            <button onClick={() => setActiveTab('colors')} className={`px-3 py-2 text-sm font-medium rounded-md flex items-center whitespace-nowrap ${activeTab === 'colors' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}>
              <div className="h-4 w-4 mr-1" />
              Colors
            </button>
            <button onClick={() => setActiveTab('logos')} className={`px-3 py-2 text-sm font-medium rounded-md flex items-center whitespace-nowrap ${activeTab === 'logos' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}>
              <ImageIcon className="h-4 w-4 mr-1" />
              Logos
            </button>
            <button onClick={() => setActiveTab('presets')} className={`px-3 py-2 text-sm font-medium rounded-md flex items-center whitespace-nowrap ${activeTab === 'presets' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}>
              <LayoutTemplateIcon className="h-4 w-4 mr-1" />
              Presets
            </button>
            <button onClick={() => setActiveTab('preview')} className={`px-3 py-2 text-sm font-medium rounded-md flex items-center whitespace-nowrap ${activeTab === 'preview' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}>
              <EyeIcon className="h-4 w-4 mr-1" />
              Preview
            </button>
            <button onClick={() => setActiveTab('advanced')} className={`px-3 py-2 text-sm font-medium rounded-md flex items-center whitespace-nowrap ${activeTab === 'advanced' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}>
              <CodeIcon className="h-4 w-4 mr-1" />
              Advanced
            </button>
          </div>
        </div>
        {renderTabContent()}
      </div>
      {splitView && <div className="w-1/2 pl-2 border-l border-gray-200">
          <LivePreview brandData={brandData} />
        </div>}
    </div>;
};