import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserIcon, BookOpenIcon, PlusIcon, CheckIcon, XIcon, CalendarIcon, ClockIcon, FileTextIcon, LinkIcon } from 'lucide-react';
import { SettingsModal } from '../components/layout/SettingsModal';
import { ChatBubble } from '../components/ChatBubble';
import { CollapsibleSidebar } from '../components/layout/CollapsibleSidebar';
export const ClientHomework = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [homeworkModalOpen, setHomeworkModalOpen] = useState(false);
  const [currentHomework, setCurrentHomework] = useState({
    id: 1,
    title: 'Daily Mood Journal',
    description: 'Record your mood and any triggers you notice daily',
    status: 'pending',
    assignedDate: '15/01/2024',
    dueDate: '22/01/2024',
    detailedInstructions: 'Track your mood throughout the day using the provided scale (1-10). Note any triggers or situations that may have influenced your mood. Try to identify patterns over time.\n\nComplete this exercise daily, preferably at the same time each day. This will help us identify patterns and develop effective coping strategies tailored to your specific triggers.',
    resources: [{
      id: 1,
      title: 'Mood Tracking Template',
      type: 'PDF'
    }, {
      id: 2,
      title: 'Understanding Emotional Triggers',
      type: 'Article'
    }]
  });
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const openHomeworkModal = homework => {
    setCurrentHomework(homework);
    setHomeworkModalOpen(true);
  };
  const HomeworkDetailModal = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedHomework, setEditedHomework] = useState({
      ...currentHomework
    });
    const handleSave = () => {
      // In a real app, you would save changes to the database here
      setCurrentHomework(editedHomework);
      setIsEditing(false);
    };
    const handleChange = e => {
      const {
        name,
        value
      } = e.target;
      setEditedHomework({
        ...editedHomework,
        [name]: value
      });
    };
    if (!homeworkModalOpen) return null;
    return <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full md:max-w-2xl">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                  <div className="flex justify-between items-center">
                    {isEditing ? <input type="text" name="title" value={editedHomework.title} onChange={handleChange} className="text-lg font-medium text-gray-900 border-b border-gray-300 focus:border-indigo-500 focus:ring-0 w-full" /> : <h3 className="text-lg leading-6 font-medium text-gray-900">
                        {currentHomework.title}
                      </h3>}
                    <div className="flex items-center">
                      {!isEditing && <button type="button" className="ml-2 p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors" onClick={() => setIsEditing(true)}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                            <path d="m15 5 4 4"></path>
                          </svg>
                        </button>}
                      <button type="button" className="ml-2 p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors" onClick={() => setHomeworkModalOpen(false)}>
                        <XIcon className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center text-sm text-gray-500">
                    <div className="flex items-center mr-4 mb-2">
                      <CalendarIcon className="h-4 w-4 mr-1" />
                      {isEditing ? <input type="text" name="assignedDate" value={editedHomework.assignedDate} onChange={handleChange} className="border-b border-gray-300 focus:border-indigo-500 focus:ring-0 w-24" /> : <span>Assigned: {currentHomework.assignedDate}</span>}
                    </div>
                    <div className="flex items-center mr-4 mb-2">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      {isEditing ? <input type="text" name="dueDate" value={editedHomework.dueDate} onChange={handleChange} className="border-b border-gray-300 focus:border-indigo-500 focus:ring-0 w-24" /> : <span>Due: {currentHomework.dueDate}</span>}
                    </div>
                    <div className="mb-2">
                      {isEditing ? <select name="status" value={editedHomework.status} onChange={handleChange} className="text-xs rounded-full px-2.5 py-0.5 border border-gray-300 focus:border-indigo-500 focus:ring-0">
                          <option value="pending">Pending</option>
                          <option value="completed">Completed</option>
                          <option value="overdue">Overdue</option>
                        </select> : <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          {currentHomework.status}
                        </span>}
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Brief Description
                    </label>
                    {isEditing ? <textarea name="description" value={editedHomework.description} onChange={handleChange} rows={2} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" /> : <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-md">
                        {currentHomework.description}
                      </p>}
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Detailed Instructions
                    </label>
                    {isEditing ? <textarea name="detailedInstructions" value={editedHomework.detailedInstructions} onChange={handleChange} rows={6} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" /> : <div className="text-sm text-gray-700 bg-gray-50 p-3 rounded-md whitespace-pre-line">
                        {currentHomework.detailedInstructions}
                      </div>}
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Attached Resources
                    </label>
                    <div className="bg-gray-50 p-3 rounded-md">
                      {currentHomework.resources.map(resource => <div key={resource.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                          <div className="flex items-center">
                            {resource.type === 'PDF' ? <FileTextIcon className="h-4 w-4 text-red-500 mr-2" /> : <LinkIcon className="h-4 w-4 text-blue-500 mr-2" />}
                            <span className="text-sm">{resource.title}</span>
                          </div>
                          <button className="text-xs text-indigo-600 hover:text-indigo-800">
                            View
                          </button>
                        </div>)}
                      {isEditing && <button className="mt-2 text-xs text-indigo-600 hover:text-indigo-800 flex items-center">
                          <PlusIcon className="h-3 w-3 mr-1" />
                          Add Resource
                        </button>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              {isEditing ? <>
                  <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={handleSave}>
                    Save Changes
                  </button>
                  <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => setIsEditing(false)}>
                    Cancel
                  </button>
                </> : <>
                  <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => setIsEditing(true)}>
                    Edit Assignment
                  </button>
                  <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => setHomeworkModalOpen(false)}>
                    Close
                  </button>
                </>}
            </div>
          </div>
        </div>
      </div>;
  };
  return <div className="flex h-screen bg-white overflow-hidden">
      {/* Sidebar */}
      <CollapsibleSidebar activeItem="clients" onSettingsClick={() => setSettingsOpen(true)} isSidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Client Header */}
        <div className="bg-gray-50 p-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center mb-4 sm:mb-0">
                <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-700">
                  <UserIcon className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-bold text-gray-900">
                    Michael Chen
                  </h2>
                  <p className="text-sm text-gray-500">Client Details</p>
                </div>
              </div>
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.2322 5.23223L18.7677 8.76777M16.7322 3.73223C17.7085 2.75592 19.2914 2.75592 20.2677 3.73223C21.244 4.70854 21.244 6.29146 20.2677 7.26777L6.5 21.0355H3V17.4644L16.7322 3.73223Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Edit Client
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 overflow-x-auto no-scrollbar">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="-mb-px flex space-x-4 md:space-x-8 whitespace-nowrap">
              <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-xs sm:text-sm">
                Overview
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-xs sm:text-sm">
                Goals
              </a>
              <a href="#" className="border-indigo-600 text-indigo-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-xs sm:text-sm">
                Sessions & Notes
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-xs sm:text-sm">
                Documents
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-xs sm:text-sm">
                Journal
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-xs sm:text-sm">
                Messaging
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-xs sm:text-sm">
                Billing
              </a>
            </nav>
          </div>
        </div>

        {/* Sub Tabs */}
        <div className="border-b border-gray-200 bg-white overflow-x-auto no-scrollbar">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="-mb-px flex space-x-4 md:space-x-8 whitespace-nowrap">
              <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-xs sm:text-sm">
                Sessions
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-xs sm:text-sm">
                Session Notes
              </a>
              <a href="#" className="border-indigo-600 text-indigo-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-xs sm:text-sm">
                Homework
              </a>
            </nav>
          </div>
        </div>

        {/* Homework Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
            <div className="flex items-center mb-4 sm:mb-0">
              <BookOpenIcon className="h-5 w-5 text-indigo-600 mr-2" />
              <h2 className="text-xl font-bold text-gray-900">
                Homework Assignments
              </h2>
            </div>
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <PlusIcon className="h-4 w-4 mr-1" />
              Create Assignment
            </button>
          </div>

          {/* Homework List */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
            {/* Homework Item */}
            <div className="p-4 sm:p-6 border-b border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors" onClick={() => openHomeworkModal(currentHomework)}>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <div className="flex-1 mb-4 sm:mb-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-lg font-medium text-gray-900 mb-1 sm:mb-0">
                      Daily Mood Journal
                    </h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 w-fit">
                      pending
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mb-3">
                    Record your mood and any triggers you notice daily
                  </p>
                  <div className="flex flex-wrap items-center text-xs text-gray-500">
                    <span className="mr-3 mb-1">Assigned: 15/01/2024</span>
                    <span className="mb-1">Due: 22/01/2024</span>
                  </div>
                </div>
                <button className="sm:ml-4 inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full sm:w-auto justify-center" onClick={e => {
                e.stopPropagation();
                // Mark complete logic would go here
                alert('Assignment marked as complete');
              }}>
                  <CheckIcon className="h-4 w-4 mr-1 text-green-500" />
                  Mark Complete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Homework Detail Modal */}
      <HomeworkDetailModal />

      {/* Settings Modal */}
      <SettingsModal isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
      <ChatBubble />
    </div>;
};