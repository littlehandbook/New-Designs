import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, MessageSquare, BarChart2, FileText, Settings, Bell, Search, User, Menu, CreditCard, HelpCircle, ArrowUpRight, Send, Paperclip, Smile } from 'lucide-react';
import { ChatBubble } from '../components/ChatBubble';
export const ClientMessaging = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [message, setMessage] = useState('');
  // Sample messages data
  const messages = [{
    id: 1,
    sender: 'client',
    content: "Hi Dr. Smith, I wanted to follow up on our last session. I've been practicing the breathing exercises and they're really helping!",
    timestamp: '2024-01-28T10:30:00',
    read: true
  }, {
    id: 2,
    sender: 'practitioner',
    content: "That's wonderful to hear, Michael! I'm so glad the breathing exercises are working for you. How often have you been practicing them?",
    timestamp: '2024-01-28T14:15:00',
    read: true
  }, {
    id: 3,
    sender: 'client',
    content: "I've been doing them twice a day - once in the morning and once before bed. The evening ones especially help me sleep better.",
    timestamp: '2024-01-28T16:45:00',
    read: true
  }, {
    id: 4,
    sender: 'practitioner',
    content: "Excellent! That's exactly what we want to see. Keep up the great work. How are you feeling about the upcoming presentation at work?",
    timestamp: '2024-01-28T17:30:00',
    read: true
  }, {
    id: 5,
    sender: 'client',
    content: 'Much better actually. I used the grounding technique you taught me during practice runs and it really helped calm my nerves.',
    timestamp: '2024-01-29T09:20:00',
    read: false
  }];
  const formatTime = timestamp => {
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };
  const formatDate = timestamp => {
    const date = new Date(timestamp);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
      });
    }
  };
  const handleSendMessage = () => {
    if (message.trim()) {
      // In a real app, this would send the message
      console.log('Sending message:', message);
      setMessage('');
    }
  };
  return <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <aside className={`${isSidebarCollapsed ? 'w-20' : 'w-64'} bg-white border-r border-gray-200 transition-all duration-300 ease-in-out flex flex-col h-full`}>
        {/* Logo */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-violet-600 rounded-md flex items-center justify-center text-white font-bold">
              PP
            </div>
            {!isSidebarCollapsed && <span className="ml-2 text-lg font-semibold text-gray-900">
                Practitioner
              </span>}
          </div>
          <button onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)} className="text-gray-500 hover:text-gray-700">
            <Menu className="h-5 w-5" />
          </button>
        </div>
        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          <div className="px-4 mb-4">
            {!isSidebarCollapsed && <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Main
              </h3>}
            <ul className="mt-2 space-y-1">
              <li>
                <Link to="/practice/n/dashboard" className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md group">
                  <BarChart2 className="h-5 w-5 mr-3 text-gray-500 group-hover:text-violet-600" />
                  {!isSidebarCollapsed && <span>Dashboard</span>}
                </Link>
              </li>
              <li>
                <Link to="/practice/n/clients" className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md group">
                  <Users className="h-5 w-5 mr-3 text-gray-500 group-hover:text-violet-600" />
                  {!isSidebarCollapsed && <span>Clients</span>}
                </Link>
              </li>
              <li>
                <Link to="/practice/n/calendar" className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md group">
                  <Calendar className="h-5 w-5 mr-3 text-gray-500 group-hover:text-violet-600" />
                  {!isSidebarCollapsed && <span>Calendar</span>}
                </Link>
              </li>
              <li>
                <Link to="/practice/n/client-messaging" className="flex items-center px-4 py-2.5 text-sm font-medium text-violet-700 bg-violet-50 rounded-md group">
                  <MessageSquare className="h-5 w-5 mr-3 text-violet-700" />
                  {!isSidebarCollapsed && <span>Messages</span>}
                </Link>
              </li>
              <li>
                <Link to="/practice/n/client-documents" className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md group">
                  <FileText className="h-5 w-5 mr-3 text-gray-500 group-hover:text-violet-600" />
                  {!isSidebarCollapsed && <span>Documents</span>}
                </Link>
              </li>
            </ul>
          </div>
          {!isSidebarCollapsed && <div className="px-4 mb-4">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Admin
              </h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <Link to="/practice/n/finance" className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md group">
                    <CreditCard className="h-5 w-5 mr-3 text-gray-500 group-hover:text-violet-600" />
                    <span>Billing</span>
                  </Link>
                </li>
                <li>
                  <Link to="/practice/n/settings" className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md group">
                    <Settings className="h-5 w-5 mr-3 text-gray-500 group-hover:text-violet-600" />
                    <span>Settings</span>
                  </Link>
                </li>
              </ul>
            </div>}
        </nav>
        {/* User profile */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-9 w-9 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="User profile" />
            </div>
            {!isSidebarCollapsed && <div className="ml-3 text-left">
                <p className="text-sm font-medium text-gray-900">
                  Dr. Jane Smith
                </p>
                <p className="text-xs text-gray-500">Premium Plan</p>
              </div>}
          </div>
        </div>
      </aside>
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-violet-100 flex items-center justify-center">
                <User className="h-6 w-6 text-violet-600" />
              </div>
              <div className="ml-3">
                <h1 className="text-lg font-semibold text-gray-900">
                  Michael Chen
                </h1>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500 mr-1.5"></span>
                  Online now
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/practice/client-messaging" className="text-sm text-violet-600 hover:text-violet-800 flex items-center">
                <span className="hidden sm:inline">Switch to classic view</span>
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </Link>
              <button className="p-1 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none">
                <Bell className="h-6 w-6" />
              </button>
              <button className="p-1 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none">
                <HelpCircle className="h-6 w-6" />
              </button>
            </div>
          </div>
        </header>
        {/* Messages */}
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
            <div className="space-y-4">
              {messages.map((msg, index) => {
              const showDate = index === 0 || formatDate(msg.timestamp) !== formatDate(messages[index - 1].timestamp);
              return <div key={msg.id}>
                    {showDate && <div className="flex justify-center my-4">
                        <span className="bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-500 shadow-sm">
                          {formatDate(msg.timestamp)}
                        </span>
                      </div>}
                    <div className={`flex ${msg.sender === 'practitioner' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg shadow-sm ${msg.sender === 'practitioner' ? 'bg-violet-600 text-white' : 'bg-white text-gray-900 border border-gray-200'}`}>
                        <p className="text-sm">{msg.content}</p>
                        <p className={`text-xs mt-1 ${msg.sender === 'practitioner' ? 'text-violet-100' : 'text-gray-500'}`}>
                          {formatTime(msg.timestamp)}
                        </p>
                      </div>
                    </div>
                  </div>;
            })}
            </div>
          </div>
        </main>
        {/* Message Input */}
        <div className="bg-white border-t border-gray-200 px-4 py-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4">
              <button className="flex-shrink-0 p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
                <Paperclip className="h-5 w-5" />
              </button>
              <div className="flex-1 relative">
                <input type="text" value={message} onChange={e => setMessage(e.target.value)} onKeyPress={e => e.key === 'Enter' && handleSendMessage()} placeholder="Type your message..." className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-violet-500 focus:border-transparent" />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
                  <Smile className="h-4 w-4" />
                </button>
              </div>
              <button onClick={handleSendMessage} disabled={!message.trim()} className={`flex-shrink-0 p-2 rounded-full ${message.trim() ? 'bg-violet-600 text-white hover:bg-violet-700' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}>
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Chat Bubble Component */}
      <ChatBubble />
    </div>;
};