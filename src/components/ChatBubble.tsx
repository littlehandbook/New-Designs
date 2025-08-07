import React, { useState } from 'react';
import { MessageCircleIcon, XIcon, SearchIcon, CheckCircleIcon, ChevronRightIcon, FileTextIcon, MessageSquareIcon, HelpCircleIcon } from 'lucide-react';
interface ChatBubbleProps {}
type TabType = 'reports' | 'messages' | 'help';
export const ChatBubble: React.FC<ChatBubbleProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('messages');
  const [searchQuery, setSearchQuery] = useState('');
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
  };
  // Example help questions
  const helpQuestions = ['How do I schedule a telesession with a client?', 'How to manage client documents and files?', 'How to set up recurring appointments?', 'How to generate reports for client sessions?'];
  return <div className="fixed bottom-6 right-6 z-50">
      {/* Chat bubble button (when closed) */}
      {!isOpen && <button onClick={toggleChat} className="bg-indigo-600 text-white rounded-full p-3 shadow-md hover:bg-indigo-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 min-h-[44px] min-w-[44px] flex items-center justify-center" aria-label="Open chat assistant">
          <MessageCircleIcon size={24} aria-hidden="true" />
        </button>}

      {/* Chat window (when open) */}
      {isOpen && <div className="bg-white rounded-lg shadow-md border border-gray-200 w-80 sm:w-96 flex flex-col overflow-hidden transition-all duration-300 ease-in-out max-h-[600px] h-[550px]" role="dialog" aria-labelledby="chat-title">
          {/* Header */}
          <div className="bg-indigo-600 text-white p-5 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center" id="chat-title">
                <span className="text-indigo-200 mr-2" aria-hidden="true">
                  ✻
                </span>
                <span className="font-medium text-lg">Kyodo</span>
              </div>
              <button onClick={toggleChat} className="text-white hover:text-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-600 p-2 rounded-full" aria-label="Close chat">
                <XIcon size={20} aria-hidden="true" />
              </button>
            </div>
            <div className="mb-2">
              <h2 className="text-xl font-semibold">Hi there 👋</h2>
              <p className="text-indigo-100">How can we help?</p>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 overflow-y-auto">
            {/* Status Section */}
            <div className="p-4 border-b border-gray-100">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex items-center">
                <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium">
                    Status: All Systems Operational
                  </p>
                  <p className="text-xs text-gray-500">
                    Updated today, 09:45 UTC
                  </p>
                </div>
              </div>
            </div>

            {/* Search Section */}
            <div className="p-4 border-b border-gray-100">
              <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />
                </div>
                <input type="text" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Search for help" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} aria-label="Search for help topics" />
              </div>
              {/* Help Questions */}
              <div className="space-y-2">
                {helpQuestions.map((question, index) => <button key={index} className="w-full p-3 bg-gray-50 hover:bg-gray-100 rounded-md cursor-pointer transition-colors flex justify-between items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" onClick={() => {
              // Handle question selection
              setSearchQuery(question);
            }}>
                    <p className="text-sm text-gray-700">{question}</p>
                    <ChevronRightIcon className="h-4 w-4 text-gray-400 flex-shrink-0" aria-hidden="true" />
                  </button>)}
              </div>
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="border-t border-gray-200 grid grid-cols-3 bg-white" role="tablist">
            <button className={`flex flex-col items-center justify-center py-3 min-h-[44px] ${activeTab === 'reports' ? 'text-indigo-600' : 'text-gray-500 hover:text-indigo-500'} focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-inset`} onClick={() => handleTabChange('reports')} role="tab" aria-selected={activeTab === 'reports'} aria-controls="reports-panel" id="reports-tab">
              <FileTextIcon className="h-5 w-5 mb-1" aria-hidden="true" />
              <span className="text-xs">Reports</span>
            </button>
            <button className={`flex flex-col items-center justify-center py-3 min-h-[44px] ${activeTab === 'messages' ? 'text-indigo-600' : 'text-gray-500 hover:text-indigo-500'} focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-inset`} onClick={() => handleTabChange('messages')} role="tab" aria-selected={activeTab === 'messages'} aria-controls="messages-panel" id="messages-tab">
              <MessageSquareIcon className="h-5 w-5 mb-1" aria-hidden="true" />
              <span className="text-xs">Messages</span>
            </button>
            <button className={`flex flex-col items-center justify-center py-3 min-h-[44px] ${activeTab === 'help' ? 'text-indigo-600' : 'text-gray-500 hover:text-indigo-500'} focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-inset`} onClick={() => handleTabChange('help')} role="tab" aria-selected={activeTab === 'help'} aria-controls="help-panel" id="help-tab">
              <HelpCircleIcon className="h-5 w-5 mb-1" aria-hidden="true" />
              <span className="text-xs">Help</span>
            </button>
          </div>
        </div>}
    </div>;
};