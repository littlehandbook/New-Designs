import React, { useState } from 'react';
import { SearchIcon, MailIcon, CreditCardIcon, FilterIcon, CheckIcon, XIcon, SaveIcon, ChevronDownIcon } from 'lucide-react';
export const ClientAccounts: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState('all');
  const [selectedClients, setSelectedClients] = useState<string[]>([]);
  const handleSelectClient = (clientId: string) => {
    if (selectedClients.includes(clientId)) {
      setSelectedClients(selectedClients.filter(id => id !== clientId));
    } else {
      setSelectedClients([...selectedClients, clientId]);
    }
  };
  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedClients(['client1', 'client2', 'client3']); // IDs of all clients
    } else {
      setSelectedClients([]);
    }
  };
  return <div className="bg-white rounded-lg shadow">
      {/* Sub-Navigation Tabs */}
      <div className="border-b border-gray-200">
        <div className="px-6">
          <nav className="-mb-px flex space-x-6 overflow-x-auto">
            <button onClick={() => setActiveSubTab('all')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeSubTab === 'all' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              All Accounts
            </button>
            <button onClick={() => setActiveSubTab('outstanding')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeSubTab === 'outstanding' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              Outstanding
            </button>
            <button onClick={() => setActiveSubTab('overdue')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeSubTab === 'overdue' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              Overdue
            </button>
            <button onClick={() => setActiveSubTab('credits')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeSubTab === 'credits' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              Credits
            </button>
            <button onClick={() => setActiveSubTab('payment-plans')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeSubTab === 'payment-plans' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
              Payment Plans
            </button>
          </nav>
        </div>
      </div>
      {/* Search & Filters */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <input type="text" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Search by name, amount, or invoice #" />
          </div>
          <div className="flex flex-wrap gap-2">
            <select className="block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <option>Balance: Any</option>
              <option>Balance: $0</option>
              <option>Balance: $1-$100</option>
              <option>Balance: $100+</option>
            </select>
            <select className="block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <option>Status: All</option>
              <option>Status: Current</option>
              <option>Status: Overdue</option>
            </select>
            <select className="block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <option>Insurance: All</option>
              <option>Insurance: BCBS</option>
              <option>Insurance: Aetna</option>
              <option>Insurance: Self-Pay</option>
            </select>
            <select className="block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <option>Practitioner: All</option>
              <option>Dr. Smith</option>
              <option>Dr. Johnson</option>
              <option>Dr. Chen</option>
            </select>
            <select className="block py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <option>Last Payment: Any time</option>
              <option>Last 30 days</option>
              <option>Last 60 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <div className="flex space-x-2">
            <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Apply
            </button>
            <button className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Clear
            </button>
            <button className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <SaveIcon className="h-4 w-4 mr-1" />
              Save Filter
            </button>
          </div>
        </div>
      </div>
      {/* Bulk Actions Bar (appears when clients are selected) */}
      {selectedClients.length > 0 && <div className="px-6 py-3 bg-gray-50 border-b border-gray-200 flex flex-wrap items-center justify-between">
          <div className="text-sm font-medium text-gray-700">
            {selectedClients.length} clients selected | Total: $1,247
          </div>
          <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
            <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <MailIcon className="h-3.5 w-3.5 mr-1" />
              Send Payment Reminders
            </button>
            <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Generate Statements
            </button>
            <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Apply Late Fees
            </button>
            <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-xs font-medium rounded shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Export List
            </button>
          </div>
        </div>}
      {/* Client Account Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-3 py-3 text-left">
                <input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" onChange={handleSelectAll} checked={selectedClients.length === 3} />
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Client
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Balance
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Payment
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Insurance
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Next Appt
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-3 py-4 whitespace-nowrap">
                <input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" onChange={() => handleSelectClient('client1')} checked={selectedClients.includes('client1')} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  Sarah J.
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">$0</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  <CheckIcon className="h-3.5 w-3.5 mr-1" />
                  Current
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Today
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                BCBS
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Aug 12
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                  View
                </a>
              </td>
            </tr>
            <tr>
              <td className="px-3 py-4 whitespace-nowrap">
                <input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" onChange={() => handleSelectClient('client2')} checked={selectedClients.includes('client2')} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">Mike R.</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">$360</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                  <AlertTriangleIcon className="h-3.5 w-3.5 mr-1" />
                  Overdue
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Jul 15
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Self-Pay
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Aug 10
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div className="flex justify-end space-x-2">
                  <button className="text-indigo-600 hover:text-indigo-900">
                    <MailIcon className="h-4 w-4" />
                  </button>
                  <button className="text-indigo-600 hover:text-indigo-900">
                    <CreditCardIcon className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td className="px-3 py-4 whitespace-nowrap">
                <input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" onChange={() => handleSelectClient('client3')} checked={selectedClients.includes('client3')} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">Anna L.</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">-$50</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                  Credit
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Aug 3
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Aetna
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Tomorrow
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                  Apply
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>;
};
export const ClientFinancialDetail: React.FC = () => {
  return <div className="bg-white rounded-lg shadow p-6">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">John Doe</h2>
          <p className="text-sm text-gray-500">Account #FIN-2024-0145</p>
        </div>
        <div className="mt-3 sm:mt-0 flex flex-wrap gap-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Active
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            Self-Pay
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
            Assigned: Dr. Smith
          </span>
        </div>
      </div>
      {/* Financial Summary */}
      <div className="mb-6">
        <h3 className="text-md font-medium text-gray-900 pb-2 border-b border-gray-200 mb-4">
          Financial Summary
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-500">Current Balance:</span>
              <span className="text-lg font-bold text-gray-900">$540.00</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-500">Last Payment:</span>
              <span className="text-sm text-gray-900">$180 on July 28</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-500">Payment Method:</span>
              <div className="flex items-center">
                <span className="text-sm text-gray-900">Visa ••4242</span>
                <button className="ml-2 text-xs text-indigo-600 hover:text-indigo-800">
                  [Update]
                </button>
              </div>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-gray-500">Credit Available:</span>
              <span className="text-sm text-gray-900">$0</span>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <CreditCardIcon className="h-4 w-4 mr-2" />
              Charge Card $540
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <MailIcon className="h-4 w-4 mr-2" />
              Send Invoice
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Payment Plan
            </button>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Generate Superbill
            </button>
          </div>
        </div>
      </div>
      {/* Special Arrangements */}
      <div className="mb-6">
        <h3 className="text-md font-medium text-gray-900 pb-2 border-b border-gray-200 mb-4">
          Special Arrangements
        </h3>
        <div className="space-y-3">
          <div className="flex items-start">
            <input id="sliding-scale" name="sliding-scale" type="checkbox" checked={true} className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 mt-1" />
            <label htmlFor="sliding-scale" className="ml-3 block text-sm text-gray-700">
              Sliding Scale: $120/session (normally $180)
            </label>
          </div>
          <div className="flex items-start">
            <input id="payment-plan" name="payment-plan" type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 mt-1" />
            <label htmlFor="payment-plan" className="ml-3 block text-sm text-gray-700">
              Payment Plan: $200/month
            </label>
          </div>
          <div className="mt-3">
            <div className="text-sm text-gray-700 font-medium">Note:</div>
            <div className="text-sm text-gray-600 italic">
              "Student discount through December"
            </div>
          </div>
          <div className="mt-3">
            <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Edit Arrangements
            </button>
          </div>
        </div>
      </div>
      {/* Transaction History */}
      <div className="mb-6">
        <h3 className="text-md font-medium text-gray-900 pb-2 border-b border-gray-200 mb-4">
          Transaction History
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Balance
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Jul 28, 2023
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  Payment - Visa ••4242
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Payment
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                  -$180.00
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  $540.00
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Jul 28, 2023
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  Individual Session - 60 min
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                    Charge
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  $120.00
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  $720.00
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  Jul 14, 2023
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  Payment - Visa ••4242
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Payment
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600">
                  -$180.00
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  $600.00
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Session Packages */}
      <div>
        <h3 className="text-md font-medium text-gray-900 pb-2 border-b border-gray-200 mb-4">
          Session Packages
        </h3>
        <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h4 className="text-sm font-medium text-gray-900">
                10-Session Package
              </h4>
              <p className="text-sm text-gray-500 mt-1">3 used, 7 remaining</p>
              <p className="text-sm text-gray-500">Expires: Dec 31, 2025</p>
            </div>
            <div className="mt-3 sm:mt-0">
              <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};