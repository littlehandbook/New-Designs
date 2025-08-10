import React, { useState } from 'react';
import { BarChart4Icon, TrendingUpIcon, UsersIcon, PieChartIcon, CalendarIcon, FileTextIcon, ClockIcon, DownloadIcon, SendIcon } from 'lucide-react';
export const FinancialReports: React.FC = () => {
  const [activeTab, setActiveTab] = useState('quick');
  return <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button onClick={() => setActiveTab('quick')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'quick' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            Quick Reports
          </button>
          <button onClick={() => setActiveTab('custom')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'custom' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            Custom Report Builder
          </button>
        </nav>
      </div>
      {/* Quick Reports Grid */}
      {activeTab === 'quick' && <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-6">
              Quick Reports
            </h3>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-indigo-100 rounded-md p-3">
                      <BarChart4Icon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Revenue Summary
                        </dt>
                        <dd>
                          <div className="text-sm text-gray-900">
                            Breakdown of all revenue
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-5 py-3">
                  <div className="text-sm">
                    <button className="font-medium text-indigo-600 hover:text-indigo-500">
                      Generate Report
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-indigo-100 rounded-md p-3">
                      <TrendingUpIcon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Aging Report
                        </dt>
                        <dd>
                          <div className="text-sm text-gray-900">
                            Outstanding balances by age
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-5 py-3">
                  <div className="text-sm">
                    <button className="font-medium text-indigo-600 hover:text-indigo-500">
                      Generate Report
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-indigo-100 rounded-md p-3">
                      <PieChartIcon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Collection Rate
                        </dt>
                        <dd>
                          <div className="text-sm text-gray-900">
                            Payment collection efficiency
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-5 py-3">
                  <div className="text-sm">
                    <button className="font-medium text-indigo-600 hover:text-indigo-500">
                      Generate Report
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-indigo-100 rounded-md p-3">
                      <UsersIcon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          By Practitioner
                        </dt>
                        <dd>
                          <div className="text-sm text-gray-900">
                            Revenue by provider
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-5 py-3">
                  <div className="text-sm">
                    <button className="font-medium text-indigo-600 hover:text-indigo-500">
                      Generate Report
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-indigo-100 rounded-md p-3">
                      <PieChartIcon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Insurance vs Self-Pay
                        </dt>
                        <dd>
                          <div className="text-sm text-gray-900">
                            Payment source breakdown
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-5 py-3">
                  <div className="text-sm">
                    <button className="font-medium text-indigo-600 hover:text-indigo-500">
                      Generate Report
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-indigo-100 rounded-md p-3">
                      <CalendarIcon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Monthly Trends
                        </dt>
                        <dd>
                          <div className="text-sm text-gray-900">
                            Revenue over time
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-5 py-3">
                  <div className="text-sm">
                    <button className="font-medium text-indigo-600 hover:text-indigo-500">
                      Generate Report
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>}
      {/* Custom Report Builder */}
      {activeTab === 'custom' && <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-6">
              Custom Report Builder
            </h3>
            <div className="space-y-8">
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-2">
                  <label htmlFor="date-range" className="block text-sm font-medium text-gray-700">
                    Date Range
                  </label>
                  <div className="mt-1">
                    <select id="date-range" name="date-range" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                      <option>Last Month</option>
                      <option>Last 3 Months</option>
                      <option>Last 6 Months</option>
                      <option>Year to Date</option>
                      <option>Last Year</option>
                      <option>Custom Range...</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="group-by" className="block text-sm font-medium text-gray-700">
                    Group By
                  </label>
                  <div className="mt-1">
                    <select id="group-by" name="group-by" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                      <option>Practitioner</option>
                      <option>Client</option>
                      <option>Service Type</option>
                      <option>Insurance Provider</option>
                      <option>Payment Method</option>
                      <option>Day</option>
                      <option>Week</option>
                      <option>Month</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="format" className="block text-sm font-medium text-gray-700">
                    Format
                  </label>
                  <div className="mt-1">
                    <select id="format" name="format" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                      <option>Table</option>
                      <option>Bar Chart</option>
                      <option>Line Chart</option>
                      <option>Pie Chart</option>
                      <option>Summary</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-4">
                  Include
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="include-payments" name="include-payments" type="checkbox" checked={true} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="include-payments" className="font-medium text-gray-700">
                        Payments
                      </label>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="include-charges" name="include-charges" type="checkbox" checked={true} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="include-charges" className="font-medium text-gray-700">
                        Charges
                      </label>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="include-refunds" name="include-refunds" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="include-refunds" className="font-medium text-gray-700">
                        Refunds
                      </label>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="include-adjustments" name="include-adjustments" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="include-adjustments" className="font-medium text-gray-700">
                        Adjustments
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end space-x-3">
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Run Report
                </button>
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <ClockIcon className="h-4 w-4 mr-2" />
                  Schedule
                </button>
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <DownloadIcon className="h-4 w-4 mr-2" />
                  Export
                </button>
              </div>
              {/* Sample Report Output */}
              <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-medium text-gray-700">
                    Revenue by Practitioner (Last Month)
                  </h4>
                  <div className="flex space-x-2">
                    <button className="inline-flex items-center px-2 py-1 border border-gray-300 text-xs font-medium rounded shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                      <DownloadIcon className="h-3 w-3 mr-1" />
                      Export
                    </button>
                    <button className="inline-flex items-center px-2 py-1 border border-gray-300 text-xs font-medium rounded shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                      <SendIcon className="h-3 w-3 mr-1" />
                      Share
                    </button>
                  </div>
                </div>
                <div className="h-64 bg-white rounded-md flex items-center justify-center">
                  <p className="text-gray-400">
                    Report visualization will appear here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>}
    </div>;
};