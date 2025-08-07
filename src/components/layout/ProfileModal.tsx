import React, { useState } from 'react';
import { XIcon, UserIcon, ShieldIcon, BellIcon, BriefcaseIcon, CheckIcon, PlusIcon, TrashIcon } from 'lucide-react';
interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}
export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState('view');
  const [selectedCategory, setSelectedCategory] = useState('conditions');
  const [newSpecialization, setNewSpecialization] = useState('');
  const [proficiencyLevel, setProficiencyLevel] = useState('experienced');
  if (!isOpen) return null;
  const specializations = {
    conditions: [{
      name: 'Anxiety',
      proficiency: 'experienced',
      description: 'Specializing in generalized anxiety, social anxiety, and panic disorders.'
    }, {
      name: 'Depression',
      proficiency: 'expert',
      description: 'Extensive experience with major depressive disorder and persistent depressive disorder.'
    }, {
      name: 'PTSD',
      proficiency: 'familiar',
      description: 'Basic understanding of trauma-related disorders.'
    }],
    therapies: [{
      name: 'Cognitive Behavioral Therapy (CBT)',
      proficiency: 'expert',
      description: 'Certified in CBT with 10+ years of clinical practice.'
    }, {
      name: 'EMDR',
      proficiency: 'experienced',
      description: 'Trained in Eye Movement Desensitization and Reprocessing for trauma treatment.'
    }],
    demographics: [{
      name: 'Adults',
      proficiency: 'expert',
      description: 'Primary focus on adult clients ages 18-65.'
    }, {
      name: 'Adolescents',
      proficiency: 'experienced',
      description: 'Work with teens 13-17 years old on identity, anxiety, and family issues.'
    }]
  };
  const handleAddSpecialization = () => {
    if (newSpecialization.trim()) {
      // In a real app, this would update the state or make an API call
      // For this demo, we'll just clear the input
      setNewSpecialization('');
    }
  };
  return <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="profile-modal-title" role="dialog" aria-modal="true">
      <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onClick={onClose}></div>
        {/* Modal panel */}
        <div className="inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl sm:align-middle">
          <div className="bg-white">
            {/* Header */}
            <div className="border-b border-gray-200 px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-900" id="profile-modal-title">
                  Profile
                </h2>
                <button type="button" className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={onClose}>
                  <span className="sr-only">Close</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              {/* Tabs */}
              <div className="mt-3 flex space-x-4 border-b border-gray-200">
                <button onClick={() => setActiveTab('view')} className={`px-3 py-2 text-sm font-medium ${activeTab === 'view' ? 'border-b-2 border-indigo-500 text-indigo-600' : 'text-gray-500 hover:border-gray-300 hover:text-gray-700'}`}>
                  View Profile
                </button>
                <button onClick={() => setActiveTab('edit')} className={`px-3 py-2 text-sm font-medium ${activeTab === 'edit' ? 'border-b-2 border-indigo-500 text-indigo-600' : 'text-gray-500 hover:border-gray-300 hover:text-gray-700'}`}>
                  Edit Profile
                </button>
                <button onClick={() => setActiveTab('specializations')} className={`px-3 py-2 text-sm font-medium ${activeTab === 'specializations' ? 'border-b-2 border-indigo-500 text-indigo-600' : 'text-gray-500 hover:border-gray-300 hover:text-gray-700'}`}>
                  Specializations
                </button>
                <button onClick={() => setActiveTab('security')} className={`px-3 py-2 text-sm font-medium ${activeTab === 'security' ? 'border-b-2 border-indigo-500 text-indigo-600' : 'text-gray-500 hover:border-gray-300 hover:text-gray-700'}`}>
                  Security
                </button>
              </div>
            </div>
            {/* Tab Content */}
            <div className="max-h-[70vh] overflow-y-auto">
              {/* View Profile Tab */}
              {activeTab === 'view' && <div className="px-4 py-5 sm:px-6">
                  <div className="flex items-center">
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-full bg-indigo-100">
                      <div className="flex h-full w-full items-center justify-center text-2xl font-medium text-indigo-700">
                        JS
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-medium text-gray-900">
                        Dr. Jane Smith
                      </h3>
                      <p className="text-sm text-gray-500">
                        Licensed Clinical Psychologist
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        jane.smith@example.com
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 border-t border-gray-200 pt-6">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Phone
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          (555) 123-4567
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          License
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">PSY12345</dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Office
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          123 Therapy St, Suite 100
                        </dd>
                      </div>
                      <div className="sm:col-span-1">
                        <dt className="text-sm font-medium text-gray-500">
                          Years in Practice
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">12</dd>
                      </div>
                      <div className="sm:col-span-2">
                        <dt className="text-sm font-medium text-gray-500">
                          About
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900">
                          Dr. Smith specializes in anxiety disorders,
                          depression, and trauma recovery. She takes an
                          integrative approach combining CBT, mindfulness, and
                          psychodynamic techniques tailored to each client's
                          unique needs.
                        </dd>
                      </div>
                    </dl>
                  </div>
                  <div className="mt-6 border-t border-gray-200 pt-6">
                    <h4 className="text-sm font-medium text-gray-500">
                      Top Specializations
                    </h4>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      <li className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800">
                        Anxiety
                      </li>
                      <li className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800">
                        Depression
                      </li>
                      <li className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800">
                        CBT
                      </li>
                      <li className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800">
                        Trauma
                      </li>
                      <li className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800">
                        Adults
                      </li>
                    </ul>
                  </div>
                </div>}
              {/* Edit Profile Tab */}
              {activeTab === 'edit' && <div className="px-4 py-5 sm:p-6">
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center">
                        <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-full bg-indigo-100">
                          <div className="flex h-full w-full items-center justify-center text-2xl font-medium text-indigo-700">
                            JS
                          </div>
                        </div>
                        <div className="ml-5">
                          <button type="button" className="rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            Change photo
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          First name
                        </label>
                        <input type="text" name="first-name" id="first-name" defaultValue="Jane" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Last name
                        </label>
                        <input type="text" name="last-name" id="last-name" defaultValue="Smith" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                      </div>
                      <div className="col-span-6 sm:col-span-4">
                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                          Email address
                        </label>
                        <input type="text" name="email-address" id="email-address" defaultValue="jane.smith@example.com" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="professional-title" className="block text-sm font-medium text-gray-700">
                          Professional Title
                        </label>
                        <input type="text" name="professional-title" id="professional-title" defaultValue="Licensed Clinical Psychologist" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="license-number" className="block text-sm font-medium text-gray-700">
                          License Number
                        </label>
                        <input type="text" name="license-number" id="license-number" defaultValue="PSY12345" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
                          Phone Number
                        </label>
                        <input type="text" name="phone-number" id="phone-number" defaultValue="(555) 123-4567" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="years-practice" className="block text-sm font-medium text-gray-700">
                          Years in Practice
                        </label>
                        <input type="number" name="years-practice" id="years-practice" defaultValue="12" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                      </div>
                      <div className="col-span-6">
                        <label htmlFor="office-address" className="block text-sm font-medium text-gray-700">
                          Office Address
                        </label>
                        <input type="text" name="office-address" id="office-address" defaultValue="123 Therapy St, Suite 100" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                      </div>
                      <div className="col-span-6">
                        <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                          About
                        </label>
                        <textarea id="about" name="about" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" defaultValue="Dr. Smith specializes in anxiety disorders, depression, and trauma recovery. She takes an integrative approach combining CBT, mindfulness, and psychodynamic techniques tailored to each client's unique needs." />
                        <p className="mt-2 text-sm text-gray-500">
                          Brief description for your profile. This will be
                          visible to clients.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>}
              {/* Specializations Tab */}
              {activeTab === 'specializations' && <div className="px-4 py-5 sm:p-6">
                  {/* Category Tabs */}
                  <div className="mb-6 border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8" aria-label="Specialization categories">
                      <button onClick={() => setSelectedCategory('conditions')} className={`whitespace-nowrap px-1 py-3 text-sm font-medium ${selectedCategory === 'conditions' ? 'border-b-2 border-indigo-500 text-indigo-600' : 'text-gray-500 hover:border-gray-300 hover:text-gray-700'}`}>
                        Conditions
                      </button>
                      <button onClick={() => setSelectedCategory('therapies')} className={`whitespace-nowrap px-1 py-3 text-sm font-medium ${selectedCategory === 'therapies' ? 'border-b-2 border-indigo-500 text-indigo-600' : 'text-gray-500 hover:border-gray-300 hover:text-gray-700'}`}>
                        Therapies
                      </button>
                      <button onClick={() => setSelectedCategory('demographics')} className={`whitespace-nowrap px-1 py-3 text-sm font-medium ${selectedCategory === 'demographics' ? 'border-b-2 border-indigo-500 text-indigo-600' : 'text-gray-500 hover:border-gray-300 hover:text-gray-700'}`}>
                        Demographics
                      </button>
                    </nav>
                  </div>
                  {/* Add New Specialization */}
                  <div className="mb-6 rounded-md bg-gray-50 p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div className="mb-4 sm:mb-0 sm:pr-6">
                        <h4 className="text-base font-medium text-gray-900">
                          Add Specialization
                        </h4>
                        <p className="mt-1 text-sm text-gray-500">
                          Add a new specialization to your profile to help
                          clients find you.
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center">
                        <div className="relative rounded-md shadow-sm">
                          <input type="text" className="block w-full rounded-md border-gray-300 pr-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Enter specialization" value={newSpecialization} onChange={e => setNewSpecialization(e.target.value)} />
                        </div>
                        <div className="mt-2 sm:mt-0 sm:ml-3">
                          <button type="button" className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={handleAddSpecialization}>
                            <PlusIcon className="-ml-1 mr-2 h-4 w-4" aria-hidden="true" />
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">
                          Proficiency Level
                        </span>
                      </div>
                      <div className="mt-2 grid grid-cols-3 gap-3">
                        <div>
                          <label className="flex items-center">
                            <input type="radio" name="proficiency" value="familiar" checked={proficiencyLevel === 'familiar'} onChange={() => setProficiencyLevel('familiar')} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                            <span className="ml-2 text-sm text-gray-700">
                              Familiar
                            </span>
                          </label>
                        </div>
                        <div>
                          <label className="flex items-center">
                            <input type="radio" name="proficiency" value="experienced" checked={proficiencyLevel === 'experienced'} onChange={() => setProficiencyLevel('experienced')} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                            <span className="ml-2 text-sm text-gray-700">
                              Experienced
                            </span>
                          </label>
                        </div>
                        <div>
                          <label className="flex items-center">
                            <input type="radio" name="proficiency" value="expert" checked={proficiencyLevel === 'expert'} onChange={() => setProficiencyLevel('expert')} className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                            <span className="ml-2 text-sm text-gray-700">
                              Expert
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Specialization List */}
                  <div className="space-y-4">
                    {specializations[selectedCategory as keyof typeof specializations].map((specialization, index) => <div key={index} className="rounded-md border border-gray-200 bg-white p-4 shadow-sm">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <div className="mb-2 sm:mb-0">
                            <div className="flex items-center">
                              <h5 className="text-base font-medium text-gray-900">
                                {specialization.name}
                              </h5>
                              <span className={`ml-2 rounded-full px-2.5 py-0.5 text-xs font-medium ${specialization.proficiency === 'expert' ? 'bg-green-100 text-green-800' : specialization.proficiency === 'experienced' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                                {specialization.proficiency.charAt(0).toUpperCase() + specialization.proficiency.slice(1)}
                              </span>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">
                              {specialization.description}
                            </p>
                          </div>
                          <div className="flex space-x-2">
                            <button type="button" className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                              <PencilIcon className="-ml-1 mr-1 h-4 w-4 text-gray-500" aria-hidden="true" />
                              Edit
                            </button>
                            <button type="button" className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                              <TrashIcon className="-ml-1 mr-1 h-4 w-4 text-gray-500" aria-hidden="true" />
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>)}
                  </div>
                </div>}
              {/* Security Tab */}
              {activeTab === 'security' && <div className="px-4 py-5 sm:p-6">
                  {/* Password Section */}
                  <div className="mb-8">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Password
                    </h3>
                    <div className="mt-4 space-y-4">
                      <div>
                        <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">
                          Current Password
                        </label>
                        <input type="password" name="current-password" id="current-password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="••••••••" />
                      </div>
                      <div>
                        <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
                          New Password
                        </label>
                        <input type="password" name="new-password" id="new-password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="••••••••" />
                      </div>
                      <div>
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                          Confirm New Password
                        </label>
                        <input type="password" name="confirm-password" id="confirm-password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="••••••••" />
                      </div>
                      <div>
                        <button type="button" className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                          Update Password
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Two-Factor Authentication */}
                  <div className="mb-8 border-t border-gray-200 pt-8">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Two-Factor Authentication
                    </h3>
                    <div className="mt-4">
                      <div className="flex items-start">
                        <div className="flex h-5 items-center">
                          <input id="two-factor" name="two-factor" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="two-factor" className="font-medium text-gray-700">
                            Enable two-factor authentication
                          </label>
                          <p className="text-gray-500">
                            Add an extra layer of security to your account by
                            requiring both your password and a verification
                            code.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Login History */}
                  <div className="border-t border-gray-200 pt-8">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Login History
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Recent login activity for your account.
                    </p>
                    <div className="mt-4 overflow-hidden rounded-md border border-gray-200 shadow-sm">
                      <ul role="list" className="divide-y divide-gray-200">
                        <li className="bg-white px-4 py-4 hover:bg-gray-50 sm:px-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-gray-900">
                                Today, 9:42 AM
                              </p>
                              <p className="text-sm text-gray-500">
                                San Francisco, CA • Chrome on macOS
                              </p>
                            </div>
                            <div className="ml-2 flex flex-shrink-0">
                              <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                                Current
                              </span>
                            </div>
                          </div>
                        </li>
                        <li className="bg-white px-4 py-4 hover:bg-gray-50 sm:px-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-gray-900">
                                Yesterday, 4:30 PM
                              </p>
                              <p className="text-sm text-gray-500">
                                San Francisco, CA • Chrome on macOS
                              </p>
                            </div>
                          </div>
                        </li>
                        <li className="bg-white px-4 py-4 hover:bg-gray-50 sm:px-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium text-gray-900">
                                January 20, 2023, 8:15 AM
                              </p>
                              <p className="text-sm text-gray-500">
                                San Francisco, CA • Chrome on macOS
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>}
            </div>
            {/* Footer */}
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button type="button" className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm" onClick={onClose}>
                Save Changes
              </button>
              <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={onClose}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};