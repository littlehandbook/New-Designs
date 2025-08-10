import React, { useState } from 'react';
import { CreditCardIcon, ChevronRightIcon, DownloadIcon, MessageCircleIcon, ArrowUpCircleIcon, PlusCircleIcon, AlertTriangleIcon, CheckCircleIcon, InfoIcon, BarChart4Icon, UserPlusIcon, SettingsIcon, BellIcon, DollarSignIcon, UsersIcon, FileTextIcon, PackageIcon, LightbulbIcon, CalendarIcon } from 'lucide-react';
type AccountTab = 'overview' | 'subscription' | 'usage' | 'billing' | 'invoices' | 'cost' | 'team';
export const AccountSettings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AccountTab>('overview');
  return <div className="space-y-6">
      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-6 overflow-x-auto">
          <button onClick={() => setActiveTab('overview')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'overview' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            Account Overview
          </button>
          <button onClick={() => setActiveTab('subscription')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'subscription' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            Subscription & Features
          </button>
          <button onClick={() => setActiveTab('usage')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'usage' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            Usage & Credits
          </button>
          <button onClick={() => setActiveTab('billing')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'billing' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            Billing Information
          </button>
          <button onClick={() => setActiveTab('invoices')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'invoices' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            Invoices & History
          </button>
          <button onClick={() => setActiveTab('cost')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'cost' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            Cost Management
          </button>
          <button onClick={() => setActiveTab('team')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'team' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            Team & Seats
          </button>
        </nav>
      </div>
      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === 'overview' && <AccountOverview />}
        {activeTab === 'subscription' && <SubscriptionFeatures />}
        {activeTab === 'usage' && <UsageCredits />}
        {activeTab === 'billing' && <BillingInformation />}
        {activeTab === 'invoices' && <InvoicesHistory />}
        {activeTab === 'cost' && <CostManagement />}
        {activeTab === 'team' && <TeamSeats />}
      </div>
    </div>;
};
const AccountOverview: React.FC = () => {
  return <div className="space-y-6">
      {/* Account Summary Cards - Styled like Quick Actions buttons */}
      <div className="bg-white shadow sm:rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
          <div className="bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col items-start">
                <p className="text-sm font-medium text-gray-500">
                  Current Plan
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  Professional
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col items-start">
                <p className="text-sm font-medium text-gray-500">
                  Monthly Cost
                </p>
                <p className="text-lg font-semibold text-gray-900">$299.00</p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col items-start">
                <p className="text-sm font-medium text-gray-500">
                  Next Bill Date
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  Sep 15, 2023
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col items-start">
                <p className="text-sm font-medium text-gray-500">
                  Payment Status
                </p>
                <p className="text-lg font-semibold text-gray-900">Active</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Quick Actions */}
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Quick Actions
          </h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <ArrowUpCircleIcon className="-ml-1 mr-2 h-5 w-5" />
              Upgrade Plan
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <PlusCircleIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" />
              Add Features
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <DownloadIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" />
              Download Invoice
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <MessageCircleIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" />
              Contact Support
            </button>
          </div>
        </div>
      </div>
      {/* Announcements */}
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Platform Announcements
          </h3>
        </div>
        <div className="border-t border-gray-200">
          <div className="px-4 py-5 sm:p-6">
            <div className="bg-blue-50 p-4 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <InfoIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />
                </div>
                <div className="ml-3 flex-1 md:flex md:justify-between">
                  <p className="text-sm text-blue-700">
                    <span className="font-medium">New Feature Available:</span>{' '}
                    Video transcription now in beta - Try free
                  </p>
                  <p className="mt-3 text-sm md:mt-0 md:ml-6">
                    <a href="#" className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600">
                      Learn More <span aria-hidden="true">&rarr;</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Referral Program */}
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Referral Program
          </h3>
        </div>
        <div className="border-t border-gray-200">
          <div className="px-4 py-5 sm:p-6">
            <div className="sm:flex sm:items-center sm:justify-between">
              <div>
                <h4 className="text-sm font-medium text-gray-900">
                  Refer a Practice - Get $100 credit
                </h4>
                <div className="mt-1 flex items-center">
                  <p className="text-sm text-gray-500 mr-2">
                    Your referral code:
                  </p>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800">
                    CLINIC2025
                  </span>
                </div>
              </div>
              <div className="mt-5 sm:mt-0 sm:flex sm:space-x-3">
                <button type="button" className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Share
                </button>
                <button type="button" className="mt-3 sm:mt-0 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Track Referrals
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
const SubscriptionFeatures: React.FC = () => {
  return <div className="space-y-6">
      {/* Base Plan */}
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Base Plan
          </h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="mb-4 sm:mb-0">
                <h4 className="text-lg font-semibold text-gray-900">
                  Professional Plan - $299/month
                </h4>
                <ul className="mt-2 space-y-1">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                    Up to 10 practitioners
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                    Unlimited clients
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                    Core features included
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                    Email support
                  </li>
                </ul>
              </div>
              <div className="flex flex-col sm:items-end space-y-2">
                <button className="inline-flex items-center px-3 py-1.5 border border-indigo-600 text-xs font-medium rounded text-indigo-600 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Change Plan
                </button>
                <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Compare Plans
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Active Add-Ons */}
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Active Add-On Packages
          </h3>
        </div>
        <div className="border-t border-gray-200">
          <div className="divide-y divide-gray-200">
            {/* AI Assistant Package */}
            <div className="px-4 py-5 sm:p-6">
              <div className="flex flex-col sm:flex-row">
                <div className="flex-shrink-0 sm:mr-6">
                  <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📤</span>
                  </div>
                </div>
                <div className="mt-3 sm:mt-0 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h4 className="text-base font-medium text-gray-900">
                        AI Assistant Package
                      </h4>
                      <p className="mt-1 text-sm text-gray-500">$99/month</p>
                    </div>
                    <div className="mt-2 sm:mt-0">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Active
                      </span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-900">
                          Credits:
                        </span>
                        <span className="ml-1 text-sm text-gray-500">
                          2,847 / 10,000 this month
                        </span>
                      </div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        <AlertTriangleIcon className="h-3 w-3 mr-1" />
                        71% used
                      </span>
                    </div>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-yellow-500 h-2.5 rounded-full" style={{
                      width: '71%'
                    }}></div>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <button className="inline-flex items-center px-3 py-1.5 border border-indigo-600 text-xs font-medium rounded text-indigo-600 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Buy More Credits
                    </button>
                    <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      View Usage
                    </button>
                    <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Multi-Channel Messaging */}
            <div className="px-4 py-5 sm:p-6">
              <div className="flex flex-col sm:flex-row">
                <div className="flex-shrink-0 sm:mr-6">
                  <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">💬</span>
                  </div>
                </div>
                <div className="mt-3 sm:mt-0 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h4 className="text-base font-medium text-gray-900">
                        Multi-Channel Messaging
                      </h4>
                      <p className="mt-1 text-sm text-gray-500">$49/month</p>
                    </div>
                    <div className="mt-2 sm:mt-0">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Active
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-900">
                          SMS sent:
                        </span>
                        <span className="ml-1 text-sm text-gray-500">
                          1,234 / 5,000
                        </span>
                      </div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        25% used
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-500 h-2.5 rounded-full" style={{
                      width: '25%'
                    }}></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-900">
                          WhatsApp:
                        </span>
                        <span className="ml-1 text-sm text-gray-500">
                          567 / 2,000
                        </span>
                      </div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        28% used
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-500 h-2.5 rounded-full" style={{
                      width: '28%'
                    }}></div>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <button className="inline-flex items-center px-3 py-1.5 border border-indigo-600 text-xs font-medium rounded text-indigo-600 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Buy More Messages
                    </button>
                    <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Usage Details
                    </button>
                    <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Video Consultations */}
            <div className="px-4 py-5 sm:p-6">
              <div className="flex flex-col sm:flex-row">
                <div className="flex-shrink-0 sm:mr-6">
                  <div className="h-12 w-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <span className="text-xl">📹</span>
                  </div>
                </div>
                <div className="mt-3 sm:mt-0 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h4 className="text-base font-medium text-gray-900">
                        Video Consultations
                      </h4>
                      <p className="mt-1 text-sm text-gray-500">$149/month</p>
                    </div>
                    <div className="mt-2 sm:mt-0">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Active
                      </span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-900">
                        3 practitioners enabled
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center">
                        <span className="text-sm font-medium text-gray-900">
                          Minutes:
                        </span>
                        <span className="ml-1 text-sm text-gray-500">
                          8,453 / 34,560 (3 × 11,520)
                        </span>
                      </div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        24% used
                      </span>
                    </div>
                    <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-500 h-2.5 rounded-full" style={{
                      width: '24%'
                    }}></div>
                    </div>
                    <div className="mt-1">
                      <span className="text-xs text-gray-500">
                        No overages this period
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <button className="inline-flex items-center px-3 py-1.5 border border-indigo-600 text-xs font-medium rounded text-indigo-600 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Add Practitioner
                    </button>
                    <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Usage Report
                    </button>
                    <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Settings
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Available Add-Ons */}
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Available Add-Ons
          </h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* Add-on 1 */}
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-lg">📊</span>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-gray-900">
                      Analytics Pro
                    </h4>
                    <p className="text-xs text-gray-500">$79/month</p>
                  </div>
                </div>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Advanced reporting and insights for your practice
              </p>
              <div className="mt-3 flex justify-between">
                <button className="inline-flex items-center px-2.5 py-1.5 border border-indigo-600 text-xs font-medium rounded text-indigo-600 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                  Add
                </button>
                <button className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                  Learn More
                </button>
              </div>
            </div>
            {/* Add-on 2 */}
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-lg">📱</span>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-gray-900">
                      Mobile App
                    </h4>
                    <p className="text-xs text-gray-500">$59/month</p>
                  </div>
                </div>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Branded mobile app for your patients
              </p>
              <div className="mt-3 flex justify-between">
                <button className="inline-flex items-center px-2.5 py-1.5 border border-indigo-600 text-xs font-medium rounded text-indigo-600 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                  Add
                </button>
                <button className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                  Learn More
                </button>
              </div>
            </div>
            {/* Add-on 3 */}
            <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-lg">🔒</span>
                  </div>
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-gray-900">
                      Advanced Security
                    </h4>
                    <p className="text-xs text-gray-500">$39/month</p>
                  </div>
                </div>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Enhanced security features and monitoring
              </p>
              <div className="mt-3 flex justify-between">
                <button className="inline-flex items-center px-2.5 py-1.5 border border-indigo-600 text-xs font-medium rounded text-indigo-600 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                  Add
                </button>
                <button className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <div className="rounded-md bg-blue-50 p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <InfoIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">
                    Bundle & Save
                  </h3>
                  <div className="mt-2 text-sm text-blue-700">
                    <p>Get all add-ons for $149/month (Save $28/month)</p>
                  </div>
                  <div className="mt-3">
                    <div className="inline-flex items-center rounded-md border border-blue-700 bg-white px-3 py-1.5 text-xs font-medium text-blue-700 shadow-sm hover:bg-blue-50">
                      View Bundle
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
const UsageCredits: React.FC = () => {
  return <div className="space-y-6">
      {/* Usage Alerts */}
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Usage Alerts
          </h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="ai-credits" name="ai-credits" type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="ai-credits" className="font-medium text-gray-700">
                  AI Credits at 71%
                </label>
                <p className="text-gray-500">
                  Consider purchasing additional credits before you reach your
                  limit.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="video-minutes" name="video-minutes" type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="video-minutes" className="font-medium text-gray-700">
                  Video minutes reset in 8 days
                </label>
                <p className="text-gray-500">
                  Your monthly video minutes will reset on September 1st.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="sms-usage" name="sms-usage" type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="sms-usage" className="font-medium text-gray-700">
                  SMS usage is within normal range
                </label>
                <p className="text-gray-500">
                  You've used 25% of your SMS allocation this month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Usage Meters */}
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Usage Meters
          </h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <div className="space-y-6">
            {/* AI Credits */}
            <div>
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-gray-900">
                  AI Credits
                </h4>
                <span className="text-sm text-gray-500">
                  2,847 / 10,000 credits
                </span>
              </div>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-yellow-500 h-2.5 rounded-full" style={{
                width: '71%'
              }}></div>
              </div>
              <div className="mt-1 flex justify-between text-xs text-gray-500">
                <span>0</span>
                <span>71% used</span>
                <span>10,000</span>
              </div>
            </div>
            {/* Video Minutes */}
            <div>
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-gray-900">
                  Video Minutes
                </h4>
                <span className="text-sm text-gray-500">
                  8,453 / 34,560 minutes
                </span>
              </div>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{
                width: '24%'
              }}></div>
              </div>
              <div className="mt-1 flex justify-between text-xs text-gray-500">
                <span>0</span>
                <span>24% used</span>
                <span>34,560</span>
              </div>
              <div className="mt-3 space-y-2">
                <h5 className="text-xs font-medium text-gray-700">
                  Breakdown by Practitioner
                </h5>
                <div>
                  <div className="flex items-center justify-between text-xs">
                    <span>Dr. Jane Smith</span>
                    <span>3,245 / 11,520 minutes</span>
                  </div>
                  <div className="mt-1 w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-indigo-500 h-1.5 rounded-full" style={{
                    width: '28%'
                  }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-xs">
                    <span>Dr. Michael Chen</span>
                    <span>4,120 / 11,520 minutes</span>
                  </div>
                  <div className="mt-1 w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-indigo-500 h-1.5 rounded-full" style={{
                    width: '36%'
                  }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between text-xs">
                    <span>Dr. Sarah Johnson</span>
                    <span>1,088 / 11,520 minutes</span>
                  </div>
                  <div className="mt-1 w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-indigo-500 h-1.5 rounded-full" style={{
                    width: '9%'
                  }}></div>
                  </div>
                </div>
              </div>
            </div>
            {/* SMS/WhatsApp Messages */}
            <div>
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-gray-900">
                  SMS Messages
                </h4>
                <span className="text-sm text-gray-500">
                  1,234 / 5,000 messages
                </span>
              </div>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{
                width: '25%'
              }}></div>
              </div>
              <div className="mt-1 flex justify-between text-xs text-gray-500">
                <span>0</span>
                <span>25% used</span>
                <span>5,000</span>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-gray-900">
                  WhatsApp Messages
                </h4>
                <span className="text-sm text-gray-500">
                  567 / 2,000 messages
                </span>
              </div>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{
                width: '28%'
              }}></div>
              </div>
              <div className="mt-1 flex justify-between text-xs text-gray-500">
                <span>0</span>
                <span>28% used</span>
                <span>2,000</span>
              </div>
            </div>
            {/* Storage Space */}
            <div>
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-gray-900">
                  Storage Space
                </h4>
                <span className="text-sm text-gray-500">15.4 GB / 50 GB</span>
              </div>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{
                width: '31%'
              }}></div>
              </div>
              <div className="mt-1 flex justify-between text-xs text-gray-500">
                <span>0 GB</span>
                <span>31% used</span>
                <span>50 GB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Historical Usage */}
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Historical Usage
          </h3>
          <div className="flex space-x-2">
            <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <FileTextIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" />
              Export to CSV
            </button>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Invoice #
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Aug 1, 2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    INV-2023-0801
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Monthly Subscription
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    $547.00
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Paid
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-4">
                      Download
                    </button>
                    <button className="text-indigo-600 hover:text-indigo-900">
                      View
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Jul 15, 2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    INV-2023-0715
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Additional AI Credits
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    $79.00
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Paid
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-4">
                      Download
                    </button>
                    <button className="text-indigo-600 hover:text-indigo-900">
                      View
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Jul 1, 2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    INV-2023-0701
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Monthly Subscription
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    $547.00
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Paid
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-4">
                      Download
                    </button>
                    <button className="text-indigo-600 hover:text-indigo-900">
                      View
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Jun 1, 2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    INV-2023-0601
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Monthly Subscription
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    $547.00
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Paid
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-4">
                      Download
                    </button>
                    <button className="text-indigo-600 hover:text-indigo-900">
                      View
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    May 1, 2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    INV-2023-0501
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Monthly Subscription
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    $547.00
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Paid
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-4">
                      Download
                    </button>
                    <button className="text-indigo-600 hover:text-indigo-900">
                      View
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Filters */}
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Filters
          </h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6 lg:grid-cols-4">
            <div>
              <label htmlFor="date-range" className="block text-sm font-medium text-gray-700">
                Date Range
              </label>
              <select id="date-range" name="date-range" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                <option>Last 3 months</option>
                <option>Last 6 months</option>
                <option>Last 12 months</option>
                <option>Custom range</option>
              </select>
            </div>
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                Type
              </label>
              <select id="type" name="type" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                <option>All</option>
                <option>Subscription</option>
                <option>One-time</option>
              </select>
            </div>
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                Status
              </label>
              <select id="status" name="status" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                <option>All</option>
                <option>Paid</option>
                <option>Pending</option>
                <option>Failed</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
const BillingInformation: React.FC = () => {
  return <div className="space-y-6">
      {/* Payment Method */}
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Payment Method
          </h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded bg-gray-200 flex items-center justify-center">
                  <span className="text-lg font-medium text-gray-600">
                    VISA
                  </span>
                </div>
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">
                  Visa ending in 4242
                </div>
                <div className="text-sm text-gray-500">Expires: 12/2025</div>
              </div>
            </div>
            <div className="mt-4 sm:mt-0 flex space-x-3">
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Update Card
              </button>
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Add Backup Method
              </button>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="auto-recharge" name="auto-recharge" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="auto-recharge" className="font-medium text-gray-700">
                  Enable auto-recharge when credits &lt; 10%
                </label>
                <p className="text-gray-500">
                  We'll automatically purchase more credits when you're running
                  low.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Billing Details */}
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Billing Details
          </h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Practice Name
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                City Wellness Clinic
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">Tax ID</dt>
              <dd className="mt-1 text-sm text-gray-900">XX-XXXXXXX</dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Billing Email
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                billing@citywellness.com
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Country / State
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                United States / California (8.75% tax)
              </dd>
            </div>
          </dl>
          <div className="mt-6">
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Edit Details
            </button>
          </div>
        </div>
      </div>
      {/* Billing Contacts */}
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Billing Contacts
          </h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-medium">
                    JS
                  </div>
                </div>
                <div className="ml-3">
                  <div className="text-sm font-medium text-gray-900">
                    Dr. Jane Smith
                  </div>
                  <div className="text-sm text-gray-500">
                    jane.smith@example.com
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Primary
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 font-medium">
                    JW
                  </div>
                </div>
                <div className="ml-3">
                  <div className="text-sm font-medium text-gray-900">
                    James Wilson
                  </div>
                  <div className="text-sm text-gray-500">
                    james.wilson@example.com
                  </div>
                </div>
              </div>
              <div>
                <button className="inline-flex items-center px-2.5 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <UserPlusIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" />
              Add Contact
            </button>
          </div>
        </div>
      </div>
      {/* Accounting Integration */}
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Accounting Software Integration
          </h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div>
              <div className="text-sm font-medium text-gray-900">
                Connect your accounting software
              </div>
              <div className="mt-1 text-sm text-gray-500">
                Automatically sync invoices and payments with your accounting
                system.
              </div>
            </div>
            <div className="mt-5 sm:mt-0 sm:flex sm:space-x-3">
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Connect QuickBooks
              </button>
              <button className="mt-3 sm:mt-0 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Connect Xero
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
const InvoicesHistory: React.FC = () => {
  return <div className="space-y-6">
      {/* Invoices Table */}
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Invoice & Payment History
          </h3>
          <div className="mt-3 sm:mt-0 flex flex-col sm:flex-row sm:space-x-3">
            <div className="flex space-x-3">
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <FileTextIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" />
                Export to CSV
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Invoice #
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Aug 1, 2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    INV-2023-0801
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Monthly Subscription
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    $547.00
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Paid
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-4">
                      Download
                    </button>
                    <button className="text-indigo-600 hover:text-indigo-900">
                      View
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Jul 15, 2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    INV-2023-0715
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Additional AI Credits
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    $79.00
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Paid
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-4">
                      Download
                    </button>
                    <button className="text-indigo-600 hover:text-indigo-900">
                      View
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Jul 1, 2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    INV-2023-0701
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Monthly Subscription
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    $547.00
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Paid
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-4">
                      Download
                    </button>
                    <button className="text-indigo-600 hover:text-indigo-900">
                      View
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Jun 1, 2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    INV-2023-0601
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Monthly Subscription
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    $547.00
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Paid
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-4">
                      Download
                    </button>
                    <button className="text-indigo-600 hover:text-indigo-900">
                      View
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    May 1, 2023
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    INV-2023-0501
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    Monthly Subscription
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    $547.00
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Paid
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900 mr-4">
                      Download
                    </button>
                    <button className="text-indigo-600 hover:text-indigo-900">
                      View
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Filters */}
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Filters
          </h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6 lg:grid-cols-4">
            <div>
              <label htmlFor="date-range" className="block text-sm font-medium text-gray-700">
                Date Range
              </label>
              <select id="date-range" name="date-range" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                <option>Last 3 months</option>
                <option>Last 6 months</option>
                <option>Last 12 months</option>
                <option>Custom range</option>
              </select>
            </div>
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                Type
              </label>
              <select id="type" name="type" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                <option>All</option>
                <option>Subscription</option>
                <option>One-time</option>
              </select>
            </div>
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                Status
              </label>
              <select id="status" name="status" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                <option>All</option>
                <option>Paid</option>
                <option>Pending</option>
                <option>Failed</option>
              </select>
            </div>
            <div className="flex items-end">
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
const CostManagement: React.FC = () => {
  return <div className="space-y-6">
      {/* Budget Alerts */}
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Budget Alerts
          </h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <div className="space-y-6">
            <div>
              <label htmlFor="monthly-budget" className="block text-sm font-medium text-gray-700">
                Monthly Budget
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input type="text" name="monthly-budget" id="monthly-budget" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="0.00" defaultValue="600" />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">USD</span>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="alert-threshold" className="block text-sm font-medium text-gray-700">
                Alert when reaching
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input type="text" name="alert-threshold" id="alert-threshold" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="80" defaultValue="80" />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">%</span>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="alert-email" className="block text-sm font-medium text-gray-700">
                Send alerts to
              </label>
              <div className="mt-1">
                <input type="email" name="alert-email" id="alert-email" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="email@example.com" defaultValue="billing@citywellness.com" />
              </div>
            </div>
            <div>
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Save Budget Settings
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Usage Policies */}
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Usage Policies
          </h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="pause-ai" name="pause-ai" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="pause-ai" className="font-medium text-gray-700">
                  Pause AI when credits depleted
                </label>
                <p className="text-gray-500">
                  AI features will be temporarily disabled when you run out of
                  credits.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="disable-sms" name="disable-sms" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="disable-sms" className="font-medium text-gray-700">
                  Disable SMS when limit reached
                </label>
                <p className="text-gray-500">
                  SMS messaging will be temporarily disabled when you reach your
                  monthly limit.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="require-approval" name="require-approval" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="require-approval" className="font-medium text-gray-700">
                  Require approval for overages &gt; $100
                </label>
                <p className="text-gray-500">
                  Any purchase that would exceed your monthly budget by more
                  than $100 will require approval.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Save Usage Policies
            </button>
          </div>
        </div>
      </div>
      {/* Cost Optimization */}
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Cost Optimization Assistant
          </h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <div className="rounded-md bg-green-50 p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <DollarSignIcon className="h-5 w-5 text-green-400" />
              </div>
              <div className="ml-3 flex-1 md:flex md:justify-between">
                <div>
                  <h3 className="text-sm font-medium text-green-800">
                    Potential Savings Identified
                  </h3>
                  <div className="mt-2 text-sm text-green-700">
                    <p>
                      2 practitioners haven't used video in 60 days. Remove
                      their access to save $49/month?
                    </p>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <button className="inline-flex items-center px-4 py-2 border border-green-700 shadow-sm text-sm font-medium rounded-md text-green-700 bg-white hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                    Review
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-md bg-blue-50 p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <LightbulbIcon className="h-5 w-5 text-blue-400" />
              </div>
              <div className="ml-3 flex-1 md:flex md:justify-between">
                <div>
                  <h3 className="text-sm font-medium text-blue-800">
                    Plan Recommendation
                  </h3>
                  <div className="mt-2 text-sm text-blue-700">
                    <p>
                      Your usage patterns suggest the Enterprise plan would save
                      $67/month.
                    </p>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <button className="inline-flex items-center px-4 py-2 border border-blue-700 shadow-sm text-sm font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    See Analysis
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
const TeamSeats: React.FC = () => {
  return <div className="space-y-6">
      {/* Current Allocation */}
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Current Allocation
          </h3>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
          <div>
            <h4 className="text-sm font-medium text-gray-900">Practitioners</h4>
            <div className="mt-2 flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5 mr-4">
                <div className="bg-indigo-600 h-2.5 rounded-full" style={{
                width: '70%'
              }}></div>
              </div>
              <span className="text-sm text-gray-500">7 / 10 seats used</span>
            </div>
            <div className="mt-4 flex space-x-3">
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <UserPlusIcon className="-ml-1 mr-2 h-5 w-5" />
                Invite Practitioner
              </button>
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Manage Team
              </button>
            </div>
          </div>
          <div className="mt-8">
            <h4 className="text-sm font-medium text-gray-900">
              Per-Practitioner Features
            </h4>
            <div className="mt-4 space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Video Enabled:</span>
                  <span className="text-sm font-medium text-gray-900">
                    3 practitioners ($149)
                  </span>
                </div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-indigo-600 h-2.5 rounded-full" style={{
                  width: '30%'
                }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">AI Access:</span>
                  <span className="text-sm font-medium text-gray-900">
                    5 practitioners (included)
                  </span>
                </div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-indigo-600 h-2.5 rounded-full" style={{
                  width: '50%'
                }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team Members */}
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Team Members
          </h3>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <UserPlusIcon className="-ml-1 mr-2 h-5 w-5" />
            Add Member
          </button>
        </div>
        <div className="border-t border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Video Access
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    AI Access
                  </th>
                  <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-medium">
                          JS
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          Dr. Jane Smith
                        </div>
                        <div className="text-sm text-gray-500">
                          jane.smith@example.com
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Admin</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Enabled
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Enabled
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900">
                      Edit
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-medium">
                          MC
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          Dr. Michael Chen
                        </div>
                        <div className="text-sm text-gray-500">
                          michael.chen@example.com
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Therapist</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Enabled
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Enabled
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900">
                      Edit
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-medium">
                          SJ
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          Dr. Sarah Johnson
                        </div>
                        <div className="text-sm text-gray-500">
                          sarah.johnson@example.com
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">Therapist</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Enabled
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Enabled
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900">
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>;
};