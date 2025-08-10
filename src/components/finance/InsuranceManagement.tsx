import React, { useState } from 'react';
import { CheckIcon, XIcon, ClockIcon, AlertTriangleIcon, PlusIcon, FileTextIcon, RefreshCwIcon, ChevronRightIcon, SearchIcon } from 'lucide-react';
export const InsuranceManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  return <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button onClick={() => setActiveTab('overview')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'overview' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            Insurance Overview
          </button>
          <button onClick={() => setActiveTab('claims')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'claims' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            Claims Management
          </button>
          <button onClick={() => setActiveTab('verification')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'verification' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            Verification Tool
          </button>
        </nav>
      </div>
      {/* Insurance Overview Dashboard */}
      {activeTab === 'overview' && <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Active Insurance Providers
              </h3>
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <PlusIcon className="h-4 w-4 mr-2" />
                Add Provider
              </button>
            </div>
            <div className="space-y-4">
              {/* BCBS */}
              <div className="bg-white border border-gray-200 rounded-md shadow-sm p-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="flex items-center">
                      <h4 className="text-lg font-medium text-gray-900">
                        Blue Cross Blue Shield
                      </h4>
                      <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <CheckIcon className="h-3.5 w-3.5 mr-1" />
                        Active
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      Provider ID: 12345
                    </p>
                  </div>
                  <div className="mt-3 sm:mt-0 flex space-x-3">
                    <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      View Details
                    </button>
                    <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Edit
                    </button>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div>
                    <div className="text-xs font-medium text-gray-500">
                      Clients
                    </div>
                    <div className="mt-1 text-sm font-medium text-gray-900">
                      24 active
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-500">
                      Claims (Last 30 days)
                    </div>
                    <div className="mt-1 text-sm font-medium text-gray-900">
                      17 submitted, 12 paid
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-500">
                      Average Reimbursement
                    </div>
                    <div className="mt-1 text-sm font-medium text-gray-900">
                      $92.50 (77%)
                    </div>
                  </div>
                </div>
              </div>
              {/* Aetna */}
              <div className="bg-white border border-gray-200 rounded-md shadow-sm p-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="flex items-center">
                      <h4 className="text-lg font-medium text-gray-900">
                        Aetna
                      </h4>
                      <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <CheckIcon className="h-3.5 w-3.5 mr-1" />
                        Active
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      Provider ID: 67890
                    </p>
                  </div>
                  <div className="mt-3 sm:mt-0 flex space-x-3">
                    <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      View Details
                    </button>
                    <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Edit
                    </button>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div>
                    <div className="text-xs font-medium text-gray-500">
                      Clients
                    </div>
                    <div className="mt-1 text-sm font-medium text-gray-900">
                      16 active
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-500">
                      Claims (Last 30 days)
                    </div>
                    <div className="mt-1 text-sm font-medium text-gray-900">
                      12 submitted, 8 paid
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-500">
                      Average Reimbursement
                    </div>
                    <div className="mt-1 text-sm font-medium text-gray-900">
                      $86.25 (72%)
                    </div>
                  </div>
                </div>
              </div>
              {/* UHC */}
              <div className="bg-white border border-gray-200 rounded-md shadow-sm p-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="flex items-center">
                      <h4 className="text-lg font-medium text-gray-900">
                        United Healthcare
                      </h4>
                      <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        <AlertTriangleIcon className="h-3.5 w-3.5 mr-1" />
                        Credentials expiring
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      Provider ID: 54321
                    </p>
                  </div>
                  <div className="mt-3 sm:mt-0 flex space-x-3">
                    <button className="inline-flex items-center px-3 py-1.5 border border-yellow-300 text-sm font-medium rounded shadow-sm text-yellow-700 bg-white hover:bg-yellow-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                      Renew Credentials
                    </button>
                    <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      View Details
                    </button>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div>
                    <div className="text-xs font-medium text-gray-500">
                      Clients
                    </div>
                    <div className="mt-1 text-sm font-medium text-gray-900">
                      18 active
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-500">
                      Claims (Last 30 days)
                    </div>
                    <div className="mt-1 text-sm font-medium text-gray-900">
                      14 submitted, 11 paid
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-500">
                      Average Reimbursement
                    </div>
                    <div className="mt-1 text-sm font-medium text-gray-900">
                      $90.00 (75%)
                    </div>
                  </div>
                </div>
              </div>
              {/* Medicare */}
              <div className="bg-white border border-gray-200 rounded-md shadow-sm p-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="flex items-center">
                      <h4 className="text-lg font-medium text-gray-900">
                        Medicare
                      </h4>
                      <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <CheckIcon className="h-3.5 w-3.5 mr-1" />
                        Active
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      NPI: 1234567890
                    </p>
                  </div>
                  <div className="mt-3 sm:mt-0 flex space-x-3">
                    <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      View Details
                    </button>
                    <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Edit
                    </button>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div>
                    <div className="text-xs font-medium text-gray-500">
                      Clients
                    </div>
                    <div className="mt-1 text-sm font-medium text-gray-900">
                      9 active
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-500">
                      Claims (Last 30 days)
                    </div>
                    <div className="mt-1 text-sm font-medium text-gray-900">
                      7 submitted, 5 paid
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-medium text-gray-500">
                      Average Reimbursement
                    </div>
                    <div className="mt-1 text-sm font-medium text-gray-900">
                      $78.00 (65%)
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <PlusIcon className="h-4 w-4 mr-2" />
                Add Provider
              </button>
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Verify Credentials
              </button>
            </div>
          </div>
        </div>}
      {/* Claims Management Table */}
      {activeTab === 'claims' && <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Claims Management
              </h3>
              <div className="mt-3 sm:mt-0 flex flex-wrap gap-2">
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Submit New Claim
                </button>
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Batch Submit
                </button>
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <FileTextIcon className="h-4 w-4 mr-2" />
                  Download 837
                </button>
              </div>
            </div>
            {/* Filters */}
            <div className="mb-6 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </div>
                <input type="text" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Search claims by client or number" />
              </div>
              <div className="flex flex-wrap gap-2">
                <select className="block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option>All</option>
                  <option>Pending</option>
                  <option>Paid</option>
                  <option>Denied</option>
                </select>
                <select className="block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option>Last 30 days</option>
                  <option>Last 60 days</option>
                  <option>Last 90 days</option>
                  <option>This year</option>
                </select>
              </div>
            </div>
            {/* Claims Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Claim #
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Client
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Insurance
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Sessions
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Age
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      CLM-2892
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Sam K.
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      BCBS
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      4
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      $720
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        <ClockIcon className="h-3.5 w-3.5 mr-1" />
                        Pending
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      12d
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-indigo-600 hover:text-indigo-900">
                        Track
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      CLM-2891
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Lisa T.
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Aetna
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      2
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      $360
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        <XIcon className="h-3.5 w-3.5 mr-1" />
                        Denied
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      3d
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-indigo-600 hover:text-indigo-900">
                        Appeal
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      CLM-2890
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      Tom H.
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      UHC
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      3
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      $540
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <CheckIcon className="h-3.5 w-3.5 mr-1" />
                        Paid
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      1d
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-indigo-600 hover:text-indigo-900">
                        View EOB
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>}
      {/* Insurance Verification Tool */}
      {activeTab === 'verification' && <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-6">
              Insurance Verification Tool
            </h3>
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 mb-8">
              <div className="sm:col-span-2">
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
              <div className="sm:col-span-2">
                <label htmlFor="insurance" className="block text-sm font-medium text-gray-700">
                  Insurance
                </label>
                <div className="mt-1">
                  <input type="text" name="insurance" id="insurance" disabled className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md bg-gray-50" value="Auto-detected: BCBS" />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="service-date" className="block text-sm font-medium text-gray-700">
                  Service Date
                </label>
                <div className="mt-1">
                  <input type="date" name="service-date" id="service-date" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                </div>
              </div>
              <div className="sm:col-span-6 flex items-end">
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <RefreshCwIcon className="h-4 w-4 mr-2" />
                  Verify Coverage
                </button>
              </div>
            </div>
            {/* Results */}
            <div className="bg-green-50 border border-green-200 rounded-md p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <CheckIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-800">
                    Active Coverage
                  </h3>
                  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                      <div className="text-xs font-medium text-green-800">
                        Copay
                      </div>
                      <div className="mt-1 text-sm font-medium text-green-900">
                        $30
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-medium text-green-800">
                        Deductible
                      </div>
                      <div className="mt-1 text-sm font-medium text-green-900">
                        $450/$1500 met
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-medium text-green-800">
                        Sessions
                      </div>
                      <div className="mt-1 text-sm font-medium text-green-900">
                        18/30 used this year
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-medium text-green-800">
                        Auth Required
                      </div>
                      <div className="mt-1 text-sm font-medium text-green-900">
                        No
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <button className="inline-flex items-center px-3 py-1.5 border border-green-700 shadow-sm text-xs font-medium rounded-md text-green-700 bg-white hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                      Print Verification
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>}
    </div>;
};