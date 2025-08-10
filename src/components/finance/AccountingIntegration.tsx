import React, { useState } from 'react';
import { RefreshCwIcon, ExternalLinkIcon, DownloadIcon, LinkIcon, AlertTriangleIcon, CheckIcon, XIcon, ArrowRightIcon } from 'lucide-react';
export const AccountingIntegration: React.FC = () => {
  const [isConnected, setIsConnected] = useState(true);
  return <div className="space-y-6">
      {!isConnected ? <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Connect Your Accounting Software
            </h3>
            <div className="text-sm text-gray-500 mb-6">
              Automatically sync your financial data with your accounting
              software to streamline your workflow and reduce manual data entry.
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Intuit_QuickBooks_logo.svg/2560px-Intuit_QuickBooks_logo.svg.png" alt="QuickBooks" className="h-10" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          QuickBooks
                        </dt>
                        <dd>
                          <div className="text-sm text-gray-900">
                            Online & Desktop
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-5 py-3">
                  <div className="text-sm">
                    <button className="font-medium text-indigo-600 hover:text-indigo-500">
                      Connect
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center">
                      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Xero_software_logo.svg/1200px-Xero_software_logo.svg.png" alt="Xero" className="h-8" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Xero
                        </dt>
                        <dd>
                          <div className="text-sm text-gray-900">
                            Cloud Accounting
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-5 py-3">
                  <div className="text-sm">
                    <button className="font-medium text-indigo-600 hover:text-indigo-500">
                      Connect
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/FreshBooks_logo.svg/2560px-FreshBooks_logo.svg.png" alt="FreshBooks" className="h-8" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          FreshBooks
                        </dt>
                        <dd>
                          <div className="text-sm text-gray-900">
                            Small Business
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-5 py-3">
                  <div className="text-sm">
                    <button className="font-medium text-indigo-600 hover:text-indigo-500">
                      Connect
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-12 w-12 flex items-center justify-center">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Wave_logo_2020.svg" alt="Wave" className="h-8" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Wave
                        </dt>
                        <dd>
                          <div className="text-sm text-gray-900">
                            Free Accounting
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-5 py-3">
                  <div className="text-sm">
                    <button className="font-medium text-indigo-600 hover:text-indigo-500">
                      Connect
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-sm font-medium text-gray-700 mb-4">
                Manual Export Options
              </h4>
              <div className="flex space-x-3">
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <DownloadIcon className="h-4 w-4 mr-2" />
                  Download CSV
                </button>
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <DownloadIcon className="h-4 w-4 mr-2" />
                  Generate IIF
                </button>
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <DownloadIcon className="h-4 w-4 mr-2" />
                  Print Reports
                </button>
              </div>
            </div>
          </div>
        </div> : <>
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    QuickBooks Integration Active
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-gray-500">
                    Last Sync: 3 mins ago | Sync Frequency: Every 15 mins
                  </p>
                </div>
                <div className="mt-4 sm:mt-0 flex space-x-3">
                  <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <RefreshCwIcon className="h-4 w-4 mr-2" />
                    Sync Now
                  </button>
                  <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <ExternalLinkIcon className="h-4 w-4 mr-2" />
                    Open QuickBooks
                  </button>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
                <div className="bg-white overflow-hidden shadow-sm rounded-md border border-gray-200">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
                        <CheckIcon className="h-6 w-6 text-green-600" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">
                            Sync Status
                          </dt>
                          <dd>
                            <div className="text-sm font-medium text-gray-900">
                              Healthy
                            </div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white overflow-hidden shadow-sm rounded-md border border-gray-200">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-indigo-100 rounded-md p-3">
                        <LinkIcon className="h-6 w-6 text-indigo-600" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">
                            Sync Direction
                          </dt>
                          <dd>
                            <div className="text-sm font-medium text-gray-900">
                              <select className="mt-1 block w-full pl-3 pr-10 py-1 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                                <option>Two-Way</option>
                                <option>Platform to QB</option>
                                <option>QB to Platform</option>
                              </select>
                            </div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white overflow-hidden shadow-sm rounded-md border border-gray-200">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-indigo-100 rounded-md p-3">
                        <CheckIcon className="h-6 w-6 text-indigo-600" />
                      </div>
                      <div className="ml-5 w-0 flex-1">
                        <dl>
                          <dt className="text-sm font-medium text-gray-500 truncate">
                            Mapped Items
                          </dt>
                          <dd>
                            <div className="text-sm font-medium text-gray-900">
                              24/24 ✅ Unmapped: 0
                            </div>
                            <button className="mt-1 text-xs text-indigo-600 hover:text-indigo-500">
                              View Mappings
                            </button>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 bg-yellow-50 p-4 rounded-md border border-yellow-200">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertTriangleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-yellow-800">
                      3 Conflicts Need Resolution
                    </h3>
                    <div className="mt-2 text-sm text-yellow-700">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            <div>
                              <span className="font-medium">
                                Payment Amount Mismatch
                              </span>
                              <p className="text-xs">
                                Client: John Doe | Date: Aug 5
                              </p>
                              <p className="text-xs">
                                Platform: $180 | QuickBooks: $175
                              </p>
                            </div>
                            <div className="mt-2 sm:mt-0 flex space-x-2">
                              <button className="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                                Use Platform
                              </button>
                              <button className="inline-flex items-center px-2 py-1 border border-gray-300 text-xs font-medium rounded shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                                Use QB
                              </button>
                              <button className="inline-flex items-center px-2 py-1 border border-gray-300 text-xs font-medium rounded shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                                Edit Both
                              </button>
                            </div>
                          </div>
                        </li>
                        <li className="mt-3 pt-3 border-t border-yellow-200">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            <div>
                              <span className="font-medium">
                                Duplicate Invoice
                              </span>
                              <p className="text-xs">
                                INV-2024-892 exists in both systems
                              </p>
                            </div>
                            <div className="mt-2 sm:mt-0 flex space-x-2">
                              <button className="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                                Merge
                              </button>
                              <button className="inline-flex items-center px-2 py-1 border border-gray-300 text-xs font-medium rounded shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                                Keep Separate
                              </button>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="mt-4">
                      <div className="-mx-2 -my-1.5 flex">
                        <button className="px-2 py-1.5 rounded-md text-sm font-medium text-yellow-800 hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600">
                          View All Conflicts
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                Sync Settings
              </h3>
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label htmlFor="sync-frequency" className="block text-sm font-medium text-gray-700">
                      Sync Frequency
                    </label>
                    <div className="mt-1">
                      <select id="sync-frequency" name="sync-frequency" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                        <option>Every 15 minutes</option>
                        <option>Every 30 minutes</option>
                        <option>Every hour</option>
                        <option>Every 4 hours</option>
                        <option>Daily</option>
                        <option>Manual only</option>
                      </select>
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="sync-conflict" className="block text-sm font-medium text-gray-700">
                      Conflict Resolution
                    </label>
                    <div className="mt-1">
                      <select id="sync-conflict" name="sync-conflict" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                        <option>Ask me every time</option>
                        <option>Platform is source of truth</option>
                        <option>QuickBooks is source of truth</option>
                        <option>Most recent change wins</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">
                    Items to Sync
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <input id="sync-clients" name="sync-clients" type="checkbox" checked={true} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                      <label htmlFor="sync-clients" className="ml-3 block text-sm text-gray-700">
                        Clients (as Customers)
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input id="sync-services" name="sync-services" type="checkbox" checked={true} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                      <label htmlFor="sync-services" className="ml-3 block text-sm text-gray-700">
                        Services (as Products/Services)
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input id="sync-invoices" name="sync-invoices" type="checkbox" checked={true} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                      <label htmlFor="sync-invoices" className="ml-3 block text-sm text-gray-700">
                        Invoices
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input id="sync-payments" name="sync-payments" type="checkbox" checked={true} className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                      <label htmlFor="sync-payments" className="ml-3 block text-sm text-gray-700">
                        Payments
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input id="sync-expenses" name="sync-expenses" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                      <label htmlFor="sync-expenses" className="ml-3 block text-sm text-gray-700">
                        Expenses
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end space-x-3">
                  <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Reset All Mappings
                  </button>
                  <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Save Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>}
    </div>;
};