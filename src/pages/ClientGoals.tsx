import React, { useEffect, useState, useRef, Component } from 'react';
import { Link } from 'react-router-dom';
import { UserIcon, TargetIcon, PlusIcon, CheckIcon, SmileIcon, UsersIcon, DollarSignIcon, HeartIcon, ActivityIcon, BrainIcon, Dumbbell, XIcon, CalendarIcon } from 'lucide-react';
import { SettingsModal } from '../components/layout/SettingsModal';
import { ChatBubble } from '../components/ChatBubble';
import { CollapsibleSidebar } from '../components/layout/CollapsibleSidebar';
export const ClientGoals = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [goalModalOpen, setGoalModalOpen] = useState(false);
  const [createGoalModalOpen, setCreateGoalModalOpen] = useState(false);
  const [progressGraphOpen, setProgressGraphOpen] = useState(false);
  const [updateGoalModalOpen, setUpdateGoalModalOpen] = useState(false);
  const [currentGoal, setCurrentGoal] = useState({
    id: 1,
    title: 'Reduce Anxiety Symptoms',
    description: 'Learn and apply coping strategies daily',
    category: 'emotional',
    categoryIcon: '😊',
    status: 'active',
    progress: 78,
    assignedDate: '01/06/2024',
    targetDate: '31/12/2024',
    detailedDescription: 'Focus on developing 3 reliable coping strategies for anxiety management. Practice daily breathing exercises and mindfulness techniques. Track anxiety levels daily and identify triggers. Work towards using strategies effectively in stressful situations.\n\nSuccess will be measured by a reduction in reported anxiety levels from 8/10 to 4/10 and consistent use of coping strategies.',
    milestones: [{
      id: 1,
      title: 'Learn breathing techniques',
      dueDate: '01/09/2024',
      completed: true
    }, {
      id: 2,
      title: 'Practice daily for 2 weeks',
      dueDate: '15/09/2024',
      completed: true
    }, {
      id: 3,
      title: 'Use in real situations',
      dueDate: '01/10/2024',
      completed: false,
      progress: 60
    }, {
      id: 4,
      title: 'Maintain for 1 month',
      dueDate: '01/11/2024',
      completed: false,
      progress: 0
    }]
  });
  // Sample goals data with state management - ensure it's never undefined
  const [goals, setGoals] = useState([{
    id: 1,
    title: 'Reduce Anxiety Symptoms',
    description: 'Learn and apply coping strategies daily',
    category: 'emotional',
    categoryIcon: '😊',
    status: 'active',
    progress: 78,
    assignedDate: '01/06/2024',
    targetDate: '31/12/2024'
  }, {
    id: 2,
    title: 'Improve Family Communication',
    description: 'Practice active listening techniques',
    category: 'social',
    categoryIcon: '👥',
    status: 'active',
    progress: 45,
    assignedDate: '01/07/2024',
    targetDate: '31/01/2025'
  }, {
    id: 3,
    title: 'Challenge Negative Self-Talk',
    description: 'Identify and reframe negative thought patterns',
    category: 'cognitive',
    categoryIcon: '🧠',
    status: 'active',
    progress: 62,
    assignedDate: '01/06/2024',
    targetDate: '30/11/2024'
  }, {
    id: 4,
    title: 'Reduce Financial Stress',
    description: 'Develop budgeting skills and financial planning',
    category: 'financial',
    categoryIcon: '💰',
    status: 'on-hold',
    progress: 30,
    assignedDate: '15/05/2024',
    targetDate: '15/12/2024'
  }, {
    id: 5,
    title: 'Explore Spiritual Practices',
    description: 'Find meaningful spiritual connection',
    category: 'spiritual',
    categoryIcon: '🕊️',
    status: 'planning',
    progress: 15,
    assignedDate: '01/08/2024',
    targetDate: '01/02/2025'
  }]);
  // Sample progress history data for demonstrating the graph
  const [progressHistory, setProgressHistory] = useState({
    1: [{
      date: '01/06/2024',
      progress: 10
    }, {
      date: '15/06/2024',
      progress: 25
    }, {
      date: '01/07/2024',
      progress: 40
    }, {
      date: '15/07/2024',
      progress: 55
    }, {
      date: '01/08/2024',
      progress: 70
    }, {
      date: 'Current',
      progress: 78
    }],
    2: [{
      date: '01/07/2024',
      progress: 15
    }, {
      date: '15/07/2024',
      progress: 30
    }, {
      date: '01/08/2024',
      progress: 45
    }],
    3: [{
      date: '01/06/2024',
      progress: 20
    }, {
      date: '15/06/2024',
      progress: 35
    }, {
      date: '01/07/2024',
      progress: 50
    }, {
      date: '15/07/2024',
      progress: 62
    }],
    4: [{
      date: '15/05/2024',
      progress: 10
    }, {
      date: '01/06/2024',
      progress: 20
    }, {
      date: '15/06/2024',
      progress: 30
    }],
    5: [{
      date: '01/08/2024',
      progress: 15
    }]
  });
  // Interactive Progress Bar Component
  const InteractiveProgressBar = ({
    progress,
    onProgressChange,
    goalId,
    size = 'normal'
  }) => {
    const [isDragging, setIsDragging] = useState(false);
    const progressBarRef = useRef(null);
    const handleMouseDown = e => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(true);
      updateProgress(e);
    };
    const handleMouseMove = e => {
      if (isDragging) {
        updateProgress(e);
      }
    };
    const handleMouseUp = () => {
      setIsDragging(false);
    };
    const updateProgress = e => {
      if (progressBarRef.current) {
        const rect = progressBarRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const width = rect.width;
        const newProgress = Math.max(0, Math.min(100, Math.round(x / width * 100)));
        onProgressChange(goalId, newProgress);
      }
    };
    useEffect(() => {
      if (isDragging) {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
        };
      }
    }, [isDragging]);
    const barHeight = size === 'large' ? 'h-3' : 'h-2';
    const containerClasses = `w-full bg-gray-200 rounded-full ${barHeight} cursor-pointer select-none relative`;
    return <div ref={progressBarRef} className={containerClasses} onMouseDown={handleMouseDown} title={`Click and drag to update progress: ${progress}%`}>
        <div className={`${getProgressBarColor(progress)} ${barHeight} rounded-full transition-all duration-200 ease-out`} style={{
        width: `${progress}%`
      }} />
        {isDragging && <div className="absolute -top-8 left-0 right-0 flex justify-center pointer-events-none">
            <div className="bg-gray-800 text-white text-xs px-2 py-1 rounded">
              {progress}%
            </div>
          </div>}
      </div>;
  };
  // Update goal progress
  const updateGoalProgress = (goalId, newProgress) => {
    setGoals(prevGoals => prevGoals.map(goal => goal.id === goalId ? {
      ...goal,
      progress: newProgress
    } : goal));
    // Also update current goal if it's the same one
    if (currentGoal.id === goalId) {
      setCurrentGoal(prev => ({
        ...prev,
        progress: newProgress
      }));
    }
    // Update progress history
    setProgressHistory(prev => {
      const goalHistory = [...(prev[goalId] || [])];
      // Remove "Current" entry if it exists
      const filteredHistory = goalHistory.filter(entry => entry.date !== 'Current');
      // Add new "Current" entry
      return {
        ...prev,
        [goalId]: [...filteredHistory, {
          date: 'Current',
          progress: newProgress
        }]
      };
    });
  };
  // Update milestone progress
  const updateMilestoneProgress = (milestoneId, newProgress) => {
    setCurrentGoal(prev => ({
      ...prev,
      milestones: prev.milestones.map(milestone => milestone.id === milestoneId ? {
        ...milestone,
        progress: newProgress
      } : milestone)
    }));
  };
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const openGoalModal = goal => {
    setCurrentGoal(goal);
    setGoalModalOpen(true);
  };
  // Create Goal Modal Component
  const CreateGoalModal = () => {
    const [newGoal, setNewGoal] = useState({
      title: '',
      description: '',
      category: 'emotional',
      categoryIcon: '😊',
      status: 'planning',
      progress: 0,
      assignedDate: new Date().toLocaleDateString('en-GB'),
      targetDate: '',
      detailedDescription: '',
      milestones: [{
        id: 1,
        title: '',
        dueDate: '',
        completed: false,
        progress: 0
      }]
    });
    const [milestoneInput, setMilestoneInput] = useState({
      title: '',
      dueDate: ''
    });
    const categoryOptions = [{
      id: 'emotional',
      name: 'Emotional',
      icon: '😊',
      color: 'yellow'
    }, {
      id: 'social',
      name: 'Social/Relational',
      icon: '👥',
      color: 'blue'
    }, {
      id: 'financial',
      name: 'Financial',
      icon: '💰',
      color: 'green'
    }, {
      id: 'spiritual',
      name: 'Spiritual',
      icon: '🕊️',
      color: 'purple'
    }, {
      id: 'behavioral',
      name: 'Behavioral',
      icon: '📈',
      color: 'orange'
    }, {
      id: 'cognitive',
      name: 'Cognitive',
      icon: '🧠',
      color: 'teal'
    }, {
      id: 'physical',
      name: 'Physical/Health',
      icon: '💪',
      color: 'red'
    }];
    const statusOptions = [{
      id: 'planning',
      name: 'Planning'
    }, {
      id: 'active',
      name: 'Active'
    }, {
      id: 'on-hold',
      name: 'On Hold'
    }];
    const handleChange = e => {
      const {
        name,
        value
      } = e.target;
      setNewGoal({
        ...newGoal,
        [name]: value
      });
    };
    const handleCategoryChange = category => {
      const selectedCategory = categoryOptions.find(c => c.id === category);
      setNewGoal({
        ...newGoal,
        category: category,
        categoryIcon: selectedCategory.icon
      });
    };
    const handleMilestoneInputChange = e => {
      const {
        name,
        value
      } = e.target;
      setMilestoneInput({
        ...milestoneInput,
        [name]: value
      });
    };
    const addMilestone = () => {
      if (milestoneInput.title.trim() === '' || milestoneInput.dueDate === '') {
        return; // Don't add empty milestones
      }
      const currentMilestones = newGoal.milestones || [];
      const newMilestone = {
        id: currentMilestones.length + 1,
        title: milestoneInput.title,
        dueDate: milestoneInput.dueDate,
        completed: false,
        progress: 0
      };
      setNewGoal({
        ...newGoal,
        milestones: [...currentMilestones, newMilestone]
      });
      // Reset the input fields
      setMilestoneInput({
        title: '',
        dueDate: ''
      });
    };
    const removeMilestone = id => {
      const currentMilestones = newGoal.milestones || [];
      setNewGoal({
        ...newGoal,
        milestones: currentMilestones.filter(milestone => milestone.id !== id)
      });
    };
    const handleSubmit = () => {
      // Here you would typically save the new goal to your database
      // For now, we'll just close the modal
      console.log('New goal:', newGoal);
      setCreateGoalModalOpen(false);
    };
    if (!createGoalModalOpen) return null;
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
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Create New Goal
                    </h3>
                    <button type="button" className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none" onClick={() => setCreateGoalModalOpen(false)}>
                      <XIcon className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Goal Title*
                    </label>
                    <input type="text" name="title" value={newGoal.title} onChange={handleChange} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="e.g., Reduce Anxiety Symptoms" required />
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Short Description*
                    </label>
                    <input type="text" name="description" value={newGoal.description} onChange={handleChange} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="e.g., Learn and apply coping strategies daily" required />
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Category*
                    </label>
                    <div className="grid grid-cols-2 gap-2 mt-1">
                      {categoryOptions.map(category => <button key={category.id} type="button" className={`flex items-center px-3 py-2 rounded-md text-sm ${newGoal.category === category.id ? 'bg-indigo-100 border-indigo-300 text-indigo-800 border-2' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'}`} onClick={() => handleCategoryChange(category.id)}>
                          <span className="mr-2">{category.icon}</span>
                          {category.name}
                        </button>)}
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Status
                      </label>
                      <select name="status" value={newGoal.status} onChange={handleChange} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                        {statusOptions.map(option => <option key={option.id} value={option.id}>
                            {option.name}
                          </option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Target Date*
                      </label>
                      <div className="relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <CalendarIcon className="h-4 w-4 text-gray-400" />
                        </div>
                        <input type="date" name="targetDate" value={newGoal.targetDate} onChange={handleChange} className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md" required />
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Detailed Plan
                    </label>
                    <textarea name="detailedDescription" value={newGoal.detailedDescription} onChange={handleChange} rows={4} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Describe the goal in detail, including how progress will be measured and what success looks like..." />
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Milestones
                    </label>
                    <div className="bg-gray-50 p-3 rounded-md">
                      {(newGoal.milestones || []).map(milestone => <div key={milestone.id} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                          <div className="flex items-center">
                            <div className="h-4 w-4 border border-gray-300 rounded-full mr-2"></div>
                            <span className="text-sm">
                              {milestone.title}{' '}
                              {milestone.dueDate && `(Due: ${milestone.dueDate})`}
                            </span>
                          </div>
                          <button className="text-xs text-red-600 hover:text-red-800" onClick={() => removeMilestone(milestone.id)}>
                            Remove
                          </button>
                        </div>)}
                      <div className="mt-2 flex flex-col space-y-2">
                        <div className="flex items-center space-x-2">
                          <input type="text" name="title" value={milestoneInput.title} onChange={handleMilestoneInputChange} placeholder="Milestone title" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                          <input type="date" name="dueDate" value={milestoneInput.dueDate} onChange={handleMilestoneInputChange} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-32 sm:text-sm border-gray-300 rounded-md" />
                        </div>
                        <button type="button" className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={addMilestone}>
                          <PlusIcon className="h-3 w-3 mr-1" />
                          Add Milestone
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={handleSubmit}>
                Create Goal
              </button>
              <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => setCreateGoalModalOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>;
  };
  const GoalDetailModal = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedGoal, setEditedGoal] = useState({
      ...currentGoal
    });
    const handleSave = () => {
      // In a real app, you would save changes to the database here
      setCurrentGoal(editedGoal);
      setIsEditing(false);
    };
    const handleChange = e => {
      const {
        name,
        value
      } = e.target;
      setEditedGoal({
        ...editedGoal,
        [name]: value
      });
    };
    if (!goalModalOpen) return null;
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
                    {isEditing ? <input type="text" name="title" value={editedGoal.title} onChange={handleChange} className="text-lg font-medium text-gray-900 border-b border-gray-300 focus:border-indigo-500 focus:ring-0 w-full" /> : <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
                        <span className="mr-2">{currentGoal.categoryIcon}</span>
                        {currentGoal.title}
                      </h3>}
                    <div className="flex items-center">
                      {!isEditing && <button type="button" className="ml-2 p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors" onClick={() => setIsEditing(true)}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                            <path d="m15 5 4 4"></path>
                          </svg>
                        </button>}
                    </div>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center text-sm text-gray-500">
                    <div className="flex items-center mr-4 mb-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                        {currentGoal.status}
                      </span>
                    </div>
                    <div className="flex items-center mr-4 mb-2">
                      <span>Progress: {currentGoal.progress}%</span>
                    </div>
                  </div>
                  {/* Interactive Progress Bar in Modal */}
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Overall Progress - Click and drag to update
                    </label>
                    <div className="flex items-center space-x-3">
                      <InteractiveProgressBar progress={currentGoal.progress} onProgressChange={updateGoalProgress} goalId={currentGoal.id} size="large" />
                      <span className="text-sm font-medium text-gray-700 min-w-[3rem]">
                        {currentGoal.progress}%
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center text-sm text-gray-500">
                    <div className="flex items-center mr-4 mb-2">
                      {isEditing ? <input type="text" name="assignedDate" value={editedGoal.assignedDate} onChange={handleChange} className="border-b border-gray-300 focus:border-indigo-500 focus:ring-0 w-24" /> : <span>Assigned: {currentGoal.assignedDate}</span>}
                    </div>
                    <div className="flex items-center mr-4 mb-2">
                      {isEditing ? <input type="text" name="targetDate" value={editedGoal.targetDate} onChange={handleChange} className="border-b border-gray-300 focus:border-indigo-500 focus:ring-0 w-24" /> : <span>Target: {currentGoal.targetDate}</span>}
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Description
                    </label>
                    {isEditing ? <textarea name="description" value={editedGoal.description} onChange={handleChange} rows={2} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" /> : <p className="text-sm text-gray-700 bg-gray-50 p-3 rounded-md">
                        {currentGoal.description}
                      </p>}
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Detailed Plan
                    </label>
                    {isEditing ? <textarea name="detailedDescription" value={editedGoal.detailedDescription} onChange={handleChange} rows={6} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" /> : <div className="text-sm text-gray-700 bg-gray-50 p-3 rounded-md whitespace-pre-line">
                        {currentGoal.detailedDescription}
                      </div>}
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Milestones - Click and drag progress bars to update
                    </label>
                    <div className="bg-gray-50 p-3 rounded-md space-y-3">
                      {currentGoal.milestones && currentGoal.milestones.length > 0 ? currentGoal.milestones.map(milestone => <div key={milestone.id} className="bg-white p-3 rounded border">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center">
                                {milestone.completed ? <CheckIcon className="h-4 w-4 text-green-500 mr-2" /> : <div className="h-4 w-4 border border-gray-300 rounded-full mr-2 flex items-center justify-center">
                                    {milestone.progress > 0 && <div className="h-2 w-2 bg-indigo-500 rounded-full" style={{
                              opacity: milestone.progress / 100
                            }}></div>}
                                  </div>}
                                <span className="text-sm font-medium">
                                  {milestone.title}
                                </span>
                              </div>
                              <span className="text-xs text-gray-500">
                                Due: {milestone.dueDate}
                              </span>
                            </div>
                            {!milestone.completed && <div className="flex items-center space-x-2">
                                <InteractiveProgressBar progress={milestone.progress || 0} onProgressChange={updateMilestoneProgress} goalId={milestone.id} />
                                <span className="text-xs text-gray-500 min-w-[2.5rem]">
                                  {milestone.progress || 0}%
                                </span>
                              </div>}
                          </div>) : <p className="text-sm text-gray-500">
                          No milestones added yet
                        </p>}
                      {isEditing && <button className="mt-2 text-xs text-indigo-600 hover:text-indigo-800 flex items-center">
                          <PlusIcon className="h-3 w-3 mr-1" />
                          Add Milestone
                        </button>}
                    </div>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Progress Chart
                    </label>
                    <div className="bg-gray-50 p-3 rounded-md h-32 flex items-center justify-center">
                      <span className="text-sm text-gray-500">
                        Progress visualization would appear here
                      </span>
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
                    Edit Goal
                  </button>
                  <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => setGoalModalOpen(false)}>
                    Close
                  </button>
                </>}
            </div>
          </div>
        </div>
      </div>;
  };
  // Progress Graph Modal Component
  const ProgressGraphModal = () => {
    const [chartType, setChartType] = useState('bar'); // 'bar' or 'line'
    const [showComparison, setShowComparison] = useState(false);
    const [selectedGoalsForComparison, setSelectedGoalsForComparison] = useState([]);
    if (!progressGraphOpen) return null;
    const goalId = currentGoal.id;
    const history = progressHistory[goalId] || [];
    const maxProgress = Math.max(...history.map(entry => entry.progress), 100);
    // Get comparison data when comparison mode is enabled
    const getComparisonData = () => {
      const comparisonData = {};
      const allGoalsToShow = showComparison ? [currentGoal.id, ...selectedGoalsForComparison] : [currentGoal.id];
      allGoalsToShow.forEach(gId => {
        const goal = goals.find(g => g.id === gId);
        if (goal) {
          comparisonData[gId] = {
            title: goal.title,
            history: progressHistory[gId] || [],
            color: getGoalColor(gId)
          };
        }
      });
      return comparisonData;
    };
    const getGoalColor = gId => {
      const colors = ['#4f46e5', '#059669', '#dc2626', '#d97706', '#7c3aed', '#0891b2'];
      return colors[gId % colors.length];
    };
    const comparisonData = getComparisonData();
    const allDates = [...new Set(Object.values(comparisonData).flatMap(data => data.history.map(entry => entry.date)))];
    const toggleGoalComparison = gId => {
      if (selectedGoalsForComparison.includes(gId)) {
        setSelectedGoalsForComparison(prev => prev.filter(id => id !== gId));
      } else {
        setSelectedGoalsForComparison(prev => [...prev, gId]);
      }
    };
    return <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Progress History: {currentGoal.title}
                    </h3>
                    <button type="button" className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none" onClick={() => setProgressGraphOpen(false)}>
                      <XIcon className="h-5 w-5" />
                    </button>
                  </div>
                  {/* Chart Type and Comparison Controls */}
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 space-y-2 sm:space-y-0">
                    {/* Chart Type Selector */}
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-700">
                        View:
                      </span>
                      <div className="flex rounded-md shadow-sm">
                        <button onClick={() => setChartType('bar')} className={`px-3 py-1.5 text-sm font-medium rounded-l-md border ${chartType === 'bar' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}>
                          Bar Chart
                        </button>
                        <button onClick={() => setChartType('line')} className={`px-3 py-1.5 text-sm font-medium rounded-r-md border-t border-r border-b ${chartType === 'line' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}>
                          Line Graph
                        </button>
                      </div>
                    </div>
                    {/* Comparison Toggle */}
                    <div className="flex items-center space-x-2">
                      <label className="flex items-center">
                        <input type="checkbox" checked={showComparison} onChange={e => setShowComparison(e.target.checked)} className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                        <span className="ml-2 text-sm text-gray-700">
                          Compare with other goals
                        </span>
                      </label>
                    </div>
                  </div>
                  {/* Goal Selection for Comparison */}
                  {showComparison && <div className="mb-4 p-3 bg-gray-50 rounded-md">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">
                        Select goals to compare:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {goals.filter(g => g.id !== currentGoal.id).map(goal => <label key={goal.id} className="flex items-center">
                              <input type="checkbox" checked={selectedGoalsForComparison.includes(goal.id)} onChange={() => toggleGoalComparison(goal.id)} className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                              <span className="ml-2 text-sm text-gray-700">
                                {goal.categoryIcon} {goal.title}
                              </span>
                            </label>)}
                      </div>
                    </div>}
                  <div className="mt-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="h-80 relative">
                        {chartType === 'bar' /* Bar Chart */ ? <div className="absolute inset-0 flex items-end">
                            {allDates.map((date, dateIndex) => <div key={dateIndex} className="flex flex-col items-center justify-end h-full flex-1 relative">
                                {Object.entries(comparisonData).map(([gId, data], goalIndex) => {
                            const entry = data.history.find(h => h.date === date);
                            if (!entry) return null;
                            const barWidth = showComparison ? `${80 / Object.keys(comparisonData).length}%` : '80%';
                            const leftOffset = showComparison ? `${goalIndex * (80 / Object.keys(comparisonData).length)}%` : '10%';
                            return <div key={gId} className="absolute bottom-0 rounded-t-sm transition-all duration-500" style={{
                              height: `${entry.progress / maxProgress * 100}%`,
                              backgroundColor: data.color,
                              width: barWidth,
                              left: leftOffset,
                              opacity: date === 'Current' ? 1 : 0.8
                            }} title={`${data.title}: ${entry.progress}%`}></div>;
                          })}
                                <div className="text-xs text-gray-500 mt-2 transform -rotate-45 origin-top-left whitespace-nowrap">
                                  {date}
                                </div>
                              </div>)}
                          </div> /* Line Graph */ : <div className="absolute inset-0">
                            <svg width="100%" height="100%" className="overflow-visible">
                              {/* Grid lines */}
                              {[0, 25, 50, 75, 100].map(percentage => <line key={percentage} x1="40" y1={`${100 - percentage}%`} x2="100%" y2={`${100 - percentage}%`} stroke="#e5e7eb" strokeWidth="1" />)}
                              {/* Lines for each goal */}
                              {Object.entries(comparisonData).map(([gId, data]) => {
                            const points = data.history.map((entry, index) => {
                              const x = 40 + index / (allDates.length - 1) * (100 - 40);
                              const y = 100 - entry.progress / maxProgress * 100;
                              return `${x},${y}`;
                            }).join(' ');
                            return <g key={gId}>
                                      {/* Line */}
                                      <polyline points={points} fill="none" stroke={data.color} strokeWidth="3" className="drop-shadow-sm" />
                                      {/* Data points */}
                                      {data.history.map((entry, index) => {
                                const x = 40 + index / (allDates.length - 1) * (100 - 40);
                                const y = 100 - entry.progress / maxProgress * 100;
                                return <circle key={index} cx={`${x}%`} cy={`${y}%`} r="4" fill={data.color} stroke="white" strokeWidth="2" className="drop-shadow-sm">
                                            <title>
                                              {data.title}: {entry.progress}% (
                                              {entry.date})
                                            </title>
                                          </circle>;
                              })}
                                    </g>;
                          })}
                              {/* X-axis labels */}
                              {allDates.map((date, index) => <text key={index} x={`${40 + index / (allDates.length - 1) * (100 - 40)}%`} y="95%" textAnchor="middle" className="text-xs fill-gray-500" transform={`rotate(-45 ${40 + index / (allDates.length - 1) * (100 - 40)}% 95%)`}>
                                  {date}
                                </text>)}
                            </svg>
                          </div>}
                        {/* Y-axis labels */}
                        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 pr-2">
                          <div>100%</div>
                          <div>75%</div>
                          <div>50%</div>
                          <div>25%</div>
                          <div>0%</div>
                        </div>
                      </div>
                      {/* Legend for comparison mode */}
                      {showComparison && Object.keys(comparisonData).length > 1 && <div className="mt-4 pt-3 border-t border-gray-200">
                            <h4 className="text-sm font-medium text-gray-700 mb-2">
                              Legend:
                            </h4>
                            <div className="flex flex-wrap gap-4">
                              {Object.entries(comparisonData).map(([gId, data]) => <div key={gId} className="flex items-center">
                                    <div className="w-4 h-4 rounded-sm mr-2" style={{
                            backgroundColor: data.color
                          }}></div>
                                    <span className="text-sm text-gray-700">
                                      {data.title}
                                    </span>
                                  </div>)}
                            </div>
                          </div>}
                    </div>
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">
                        Progress Log
                      </h4>
                      <div className="bg-gray-50 rounded-md p-3 max-h-48 overflow-y-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Date
                              </th>
                              <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Progress
                              </th>
                              <th scope="col" className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Change
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {history.map((entry, index) => {
                            const prevProgress = index > 0 ? history[index - 1].progress : 0;
                            const change = entry.progress - prevProgress;
                            return <tr key={index}>
                                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-500">
                                    {entry.date}
                                  </td>
                                  <td className="px-3 py-2 whitespace-nowrap text-sm text-gray-900">
                                    {entry.progress}%
                                  </td>
                                  <td className="px-3 py-2 whitespace-nowrap text-sm">
                                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${change > 0 ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                                      {change > 0 ? '+' : ''}
                                      {change}%
                                    </span>
                                  </td>
                                </tr>;
                          })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm" onClick={() => setProgressGraphOpen(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>;
  };
  // Update Goal Modal Component
  const UpdateGoalModal = () => {
    const [progressInput, setProgressInput] = useState(currentGoal?.progress || 0);
    const [notes, setNotes] = useState('');
    if (!updateGoalModalOpen) return null;
    const handleSubmit = () => {
      // Update the progress
      updateGoalProgress(currentGoal.id, progressInput);
      // Add to progress history with current date
      const today = new Date().toLocaleDateString('en-GB');
      setProgressHistory(prev => {
        const goalHistory = [...(prev[currentGoal.id] || [])];
        // Filter out "Current" entry if it exists
        const filteredHistory = goalHistory.filter(entry => entry.date !== 'Current');
        // Add new dated entry
        return {
          ...prev,
          [currentGoal.id]: [...filteredHistory, {
            date: today,
            progress: progressInput
          }]
        };
      });
      // Close the modal
      setUpdateGoalModalOpen(false);
    };
    return <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Update Goal Progress
                    </h3>
                    <button type="button" className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none" onClick={() => setUpdateGoalModalOpen(false)}>
                      <XIcon className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Goal: {currentGoal.title}
                    </label>
                    <div className="bg-gray-50 p-3 rounded-md text-sm text-gray-700 mb-4">
                      {currentGoal.description}
                    </div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Current Progress: {currentGoal.progress}%
                    </label>
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        New Progress Value (%)
                      </label>
                      <div className="flex items-center">
                        <input type="number" min="0" max="100" value={progressInput} onChange={e => setProgressInput(Number(e.target.value))} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" />
                        <span className="ml-2 text-gray-500">%</span>
                      </div>
                      <div className="mt-4 mb-2">
                        <InteractiveProgressBar progress={progressInput} onProgressChange={(_, newProgress) => setProgressInput(newProgress)} goalId={currentGoal.id} size="large" />
                      </div>
                    </div>
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Progress Notes (optional)
                      </label>
                      <textarea rows={3} value={notes} onChange={e => setNotes(e.target.value)} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Add notes about this progress update..." />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={handleSubmit}>
                Update Progress
              </button>
              <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => setUpdateGoalModalOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>;
  };
  // Function to get status badge color
  const getStatusBadgeClasses = status => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'on-hold':
        return 'bg-yellow-100 text-yellow-800';
      case 'planning':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  // Function to get progress bar color
  const getProgressBarColor = progress => {
    if (progress >= 75) return 'bg-green-500';
    if (progress >= 50) return 'bg-blue-500';
    if (progress >= 25) return 'bg-yellow-500';
    return 'bg-red-500';
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
              <a href="#" className="border-indigo-600 text-indigo-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-xs sm:text-sm">
                Goals
              </a>
              <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-xs sm:text-sm">
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
        {/* Goals Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
            <div className="flex items-center mb-4 sm:mb-0">
              <TargetIcon className="h-5 w-5 text-indigo-600 mr-2" />
              <h2 className="text-xl font-bold text-gray-900">
                Treatment Goals
              </h2>
            </div>
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => setCreateGoalModalOpen(true)}>
              <PlusIcon className="h-4 w-4 mr-1" />
              Create Goal
            </button>
          </div>
          {/* Goals Summary */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-medium text-gray-900">
                  Overall Progress
                </h3>
                <p className="text-sm text-gray-500">
                  Active Goals: 4 | Completed: 1 | On Hold: 1
                </p>
              </div>
              <div className="mt-3 sm:mt-0">
                <div className="flex items-center">
                  <div className="w-48 bg-gray-200 rounded-full h-2.5 mr-2">
                    <div className="bg-indigo-600 h-2.5 rounded-full" style={{
                    width: '68%'
                  }}></div>
                  </div>
                  <span className="text-sm font-medium text-gray-700">68%</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Last reviewed: Aug 5, 2024
                </p>
              </div>
            </div>
          </div>
          {/* Goals List */}
          <div className="space-y-4">
            {goals && goals.length > 0 ? goals.map(goal => <div key={goal.id} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer" onClick={() => openGoalModal(goal)}>
                  <div className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                      <div className="flex-1 mb-4 sm:mb-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <div className="flex items-center mb-2 sm:mb-0">
                            <span className="text-xl mr-2" role="img" aria-label={`${goal.category} goal`}>
                              {goal.categoryIcon}
                            </span>
                            <h3 className="text-lg font-medium text-gray-900">
                              {goal.title}
                            </h3>
                          </div>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeClasses(goal.status)} w-fit`}>
                            {goal.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-700 mb-3">
                          {goal.description}
                        </p>
                        <div className="flex flex-wrap items-center text-xs text-gray-500 mb-3">
                          <span className="mr-3 mb-1">
                            Assigned: {goal.assignedDate}
                          </span>
                          <span className="mb-1">
                            Target: {goal.targetDate}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex-1">
                            <InteractiveProgressBar progress={goal.progress} onProgressChange={updateGoalProgress} goalId={goal.id} />
                          </div>
                          <span className="text-xs font-medium text-gray-700 min-w-[2.5rem]">
                            {goal.progress}%
                          </span>
                        </div>
                      </div>
                      <div className="sm:ml-4 flex sm:flex-col space-x-2 sm:space-x-0 sm:space-y-2">
                        <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={e => {
                    e.stopPropagation();
                    setCurrentGoal(goal);
                    setProgressGraphOpen(true);
                  }}>
                          <span className="sr-only sm:not-sr-only sm:inline-block">
                            View
                          </span>{' '}
                          Progress
                        </button>
                        <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={e => {
                    e.stopPropagation();
                    setCurrentGoal(goal);
                    setUpdateGoalModalOpen(true);
                  }}>
                          <span className="sr-only sm:not-sr-only sm:inline-block">
                            Update
                          </span>{' '}
                          Goal
                        </button>
                      </div>
                    </div>
                  </div>
                </div>) : <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
                <p className="text-gray-500">No goals found</p>
              </div>}
          </div>
          {/* Category Buttons */}
          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Add Goal by Category
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg bg-white hover:bg-indigo-50 hover:border-indigo-200 transition-colors">
                <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700 mb-2">
                  <SmileIcon className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-gray-900">
                  Emotional
                </span>
              </button>
              <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg bg-white hover:bg-indigo-50 hover:border-indigo-200 transition-colors">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 mb-2">
                  <UsersIcon className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-gray-900">
                  Social/Relational
                </span>
              </button>
              <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg bg-white hover:bg-indigo-50 hover:border-indigo-200 transition-colors">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 mb-2">
                  <DollarSignIcon className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-gray-900">
                  Financial
                </span>
              </button>
              <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg bg-white hover:bg-indigo-50 hover:border-indigo-200 transition-colors">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 mb-2">
                  <HeartIcon className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-gray-900">
                  Spiritual
                </span>
              </button>
              <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg bg-white hover:bg-indigo-50 hover:border-indigo-200 transition-colors">
                <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-700 mb-2">
                  <ActivityIcon className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-gray-900">
                  Behavioral
                </span>
              </button>
              <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg bg-white hover:bg-indigo-50 hover:border-indigo-200 transition-colors">
                <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 mb-2">
                  <BrainIcon className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-gray-900">
                  Cognitive
                </span>
              </button>
              <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg bg-white hover:bg-indigo-50 hover:border-indigo-200 transition-colors">
                <div className="h-12 w-12 rounded-full bg-red-100 flex items-center justify-center text-red-700 mb-2">
                  <Dumbbell className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-gray-900">
                  Physical/Health
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Goal Detail Modal */}
      <GoalDetailModal />
      {/* Create Goal Modal */}
      <CreateGoalModal />
      {/* Progress Graph Modal */}
      <ProgressGraphModal />
      {/* Update Goal Modal */}
      <UpdateGoalModal />
      {/* Settings Modal */}
      <SettingsModal isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
      <ChatBubble />
    </div>;
};