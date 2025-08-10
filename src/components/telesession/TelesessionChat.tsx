import React, { useEffect, useState, useRef } from 'react';
import { XIcon, SendIcon, PaperclipIcon, SmileIcon, ImageIcon, FileIcon } from 'lucide-react';
interface TelesessionChatProps {
  clientName: string;
  onClose: () => void;
  isMaximized: boolean;
}
interface ChatMessage {
  id: string;
  sender: 'user' | 'client';
  text: string;
  timestamp: Date;
}
export const TelesessionChat: React.FC<TelesessionChatProps> = ({
  clientName,
  onClose,
  isMaximized
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([{
    id: '1',
    sender: 'client',
    text: "Hello, I'm ready for our session today.",
    timestamp: new Date(Date.now() - 1000 * 60 * 5) // 5 minutes ago
  }, {
    id: '2',
    sender: 'user',
    text: "Great! I'll be starting the video call in just a moment.",
    timestamp: new Date(Date.now() - 1000 * 60 * 4) // 4 minutes ago
  }, {
    id: '3',
    sender: 'client',
    text: 'Perfect, I have my notes ready from last time.',
    timestamp: new Date(Date.now() - 1000 * 60 * 3) // 3 minutes ago
  }]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  }, [messages]);
  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    const message: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: newMessage,
      timestamp: new Date()
    };
    setMessages([...messages, message]);
    setNewMessage('');
    // Simulate client response after a delay
    setTimeout(() => {
      const responses = ['I understand, thank you for explaining that.', 'That makes sense to me.', "I'll try that approach this week.", 'Could you elaborate on that point a bit more?', "I've been working on what we discussed last session."];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      const clientResponse: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'client',
        text: randomResponse,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, clientResponse]);
    }, 3000);
  };
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  return <div className={`flex flex-col h-full ${isMaximized ? 'border-l border-gray-200' : 'bg-white rounded-lg border border-gray-200'}`}>
      {/* Chat header */}
      <div className="flex items-center justify-between p-3 border-b border-gray-200 bg-gray-50">
        <h3 className="text-sm font-medium text-gray-900">
          Chat with {clientName}
        </h3>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
          <XIcon className="h-5 w-5" />
        </button>
      </div>
      {/* Messages area */}
      <div className="flex-1 p-3 overflow-y-auto bg-gray-50">
        <div className="space-y-3">
          {messages.map(message => <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[75%] rounded-lg px-3 py-2 ${message.sender === 'user' ? 'bg-indigo-600 text-white' : 'bg-white border border-gray-200 text-gray-800'}`}>
                <div className="text-sm">{message.text}</div>
                <div className={`text-xs mt-1 ${message.sender === 'user' ? 'text-indigo-200' : 'text-gray-500'}`}>
                  {formatTime(message.timestamp)}
                </div>
              </div>
            </div>)}
          <div ref={messagesEndRef} />
        </div>
      </div>
      {/* Input area */}
      <div className="p-3 border-t border-gray-200 bg-white">
        <div className="flex items-center">
          <button className="p-1 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100">
            <PaperclipIcon className="h-5 w-5" />
          </button>
          <button className="p-1 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100">
            <ImageIcon className="h-5 w-5" />
          </button>
          <button className="p-1 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100">
            <SmileIcon className="h-5 w-5" />
          </button>
          <input type="text" value={newMessage} onChange={e => setNewMessage(e.target.value)} onKeyPress={e => e.key === 'Enter' && handleSendMessage()} placeholder="Type a message..." className="flex-1 mx-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
          <button onClick={handleSendMessage} disabled={newMessage.trim() === ''} className={`p-2 rounded-full ${newMessage.trim() === '' ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`}>
            <SendIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>;
};