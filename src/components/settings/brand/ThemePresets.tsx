import React, { useState } from 'react';
import { CheckIcon, StarIcon } from 'lucide-react';
interface ThemePresetsProps {
  currentTheme: string;
  onApplyPreset: (preset: any) => void;
}
export const ThemePresets: React.FC<ThemePresetsProps> = ({
  currentTheme,
  onApplyPreset
}) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showConfirmation, setShowConfirmation] = useState<string | null>(null);
  // Mock preset themes
  const presets = [{
    id: 'healthcare-blue',
    name: 'Healthcare Blue',
    category: 'healthcare',
    premium: false,
    usageCount: 1289,
    colors: ['#4f46e5', '#3b82f6', '#10b981', '#f59e0b'],
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
    }
  }, {
    id: 'wellness-green',
    name: 'Wellness Green',
    category: 'wellness',
    premium: false,
    usageCount: 945,
    colors: ['#059669', '#10b981', '#f59e0b', '#3b82f6'],
    lightMode: {
      primary: '#059669',
      primaryHover: '#047857',
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
      focus: '#34d399'
    },
    darkMode: {
      primary: '#10b981',
      primaryHover: '#059669',
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
      focus: '#34d399'
    }
  }, {
    id: 'therapy-lavender',
    name: 'Therapy Lavender',
    category: 'therapy',
    premium: true,
    usageCount: 782,
    colors: ['#8b5cf6', '#a78bfa', '#ec4899', '#3b82f6'],
    lightMode: {
      primary: '#8b5cf6',
      primaryHover: '#7c3aed',
      secondary: '#6b7280',
      tertiary: '#ec4899',
      background: '#f9fafb',
      surface: '#ffffff',
      textPrimary: '#111827',
      textSecondary: '#4b5563',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6',
      border: '#e5e7eb',
      focus: '#a78bfa'
    },
    darkMode: {
      primary: '#a78bfa',
      primaryHover: '#8b5cf6',
      secondary: '#9ca3af',
      tertiary: '#f472b6',
      background: '#111827',
      surface: '#1f2937',
      textPrimary: '#f9fafb',
      textSecondary: '#d1d5db',
      success: '#34d399',
      warning: '#fbbf24',
      error: '#f87171',
      info: '#60a5fa',
      border: '#374151',
      focus: '#a78bfa'
    }
  }, {
    id: 'modern-slate',
    name: 'Modern Slate',
    category: 'modern',
    premium: false,
    usageCount: 654,
    colors: ['#475569', '#64748b', '#94a3b8', '#3b82f6'],
    lightMode: {
      primary: '#475569',
      primaryHover: '#334155',
      secondary: '#64748b',
      tertiary: '#94a3b8',
      background: '#f8fafc',
      surface: '#ffffff',
      textPrimary: '#0f172a',
      textSecondary: '#334155',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6',
      border: '#e2e8f0',
      focus: '#94a3b8'
    },
    darkMode: {
      primary: '#64748b',
      primaryHover: '#475569',
      secondary: '#94a3b8',
      tertiary: '#cbd5e1',
      background: '#0f172a',
      surface: '#1e293b',
      textPrimary: '#f8fafc',
      textSecondary: '#cbd5e1',
      success: '#34d399',
      warning: '#fbbf24',
      error: '#f87171',
      info: '#60a5fa',
      border: '#334155',
      focus: '#94a3b8'
    }
  }, {
    id: 'classic-navy',
    name: 'Classic Navy',
    category: 'classic',
    premium: true,
    usageCount: 523,
    colors: ['#1e40af', '#3b82f6', '#f59e0b', '#10b981'],
    lightMode: {
      primary: '#1e40af',
      primaryHover: '#1e3a8a',
      secondary: '#6b7280',
      tertiary: '#3b82f6',
      background: '#f9fafb',
      surface: '#ffffff',
      textPrimary: '#111827',
      textSecondary: '#4b5563',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6',
      border: '#e5e7eb',
      focus: '#93c5fd'
    },
    darkMode: {
      primary: '#3b82f6',
      primaryHover: '#2563eb',
      secondary: '#9ca3af',
      tertiary: '#60a5fa',
      background: '#111827',
      surface: '#1f2937',
      textPrimary: '#f9fafb',
      textSecondary: '#d1d5db',
      success: '#34d399',
      warning: '#fbbf24',
      error: '#f87171',
      info: '#60a5fa',
      border: '#374151',
      focus: '#93c5fd'
    }
  }];
  const categories = [{
    id: 'all',
    name: 'All Themes'
  }, {
    id: 'healthcare',
    name: 'Healthcare'
  }, {
    id: 'wellness',
    name: 'Wellness'
  }, {
    id: 'therapy',
    name: 'Therapy'
  }, {
    id: 'modern',
    name: 'Modern'
  }, {
    id: 'classic',
    name: 'Classic'
  }];
  const filteredPresets = selectedCategory === 'all' ? presets : presets.filter(preset => preset.category === selectedCategory);
  const handlePresetClick = (preset: any) => {
    setShowConfirmation(preset.id);
  };
  const confirmApplyPreset = (preset: any) => {
    onApplyPreset(preset);
    setShowConfirmation(null);
  };
  return <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Theme Presets
        </h3>
        <div className="mb-6">
          <div className="flex overflow-x-auto space-x-2 pb-2">
            {categories.map(category => <button key={category.id} onClick={() => setSelectedCategory(category.id)} className={`px-3 py-2 text-sm font-medium rounded-md whitespace-nowrap ${selectedCategory === category.id ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}>
                {category.name}
              </button>)}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPresets.map(preset => <div key={preset.id} className={`border rounded-lg overflow-hidden hover:shadow-md transition-shadow ${currentTheme === preset.name ? 'border-indigo-500' : 'border-gray-200'}`}>
              <div className="h-24 relative">
                <div className="absolute inset-0 grid grid-cols-4">
                  {preset.colors.map((color, index) => <div key={index} style={{
                backgroundColor: color
              }} />)}
                </div>
                {preset.premium && <div className="absolute top-2 right-2 bg-amber-100 text-amber-800 text-xs font-medium px-2 py-1 rounded-full flex items-center">
                    <StarIcon className="h-3 w-3 mr-1" />
                    Premium
                  </div>}
                {currentTheme === preset.name && <div className="absolute bottom-2 left-2 bg-white text-indigo-600 text-xs font-medium px-2 py-1 rounded-full flex items-center">
                    <CheckIcon className="h-3 w-3 mr-1" />
                    Active
                  </div>}
              </div>
              <div className="p-4 bg-white">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-sm font-medium text-gray-900">
                    {preset.name}
                  </h4>
                  <span className="text-xs text-gray-500">
                    {preset.usageCount} uses
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 capitalize">
                    {preset.category}
                  </span>
                  <button onClick={() => handlePresetClick(preset)} className={`text-xs font-medium px-2 py-1 rounded ${currentTheme === preset.name ? 'text-gray-500 bg-gray-100' : 'text-indigo-600 bg-indigo-50 hover:bg-indigo-100'}`} disabled={currentTheme === preset.name}>
                    {currentTheme === preset.name ? 'Applied' : 'Apply'}
                  </button>
                </div>
              </div>
              {showConfirmation === preset.id && <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center p-4">
                  <div className="bg-white p-4 rounded-lg shadow-lg max-w-xs">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">
                      Apply this theme?
                    </h4>
                    <p className="text-xs text-gray-500 mb-4">
                      This will override your current color settings. You can
                      still customize individual colors after applying.
                    </p>
                    <div className="flex space-x-2">
                      <button onClick={() => setShowConfirmation(null)} className="flex-1 px-3 py-2 text-xs font-medium rounded border border-gray-300 text-gray-700 hover:bg-gray-50">
                        Cancel
                      </button>
                      <button onClick={() => confirmApplyPreset(preset)} className="flex-1 px-3 py-2 text-xs font-medium rounded bg-indigo-600 text-white hover:bg-indigo-700">
                        Apply Theme
                      </button>
                    </div>
                  </div>
                </div>}
            </div>)}
        </div>
      </div>
    </div>;
};