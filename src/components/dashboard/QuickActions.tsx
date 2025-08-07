import React from 'react';
import { UserPlusIcon, CalendarIcon, MessageSquareIcon, FileTextIcon, VideoIcon, CreditCardIcon } from 'lucide-react';
interface ActionCardProps {
  icon: React.ReactNode;
  title: string;
  onClick?: () => void;
}
const ActionCard: React.FC<ActionCardProps> = ({
  icon,
  title,
  onClick
}) => <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 min-h-[44px]" onClick={onClick} aria-label={title}>
    <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mb-3">
      {icon}
    </div>
    <span className="text-sm font-medium text-gray-900 text-center">
      {title}
    </span>
  </button>;
export const QuickActions: React.FC = () => {
  return <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 sm:p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4 sm:mb-6">
        Quick Actions
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        <ActionCard icon={<UserPlusIcon className="h-5 w-5" aria-hidden="true" />} title="Add Client" onClick={() => {
        // Handle add client action
        console.log('Add client clicked');
      }} />
        <ActionCard icon={<CalendarIcon className="h-5 w-5" aria-hidden="true" />} title="Schedule" onClick={() => {
        // Handle schedule action
        console.log('Schedule clicked');
      }} />
        <ActionCard icon={<MessageSquareIcon className="h-5 w-5" aria-hidden="true" />} title="Message" onClick={() => {
        // Handle message action
        console.log('Message clicked');
      }} />
        <ActionCard icon={<FileTextIcon className="h-5 w-5" aria-hidden="true" />} title="Create Note" onClick={() => {
        // Handle create note action
        console.log('Create note clicked');
      }} />
        <ActionCard icon={<VideoIcon className="h-5 w-5" aria-hidden="true" />} title="Start Session" onClick={() => {
        // Handle start session action
        console.log('Start session clicked');
      }} />
        <ActionCard icon={<CreditCardIcon className="h-5 w-5" aria-hidden="true" />} title="Payment" onClick={() => {
        // Handle payment action
        console.log('Payment clicked');
      }} />
      </div>
    </div>;
};