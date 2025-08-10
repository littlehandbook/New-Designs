import React, { useEffect, useState } from 'react';
import { XIcon, CreditCardIcon, DollarSignIcon, FileTextIcon, HeartPulseIcon, BarChart4Icon, PercentIcon, PaintBucketIcon, ZapIcon, UsersIcon, BellIcon, ShieldIcon, CheckIcon, AlertTriangleIcon, XCircleIcon, LockIcon, InfoIcon } from 'lucide-react';
interface FinanceSettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}
export const FinanceSettingsPanel: React.FC<FinanceSettingsPanelProps> = ({
  isOpen,
  onClose
}) => {
  const [activeSection, setActiveSection] = useState('payment-processing');
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  // Handle animation timing
  useEffect(() => {
    if (isOpen && !isVisible) {
      setIsVisible(true);
      setIsAnimatingOut(false);
      setIsAnimatingIn(true);
      // Use requestAnimationFrame to ensure the DOM has updated before starting the animation
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimatingIn(false);
        });
      });
    } else if (!isOpen && isVisible) {
      setIsAnimatingOut(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 300); // Match this duration with the CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isOpen, isVisible]);
  // If not open and not animating, don't render anything
  if (!isVisible) return null;
  // Handle close with animation
  const handleClose = () => {
    if (unsavedChanges) {
      if (window.confirm('You have unsaved changes. Are you sure you want to close?')) {
        setIsAnimatingOut(true);
        const timer = setTimeout(() => {
          onClose();
        }, 300);
        return () => clearTimeout(timer);
      }
    } else {
      setIsAnimatingOut(true);
      const timer = setTimeout(() => {
        onClose();
      }, 300);
      return () => clearTimeout(timer);
    }
  };
  // Status indicator component
  const StatusIndicator = ({
    status
  }: {
    status: 'active' | 'warning' | 'error' | 'locked';
  }) => {
    switch (status) {
      case 'active':
        return <span className="inline-flex items-center">
            <span className="h-2 w-2 rounded-full bg-green-500 mr-1"></span>
            <span className="text-green-600 text-xs font-medium">Active</span>
          </span>;
      case 'warning':
        return <span className="inline-flex items-center">
            <span className="h-2 w-2 rounded-full bg-yellow-500 mr-1"></span>
            <span className="text-yellow-600 text-xs font-medium">
              Attention
            </span>
          </span>;
      case 'error':
        return <span className="inline-flex items-center">
            <span className="h-2 w-2 rounded-full bg-red-500 mr-1"></span>
            <span className="text-red-600 text-xs font-medium">Error</span>
          </span>;
      case 'locked':
        return <span className="inline-flex items-center">
            <LockIcon className="h-3 w-3 text-gray-500 mr-1" />
            <span className="text-gray-600 text-xs font-medium">Locked</span>
          </span>;
      default:
        return null;
    }
  };
  // Toggle switch component
  const ToggleSwitch = ({
    id,
    checked,
    onChange,
    label
  }: {
    id: string;
    checked: boolean;
    onChange: () => void;
    label?: string;
  }) => <div className="flex items-center">
      {label && <label htmlFor={id} className="mr-3 text-sm font-medium text-gray-700 cursor-pointer">
          {label}
        </label>}
      <div className="relative inline-block w-10 h-6 transition duration-200 ease-in-out">
        <input type="checkbox" id={id} checked={checked} onChange={onChange} className="absolute w-0 h-0 opacity-0" />
        <label htmlFor={id} className={`block overflow-hidden h-6 rounded-full cursor-pointer transition-colors duration-200 ease-in-out ${checked ? 'bg-indigo-600' : 'bg-gray-300'}`}>
          <span className={`block h-6 w-6 rounded-full bg-white shadow transform transition-transform duration-200 ease-in-out ${checked ? 'translate-x-4' : 'translate-x-0'}`}></span>
        </label>
      </div>
    </div>;
  return <div className="fixed inset-0 z-[9999] overflow-hidden">
      {/* Overlay */}
      <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${isAnimatingOut ? 'opacity-0' : 'bg-opacity-50'}`} onClick={handleClose} />
      {/* Panel */}
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className={`w-screen max-w-4xl h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${isAnimatingOut ? 'translate-x-full' : isAnimatingIn ? 'translate-x-full' : 'translate-x-0'}`}>
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white">
              <h2 className="text-xl font-semibold text-gray-900">
                Finance Settings
              </h2>
              <button onClick={handleClose} className="p-2 rounded-md text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <XIcon className="h-5 w-5" />
              </button>
            </div>
            {/* Content */}
            <div className="flex-1 flex overflow-hidden">
              {/* Left Sidebar */}
              <div className="w-64 border-r border-gray-200 bg-white overflow-y-auto">
                <nav className="px-2 py-4">
                  <div className="space-y-1">
                    <button onClick={() => setActiveSection('payment-processing')} className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeSection === 'payment-processing' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}`}>
                      <CreditCardIcon className={`mr-3 h-5 w-5 ${activeSection === 'payment-processing' ? 'text-indigo-500' : 'text-gray-400'}`} />
                      Payment Processing
                    </button>
                    <button onClick={() => setActiveSection('rates-fees')} className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeSection === 'rates-fees' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}`}>
                      <DollarSignIcon className={`mr-3 h-5 w-5 ${activeSection === 'rates-fees' ? 'text-indigo-500' : 'text-gray-400'}`} />
                      Rates & Fees
                    </button>
                    <button onClick={() => setActiveSection('payment-policies')} className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeSection === 'payment-policies' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}`}>
                      <FileTextIcon className={`mr-3 h-5 w-5 ${activeSection === 'payment-policies' ? 'text-indigo-500' : 'text-gray-400'}`} />
                      Payment Policies
                    </button>
                    <button onClick={() => setActiveSection('insurance-setup')} className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeSection === 'insurance-setup' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}`}>
                      <HeartPulseIcon className={`mr-3 h-5 w-5 ${activeSection === 'insurance-setup' ? 'text-indigo-500' : 'text-gray-400'}`} />
                      Insurance Setup
                    </button>
                    <button onClick={() => setActiveSection('accounting-integration')} className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeSection === 'accounting-integration' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}`}>
                      <BarChart4Icon className={`mr-3 h-5 w-5 ${activeSection === 'accounting-integration' ? 'text-indigo-500' : 'text-gray-400'}`} />
                      Accounting Integration
                    </button>
                    <button onClick={() => setActiveSection('tax-configuration')} className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeSection === 'tax-configuration' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}`}>
                      <PercentIcon className={`mr-3 h-5 w-5 ${activeSection === 'tax-configuration' ? 'text-indigo-500' : 'text-gray-400'}`} />
                      Tax Configuration
                    </button>
                    <button onClick={() => setActiveSection('templates-branding')} className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeSection === 'templates-branding' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}`}>
                      <PaintBucketIcon className={`mr-3 h-5 w-5 ${activeSection === 'templates-branding' ? 'text-indigo-500' : 'text-gray-400'}`} />
                      Templates & Branding
                    </button>
                    <button onClick={() => setActiveSection('automation-rules')} className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeSection === 'automation-rules' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}`}>
                      <ZapIcon className={`mr-3 h-5 w-5 ${activeSection === 'automation-rules' ? 'text-indigo-500' : 'text-gray-400'}`} />
                      Automation Rules
                    </button>
                    <button onClick={() => setActiveSection('client-portal-options')} className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeSection === 'client-portal-options' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}`}>
                      <UsersIcon className={`mr-3 h-5 w-5 ${activeSection === 'client-portal-options' ? 'text-indigo-500' : 'text-gray-400'}`} />
                      Client Portal Options
                    </button>
                    <button onClick={() => setActiveSection('notifications')} className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeSection === 'notifications' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}`}>
                      <BellIcon className={`mr-3 h-5 w-5 ${activeSection === 'notifications' ? 'text-indigo-500' : 'text-gray-400'}`} />
                      Notifications
                    </button>
                    <button onClick={() => setActiveSection('compliance-security')} className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${activeSection === 'compliance-security' ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}`}>
                      <ShieldIcon className={`mr-3 h-5 w-5 ${activeSection === 'compliance-security' ? 'text-indigo-500' : 'text-gray-400'}`} />
                      Compliance & Security
                    </button>
                  </div>
                </nav>
              </div>
              {/* Main Content */}
              <div className="flex-1 overflow-y-auto bg-gray-50 relative">
                <div className="p-6">
                  {/* Payment Processing */}
                  {activeSection === 'payment-processing' && <div className="space-y-8">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-4">
                          Payment Gateway Configuration
                        </h3>
                        <div className="bg-white shadow-sm rounded-md p-4 border border-gray-200">
                          <div className="mb-6">
                            <div className="text-sm font-medium text-gray-700 mb-2">
                              Primary Processor
                            </div>
                            <div className="space-y-3">
                              <div className="flex items-center">
                                <input id="stripe" name="payment-processor" type="radio" checked={true} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300" />
                                <label htmlFor="stripe" className="ml-3 block text-sm font-medium text-gray-700">
                                  Stripe
                                  <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-800">
                                    <CheckIcon className="h-3 w-3 mr-1" />
                                    Connected
                                  </span>
                                </label>
                              </div>
                              <div className="ml-7 bg-gray-50 p-3 rounded-md border border-gray-200">
                                <div className="grid grid-cols-2 gap-4 mb-3">
                                  <div>
                                    <div className="text-xs text-gray-500">
                                      Account
                                    </div>
                                    <div className="text-sm text-gray-700">
                                      acct_1234...XXXX
                                    </div>
                                  </div>
                                  <div>
                                    <div className="text-xs text-gray-500">
                                      Mode
                                    </div>
                                    <select className="mt-1 block w-full pl-3 pr-10 py-1 text-sm border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md">
                                      <option>Live</option>
                                      <option>Test</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mb-3">
                                  <div>
                                    <div className="text-xs text-gray-500">
                                      Connected
                                    </div>
                                    <div className="text-sm text-gray-700">
                                      Jan 15, 2024
                                    </div>
                                  </div>
                                </div>
                                <div className="flex space-x-2">
                                  <button className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Test Connection
                                  </button>
                                  <button className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    View in Stripe
                                  </button>
                                  <button className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                    Disconnect
                                  </button>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <input id="square" name="payment-processor" type="radio" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300" />
                                <label htmlFor="square" className="ml-3 block text-sm font-medium text-gray-700">
                                  Square
                                </label>
                              </div>
                              <div className="ml-7">
                                <button className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                  Connect Square
                                </button>
                              </div>
                              <div className="flex items-center">
                                <input id="paypal" name="payment-processor" type="radio" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300" />
                                <label htmlFor="paypal" className="ml-3 block text-sm font-medium text-gray-700">
                                  PayPal
                                </label>
                              </div>
                              <div className="ml-7">
                                <button className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                  Connect PayPal
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="mb-6">
                            <div className="text-sm font-medium text-gray-700 mb-3">
                              Processing Settings
                            </div>
                            <div className="space-y-3 ml-1">
                              <div className="flex items-center">
                                <input id="enable-ach" name="enable-ach" type="checkbox" checked={true} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                <label htmlFor="enable-ach" className="ml-3 block text-sm text-gray-700">
                                  Enable ACH/Bank transfers (1% fee, $5 cap)
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input id="accept-cards" name="accept-cards" type="checkbox" checked={true} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                <label htmlFor="accept-cards" className="ml-3 block text-sm text-gray-700">
                                  Accept credit/debit cards
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input id="saved-payment" name="saved-payment" type="checkbox" checked={true} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                <label htmlFor="saved-payment" className="ml-3 block text-sm text-gray-700">
                                  Allow saved payment methods
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input id="crypto" name="crypto" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                <label htmlFor="crypto" className="ml-3 block text-sm text-gray-700">
                                  Accept cryptocurrency
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input id="digital-wallets" name="digital-wallets" type="checkbox" checked={true} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                <label htmlFor="digital-wallets" className="ml-3 block text-sm text-gray-700">
                                  Enable digital wallets (Apple Pay, Google Pay)
                                </label>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-700 mb-3">
                              Fee Handling
                            </div>
                            <div className="space-y-3">
                              <div className="flex items-center">
                                <input id="pass-fees" name="fee-handling" type="radio" checked={true} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300" />
                                <label htmlFor="pass-fees" className="ml-3 block text-sm font-medium text-gray-700">
                                  Pass fees to client (+2.9% + $0.30)
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input id="absorb-fees" name="fee-handling" type="radio" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300" />
                                <label htmlFor="absorb-fees" className="ml-3 block text-sm font-medium text-gray-700">
                                  Practice absorbs all fees
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input id="custom-fees" name="fee-handling" type="radio" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300" />
                                <label htmlFor="custom-fees" className="ml-3 block text-sm font-medium text-gray-700">
                                  Custom:
                                </label>
                                <input type="text" className="ml-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-16 sm:text-sm border-gray-300 rounded-md" placeholder="0.0" />
                                <span className="ml-1 text-sm text-gray-500">
                                  %
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-4">
                          Merchant Account Details
                        </h3>
                        <div className="bg-white shadow-sm rounded-md p-4 border border-gray-200">
                          <div className="mb-6">
                            <div className="text-sm font-medium text-gray-700 mb-3">
                              Business Information
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label htmlFor="legal-name" className="block text-xs font-medium text-gray-700">
                                  Legal Name
                                </label>
                                <input type="text" id="legal-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" defaultValue="City Wellness Clinic LLC" />
                              </div>
                              <div>
                                <label htmlFor="dba" className="block text-xs font-medium text-gray-700">
                                  DBA
                                </label>
                                <input type="text" id="dba" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" defaultValue="City Wellness" />
                              </div>
                              <div>
                                <label htmlFor="tax-id" className="block text-xs font-medium text-gray-700">
                                  Tax ID
                                </label>
                                <input type="text" id="tax-id" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" defaultValue="XX-XXXXXXX" />
                              </div>
                              <div>
                                <label htmlFor="mcc" className="block text-xs font-medium text-gray-700">
                                  MCC Code
                                </label>
                                <input type="text" id="mcc" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" defaultValue="8099 - Medical Services" />
                              </div>
                            </div>
                          </div>
                          <div className="mb-6">
                            <div className="text-sm font-medium text-gray-700 mb-3">
                              Bank Account (for deposits)
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                              <div>
                                <label htmlFor="bank" className="block text-xs font-medium text-gray-700">
                                  Bank
                                </label>
                                <input type="text" id="bank" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" defaultValue="Chase" />
                              </div>
                              <div>
                                <label htmlFor="account" className="block text-xs font-medium text-gray-700">
                                  Account
                                </label>
                                <input type="text" id="account" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" defaultValue="****4567" />
                              </div>
                              <div>
                                <label htmlFor="routing" className="block text-xs font-medium text-gray-700">
                                  Routing
                                </label>
                                <input type="text" id="routing" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" defaultValue="****8901" />
                              </div>
                            </div>
                            <div className="mt-3">
                              <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Update Banking
                              </button>
                            </div>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-700 mb-3">
                              Payout Schedule
                            </div>
                            <div className="space-y-3">
                              <div className="flex items-center">
                                <input id="daily" name="payout-schedule" type="radio" checked={true} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300" />
                                <label htmlFor="daily" className="ml-3 block text-sm font-medium text-gray-700">
                                  Daily (T+2)
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input id="weekly" name="payout-schedule" type="radio" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300" />
                                <label htmlFor="weekly" className="ml-3 block text-sm font-medium text-gray-700">
                                  Weekly
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input id="monthly" name="payout-schedule" type="radio" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300" />
                                <label htmlFor="monthly" className="ml-3 block text-sm font-medium text-gray-700">
                                  Monthly
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>}
                  {/* Rates & Fees */}
                  {activeSection === 'rates-fees' && <div className="space-y-8">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-4">
                          Service Rate Configuration
                        </h3>
                        <div className="bg-white shadow-sm rounded-md p-4 border border-gray-200">
                          <div className="mb-6">
                            <div className="text-sm font-medium text-gray-700 mb-3">
                              Standard Session Rates
                            </div>
                            <div className="overflow-hidden border border-gray-200 rounded-md mb-4">
                              <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                  <tr>
                                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      Service Type
                                    </th>
                                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      Duration
                                    </th>
                                    <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                      Rate
                                    </th>
                                  </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                  <tr>
                                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                                      Initial Consultation
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                                      90 min
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                                      <div className="flex items-center">
                                        <span className="text-gray-500 mr-1">
                                          $
                                        </span>
                                        <input type="text" className="w-16 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" defaultValue="250" />
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                                      Individual Session
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                                      60 min
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                                      <div className="flex items-center">
                                        <span className="text-gray-500 mr-1">
                                          $
                                        </span>
                                        <input type="text" className="w-16 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" defaultValue="180" />
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                                      Individual Session
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                                      45 min
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                                      <div className="flex items-center">
                                        <span className="text-gray-500 mr-1">
                                          $
                                        </span>
                                        <input type="text" className="w-16 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" defaultValue="150" />
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                                      Couples Session
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                                      75 min
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                                      <div className="flex items-center">
                                        <span className="text-gray-500 mr-1">
                                          $
                                        </span>
                                        <input type="text" className="w-16 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" defaultValue="220" />
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                                      Group Session
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                                      90 min
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                                      <div className="flex items-center">
                                        <span className="text-gray-500 mr-1">
                                          $
                                        </span>
                                        <input type="text" className="w-16 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" defaultValue="75" />
                                      </div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                                      Teletherapy
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">
                                      60 min
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900">
                                      <div className="flex items-center">
                                        <span className="text-gray-500 mr-1">
                                          $
                                        </span>
                                        <input type="text" className="w-16 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" defaultValue="160" />
                                      </div>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                            <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                              + Add Service Type
                            </button>
                          </div>
                          <div className="mb-6">
                            <div className="text-sm font-medium text-gray-700 mb-3">
                              CPT Code Mapping
                            </div>
                            <div className="space-y-2 mb-3">
                              <div className="flex items-center">
                                <div className="w-16 text-sm font-medium text-gray-700">
                                  90834
                                </div>
                                <div className="text-sm text-gray-500">
                                  → 45-min Individual
                                </div>
                              </div>
                              <div className="flex items-center">
                                <div className="w-16 text-sm font-medium text-gray-700">
                                  90837
                                </div>
                                <div className="text-sm text-gray-500">
                                  → 60-min Individual
                                </div>
                              </div>
                              <div className="flex items-center">
                                <div className="w-16 text-sm font-medium text-gray-700">
                                  90847
                                </div>
                                <div className="text-sm text-gray-500">
                                  → Couples/Family
                                </div>
                              </div>
                            </div>
                            <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                              Manage CPT Codes
                            </button>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-700 mb-3">
                              Sliding Scale Settings
                            </div>
                            <div className="flex items-center mb-3">
                              <input id="sliding-scale" name="sliding-scale" type="checkbox" checked={true} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                              <label htmlFor="sliding-scale" className="ml-3 block text-sm text-gray-700">
                                Enable sliding scale pricing
                              </label>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label htmlFor="min-rate" className="block text-xs font-medium text-gray-700">
                                  Minimum Rate
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                    $
                                  </span>
                                  <input type="text" id="min-rate" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" defaultValue="80" />
                                </div>
                                <p className="mt-1 text-xs text-gray-500">
                                  44% of standard
                                </p>
                              </div>
                              <div>
                                <label htmlFor="approval" className="block text-xs font-medium text-gray-700">
                                  Requires Approval
                                </label>
                                <select id="approval" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                                  <option>Practice Admin</option>
                                  <option>Practitioner</option>
                                  <option>Billing Admin</option>
                                  <option>No Approval</option>
                                </select>
                              </div>
                              <div>
                                <label htmlFor="verification" className="block text-xs font-medium text-gray-700">
                                  Income Verification
                                </label>
                                <select id="verification" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                                  <option>Required</option>
                                  <option>Optional</option>
                                  <option>Not Required</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-4">
                          Additional Fees
                        </h3>
                        <div className="bg-white shadow-sm rounded-md p-4 border border-gray-200">
                          <div className="mb-6">
                            <div className="text-sm font-medium text-gray-700 mb-3">
                              Administrative Fees
                            </div>
                            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                              <div>
                                <label htmlFor="late-payment" className="block text-xs font-medium text-gray-700">
                                  Late Payment Fee
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                    $
                                  </span>
                                  <input type="text" id="late-payment" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none sm:text-sm border-gray-300" defaultValue="25" />
                                  <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm whitespace-nowrap">
                                    after
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-end">
                                <div className="flex rounded-md shadow-sm">
                                  <input type="text" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-l-md sm:text-sm border-gray-300" defaultValue="30" />
                                  <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                    days
                                  </span>
                                </div>
                              </div>
                              <div>
                                <label htmlFor="nsf-fee" className="block text-xs font-medium text-gray-700">
                                  NSF/Returned Check
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                    $
                                  </span>
                                  <input type="text" id="nsf-fee" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-r-md sm:text-sm border-gray-300" defaultValue="35" />
                                </div>
                              </div>
                              <div>
                                <label htmlFor="no-show" className="block text-xs font-medium text-gray-700">
                                  No-Show Fee
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                  <input type="text" id="no-show" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-l-md sm:text-sm border-gray-300" defaultValue="100" />
                                  <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                    % of session rate
                                  </span>
                                </div>
                              </div>
                              <div>
                                <label htmlFor="late-cancel" className="block text-xs font-medium text-gray-700">
                                  Late Cancellation (&lt;24hr)
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                  <input type="text" id="late-cancel" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-l-md sm:text-sm border-gray-300" defaultValue="50" />
                                  <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                    % of rate
                                  </span>
                                </div>
                              </div>
                              <div>
                                <label htmlFor="records-fee" className="block text-xs font-medium text-gray-700">
                                  Records Request
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                    $
                                  </span>
                                  <input type="text" id="records-fee" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none sm:text-sm border-gray-300" defaultValue="25" />
                                  <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm whitespace-nowrap">
                                    + $0.50/page
                                  </span>
                                </div>
                              </div>
                              <div>
                                <label htmlFor="form-fee" className="block text-xs font-medium text-gray-700">
                                  Form Completion
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                    $
                                  </span>
                                  <input type="text" id="form-fee" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-r-md sm:text-sm border-gray-300" defaultValue="15" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-700 mb-3">
                              Package Discounts
                            </div>
                            <div className="flex items-center mb-3">
                              <input id="enable-packages" name="enable-packages" type="checkbox" checked={true} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                              <label htmlFor="enable-packages" className="ml-3 block text-sm text-gray-700">
                                Enable session packages
                              </label>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label htmlFor="five-session" className="block text-xs font-medium text-gray-700">
                                  5-session
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                  <input type="text" id="five-session" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-l-md sm:text-sm border-gray-300" defaultValue="5" />
                                  <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                    % discount
                                  </span>
                                </div>
                              </div>
                              <div>
                                <label htmlFor="ten-session" className="block text-xs font-medium text-gray-700">
                                  10-session
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                  <input type="text" id="ten-session" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-l-md sm:text-sm border-gray-300" defaultValue="10" />
                                  <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                    % discount
                                  </span>
                                </div>
                              </div>
                              <div>
                                <label htmlFor="twenty-session" className="block text-xs font-medium text-gray-700">
                                  20-session
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                  <input type="text" id="twenty-session" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-l-md sm:text-sm border-gray-300" defaultValue="15" />
                                  <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                    % discount
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>}
                  {/* Payment Policies */}
                  {activeSection === 'payment-policies' && <div className="space-y-8">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-4">
                          Payment Terms
                        </h3>
                        <div className="bg-white shadow-sm rounded-md p-4 border border-gray-200">
                          <div className="mb-6">
                            <div className="text-sm font-medium text-gray-700 mb-3">
                              Payment Due
                            </div>
                            <div className="space-y-3">
                              <div className="flex items-center">
                                <input id="time-of-service" name="payment-due" type="radio" checked={true} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300" />
                                <label htmlFor="time-of-service" className="ml-3 block text-sm font-medium text-gray-700">
                                  At time of service
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input id="net-terms" name="payment-due" type="radio" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300" />
                                <label htmlFor="net-terms" className="ml-3 block text-sm font-medium text-gray-700">
                                  Within
                                </label>
                                <input type="text" className="ml-2 w-12 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="30" />
                                <span className="ml-2 text-sm text-gray-500">
                                  days (NET terms)
                                </span>
                              </div>
                              <div className="flex items-center">
                                <input id="monthly-billing" name="payment-due" type="radio" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300" />
                                <label htmlFor="monthly-billing" className="ml-3 block text-sm font-medium text-gray-700">
                                  Monthly billing cycle (day
                                </label>
                                <input type="text" className="ml-2 w-12 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="1" />
                                <span className="ml-1 text-sm text-gray-500">
                                  )
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="mb-6">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label htmlFor="grace-period" className="block text-sm font-medium text-gray-700">
                                  Grace Period
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                  <input type="text" id="grace-period" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-l-md sm:text-sm border-gray-300" defaultValue="5" />
                                  <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                    days
                                  </span>
                                </div>
                              </div>
                              <div>
                                <label htmlFor="after-grace" className="block text-sm font-medium text-gray-700">
                                  After Grace Period
                                </label>
                                <select id="after-grace" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                                  <option>Add late fee</option>
                                  <option>Send reminder</option>
                                  <option>Both</option>
                                  <option>No action</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-700 mb-3">
                              Accepted Payment Methods
                            </div>
                            <div className="space-y-3 ml-1">
                              <div className="flex items-center">
                                <input id="credit-cards" name="credit-cards" type="checkbox" checked={true} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                <label htmlFor="credit-cards" className="ml-3 block text-sm text-gray-700">
                                  Credit/Debit Cards
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input id="ach" name="ach" type="checkbox" checked={true} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                <label htmlFor="ach" className="ml-3 block text-sm text-gray-700">
                                  ACH/Bank Transfer
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input id="cash" name="cash" type="checkbox" checked={true} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                <label htmlFor="cash" className="ml-3 block text-sm text-gray-700">
                                  Cash (in-person only)
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input id="check" name="check" type="checkbox" checked={true} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                <label htmlFor="check" className="ml-3 block text-sm text-gray-700">
                                  Check
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input id="hsa-fsa" name="hsa-fsa" type="checkbox" checked={true} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                <label htmlFor="hsa-fsa" className="ml-3 block text-sm text-gray-700">
                                  HSA/FSA Cards
                                </label>
                              </div>
                              <div className="flex items-center">
                                <input id="payment-plans" name="payment-plans" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                <label htmlFor="payment-plans" className="ml-3 block text-sm text-gray-700">
                                  Payment Plans (configure below)
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900 mb-4">
                          Cancellation & Refund Policy
                        </h3>
                        <div className="bg-white shadow-sm rounded-md p-4 border border-gray-200">
                          <div className="mb-6">
                            <div className="text-sm font-medium text-gray-700 mb-3">
                              Cancellation Windows
                            </div>
                            <div className="space-y-3">
                              <div className="flex items-center">
                                <div className="w-24 text-sm font-medium text-gray-700">
                                  &gt;48 hours:
                                </div>
                                <div className="text-sm text-gray-700">
                                  No charge
                                </div>
                              </div>
                              <div className="flex items-center">
                                <div className="w-24 text-sm font-medium text-gray-700">
                                  24-48 hours:
                                </div>
                                <div className="flex items-center">
                                  <span className="text-gray-500 mr-1">$</span>
                                  <input type="text" className="w-16 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" defaultValue="0" />
                                  <span className="mx-2 text-sm text-gray-500">
                                    or
                                  </span>
                                  <input type="text" className="w-16 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" defaultValue="0" />
                                  <span className="ml-1 text-sm text-gray-500">
                                    %
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <div className="w-24 text-sm font-medium text-gray-700">
                                  &lt;24 hours:
                                </div>
                                <div className="flex items-center">
                                  <span className="text-gray-500 mr-1">$</span>
                                  <input type="text" className="w-16 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" defaultValue="75" />
                                  <span className="mx-2 text-sm text-gray-500">
                                    or
                                  </span>
                                  <input type="text" className="w-16 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" defaultValue="50" />
                                  <span className="ml-1 text-sm text-gray-500">
                                    %
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center">
                                <div className="w-24 text-sm font-medium text-gray-700">
                                  No-show:
                                </div>
                                <div className="flex items-center">
                                  <span className="text-gray-500 mr-1">$</span>
                                  <input type="text" className="w-16 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" defaultValue="180" />
                                  <span className="mx-2 text-sm text-gray-500">
                                    or
                                  </span>
                                  <input type="text" className="w-16 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" defaultValue="100" />
                                  <span className="ml-1 text-sm text-gray-500">
                                    %
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mb-6">
                            <div className="text-sm font-medium text-gray-700 mb-3">
                              Refund Policy
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                              <div>
                                <label htmlFor="processing-time" className="block text-xs font-medium text-gray-700">
                                  Processing Time
                                </label>
                                <input type="text" id="processing-time" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" defaultValue="3-5 business days" />
                              </div>
                              <div>
                                <label htmlFor="refund-method" className="block text-xs font-medium text-gray-700">
                                  Refund Method
                                </label>
                                <select id="refund-method" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                                  <option>Original payment</option>
                                  <option>Credit to account</option>
                                  <option>Check</option>
                                </select>
                              </div>
                              <div>
                                <label htmlFor="admin-fee" className="block text-xs font-medium text-gray-700">
                                  Admin Fee
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                    $
                                  </span>
                                  <input type="text" id="admin-fee" className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-r-md sm:text-sm border-gray-300" defaultValue="0" />
                                </div>
                              </div>
                            </div>
                            <div>
                              <label htmlFor="policy-text" className="block text-xs font-medium text-gray-700">
                                Policy Text (client-facing)
                              </label>
                              <div className="mt-1">
                                <textarea id="policy-text" rows={4} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Enter your refund policy text here..."></textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>}
                  {/* Placeholder for other sections */}
                  {activeSection === 'insurance-setup' && <div className="bg-white p-6 rounded-md shadow-sm">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">
                        Insurance Setup
                      </h3>
                      <p className="text-gray-600">
                        Configure your insurance providers, credentials, and
                        claims settings.
                      </p>
                      <div className="mt-4 p-4 bg-gray-50 rounded-md border border-gray-200 text-center">
                        <p className="text-sm text-gray-500">
                          This section is under development.
                        </p>
                      </div>
                    </div>}
                  {activeSection === 'accounting-integration' && <div className="bg-white p-6 rounded-md shadow-sm">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">
                        Accounting Integration
                      </h3>
                      <p className="text-gray-600">
                        Connect your accounting software and configure
                        synchronization settings.
                      </p>
                      <div className="mt-4 p-4 bg-gray-50 rounded-md border border-gray-200 text-center">
                        <p className="text-sm text-gray-500">
                          This section is under development.
                        </p>
                      </div>
                    </div>}
                  {activeSection === 'tax-configuration' && <div className="bg-white p-6 rounded-md shadow-sm">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">
                        Tax Configuration
                      </h3>
                      <p className="text-gray-600">
                        Configure tax settings, rates, and reporting.
                      </p>
                      <div className="mt-4 p-4 bg-gray-50 rounded-md border border-gray-200 text-center">
                        <p className="text-sm text-gray-500">
                          This section is under development.
                        </p>
                      </div>
                    </div>}
                  {activeSection === 'templates-branding' && <div className="bg-white p-6 rounded-md shadow-sm">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">
                        Templates & Branding
                      </h3>
                      <p className="text-gray-600">
                        Customize invoice templates, receipts, and other
                        financial documents.
                      </p>
                      <div className="mt-4 p-4 bg-gray-50 rounded-md border border-gray-200 text-center">
                        <p className="text-sm text-gray-500">
                          This section is under development.
                        </p>
                      </div>
                    </div>}
                  {activeSection === 'automation-rules' && <div className="bg-white p-6 rounded-md shadow-sm">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">
                        Automation Rules
                      </h3>
                      <p className="text-gray-600">
                        Set up automatic payment processing, reminders, and
                        communication rules.
                      </p>
                      <div className="mt-4 p-4 bg-gray-50 rounded-md border border-gray-200 text-center">
                        <p className="text-sm text-gray-500">
                          This section is under development.
                        </p>
                      </div>
                    </div>}
                  {activeSection === 'client-portal-options' && <div className="bg-white p-6 rounded-md shadow-sm">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">
                        Client Portal Options
                      </h3>
                      <p className="text-gray-600">
                        Configure client-facing payment options, self-service
                        features, and portal customization.
                      </p>
                      <div className="mt-4 p-4 bg-gray-50 rounded-md border border-gray-200 text-center">
                        <p className="text-sm text-gray-500">
                          This section is under development.
                        </p>
                      </div>
                    </div>}
                  {activeSection === 'notifications' && <div className="bg-white p-6 rounded-md shadow-sm">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">
                        Notifications
                      </h3>
                      <p className="text-gray-600">
                        Configure financial alerts, payment notifications, and
                        communication preferences.
                      </p>
                      <div className="mt-4 p-4 bg-gray-50 rounded-md border border-gray-200 text-center">
                        <p className="text-sm text-gray-500">
                          This section is under development.
                        </p>
                      </div>
                    </div>}
                  {activeSection === 'compliance-security' && <div className="bg-white p-6 rounded-md shadow-sm">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">
                        Compliance & Security
                      </h3>
                      <p className="text-gray-600">
                        Manage PCI compliance, data security, and financial
                        regulations.
                      </p>
                      <div className="mt-4 p-4 bg-gray-50 rounded-md border border-gray-200 text-center">
                        <p className="text-sm text-gray-500">
                          This section is under development.
                        </p>
                      </div>
                    </div>}
                </div>
                {/* Save button that follows scroll */}
                <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-3 flex justify-end">
                  <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => {
                  setUnsavedChanges(false);
                  // Save logic would go here
                }}>
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};