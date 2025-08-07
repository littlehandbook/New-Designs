import React, { useState } from 'react';
import { DashboardStats } from '../components/dashboard/DashboardStats';
import { SessionsList } from '../components/dashboard/SessionsList';
import { ActivityFeed } from '../components/dashboard/ActivityFeed';
import { QuickActions } from '../components/dashboard/QuickActions';
import { CollapsibleSidebar } from '../components/layout/CollapsibleSidebar';
import { SettingsModal } from '../components/layout/SettingsModal';
import { ChatBubble } from '../components/ChatBubble';
export const Dashboard = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  return <div className="flex h-screen bg-gray-50">
      <CollapsibleSidebar activeItem="dashboard" onSettingsClick={() => setSettingsOpen(true)} />
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="mb-6 sm:mb-8">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              Practice Dashboard
            </h1>
            <p className="text-gray-600 mt-1">
              Welcome back! Here's what's happening in your practice today.
            </p>
          </div>
          <div className="mb-6 sm:mb-8">
            <DashboardStats />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            <div className="lg:col-span-2">
              <SessionsList />
            </div>
            <div>
              <ActivityFeed />
            </div>
          </div>
          <div>
            <QuickActions />
          </div>
        </div>
      </div>
      <SettingsModal isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
      <ChatBubble />
    </div>;
};