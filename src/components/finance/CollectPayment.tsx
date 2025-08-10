import React, { useState } from 'react';
import { CreditCardIcon, MailIcon, QrCodeIcon, ClipboardIcon, PhoneIcon } from 'lucide-react';
export const CollectPayment: React.FC = () => {
  const [activeTab, setActiveTab] = useState('request');
  return <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button onClick={() => setActiveTab('request')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'request' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            Payment Request Builder
          </button>
          <button onClick={() => setActiveTab('link')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'link' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            Quick Payment Link
          </button>
          <button onClick={() => setActiveTab('terminal')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'terminal' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            Payment Terminal
          </button>
        </nav>
      </div>
      {/* Payment Request Builder */}
      {activeTab === 'request' && <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Payment Request Builder
            </h3>
            <div className="space-y-6">
              {/* Step 1 */}
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-3">
                  Step 1: Select Client(s)
                </h4>
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <div className="mt-1">
                      <input type="text" name="client" id="client" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Search clients or paste multiple emails" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Step 2 */}
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-3">
                  Step 2: Amount & Details
                </h4>
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-2">
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                      Amount
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">$</span>
                      </div>
                      <input type="text" name="amount" id="amount" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="0.00" />
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                      Description
                    </label>
                    <div className="mt-1">
                      <select id="description" name="description" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                        <option>Individual Session (60 min)</option>
                        <option>Individual Session (45 min)</option>
                        <option>Couples Session</option>
                        <option>Initial Consultation</option>
                        <option>Custom...</option>
                      </select>
                    </div>
                  </div>
                  <div className="sm:col-span-3">
                    <label htmlFor="due-date" className="block text-sm font-medium text-gray-700">
                      Due Date
                    </label>
                    <div className="mt-1">
                      <input type="date" name="due-date" id="due-date" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Step 3 */}
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-3">
                  Step 3: Payment Options
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="credit-card" name="credit-card" type="checkbox" checked={true} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="credit-card" className="font-medium text-gray-700">
                        Allow credit/debit card
                      </label>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="ach" name="ach" type="checkbox" checked={true} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="ach" className="font-medium text-gray-700">
                        Allow ACH transfer
                      </label>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="convenience-fee" name="convenience-fee" type="checkbox" checked={true} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="convenience-fee" className="font-medium text-gray-700">
                        Add convenience fee (+2.9% + $0.30)
                      </label>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="partial-payment" name="partial-payment" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="partial-payment" className="font-medium text-gray-700">
                        Allow partial payment
                      </label>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="payment-plan" name="payment-plan" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="payment-plan" className="font-medium text-gray-700">
                        Setup payment plan option
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/* Step 4 */}
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-3">
                  Step 4: Message
                </h4>
                <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label htmlFor="template" className="block text-sm font-medium text-gray-700">
                      Template
                    </label>
                    <div className="mt-1">
                      <select id="template" name="template" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                        <option>Friendly Reminder</option>
                        <option>Payment Due</option>
                        <option>Session Follow-up</option>
                        <option>Custom...</option>
                      </select>
                    </div>
                  </div>
                  <div className="sm:col-span-6">
                    <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Edit message...
                    </button>
                  </div>
                  <div className="sm:col-span-6">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="include-statement" name="include-statement" type="checkbox" checked={true} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="include-statement" className="font-medium text-gray-700">
                          Include itemized statement
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="sm:col-span-6">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="send-copy" name="send-copy" type="checkbox" checked={true} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="send-copy" className="font-medium text-gray-700">
                          Send copy to practitioner
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Actions */}
              <div className="flex justify-end space-x-3">
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Preview
                </button>
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Send to 1 Client
                </button>
              </div>
            </div>
          </div>
        </div>}
      {/* Quick Payment Link Generator */}
      {activeTab === 'link' && <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Quick Payment Link Generator
            </h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-2">
                  <label htmlFor="link-amount" className="block text-sm font-medium text-gray-700">
                    Amount
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input type="text" name="link-amount" id="link-amount" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="0.00" defaultValue="180" />
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label htmlFor="link-description" className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <div className="mt-1">
                    <input type="text" name="link-description" id="link-description" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" defaultValue="Session Payment" />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="allow-tip" name="allow-tip" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="allow-tip" className="font-medium text-gray-700">
                      Allow tip
                    </label>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="adjustable-amount" name="adjustable-amount" type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="adjustable-amount" className="font-medium text-gray-700">
                      Adjustable amount
                    </label>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="collect-address" name="collect-address" type="checkbox" checked={true} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="collect-address" className="font-medium text-gray-700">
                      Collect billing address
                    </label>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-sm font-medium text-gray-700">
                      Generated Link:
                    </div>
                    <div className="mt-1 text-sm text-gray-500 break-all">
                      pay.yourclinic.com/abc123
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-0 flex flex-wrap gap-2">
                    <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <ClipboardIcon className="h-4 w-4 mr-1" />
                      Copy
                    </button>
                    <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <MailIcon className="h-4 w-4 mr-1" />
                      Email
                    </button>
                    <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <PhoneIcon className="h-4 w-4 mr-1" />
                      Text
                    </button>
                    <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm font-medium rounded shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <QrCodeIcon className="h-4 w-4 mr-1" />
                      QR Code
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-2">Valid for:</span>
                <select className="inline-block w-auto border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                  <option>30 days</option>
                  <option>60 days</option>
                  <option>90 days</option>
                  <option>Custom...</option>
                </select>
              </div>
            </div>
          </div>
        </div>}
      {/* Payment Terminal */}
      {activeTab === 'terminal' && <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Virtual Terminal (for in-office)
            </h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label htmlFor="card-number" className="block text-sm font-medium text-gray-700">
                    Card Number
                  </label>
                  <div className="mt-1">
                    <input type="text" name="card-number" id="card-number" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="•••• •••• •••• ••••" />
                  </div>
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="expiration" className="block text-sm font-medium text-gray-700">
                    Exp
                  </label>
                  <div className="mt-1">
                    <input type="text" name="expiration" id="expiration" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="MM/YY" />
                  </div>
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">
                    CVV
                  </label>
                  <div className="mt-1">
                    <input type="text" name="cvv" id="cvv" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="•••" />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="terminal-amount" className="block text-sm font-medium text-gray-700">
                    Amount
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input type="text" name="terminal-amount" id="terminal-amount" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md" placeholder="0.00" />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="save-card" name="save-card" type="checkbox" checked={true} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="save-card" className="font-medium text-gray-700">
                      Save card for future
                    </label>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="email-receipt" name="email-receipt" type="checkbox" checked={true} className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="email-receipt" className="font-medium text-gray-700">
                      Email receipt
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <CreditCardIcon className="h-4 w-4 mr-2" />
                  Process Payment
                </button>
              </div>
            </div>
          </div>
        </div>}
    </div>;
};