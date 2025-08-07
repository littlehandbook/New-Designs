import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="flex items-center">
              <img src="/ChatGPT_Image_Aug_5%2C_2025%2C_04_20_37_PM.png" alt="The Practitioner Portal Logo" className="h-8 w-auto mr-2" />
              <div className="text-2xl font-bold text-indigo-600">
                The Practitioner Portal
              </div>
            </div>
          </div>
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
              Features
            </a>
            <a href="#security" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
              Security
            </a>
            <a href="#users" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
              For Practitioners
            </a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">
              Pricing
            </a>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">
              Sign in
            </a>
            <a href="#" className="bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700">
              Get Started
            </a>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-700 focus:outline-none">
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">
              Features
            </a>
            <a href="#security" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">
              Security
            </a>
            <a href="#users" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">
              For Practitioners
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50">
              Pricing
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-indigo-600 hover:text-indigo-800">
              Sign in
            </a>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium bg-indigo-600 text-white hover:bg-indigo-700">
              Get Started
            </a>
          </div>
        </div>}
    </header>;
};