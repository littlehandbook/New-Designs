import React, { useState } from 'react';
import { CalendarIcon, CreditCardIcon, CheckIcon, AlertTriangleIcon, PlusIcon, ChevronRightIcon, UserIcon } from 'lucide-react';
export const PaymentPlans: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  return <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button onClick={() => setActiveTab('dashboard')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'dashboard' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            Active Plans Dashboard
          </button>
          <button onClick={() => setActiveTab('builder')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'builder' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            Payment Plan Builder
          </button>
        </nav>
      </div>
      {/* Active Payment Plans Dashboard */}
      {activeTab === 'dashboard' && <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Active Payment Plans
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  12 Active Plans | $4,850/month expected
                </p>
              </div>
              <div className="mt-3 sm:mt-0 flex space-x-3">
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <PlusIcon className="h-4 w-4 mr-2" />
                  Create New Plan
                </button>
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  View All
                </button>
              </div>
            </div>
            {/* Status Summary */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-6">
              <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <CheckIcon className="h-6 w-6 text-green-400" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          On Schedule
                        </dt>
                        <dd>
                          <div className="text-lg font-medium text-gray-900">
                            9 plans
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <AlertTriangleIcon className="h-6 w-6 text-yellow-400" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Behind Schedule
                        </dt>
                        <dd>
                          <div className="text-lg font-medium text-gray-900">
                            3 plans
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <CalendarIcon className="h-6 w-6 text-blue-400" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Completing This Month
                        </dt>
                        <dd>
                          <div className="text-lg font-medium text-gray-900">
                            1 plan
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg border border-gray-200">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <CreditCardIcon className="h-6 w-6 text-indigo-400" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Collected This Month
                        </dt>
                        <dd>
                          <div className="text-lg font-medium text-gray-900">
                            $3,250
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Active Plans Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Client
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Plan Details
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Progress
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Next Payment
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <UserIcon className="h-6 w-6 text-gray-500" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            John Doe
                          </div>
                          <div className="text-sm text-gray-500">
                            Plan #PP-2023-001
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">$2,400 total</div>
                      <div className="text-sm text-gray-500">
                        $400 down, 6 × $333.33
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        3 of 6 payments
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                        <div className="bg-indigo-600 h-2.5 rounded-full" style={{
                      width: '50%'
                    }}></div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Aug 15, 2023
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        <CheckIcon className="h-3.5 w-3.5 mr-1" />
                        On Schedule
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-indigo-600 hover:text-indigo-900">
                        View Details
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <UserIcon className="h-6 w-6 text-gray-500" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Sarah Johnson
                          </div>
                          <div className="text-sm text-gray-500">
                            Plan #PP-2023-008
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">$1,800 total</div>
                      <div className="text-sm text-gray-500">
                        $300 down, 5 × $300
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        4 of 5 payments
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                        <div className="bg-indigo-600 h-2.5 rounded-full" style={{
                      width: '80%'
                    }}></div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Aug 22, 2023
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        <CalendarIcon className="h-3.5 w-3.5 mr-1" />
                        Completing Soon
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-indigo-600 hover:text-indigo-900">
                        View Details
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <UserIcon className="h-6 w-6 text-gray-500" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Michael Chen
                          </div>
                          <div className="text-sm text-gray-500">
                            Plan #PP-2023-012
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">$3,600 total</div>
                      <div className="text-sm text-gray-500">
                        $600 down, 10 × $300
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        2 of 10 payments
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                        <div className="bg-indigo-600 h-2.5 rounded-full" style={{
                      width: '20%'
                    }}></div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Jul 30, 2023 (Overdue)
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        <AlertTriangleIcon className="h-3.5 w-3.5 mr-1" />
                        Behind Schedule
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-indigo-600 hover:text-indigo-900">
                        Send Reminder
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>}
      {/* Payment Plan Builder */}
      {activeTab === 'builder' && <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-6">
              Payment Plan Builder
            </h3>
            <div className="space-y-8">
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="client" className="block text-sm font-medium text-gray-700">
                    Client
                  </label>
                  <div className="mt-1">
                    <select id="client" name="client" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                      <option>Select client</option>
                      <option>John Doe</option>
                      <option>Sarah Johnson</option>
                      <option>Michael Chen</option>
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label htmlFor="total-amount" className="block text-sm font-medium text-gray-700">
                    Total Amount
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input type="text" name="total-amount" id="total-amount" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="0.00" defaultValue="2,400" />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label htmlFor="down-payment" className="block text-sm font-medium text-gray-700">
                    Down Payment
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input type="text" name="down-payment" id="down-payment" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="0.00" defaultValue="400" />
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-4">
                  Schedule
                </h4>
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-1">
                    <label htmlFor="payments" className="block text-sm font-medium text-gray-700">
                      Payments
                    </label>
                    <div className="mt-1">
                      <input type="number" name="payments" id="payments" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" defaultValue="6" min="1" />
                    </div>
                  </div>
                  <div className="sm:col-span-1 flex items-end">
                    <div className="text-sm text-gray-500">×</div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="payment-amount" className="block text-sm font-medium text-gray-700">
                      Payment Amount
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">$</span>
                      </div>
                      <input type="text" name="payment-amount" id="payment-amount" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="0.00" defaultValue="333.33" readOnly />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="frequency" className="block text-sm font-medium text-gray-700">
                      Frequency
                    </label>
                    <div className="mt-1">
                      <select id="frequency" name="frequency" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                        <option>Weekly</option>
                        <option>Bi-weekly</option>
                        <option selected>Monthly</option>
                      </select>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="start-date" className="block text-sm font-medium text-gray-700">
                      Start Date
                    </label>
                    <div className="mt-1">
                      <input type="date" name="start-date" id="start-date" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-4">
                  Terms
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="auto-charge" name="auto-charge" type="checkbox" checked={true} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="auto-charge" className="font-medium text-gray-700">
                        Auto-charge saved card
                      </label>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-2">
                      <label htmlFor="interest" className="block text-sm font-medium text-gray-700">
                        Interest
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <input type="text" name="interest" id="interest" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="0" defaultValue="0" />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">%</span>
                        </div>
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="late-fee" className="block text-sm font-medium text-gray-700">
                        Late Fee
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input type="text" name="late-fee" id="late-fee" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="0.00" defaultValue="25" />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="grace-period" className="block text-sm font-medium text-gray-700">
                        after
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <input type="number" name="grace-period" id="grace-period" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md" defaultValue="5" />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">days</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end space-x-3">
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Preview Schedule
                </button>
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Send Agreement
                </button>
              </div>
            </div>
          </div>
        </div>}
    </div>;
};