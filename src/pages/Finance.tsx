import React, { useState } from 'react';
import { CollapsibleSidebar } from '../components/layout/CollapsibleSidebar';
import { SettingsModal } from '../components/layout/SettingsModal';
import { FinanceSettingsPanel } from '../components/finance/FinanceSettingsPanel';
import { ChatBubble } from '../components/ChatBubble';
import { ClientAccounts, ClientFinancialDetail } from '../components/finance/ClientAccounts';
import { CollectPayment } from '../components/finance/CollectPayment';
import { InsuranceManagement } from '../components/finance/InsuranceManagement';
import { PaymentPlans } from '../components/finance/PaymentPlans';
import { FinancialReports } from '../components/finance/FinancialReports';
import { AccountingIntegration } from '../components/finance/AccountingIntegration';
import { ArrowUpIcon, ArrowDownIcon, CreditCardIcon, MailIcon, FileTextIcon, BarChart4Icon, RefreshCwIcon, AlertTriangleIcon, ChevronRightIcon, SearchIcon, ArrowUpCircleIcon, SettingsIcon } from 'lucide-react';
export const Finance = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [financeSettingsOpen, setFinanceSettingsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [viewClientDetail, setViewClientDetail] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return <div className="flex h-screen bg-gray-50 overflow-hidden">
      <CollapsibleSidebar activeItem="finance" onSettingsClick={() => setSettingsOpen(true)} isSidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="mb-6 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Finance Dashboard
              </h1>
              <p className="text-gray-600 mt-1">
                Manage your practice's revenue, payments, and financial
                operations
              </p>
            </div>
            <button onClick={() => setFinanceSettingsOpen(true)} className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <SettingsIcon className="h-4 w-4 mr-2" />
              Finance Settings
            </button>
          </div>
          {/* Tabs */}
          <div className="border-b border-gray-200 mb-6">
            <nav className="-mb-px flex space-x-8 overflow-x-auto">
              <button onClick={() => {
              setActiveTab('dashboard');
              setViewClientDetail(false);
            }} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'dashboard' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                Dashboard
              </button>
              <button onClick={() => {
              setActiveTab('clients');
              setViewClientDetail(false);
            }} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'clients' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                Client Accounts
              </button>
              <button onClick={() => {
              setActiveTab('payments');
              setViewClientDetail(false);
            }} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'payments' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                Collect Payments
              </button>
              <button onClick={() => {
              setActiveTab('insurance');
              setViewClientDetail(false);
            }} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'insurance' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                Insurance
              </button>
              <button onClick={() => {
              setActiveTab('plans');
              setViewClientDetail(false);
            }} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'plans' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                Payment Plans
              </button>
              <button onClick={() => {
              setActiveTab('reports');
              setViewClientDetail(false);
            }} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'reports' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                Reports
              </button>
              <button onClick={() => {
              setActiveTab('accounting');
              setViewClientDetail(false);
            }} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'accounting' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                Accounting
              </button>
            </nav>
          </div>
          {activeTab === 'dashboard' && <>
              {/* KPI Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Today's Snapshot */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Today's Snapshot
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-md">
                      <div className="flex items-center">
                        <ArrowUpCircleIcon className="h-5 w-5 text-green-600 mr-2" />
                        <span className="text-sm font-medium text-green-800">
                          Collected
                        </span>
                      </div>
                      <p className="text-2xl font-bold text-gray-900 mt-1">
                        $3,247
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-md">
                      <div className="flex items-center">
                        <BarChart4Icon className="h-5 w-5 text-blue-600 mr-2" />
                        <span className="text-sm font-medium text-blue-800">
                          Outstanding
                        </span>
                      </div>
                      <p className="text-2xl font-bold text-gray-900 mt-1">
                        $12,432
                      </p>
                    </div>
                    <div className="bg-amber-50 p-4 rounded-md">
                      <div className="flex items-center">
                        <AlertTriangleIcon className="h-5 w-5 text-amber-600 mr-2" />
                        <span className="text-sm font-medium text-amber-800">
                          Overdue
                        </span>
                      </div>
                      <p className="text-2xl font-bold text-gray-900 mt-1">
                        $3,145
                      </p>
                    </div>
                    <div className="bg-indigo-50 p-4 rounded-md">
                      <div className="flex items-center">
                        <FileTextIcon className="h-5 w-5 text-indigo-600 mr-2" />
                        <span className="text-sm font-medium text-indigo-800">
                          Pending Claims
                        </span>
                      </div>
                      <p className="text-2xl font-bold text-gray-900 mt-1">
                        14
                      </p>
                    </div>
                  </div>
                </div>
                {/* This Month */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    This Month
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">Revenue</p>
                        <div className="flex items-center">
                          <p className="text-2xl font-bold text-gray-900">
                            $24,567
                          </p>
                          <span className="ml-2 flex items-center text-sm font-medium text-green-600">
                            <ArrowUpIcon className="h-4 w-4 mr-1" />
                            12%
                          </span>
                        </div>
                      </div>
                      <div className="h-12 w-24 bg-gray-100 rounded"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">Collection Rate</p>
                        <p className="text-2xl font-bold text-gray-900">87%</p>
                      </div>
                      <div className="h-12 w-24 bg-gray-100 rounded"></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">
                          Avg Days to Payment
                        </p>
                        <p className="text-2xl font-bold text-gray-900">4.2</p>
                      </div>
                      <div className="h-12 w-24 bg-gray-100 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Quick Actions Bar */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Quick Actions
                </h3>
                <div className="flex flex-wrap gap-3">
                  <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => setActiveTab('payments')}>
                    <CreditCardIcon className="h-4 w-4 mr-2" />
                    Collect Payment
                  </button>
                  <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <MailIcon className="h-4 w-4 mr-2" />
                    Send Invoice
                  </button>
                  <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => setActiveTab('insurance')}>
                    <FileTextIcon className="h-4 w-4 mr-2" />
                    Submit Claim
                  </button>
                  <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => setActiveTab('reports')}>
                    <BarChart4Icon className="h-4 w-4 mr-2" />
                    Run Report
                  </button>
                  <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => setActiveTab('accounting')}>
                    <RefreshCwIcon className="h-4 w-4 mr-2" />
                    Sync QuickBooks
                  </button>
                </div>
              </div>
              {/* Accounting Integration Status */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">
                      QuickBooks Online Connected ✓
                    </h3>
                    <p className="text-sm text-gray-500">
                      Last Sync: 3 minutes ago | Mode: Two-Way
                    </p>
                  </div>
                  <div className="flex space-x-3">
                    <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Sync Now
                    </button>
                    <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Open QuickBooks
                    </button>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-amber-50 rounded-md border border-amber-200">
                  <div className="flex items-start">
                    <AlertTriangleIcon className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-amber-800">
                        2 items need review
                      </p>
                      <button className="mt-1 text-xs font-medium text-amber-700 hover:text-amber-900" onClick={() => setActiveTab('accounting')}>
                        Review Issues
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Revenue Trend Chart */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Revenue Trend
                  </h3>
                  <div className="flex space-x-2">
                    <select className="text-sm border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                      <option>Last 6 months</option>
                      <option>Year to date</option>
                      <option>Last 12 months</option>
                    </select>
                    <select className="text-sm border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
                      <option>All Practitioners</option>
                      <option>Dr. Smith</option>
                      <option>Dr. Johnson</option>
                    </select>
                  </div>
                </div>
                <div className="flex space-x-4 mb-4">
                  <button className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-medium rounded-md">
                    Revenue
                  </button>
                  <button className="px-3 py-1 text-gray-500 text-sm font-medium hover:bg-gray-100 rounded-md">
                    Collections
                  </button>
                  <button className="px-3 py-1 text-gray-500 text-sm font-medium hover:bg-gray-100 rounded-md">
                    Outstanding
                  </button>
                </div>
                {/* Placeholder for chart */}
                <div className="h-64 bg-gray-50 rounded-md flex items-center justify-center">
                  <p className="text-gray-400">Revenue trend chart</p>
                </div>
              </div>
              {/* Actionable Alerts */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Needs Attention
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start p-4 border border-gray-200 rounded-md">
                    <AlertTriangleIcon className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium text-gray-900">
                          5 payments failed processing
                        </p>
                        <button className="text-xs font-medium text-indigo-600 hover:text-indigo-800">
                          Review
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start p-4 border border-gray-200 rounded-md">
                    <AlertTriangleIcon className="h-5 w-5 text-amber-500 mr-3 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium text-gray-900">
                          3 insurance claims denied
                        </p>
                        <button className="text-xs font-medium text-indigo-600 hover:text-indigo-800" onClick={() => setActiveTab('insurance')}>
                          Appeal
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start p-4 border border-gray-200 rounded-md">
                    <AlertTriangleIcon className="h-5 w-5 text-amber-500 mr-3 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium text-gray-900">
                          12 clients with balances &gt;60 days
                        </p>
                        <button className="text-xs font-medium text-indigo-600 hover:text-indigo-800" onClick={() => setActiveTab('clients')}>
                          Send Reminders
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start p-4 border border-gray-200 rounded-md">
                    <AlertTriangleIcon className="h-5 w-5 text-amber-500 mr-3 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium text-gray-900">
                          QuickBooks sync conflict
                        </p>
                        <button className="text-xs font-medium text-indigo-600 hover:text-indigo-800" onClick={() => setActiveTab('accounting')}>
                          Resolve
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>}
          {activeTab === 'clients' && (viewClientDetail ? <ClientFinancialDetail /> : <ClientAccounts />)}
          {activeTab === 'payments' && <CollectPayment />}
          {activeTab === 'insurance' && <InsuranceManagement />}
          {activeTab === 'plans' && <PaymentPlans />}
          {activeTab === 'reports' && <FinancialReports />}
          {activeTab === 'accounting' && <AccountingIntegration />}
        </div>
      </div>
      {/* Main Settings Modal */}
      <SettingsModal isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
      {/* Finance Settings Panel */}
      <FinanceSettingsPanel isOpen={financeSettingsOpen} onClose={() => setFinanceSettingsOpen(false)} />
      <ChatBubble />
    </div>;
};