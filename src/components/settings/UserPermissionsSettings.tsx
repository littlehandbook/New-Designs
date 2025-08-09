import React, { useState, Fragment, Component } from 'react';
import { UsersIcon, ShieldIcon, PlusIcon, SearchIcon, FilterIcon, TrashIcon, EditIcon, CheckCircleIcon, AlertCircleIcon, XCircleIcon, ClockIcon, DownloadIcon, ChevronDownIcon, CheckIcon, XIcon, InfoIcon, UserPlusIcon, AlertTriangleIcon } from 'lucide-react';
type PermissionArea = 'clientManagement' | 'scheduling' | 'clinicalNotes' | 'billing' | 'practiceSettings' | 'communications';
type Permission = {
  id: string;
  name: string;
  description: string;
  area: PermissionArea;
};
type Role = {
  id: string;
  name: string;
  description: string;
  userCount: number;
  isDefault: boolean;
  permissions: string[];
};
type User = {
  id: string;
  name: string;
  email: string;
  roleId: string;
  status: 'active' | 'inactive' | 'pending';
  lastLogin: string;
  avatar?: string;
};
// Mock data for permissions
const PERMISSIONS: Permission[] = [
// Client Management
{
  id: 'client_view',
  name: 'View all clients',
  description: 'Can view all client records',
  area: 'clientManagement'
}, {
  id: 'client_create',
  name: 'Create clients',
  description: 'Can create new client records',
  area: 'clientManagement'
}, {
  id: 'client_edit',
  name: 'Edit clients',
  description: 'Can edit client information',
  area: 'clientManagement'
}, {
  id: 'client_delete',
  name: 'Delete clients',
  description: 'Can delete client records',
  area: 'clientManagement'
},
// Scheduling
{
  id: 'schedule_view',
  name: 'View calendar',
  description: 'Can view the appointment calendar',
  area: 'scheduling'
}, {
  id: 'schedule_create',
  name: 'Create appointments',
  description: 'Can create new appointments',
  area: 'scheduling'
}, {
  id: 'schedule_edit',
  name: 'Edit any appointment',
  description: 'Can edit any appointment',
  area: 'scheduling'
}, {
  id: 'schedule_delete',
  name: 'Delete appointments',
  description: 'Can delete appointments',
  area: 'scheduling'
},
// Clinical Notes
{
  id: 'notes_view',
  name: 'View notes',
  description: 'Can view clinical notes',
  area: 'clinicalNotes'
}, {
  id: 'notes_create',
  name: 'Create notes',
  description: 'Can create clinical notes',
  area: 'clinicalNotes'
}, {
  id: 'notes_edit_own',
  name: 'Edit own notes',
  description: 'Can edit own clinical notes',
  area: 'clinicalNotes'
}, {
  id: 'notes_edit_all',
  name: 'Edit all notes',
  description: 'Can edit all clinical notes',
  area: 'clinicalNotes'
}, {
  id: 'notes_sign',
  name: 'Sign notes',
  description: 'Can sign clinical notes',
  area: 'clinicalNotes'
},
// Billing
{
  id: 'billing_view',
  name: 'View billing',
  description: 'Can view billing information',
  area: 'billing'
}, {
  id: 'billing_process',
  name: 'Process payments',
  description: 'Can process payments',
  area: 'billing'
}, {
  id: 'billing_refund',
  name: 'Issue refunds',
  description: 'Can issue refunds',
  area: 'billing'
}, {
  id: 'billing_reports',
  name: 'View reports',
  description: 'Can view financial reports',
  area: 'billing'
},
// Practice Settings
{
  id: 'settings_users',
  name: 'Manage users',
  description: 'Can manage practice users',
  area: 'practiceSettings'
}, {
  id: 'settings_roles',
  name: 'Manage roles',
  description: 'Can manage practice roles',
  area: 'practiceSettings'
}, {
  id: 'settings_practice',
  name: 'Edit practice info',
  description: 'Can edit practice information',
  area: 'practiceSettings'
}, {
  id: 'settings_audit',
  name: 'View audit logs',
  description: 'Can view audit logs',
  area: 'practiceSettings'
},
// Communications
{
  id: 'comms_messages',
  name: 'Send messages',
  description: 'Can send messages',
  area: 'communications'
}, {
  id: 'comms_view_all',
  name: 'View all threads',
  description: 'Can view all message threads',
  area: 'communications'
}, {
  id: 'comms_video',
  name: 'Access video calls',
  description: 'Can access video calls',
  area: 'communications'
}];
// Mock data for roles
const ROLES: Role[] = [{
  id: 'admin',
  name: 'Practice Administrator',
  description: 'Full access to all practice settings and features',
  userCount: 2,
  isDefault: true,
  permissions: PERMISSIONS.map(p => p.id)
}, {
  id: 'therapist',
  name: 'Therapist',
  description: 'Can manage assigned clients and clinical documentation',
  userCount: 8,
  isDefault: true,
  permissions: ['client_view', 'client_create', 'client_edit', 'schedule_view', 'schedule_create', 'schedule_edit', 'notes_view', 'notes_create', 'notes_edit_own', 'notes_sign', 'billing_view', 'billing_process', 'comms_messages', 'comms_view_all', 'comms_video']
}, {
  id: 'supervisor',
  name: 'Clinical Supervisor',
  description: 'Can oversee therapists and review clinical work',
  userCount: 3,
  isDefault: false,
  permissions: ['client_view', 'client_create', 'client_edit', 'schedule_view', 'schedule_create', 'schedule_edit', 'schedule_delete', 'notes_view', 'notes_create', 'notes_edit_own', 'notes_edit_all', 'notes_sign', 'billing_view', 'billing_process', 'billing_reports', 'comms_messages', 'comms_view_all', 'comms_video']
}, {
  id: 'reception',
  name: 'Front Desk',
  description: 'Can manage scheduling and basic client information',
  userCount: 4,
  isDefault: false,
  permissions: ['client_view', 'client_create', 'schedule_view', 'schedule_create', 'schedule_edit', 'billing_view', 'billing_process', 'comms_messages']
}, {
  id: 'billing',
  name: 'Billing Specialist',
  description: 'Can manage all billing and payment operations',
  userCount: 1,
  isDefault: false,
  permissions: ['client_view', 'schedule_view', 'billing_view', 'billing_process', 'billing_refund', 'billing_reports', 'comms_messages']
}];
// Mock data for users
const USERS: User[] = [{
  id: 'user1',
  name: 'Dr. Jane Smith',
  email: 'jane.smith@example.com',
  roleId: 'admin',
  status: 'active',
  lastLogin: '2023-11-28T10:30:00Z',
  avatar: 'JS'
}, {
  id: 'user2',
  name: 'Dr. Michael Chen',
  email: 'michael.chen@example.com',
  roleId: 'supervisor',
  status: 'active',
  lastLogin: '2023-11-27T15:45:00Z',
  avatar: 'MC'
}, {
  id: 'user3',
  name: 'Sarah Johnson',
  email: 'sarah.johnson@example.com',
  roleId: 'therapist',
  status: 'active',
  lastLogin: '2023-11-28T09:15:00Z',
  avatar: 'SJ'
}, {
  id: 'user4',
  name: 'Robert Williams',
  email: 'robert.williams@example.com',
  roleId: 'therapist',
  status: 'active',
  lastLogin: '2023-11-26T11:20:00Z',
  avatar: 'RW'
}, {
  id: 'user5',
  name: 'Emily Davis',
  email: 'emily.davis@example.com',
  roleId: 'reception',
  status: 'active',
  lastLogin: '2023-11-28T08:00:00Z',
  avatar: 'ED'
}, {
  id: 'user6',
  name: 'James Wilson',
  email: 'james.wilson@example.com',
  roleId: 'billing',
  status: 'active',
  lastLogin: '2023-11-27T14:10:00Z',
  avatar: 'JW'
}, {
  id: 'user7',
  name: 'Lisa Thompson',
  email: 'lisa.thompson@example.com',
  roleId: 'therapist',
  status: 'inactive',
  lastLogin: '2023-10-15T10:30:00Z',
  avatar: 'LT'
}, {
  id: 'user8',
  name: 'David Martinez',
  email: 'david.martinez@example.com',
  roleId: 'therapist',
  status: 'pending',
  lastLogin: '',
  avatar: 'DM'
}];
// Component for User Permissions Settings
export const UserPermissionsSettings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'roles' | 'users' | 'matrix'>('roles');
  const [roles, setRoles] = useState<Role[]>(ROLES);
  const [users, setUsers] = useState<User[]>(USERS);
  const [selectedRoleId, setSelectedRoleId] = useState<string | null>(null);
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
  const [roleToDelete, setRoleToDelete] = useState<Role | null>(null);
  const [editingRole, setEditingRole] = useState<Role | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUserIds, setSelectedUserIds] = useState<string[]>([]);
  const [isBulkActionOpen, setIsBulkActionOpen] = useState(false);
  const [bulkRoleId, setBulkRoleId] = useState<string>('');
  // Function to handle role deletion
  const handleDeleteRole = (role: Role) => {
    setRoleToDelete(role);
    setIsDeleteConfirmOpen(true);
  };
  // Function to confirm role deletion
  const confirmDeleteRole = () => {
    if (roleToDelete) {
      // In a real app, this would make an API call
      setRoles(roles.filter(r => r.id !== roleToDelete.id));
      setIsDeleteConfirmOpen(false);
      setRoleToDelete(null);
    }
  };
  // Function to edit a role
  const handleEditRole = (role: Role) => {
    setEditingRole(role);
    setIsRoleModalOpen(true);
  };
  // Function to handle bulk role assignment
  const handleBulkRoleAssign = () => {
    if (bulkRoleId && selectedUserIds.length > 0) {
      setUsers(users.map(user => selectedUserIds.includes(user.id) ? {
        ...user,
        roleId: bulkRoleId
      } : user));
      setSelectedUserIds([]);
      setIsBulkActionOpen(false);
    }
  };
  // Function to toggle user selection for bulk actions
  const toggleUserSelection = (userId: string) => {
    if (selectedUserIds.includes(userId)) {
      setSelectedUserIds(selectedUserIds.filter(id => id !== userId));
    } else {
      setSelectedUserIds([...selectedUserIds, userId]);
    }
  };
  // Function to select all users
  const selectAllUsers = () => {
    if (selectedUserIds.length === users.length) {
      setSelectedUserIds([]);
    } else {
      setSelectedUserIds(users.map(user => user.id));
    }
  };
  // Filter roles based on search query
  const filteredRoles = roles.filter(role => role.name.toLowerCase().includes(searchQuery.toLowerCase()) || role.description.toLowerCase().includes(searchQuery.toLowerCase()));
  // Filter users based on search query
  const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchQuery.toLowerCase()) || user.email.toLowerCase().includes(searchQuery.toLowerCase()) || roles.find(r => r.id === user.roleId)?.name.toLowerCase().includes(searchQuery.toLowerCase()));
  return <div className="space-y-6">
      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button onClick={() => setActiveTab('roles')} className={`px-4 py-2 text-sm font-medium ${activeTab === 'roles' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
          <div className="flex items-center">
            <ShieldIcon className="w-4 h-4 mr-2" />
            Roles
          </div>
        </button>
        <button onClick={() => setActiveTab('users')} className={`px-4 py-2 text-sm font-medium ${activeTab === 'users' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
          <div className="flex items-center">
            <UsersIcon className="w-4 h-4 mr-2" />
            Users
          </div>
        </button>
        <button onClick={() => setActiveTab('matrix')} className={`px-4 py-2 text-sm font-medium ${activeTab === 'matrix' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
          <div className="flex items-center">
            <div className="grid grid-cols-2 gap-0.5 w-4 h-4 mr-2">
              <div className="bg-gray-400 rounded-sm"></div>
              <div className="bg-gray-400 rounded-sm"></div>
              <div className="bg-gray-400 rounded-sm"></div>
              <div className="bg-gray-400 rounded-sm"></div>
            </div>
            Permission Matrix
          </div>
        </button>
      </div>
      {/* Search and Actions Bar */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 items-center">
        <div className="relative w-full sm:w-64">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <SearchIcon className="w-4 h-4 text-gray-400" />
          </div>
          <input type="text" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-2" placeholder={`Search ${activeTab === 'roles' ? 'roles' : activeTab === 'users' ? 'users' : 'permissions'}...`} value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
        </div>
        {activeTab === 'roles' && <button onClick={() => {
        setEditingRole(null);
        setIsRoleModalOpen(true);
      }} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full sm:w-auto">
            <PlusIcon className="w-4 h-4 mr-2" />
            Create New Role
          </button>}
        {activeTab === 'users' && <div className="flex gap-2 w-full sm:w-auto">
            <button onClick={() => setIsUserModalOpen(true)} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex-1 sm:flex-none">
              <UserPlusIcon className="w-4 h-4 mr-2" />
              Invite User
            </button>
            {selectedUserIds.length > 0 && <div className="relative">
                <button onClick={() => setIsBulkActionOpen(!isBulkActionOpen)} className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex-1 sm:flex-none">
                  Bulk Actions
                  <ChevronDownIcon className="w-4 h-4 ml-2" />
                </button>
                {isBulkActionOpen && <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <div className="py-1">
                      <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200">
                        Assign Role to {selectedUserIds.length} User
                        {selectedUserIds.length !== 1 ? 's' : ''}
                      </div>
                      <div className="px-4 py-2">
                        <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" value={bulkRoleId} onChange={e => setBulkRoleId(e.target.value)}>
                          <option value="">Select a role</option>
                          {roles.map(role => <option key={role.id} value={role.id}>
                              {role.name}
                            </option>)}
                        </select>
                      </div>
                      <div className="px-4 py-2 border-t border-gray-200">
                        <button onClick={handleBulkRoleAssign} disabled={!bulkRoleId} className={`w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md ${bulkRoleId ? 'text-white bg-indigo-600 hover:bg-indigo-700' : 'text-gray-400 bg-gray-200 cursor-not-allowed'}`}>
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>}
              </div>}
          </div>}
        {activeTab === 'matrix' && <button onClick={() => {
        // In a real app, this would trigger a download of the permission matrix
        alert('Downloading permission matrix...');
      }} className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full sm:w-auto">
            <DownloadIcon className="w-4 h-4 mr-2" />
            Export Matrix
          </button>}
      </div>
      {/* Role Management Dashboard */}
      {activeTab === 'roles' && <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {filteredRoles.map(role => <li key={role.id}>
                <div className="px-4 py-5 sm:px-6 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className={`h-10 w-10 rounded-full flex items-center justify-center ${role.isDefault ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-600'}`}>
                          <ShieldIcon className="h-5 w-5" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="flex items-center">
                          <h3 className="text-sm font-medium text-gray-900">
                            {role.name}
                          </h3>
                          {role.isDefault && <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              Default
                            </span>}
                        </div>
                        <p className="text-sm text-gray-500">
                          {role.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500 mr-4">
                        {role.userCount} user{role.userCount !== 1 && 's'}
                      </span>
                      <div className="flex space-x-2">
                        <button onClick={() => handleEditRole(role)} className="inline-flex items-center p-1.5 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
                          <EditIcon className="h-4 w-4" />
                        </button>
                        {!role.isDefault && <button onClick={() => handleDeleteRole(role)} className="inline-flex items-center p-1.5 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
                            <TrashIcon className="h-4 w-4" />
                          </button>}
                      </div>
                    </div>
                  </div>
                </div>
              </li>)}
            {filteredRoles.length === 0 && <li className="px-4 py-5 sm:px-6 text-center text-gray-500">
                No roles found matching your search.
              </li>}
          </ul>
        </div>}
      {/* User Management Interface */}
      {activeTab === 'users' && <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center">
                    <input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 mr-2" checked={selectedUserIds.length === users.length && users.length > 0} onChange={selectAllUsers} />
                    User
                  </div>
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Login
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map(user => <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <input type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 mr-2" checked={selectedUserIds.includes(user.id)} onChange={() => toggleUserSelection(user.id)} />
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-medium">
                          {user.avatar}
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {user.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {roles.find(r => r.id === user.roleId)?.name || 'Unknown Role'}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${user.status === 'active' ? 'bg-green-100 text-green-800' : user.status === 'inactive' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                      {user.status === 'active' && <CheckCircleIcon className="w-3 h-3 mr-1" />}
                      {user.status === 'inactive' && <XCircleIcon className="w-3 h-3 mr-1" />}
                      {user.status === 'pending' && <ClockIcon className="w-3 h-3 mr-1" />}
                      {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {user.lastLogin ? new Date(user.lastLogin).toLocaleDateString() : 'Never'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-indigo-600 hover:text-indigo-900">
                      Edit
                    </button>
                  </td>
                </tr>)}
              {filteredUsers.length === 0 && <tr>
                  <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                    No users found matching your search.
                  </td>
                </tr>}
            </tbody>
          </table>
        </div>}
      {/* Permission Matrix View */}
      {activeTab === 'matrix' && <div className="bg-white shadow overflow-x-auto sm:rounded-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sticky left-0 bg-gray-50 z-10 min-w-[200px]">
                  Permission
                </th>
                {roles.map(role => <th key={role.id} scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[150px]">
                    <div className="flex flex-col items-center">
                      <span>{role.name}</span>
                      {role.isDefault && <span className="mt-1 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Default
                        </span>}
                    </div>
                  </th>)}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Group permissions by area */}
              {(['clientManagement', 'scheduling', 'clinicalNotes', 'billing', 'practiceSettings', 'communications'] as PermissionArea[]).map(area => <Fragment key={area}>
                  <tr className="bg-gray-100">
                    <td colSpan={roles.length + 1} className="px-6 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider sticky left-0 bg-gray-100">
                      {area === 'clientManagement' && 'Client Management'}
                      {area === 'scheduling' && 'Scheduling'}
                      {area === 'clinicalNotes' && 'Clinical Notes'}
                      {area === 'billing' && 'Billing'}
                      {area === 'practiceSettings' && 'Practice Settings'}
                      {area === 'communications' && 'Communications'}
                    </td>
                  </tr>
                  {PERMISSIONS.filter(p => p.area === area).map(permission => <tr key={permission.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 sticky left-0 bg-white hover:bg-gray-50 flex items-center">
                          <span>{permission.name}</span>
                          <button className="ml-2 text-gray-400 hover:text-gray-500">
                            <InfoIcon className="h-4 w-4" />
                          </button>
                        </td>
                        {roles.map(role => <td key={`${role.id}-${permission.id}`} className="px-6 py-4 whitespace-nowrap text-center">
                            <div className="flex justify-center">
                              {role.permissions.includes(permission.id) ? <CheckIcon className="h-5 w-5 text-green-600" /> : <XIcon className="h-5 w-5 text-gray-300" />}
                            </div>
                          </td>)}
                      </tr>)}
                </Fragment>)}
            </tbody>
          </table>
        </div>}
      {/* Role Create/Edit Modal */}
      {isRoleModalOpen && <RoleModal role={editingRole} permissions={PERMISSIONS} onClose={() => setIsRoleModalOpen(false)} onSave={role => {
      if (editingRole) {
        // Update existing role
        setRoles(roles.map(r => r.id === role.id ? role : r));
      } else {
        // Create new role
        setRoles([...roles, {
          ...role,
          id: `role-${Date.now()}`,
          userCount: 0,
          isDefault: false
        }]);
      }
      setIsRoleModalOpen(false);
    }} />}
      {/* User Invite Modal */}
      {isUserModalOpen && <UserInviteModal roles={roles} onClose={() => setIsUserModalOpen(false)} onInvite={userData => {
      // In a real app, this would send an invitation
      console.log('Inviting user:', userData);
      setIsUserModalOpen(false);
    }} />}
      {/* Delete Role Confirmation Modal */}
      {isDeleteConfirmOpen && roleToDelete && <DeleteConfirmationModal title="Delete Role" message={`Are you sure you want to delete the "${roleToDelete.name}" role? ${roleToDelete.userCount > 0 ? `This role is currently assigned to ${roleToDelete.userCount} user${roleToDelete.userCount !== 1 ? 's' : ''}.` : ''}`} confirmText="Delete Role" onCancel={() => {
      setIsDeleteConfirmOpen(false);
      setRoleToDelete(null);
    }} onConfirm={confirmDeleteRole} />}
    </div>;
};
// Role Create/Edit Modal Component
interface RoleModalProps {
  role: Role | null;
  permissions: Permission[];
  onClose: () => void;
  onSave: (role: Role) => void;
}
const RoleModal: React.FC<RoleModalProps> = ({
  role,
  permissions,
  onClose,
  onSave
}) => {
  const [name, setName] = useState(role?.name || '');
  const [description, setDescription] = useState(role?.description || '');
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>(role?.permissions || []);
  const [activeTab, setActiveTab] = useState<PermissionArea>('clientManagement');
  const handleTogglePermission = (permissionId: string) => {
    if (selectedPermissions.includes(permissionId)) {
      setSelectedPermissions(selectedPermissions.filter(id => id !== permissionId));
    } else {
      setSelectedPermissions([...selectedPermissions, permissionId]);
    }
  };
  const handleToggleAll = (area: PermissionArea, checked: boolean) => {
    const areaPermissionIds = permissions.filter(p => p.area === area).map(p => p.id);
    if (checked) {
      // Add all permissions for this area
      const newPermissions = [...selectedPermissions];
      areaPermissionIds.forEach(id => {
        if (!newPermissions.includes(id)) {
          newPermissions.push(id);
        }
      });
      setSelectedPermissions(newPermissions);
    } else {
      // Remove all permissions for this area
      setSelectedPermissions(selectedPermissions.filter(id => !areaPermissionIds.includes(id)));
    }
  };
  const handleSave = () => {
    if (!name.trim()) {
      alert('Role name is required');
      return;
    }
    onSave({
      id: role?.id || '',
      name,
      description,
      permissions: selectedPermissions,
      userCount: role?.userCount || 0,
      isDefault: role?.isDefault || false
    });
  };
  // Check if all permissions in an area are selected
  const areAllSelected = (area: PermissionArea) => {
    const areaPermissionIds = permissions.filter(p => p.area === area).map(p => p.id);
    return areaPermissionIds.every(id => selectedPermissions.includes(id));
  };
  // Check if some permissions in an area are selected
  const areSomeSelected = (area: PermissionArea) => {
    const areaPermissionIds = permissions.filter(p => p.area === area).map(p => p.id);
    return areaPermissionIds.some(id => selectedPermissions.includes(id)) && !areAllSelected(area);
  };
  return <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose}></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {role ? 'Edit Role' : 'Create New Role'}
                </h3>
                <div className="mt-6 space-y-6">
                  <div>
                    <label htmlFor="role-name" className="block text-sm font-medium text-gray-700">
                      Role Name
                    </label>
                    <input type="text" id="role-name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={name} onChange={e => setName(e.target.value)} placeholder="e.g., Clinical Supervisor" />
                  </div>
                  <div>
                    <label htmlFor="role-description" className="block text-sm font-medium text-gray-700">
                      Description
                    </label>
                    <textarea id="role-description" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={description} onChange={e => setDescription(e.target.value)} placeholder="Describe the responsibilities and access level for this role" rows={3} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">
                      Permissions
                    </h4>
                    {/* Permission Area Tabs */}
                    <div className="border-b border-gray-200">
                      <nav className="-mb-px flex space-x-4 overflow-x-auto">
                        {(['clientManagement', 'scheduling', 'clinicalNotes', 'billing', 'practiceSettings', 'communications'] as PermissionArea[]).map(area => <button key={area} onClick={() => setActiveTab(area)} className={`whitespace-nowrap py-2 px-1 border-b-2 text-sm font-medium ${activeTab === area ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                            {area === 'clientManagement' && 'Client Management'}
                            {area === 'scheduling' && 'Scheduling'}
                            {area === 'clinicalNotes' && 'Clinical Notes'}
                            {area === 'billing' && 'Billing'}
                            {area === 'practiceSettings' && 'Practice Settings'}
                            {area === 'communications' && 'Communications'}
                            {areSomeSelected(area) && !areAllSelected(area) && <span className="ml-1.5 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-indigo-400"></span>}
                            {areAllSelected(area) && <span className="ml-1.5 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-indigo-600"></span>}
                          </button>)}
                      </nav>
                    </div>
                    {/* Permission Checkboxes */}
                    <div className="mt-4">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="text-sm font-medium text-gray-700">
                          {activeTab === 'clientManagement' && 'Client Management Permissions'}
                          {activeTab === 'scheduling' && 'Scheduling Permissions'}
                          {activeTab === 'clinicalNotes' && 'Clinical Notes Permissions'}
                          {activeTab === 'billing' && 'Billing Permissions'}
                          {activeTab === 'practiceSettings' && 'Practice Settings Permissions'}
                          {activeTab === 'communications' && 'Communications Permissions'}
                        </h5>
                        <div className="flex items-center">
                          <input type="checkbox" id={`select-all-${activeTab}`} className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" checked={areAllSelected(activeTab)} onChange={e => handleToggleAll(activeTab, e.target.checked)} />
                          <label htmlFor={`select-all-${activeTab}`} className="ml-2 text-sm text-gray-700">
                            Select All
                          </label>
                        </div>
                      </div>
                      <div className="space-y-2 max-h-60 overflow-y-auto border border-gray-200 rounded-md p-3">
                        {permissions.filter(p => p.area === activeTab).map(permission => <div key={permission.id} className="flex items-start">
                              <div className="flex items-center h-5">
                                <input id={`permission-${permission.id}`} name={`permission-${permission.id}`} type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" checked={selectedPermissions.includes(permission.id)} onChange={() => handleTogglePermission(permission.id)} />
                              </div>
                              <div className="ml-3 text-sm">
                                <label htmlFor={`permission-${permission.id}`} className="font-medium text-gray-700">
                                  {permission.name}
                                </label>
                                <p className="text-gray-500">
                                  {permission.description}
                                </p>
                              </div>
                            </div>)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={handleSave}>
              {role ? 'Save Changes' : 'Create Role'}
            </button>
            <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>;
};
// User Invite Modal Component
interface UserInviteModalProps {
  roles: Role[];
  onClose: () => void;
  onInvite: (userData: {
    email: string;
    roleId: string;
  }) => void;
}
const UserInviteModal: React.FC<UserInviteModalProps> = ({
  roles,
  onClose,
  onInvite
}) => {
  const [email, setEmail] = useState('');
  const [roleId, setRoleId] = useState('');
  const [emailError, setEmailError] = useState('');
  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  const handleInvite = () => {
    if (!email.trim()) {
      setEmailError('Email is required');
      return;
    }
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }
    if (!roleId) {
      alert('Please select a role');
      return;
    }
    onInvite({
      email,
      roleId
    });
  };
  return <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onClose}></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 sm:mx-0 sm:h-10 sm:w-10">
                <UserPlusIcon className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Invite User
                </h3>
                <div className="mt-4 space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input type="email" id="email" className={`mt-1 block w-full border ${emailError ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`} value={email} onChange={e => {
                    setEmail(e.target.value);
                    setEmailError('');
                  }} placeholder="colleague@example.com" />
                    {emailError && <p className="mt-1 text-sm text-red-600">{emailError}</p>}
                  </div>
                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                      Assign Role
                    </label>
                    <select id="role" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" value={roleId} onChange={e => setRoleId(e.target.value)}>
                      <option value="">Select a role</option>
                      {roles.map(role => <option key={role.id} value={role.id}>
                          {role.name}
                        </option>)}
                    </select>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-md">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <InfoIcon className="h-5 w-5 text-yellow-400" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-yellow-700">
                          The user will receive an email invitation to join your
                          practice.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={handleInvite}>
              Send Invitation
            </button>
            <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>;
};
// Delete Confirmation Modal Component
interface DeleteConfirmationModalProps {
  title: string;
  message: string;
  confirmText: string;
  onCancel: () => void;
  onConfirm: () => void;
}
const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
  title,
  message,
  confirmText,
  onCancel,
  onConfirm
}) => {
  return <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" onClick={onCancel}></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <AlertTriangleIcon className="h-6 w-6 text-red-600" />
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {title}
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{message}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={onConfirm}>
              {confirmText}
            </button>
            <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={onCancel}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>;
};