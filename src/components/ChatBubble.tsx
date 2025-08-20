import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
export const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  return <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? <div className="bg-white rounded-lg shadow-lg w-80 sm:w-96 overflow-hidden flex flex-col border border-gray-200">
          <div className="bg-violet-600 text-white p-4 flex justify-between items-center">
            <h3 className="font-medium">Support Chat</h3>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex-1 p-4 h-80 overflow-y-auto bg-gray-50">
            <div className="flex flex-col space-y-3">
              <div className="bg-gray-200 rounded-lg p-3 max-w-[80%] self-start">
                <p className="text-sm">Hello! How can I help you today?</p>
                <span className="text-xs text-gray-500 mt-1">
                  Support • 10:30 AM
                </span>
              </div>
            </div>
          </div>
          <div className="p-3 border-t border-gray-200">
            <div className="flex items-center">
              <input type="text" placeholder="Type your message..." className="flex-1 border border-gray-300 rounded-l-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500" />
              <button className="bg-violet-600 text-white rounded-r-md px-4 py-2 text-sm font-medium hover:bg-violet-700">
                Send
              </button>
            </div>
          </div>
        </div> : <button onClick={() => setIsOpen(true)} className="bg-violet-600 text-white rounded-full p-3 shadow-lg hover:bg-violet-700 transition-colors">
          <MessageSquare className="h-6 w-6" />
        </button>}
    </div>;
};