import React from 'react';
import { UserPlusIcon, CalendarIcon, ClockIcon, CreditCardIcon } from 'lucide-react';
interface StatCardProps {
  title: string;
  value: string;
  period: string;
  change: {
    value: string;
    isPositive: boolean;
  };
  icon: React.ReactNode;
}
const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  period,
  change,
  icon
}) => <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 sm:p-6">
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-base sm:text-lg font-medium text-gray-900">
        {title}
      </h3>
      <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
        {icon}
      </div>
    </div>
    <div>
      <p className="text-xl sm:text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-sm text-gray-500 mt-1">{period}</p>
      <div className="mt-2 flex items-center text-sm">
        <span className={`font-medium ${change.isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {change.value}
        </span>
        <span className="text-gray-500 ml-1">vs previous period</span>
      </div>
    </div>
  </div>;
export const DashboardStats: React.FC = () => {
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      <StatCard title="New Clients" value="4" period="Last 30 days" change={{
      value: '+33%',
      isPositive: true
    }} icon={<UserPlusIcon className="h-5 w-5" aria-hidden="true" />} />
      <StatCard title="Sessions" value="28" period="Last 30 days" change={{
      value: '+12%',
      isPositive: true
    }} icon={<CalendarIcon className="h-5 w-5" aria-hidden="true" />} />
      <StatCard title="Hours" value="22.5" period="Last 30 days" change={{
      value: '+8%',
      isPositive: true
    }} icon={<ClockIcon className="h-5 w-5" aria-hidden="true" />} />
      <StatCard title="Revenue" value="$2,840" period="Last 30 days" change={{
      value: '+18%',
      isPositive: true
    }} icon={<CreditCardIcon className="h-5 w-5" aria-hidden="true" />} />
    </div>;
};