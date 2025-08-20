import React, { useState, Component } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Plus, Edit2, Trash2, CheckCircle, XCircle, BarChart2, LineChart, Users, Info, X, UserCircle, MoreHorizontal, ChevronDown, ArrowRight, Search, Bell, Menu, Settings, Calendar, MessageSquare, FileText, CreditCard, HelpCircle, ArrowUpRight } from 'lucide-react';
import { ChatBubble } from '../components/ChatBubble';
export const ClientGoals = () => {
  // States
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('active');
  const [currentGoal, setCurrentGoal] = useState(null);
  const [progressGraphOpen, setProgressGraphOpen] = useState(false);
  const [editGoalOpen, setEditGoalOpen] = useState(false);
  const [newGoalOpen, setNewGoalOpen] = useState(false);
  const [chartType, setChartType] = useState('bar');
  const [showComparison, setShowComparison] = useState(false);
  const [selectedGoalsForComparison, setSelectedGoalsForComparison] = useState([]);
  // Mock data for goals
  const goals = [{
    id: 1,
    title: 'Reduce anxiety symptoms',
    description: 'Work on developing coping strategies for anxiety in social situations',
    progress: 65,
    categoryIcon: '😌',
    category: 'Mental Health',
    startDate: 'Jan 10, 2023',
    targetDate: 'Apr 10, 2023',
    status: 'active',
    notes: 'Making good progress with breathing techniques',
    lastUpdated: 'Mar 15, 2023'
  }, {
    id: 2,
    title: 'Improve sleep habits',
    description: 'Establish consistent sleep schedule and pre-sleep routine',
    progress: 40,
    categoryIcon: '😴',
    category: 'Wellness',
    startDate: 'Feb 5, 2023',
    targetDate: 'May 5, 2023',
    status: 'active',
    notes: 'Still struggling with screen time before bed',
    lastUpdated: 'Mar 12, 2023'
  }, {
    id: 3,
    title: 'Build assertiveness skills',
    description: 'Practice setting boundaries and expressing needs clearly',
    progress: 25,
    categoryIcon: '🗣️',
    category: 'Communication',
    startDate: 'Feb 20, 2023',
    targetDate: 'Jun 20, 2023',
    status: 'active',
    notes: 'Role-playing exercises are helping',
    lastUpdated: 'Mar 10, 2023'
  }, {
    id: 4,
    title: 'Reduce caffeine intake',
    description: 'Gradually decrease daily caffeine consumption',
    progress: 100,
    categoryIcon: '☕',
    category: 'Health',
    startDate: 'Dec 1, 2022',
    targetDate: 'Feb 1, 2023',
    status: 'completed',
    notes: 'Successfully switched to herbal tea',
    lastUpdated: 'Feb 1, 2023'
  }, {
    id: 5,
    title: 'Daily mindfulness practice',
    description: 'Establish 10-minute daily meditation routine',
    progress: 90,
    categoryIcon: '🧘',
    category: 'Mental Health',
    startDate: 'Jan 15, 2023',
    targetDate: 'Mar 15, 2023',
    status: 'completed',
    notes: 'Now practicing consistently every morning',
    lastUpdated: 'Mar 14, 2023'
  }];
  // Mock data for progress history
  const progressHistory = {
    1: [{
      date: 'Jan 10',
      progress: 0
    }, {
      date: 'Jan 24',
      progress: 15
    }, {
      date: 'Feb 7',
      progress: 30
    }, {
      date: 'Feb 21',
      progress: 45
    }, {
      date: 'Mar 7',
      progress: 55
    }, {
      date: 'Current',
      progress: 65
    }],
    2: [{
      date: 'Feb 5',
      progress: 0
    }, {
      date: 'Feb 19',
      progress: 10
    }, {
      date: 'Mar 5',
      progress: 25
    }, {
      date: 'Current',
      progress: 40
    }],
    3: [{
      date: 'Feb 20',
      progress: 0
    }, {
      date: 'Mar 6',
      progress: 15
    }, {
      date: 'Current',
      progress: 25
    }],
    4: [{
      date: 'Dec 1',
      progress: 0
    }, {
      date: 'Dec 15',
      progress: 25
    }, {
      date: 'Jan 1',
      progress: 50
    }, {
      date: 'Jan 15',
      progress: 75
    }, {
      date: 'Feb 1',
      progress: 100
    }],
    5: [{
      date: 'Jan 15',
      progress: 0
    }, {
      date: 'Jan 29',
      progress: 30
    }, {
      date: 'Feb 12',
      progress: 60
    }, {
      date: 'Feb 26',
      progress: 80
    }, {
      date: 'Mar 14',
      progress: 90
    }]
  };
  // Filter goals based on active tab
  const filteredGoals = goals.filter(goal => activeTab === 'all' || activeTab === 'active' && goal.status === 'active' || activeTab === 'completed' && goal.status === 'completed');
  // Toggle goal comparison
  const toggleGoalComparison = gId => {
    if (selectedGoalsForComparison.includes(gId)) {
      setSelectedGoalsForComparison(prev => prev.filter(id => id !== gId));
    } else {
      setSelectedGoalsForComparison(prev => [...prev, gId]);
    }
  };
  // Get color for goal charts
  const getGoalColor = gId => {
    const colors = ['#4f46e5', '#059669', '#dc2626', '#d97706', '#7c3aed', '#0891b2'];
    return colors[gId % colors.length];
  };
  // Progress Graph Modal Component
  const ProgressGraphModal = () => {
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
    const comparisonData = getComparisonData();
    const allDates = [...new Set(Object.values(comparisonData).flatMap(data => data.history.map(entry => entry.date)))];
    return <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-900/50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Progress History: {currentGoal.title}
              </h3>
              <button onClick={() => setProgressGraphOpen(false)} className="text-gray-400 hover:text-gray-500 focus:outline-none">
                <X className="h-5 w-5" />
              </button>
            </div>
            {/* Chart Type and Comparison Controls */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 space-y-4 sm:space-y-0">
              {/* Chart Type Selector */}
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium text-gray-700">View:</span>
                <div className="flex rounded-md shadow-sm">
                  <button onClick={() => setChartType('bar')} className={`px-3 py-1.5 text-sm font-medium rounded-l-md border ${chartType === 'bar' ? 'bg-violet-600 text-white border-violet-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}>
                    <BarChart2 className="h-4 w-4" />
                  </button>
                  <button onClick={() => setChartType('line')} className={`px-3 py-1.5 text-sm font-medium rounded-r-md border-t border-r border-b ${chartType === 'line' ? 'bg-violet-600 text-white border-violet-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}>
                    <LineChart className="h-4 w-4" />
                  </button>
                </div>
              </div>
              {/* Comparison Toggle */}
              <div className="flex items-center space-x-2">
                <label className="flex items-center">
                  <input type="checkbox" checked={showComparison} onChange={e => setShowComparison(e.target.checked)} className="rounded border-gray-300 text-violet-600 shadow-sm focus:border-violet-300 focus:ring focus:ring-violet-200 focus:ring-opacity-50" />
                  <span className="ml-2 text-sm text-gray-700">
                    Compare with other goals
                  </span>
                </label>
              </div>
            </div>
            {/* Goal Selection for Comparison */}
            {showComparison && <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="text-sm font-medium text-gray-700 mb-3">
                  Select goals to compare:
                </h4>
                <div className="flex flex-wrap gap-3">
                  {goals.filter(g => g.id !== currentGoal.id).map(goal => <label key={goal.id} className="flex items-center">
                        <input type="checkbox" checked={selectedGoalsForComparison.includes(goal.id)} onChange={() => toggleGoalComparison(goal.id)} className="rounded border-gray-300 text-violet-600 shadow-sm focus:border-violet-300 focus:ring focus:ring-violet-200 focus:ring-opacity-50" />
                        <span className="ml-2 text-sm text-gray-700 flex items-center">
                          <span className="mr-1">{goal.categoryIcon}</span>{' '}
                          {goal.title}
                        </span>
                      </label>)}
                </div>
              </div>}
            <div className="bg-gray-50 p-5 rounded-xl">
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
              {showComparison && Object.keys(comparisonData).length > 1 && <div className="mt-6 pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
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
            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Progress Log
              </h4>
              <div className="bg-gray-50 rounded-lg p-3 max-h-48 overflow-y-auto">
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
          <div className="bg-gray-50 px-6 py-4 rounded-b-xl border-t border-gray-200 flex justify-end">
            <button onClick={() => setProgressGraphOpen(false)} className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 font-medium text-sm">
              Close
            </button>
          </div>
        </div>
      </div>;
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
                <Link to="/practice/n/clients-goals" className="flex items-center px-4 py-2.5 text-sm font-medium text-violet-700 bg-violet-50 rounded-md group">
                  <Users className="h-5 w-5 mr-3 text-violet-700" />
                  {!isSidebarCollapsed && <span>Clients</span>}
                </Link>
              </li>
              <li>
                <Link to="/practice/calendar" className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md group">
                  <Calendar className="h-5 w-5 mr-3 text-gray-500 group-hover:text-violet-600" />
                  {!isSidebarCollapsed && <span>Calendar</span>}
                </Link>
              </li>
              <li>
                <Link to="/practice/client-messaging" className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md group">
                  <MessageSquare className="h-5 w-5 mr-3 text-gray-500 group-hover:text-violet-600" />
                  {!isSidebarCollapsed && <span>Messages</span>}
                </Link>
              </li>
              <li>
                <Link to="/practice/client-documents" className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md group">
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
                  <Link to="/practice/finance" className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md group">
                    <CreditCard className="h-5 w-5 mr-3 text-gray-500 group-hover:text-violet-600" />
                    <span>Billing</span>
                  </Link>
                </li>
                <li>
                  <Link to="/practice/settings" className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-md group">
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
                <UserCircle className="h-6 w-6 text-violet-600" />
              </div>
              <div className="ml-3">
                <h1 className="text-lg font-semibold text-gray-900">
                  Sarah Johnson
                </h1>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-green-500 mr-1.5"></span>
                  Active Client • 28 years old
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/practice/clients-goals" className="text-sm text-violet-600 hover:text-violet-800 flex items-center">
                <span className="hidden sm:inline">Switch to classic view</span>
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </Link>
              <div className="relative">
                <button className="p-1 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none">
                  <Bell className="h-6 w-6" />
                </button>
              </div>
              <button className="p-1 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none">
                <HelpCircle className="h-6 w-6" />
              </button>
            </div>
          </div>
        </header>
        {/* Client navigation */}
        <div className="bg-white border-b border-gray-200">
          <div className="px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-8 overflow-x-auto no-scrollbar" aria-label="Client sections">
              <Link to="/practice/client-detail" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 border-b-2 font-medium text-sm">
                Overview
              </Link>
              <Link to="/practice/client-sessions" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 border-b-2 font-medium text-sm">
                Sessions
              </Link>
              <Link to="/practice/client-session-notes" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 border-b-2 font-medium text-sm">
                Notes
              </Link>
              <Link to="/practice/client-documents" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 border-b-2 font-medium text-sm">
                Documents
              </Link>
              <Link to="/practice/client-homework" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 border-b-2 font-medium text-sm">
                Homework
              </Link>
              <Link to="/practice/n/clients-goals" className="border-violet-600 text-violet-600 py-4 px-1 border-b-2 font-medium text-sm">
                Goals
              </Link>
              <Link to="/practice/client-risk-assessment" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 border-b-2 font-medium text-sm">
                Risk Assessment
              </Link>
              <Link to="/practice/client-journal" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 py-4 px-1 border-b-2 font-medium text-sm">
                Journal
              </Link>
            </nav>
          </div>
        </div>
        {/* Main content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-6 lg:p-8">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-0">
              Client Goals
            </h2>
            <button onClick={() => setNewGoalOpen(true)} className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500">
              <Plus className="h-4 w-4 mr-2" />
              Add New Goal
            </button>
          </div>
          {/* Tabs */}
          <div className="bg-white shadow-sm rounded-lg border border-gray-200 mb-6">
            <div className="border-b border-gray-200">
              <nav className="flex" aria-label="Tabs">
                <button onClick={() => setActiveTab('active')} className={`${activeTab === 'active' ? 'border-violet-600 text-violet-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} flex-1 py-4 px-1 text-center border-b-2 font-medium text-sm`}>
                  Active Goals (
                  {goals.filter(g => g.status === 'active').length})
                </button>
                <button onClick={() => setActiveTab('completed')} className={`${activeTab === 'completed' ? 'border-violet-600 text-violet-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} flex-1 py-4 px-1 text-center border-b-2 font-medium text-sm`}>
                  Completed Goals (
                  {goals.filter(g => g.status === 'completed').length})
                </button>
                <button onClick={() => setActiveTab('all')} className={`${activeTab === 'all' ? 'border-violet-600 text-violet-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} flex-1 py-4 px-1 text-center border-b-2 font-medium text-sm`}>
                  All Goals ({goals.length})
                </button>
              </nav>
            </div>
            {/* Goals list */}
            <div className="divide-y divide-gray-200">
              {filteredGoals.length === 0 ? <div className="p-6 text-center">
                  <p className="text-gray-500 text-sm">No goals found.</p>
                </div> : filteredGoals.map(goal => <div key={goal.id} className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1 mb-4 lg:mb-0 lg:mr-6">
                        <div className="flex items-center mb-2">
                          <span className="text-2xl mr-2">
                            {goal.categoryIcon}
                          </span>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {goal.title}
                          </h3>
                          <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-violet-100 text-violet-800">
                            {goal.category}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                          {goal.description}
                        </p>
                        <div className="flex flex-wrap gap-4 text-xs text-gray-500">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            Started: {goal.startDate}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            Target: {goal.targetDate}
                          </div>
                          <div className="flex items-center">
                            <Info className="h-4 w-4 mr-1" />
                            Last updated: {goal.lastUpdated}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start lg:items-end">
                        <div className="w-full max-w-xs mb-3">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium text-gray-700">
                              Progress: {goal.progress}%
                            </span>
                            {goal.status === 'completed' ? <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                <CheckCircle className="h-3 w-3 mr-1" />
                                Completed
                              </span> : <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                In Progress
                              </span>}
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-violet-600 h-2.5 rounded-full" style={{
                        width: `${goal.progress}%`
                      }}></div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button onClick={() => {
                      setCurrentGoal(goal);
                      setProgressGraphOpen(true);
                    }} className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500">
                            <BarChart2 className="h-3.5 w-3.5 mr-1" />
                            View Progress
                          </button>
                          <button onClick={() => {
                      setCurrentGoal(goal);
                      setEditGoalOpen(true);
                    }} className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500">
                            <Edit2 className="h-3.5 w-3.5 mr-1" />
                            Edit
                          </button>
                          <div className="relative">
                            <button className="inline-flex items-center px-2 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500">
                              <MoreHorizontal className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {goal.notes && <div className="mt-4 bg-gray-50 p-3 rounded-md text-sm text-gray-700">
                        <strong>Notes:</strong> {goal.notes}
                      </div>}
                  </div>)}
            </div>
          </div>
          {/* Tips section */}
          <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Goal Setting Tips
            </h3>
            <div className="bg-violet-50 border border-violet-100 rounded-md p-4 mb-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <Info className="h-5 w-5 text-violet-500" />
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-violet-800">
                    Effective Goal Setting
                  </h4>
                  <p className="mt-1 text-sm text-violet-700">
                    Goals should be specific, measurable, achievable, relevant,
                    and time-bound (SMART). This helps clients stay motivated
                    and track their progress effectively.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border border-gray-200 rounded-md p-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">
                  For Mental Health Goals
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Focus on small, achievable steps</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Celebrate progress, not just completion</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Link goals to client's personal values</span>
                  </li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-md p-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">
                  Goal Tracking Best Practices
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Update progress regularly with client input</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Adjust goals as needed based on progress</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Use visual progress tracking for motivation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* Progress Graph Modal */}
      {progressGraphOpen && currentGoal && <ProgressGraphModal />}
      {/* Chat Bubble Component */}
      <ChatBubble />
    </div>;
};