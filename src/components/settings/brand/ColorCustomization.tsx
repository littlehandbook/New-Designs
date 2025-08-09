import React, { useState } from 'react';
import { AlertCircleIcon, EyeOffIcon, EyeIcon, RefreshCwIcon } from 'lucide-react';
interface ColorProps {
  lightModeColors: Record<string, string>;
  darkModeColors: Record<string, string>;
  onUpdateColors: (mode: 'lightMode' | 'darkMode', colors: Record<string, string>) => void;
}
export const ColorCustomization: React.FC<ColorProps> = ({
  lightModeColors,
  darkModeColors,
  onUpdateColors
}) => {
  const [activeMode, setActiveMode] = useState<'lightMode' | 'darkMode'>('lightMode');
  const [recentColors, setRecentColors] = useState<string[]>([]);
  const [contrastWarnings, setContrastWarnings] = useState<Record<string, boolean>>({});
  const colorGroups = [{
    title: 'Brand Colors',
    colors: [{
      key: 'primary',
      label: 'Primary'
    }, {
      key: 'primaryHover',
      label: 'Primary Hover'
    }, {
      key: 'secondary',
      label: 'Secondary'
    }, {
      key: 'tertiary',
      label: 'Tertiary'
    }]
  }, {
    title: 'Interface Colors',
    colors: [{
      key: 'background',
      label: 'Background'
    }, {
      key: 'surface',
      label: 'Surface'
    }, {
      key: 'border',
      label: 'Border'
    }, {
      key: 'focus',
      label: 'Focus'
    }]
  }, {
    title: 'Text Colors',
    colors: [{
      key: 'textPrimary',
      label: 'Text Primary'
    }, {
      key: 'textSecondary',
      label: 'Text Secondary'
    }]
  }, {
    title: 'Status Colors',
    colors: [{
      key: 'success',
      label: 'Success'
    }, {
      key: 'warning',
      label: 'Warning'
    }, {
      key: 'error',
      label: 'Error'
    }, {
      key: 'info',
      label: 'Info'
    }]
  }];
  const handleColorChange = (key: string, value: string) => {
    const colors = activeMode === 'lightMode' ? lightModeColors : darkModeColors;
    const updatedColors = {
      ...colors,
      [key]: value
    };
    onUpdateColors(activeMode, {
      [key]: value
    });
    // Add to recent colors if not already there
    if (!recentColors.includes(value)) {
      setRecentColors(prev => [value, ...prev.slice(0, 7)]);
    }
    // Check contrast for text colors
    if (key.includes('text')) {
      const bgColor = key.includes('Primary') ? updatedColors.background : updatedColors.surface;
      const contrastRatio = getContrastRatio(value, bgColor);
      setContrastWarnings(prev => ({
        ...prev,
        [key]: contrastRatio < 4.5
      }));
    }
  };
  const getContrastRatio = (foreground: string, background: string) => {
    // This is a simplified version - a real implementation would convert to luminance values
    return 4.5; // Mock value - would calculate actual contrast in a real implementation
  };
  const copyFromLightToDark = () => {
    onUpdateColors('darkMode', lightModeColors);
  };
  const suggestComplementaryColors = () => {
    // In a real implementation, this would generate complementary colors
    // based on color theory and the current primary color
    const currentColors = activeMode === 'lightMode' ? lightModeColors : darkModeColors;
    const suggested = {
      ...currentColors
    };
    onUpdateColors(activeMode, suggested);
  };
  return <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium text-gray-900">
            Color Customization
          </h3>
          <div className="flex space-x-2">
            <button onClick={() => setActiveMode('lightMode')} className={`px-3 py-1.5 text-sm font-medium rounded-md ${activeMode === 'lightMode' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}>
              <EyeIcon className="h-4 w-4 inline mr-1" />
              Light Mode
            </button>
            <button onClick={() => setActiveMode('darkMode')} className={`px-3 py-1.5 text-sm font-medium rounded-md ${activeMode === 'darkMode' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}>
              <EyeOffIcon className="h-4 w-4 inline mr-1" />
              Dark Mode
            </button>
          </div>
        </div>
        <div className="space-y-6">
          {colorGroups.map(group => <div key={group.title}>
              <h4 className="text-sm font-medium text-gray-700 mb-3">
                {group.title}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {group.colors.map(color => {
              const currentColors = activeMode === 'lightMode' ? lightModeColors : darkModeColors;
              const colorValue = currentColors[color.key as keyof typeof currentColors] || '#000000';
              const hasWarning = contrastWarnings[color.key];
              return <div key={color.key} className="flex items-center">
                      <div className="w-8 h-8 rounded-md mr-3 border border-gray-200 overflow-hidden">
                        <div className="w-full h-full" style={{
                    backgroundColor: colorValue
                  }} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center">
                          <label htmlFor={`color-${color.key}`} className="block text-sm font-medium text-gray-700">
                            {color.label}
                          </label>
                          {hasWarning && <AlertCircleIcon className="h-4 w-4 text-amber-500 ml-1" title="Contrast warning" />}
                        </div>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <div className="relative flex items-stretch flex-grow focus-within:z-10">
                            <input type="text" name={`color-${color.key}`} id={`color-${color.key}`} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-l-md sm:text-sm border-gray-300" value={colorValue} onChange={e => handleColorChange(color.key, e.target.value)} />
                          </div>
                          <input type="color" className="-ml-px relative inline-flex items-center px-2 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500" value={colorValue} onChange={e => handleColorChange(color.key, e.target.value)} />
                        </div>
                      </div>
                    </div>;
            })}
              </div>
            </div>)}
        </div>
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h4 className="text-sm font-medium text-gray-700 mb-3">
            Recently Used Colors
          </h4>
          <div className="flex flex-wrap gap-2">
            {recentColors.map((color, index) => <button key={index} className="w-8 h-8 rounded-md border border-gray-200 overflow-hidden" style={{
            backgroundColor: color
          }} onClick={() => {
            // In a real implementation, this would open a color picker with this color
          }} title={color} />)}
            {recentColors.length === 0 && <div className="text-sm text-gray-500">No recent colors</div>}
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Advanced Color Options
        </h3>
        <div className="space-y-4">
          <button onClick={suggestComplementaryColors} className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <RefreshCwIcon className="h-4 w-4 mr-2" />
            Suggest Complementary Colors
          </button>
          {activeMode === 'darkMode' && <button onClick={copyFromLightToDark} className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Copy from Light Mode
            </button>}
          <div className="p-4 bg-amber-50 rounded-md border border-amber-100">
            <h4 className="text-sm font-medium text-amber-800 mb-1">
              Accessibility Check
            </h4>
            <p className="text-xs text-amber-700">
              Ensure your color choices meet WCAG 2.1 AA standards for contrast.
              Text should have a contrast ratio of at least 4.5:1 against its
              background.
            </p>
          </div>
        </div>
      </div>
    </div>;
};