import React, { useState } from 'react';
import { XIcon, UserIcon, SearchIcon } from 'lucide-react';
interface TelesessionModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export const TelesessionModal: React.FC<TelesessionModalProps> = ({
  isOpen,
  onClose
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  if (!isOpen) return null;
  // Mock client data
  const clients = [{
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah.johnson@email.com',
    lastSession: '15/01/2024'
  }, {
    id: 2,
    name: 'Michael Chen',
    email: 'michael.chen@email.com',
    lastSession: '22/01/2024'
  }, {
    id: 3,
    name: 'Emma Wilson',
    email: 'emma.wilson@email.com',
    lastSession: '10/01/2024'
  }];
  // Filter clients based on search query
  const filteredClients = clients.filter(client => client.name.toLowerCase().includes(searchQuery.toLowerCase()) || client.email.toLowerCase().includes(searchQuery.toLowerCase()));
  return <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={onClose}></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>
        <div className="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-md shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button type="button" className="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none" onClick={onClose}>
              <span className="sr-only">Close</span>
              <XIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="sm:flex sm:items-start">
            <div className="w-full mt-3 text-center sm:mt-0 sm:text-left">
              <h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-title">
                Start New Telesession
              </h3>
              <div className="mt-4">
                <div className="relative mb-4">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <SearchIcon className="w-5 h-5 text-gray-400" />
                  </div>
                  <input type="text" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Search clients..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
                </div>
                <div className="mt-2 max-h-60 overflow-y-auto">
                  <ul className="divide-y divide-gray-200">
                    {filteredClients.map(client => <li key={client.id} className="py-3 px-2 flex justify-between items-center hover:bg-gray-50 rounded-md cursor-pointer">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 mr-3">
                            <UserIcon className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {client.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              Last session: {client.lastSession}
                            </p>
                          </div>
                        </div>
                        <button className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          Select
                        </button>
                      </li>)}
                    {filteredClients.length === 0 && <li className="py-4 text-center text-gray-500">
                        No clients found
                      </li>}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};