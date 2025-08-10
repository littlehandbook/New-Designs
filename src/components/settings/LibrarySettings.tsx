import React, { useState, Children } from 'react';
import { FolderIcon, PlusIcon, TagIcon, TrashIcon, EditIcon, CheckIcon, XIcon, AlertCircleIcon, LinkIcon, YoutubeIcon, VideoIcon, RefreshCwIcon } from 'lucide-react';
export const LibrarySettings = () => {
  const [activeTab, setActiveTab] = useState('folders');
  return <div>
      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="-mb-px flex space-x-6">
          <button onClick={() => setActiveTab('folders')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'folders' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            Folder Structure
          </button>
          <button onClick={() => setActiveTab('tags')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'tags' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            Tag Management
          </button>
          <button onClick={() => setActiveTab('privacy')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'privacy' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            Privacy & Sharing
          </button>
          <button onClick={() => setActiveTab('external')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'external' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
            External Content
          </button>
        </nav>
      </div>
      {/* Folder Structure */}
      {activeTab === 'folders' && <div>
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Folder Structure
            </h3>
            <div className="border border-gray-200 rounded-md mb-4">
              <div className="p-3 border-b border-gray-200 bg-gray-50">
                <div className="flex items-center">
                  <FolderIcon className="h-5 w-5 text-gray-500 mr-2" />
                  <span className="font-medium text-gray-700">Resources/</span>
                </div>
              </div>
              <div className="p-3 pl-8 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FolderIcon className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="text-gray-700">By Condition/</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="text-gray-400 hover:text-gray-500">
                      <EditIcon className="h-4 w-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-500">
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-3 pl-12 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FolderIcon className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="text-gray-700">Anxiety/</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="text-gray-400 hover:text-gray-500">
                      <EditIcon className="h-4 w-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-500">
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-3 pl-12 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FolderIcon className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="text-gray-700">Depression/</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="text-gray-400 hover:text-gray-500">
                      <EditIcon className="h-4 w-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-500">
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-3 pl-8 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FolderIcon className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="text-gray-700">By Age/</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="text-gray-400 hover:text-gray-500">
                      <EditIcon className="h-4 w-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-500">
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-3 pl-12 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FolderIcon className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="text-gray-700">Children/</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="text-gray-400 hover:text-gray-500">
                      <EditIcon className="h-4 w-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-500">
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-3 pl-12">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FolderIcon className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="text-gray-700">Adults/</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="text-gray-400 hover:text-gray-500">
                      <EditIcon className="h-4 w-4" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-500">
                      <TrashIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <PlusIcon className="h-4 w-4 mr-1.5" />
                Add Folder
              </button>
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <EditIcon className="h-4 w-4 mr-1.5" />
                Rename
              </button>
              <button className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <TrashIcon className="h-4 w-4 mr-1.5" />
                Delete
              </button>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Folder Permissions
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <input id="allow-create-folders" name="allow-create-folders" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                <label htmlFor="allow-create-folders" className="ml-3 text-sm text-gray-700">
                  Allow practitioners to create folders
                </label>
              </div>
              <div className="flex items-center">
                <input id="show-folder-view" name="show-folder-view" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                <label htmlFor="show-folder-view" className="ml-3 text-sm text-gray-700">
                  Show folder view in library
                </label>
              </div>
            </div>
          </div>
        </div>}
      {/* Tag Management */}
      {activeTab === 'tags' && <div>
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              System Categories
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              These categories are built into the system and cannot be modified.
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  Evidence Level
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    Evidence-Based
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    Standard Practice
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    Best Practice
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    Practice Developed
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    Experimental
                  </span>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  Age Groups
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    Children (5-12)
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    Adolescents (13-17)
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    Adults (18+)
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    All Ages
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Practice Categories
            </h3>
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Intervention Types
              </h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-2 border border-gray-200 rounded-md">
                  <span className="text-sm text-gray-700">
                    Anxiety Treatment
                  </span>
                  <button className="text-gray-400 hover:text-gray-500">
                    <EditIcon className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex items-center justify-between p-2 border border-gray-200 rounded-md">
                  <span className="text-sm text-gray-700">
                    Depression Treatment
                  </span>
                  <button className="text-gray-400 hover:text-gray-500">
                    <EditIcon className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex items-center justify-between p-2 border border-gray-200 rounded-md">
                  <span className="text-sm text-gray-700">
                    Trauma Processing
                  </span>
                  <button className="text-gray-400 hover:text-gray-500">
                    <EditIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <button className="mt-3 inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <PlusIcon className="h-4 w-4 mr-1.5" />
                Add Type
              </button>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Popular Custom Tags
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <TagIcon className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-700">#CBT</span>
                  <span className="ml-2 text-xs text-gray-500">(234 uses)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="text-gray-400 hover:text-gray-500">
                    <EditIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <TagIcon className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-700">#homework</span>
                  <span className="ml-2 text-xs text-gray-500">(189 uses)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="text-gray-400 hover:text-gray-500">
                    <EditIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <TagIcon className="h-4 w-4 text-gray-500 mr-2" />
                  <span className="text-sm text-gray-700">#worksheet</span>
                  <span className="ml-2 text-xs text-gray-500">(156 uses)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="text-gray-400 hover:text-gray-500">
                    <EditIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-4 flex space-x-3">
              <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Merge Similar
              </button>
              <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Clean Unused
              </button>
            </div>
          </div>
        </div>}
      {/* Privacy & Sharing */}
      {activeTab === 'privacy' && <div>
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Resource Privacy Policy
            </h3>
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-700 mb-3">
                Default for New Resources
              </h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input id="default-practice-wide" name="default-privacy" type="radio" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300" defaultChecked />
                  <label htmlFor="default-practice-wide" className="ml-3 text-sm text-gray-700">
                    All resources are practice-wide
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="default-practitioner-choice" name="default-privacy" type="radio" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300" />
                  <label htmlFor="default-practitioner-choice" className="ml-3 text-sm text-gray-700">
                    Practitioners choose per resource
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="default-private" name="default-privacy" type="radio" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300" />
                  <label htmlFor="default-private" className="ml-3 text-sm text-gray-700">
                    All resources private by default
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-700 mb-3">
                Override Options
              </h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input id="allow-private" name="allow-private" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                  <label htmlFor="allow-private" className="ml-3 text-sm text-gray-700">
                    Practitioners can make resources private
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="admin-see-all" name="admin-see-all" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                  <label htmlFor="admin-see-all" className="ml-3 text-sm text-gray-700">
                    Admins can see all resources
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="notify-private" name="notify-private" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                  <label htmlFor="notify-private" className="ml-3 text-sm text-gray-700">
                    Notify when resources made private
                  </label>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-3">
                Current Status
              </h4>
              <div className="bg-gray-50 p-4 rounded-md">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">
                    Shared resources:
                  </span>
                  <span className="text-sm font-medium text-gray-900">203</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    Private resources:
                  </span>
                  <span className="text-sm font-medium text-gray-900">44</span>
                </div>
              </div>
            </div>
          </div>
        </div>}
      {/* External Content */}
      {activeTab === 'external' && <div>
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              External Content Settings
            </h3>
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-700 mb-3">
                Allowed Platforms
              </h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input id="allow-youtube" name="allow-youtube" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                  <label htmlFor="allow-youtube" className="ml-3 text-sm text-gray-700 flex items-center">
                    <YoutubeIcon className="h-4 w-4 text-red-600 mr-1.5" />
                    YouTube
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="allow-vimeo" name="allow-vimeo" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                  <label htmlFor="allow-vimeo" className="ml-3 text-sm text-gray-700 flex items-center">
                    <VideoIcon className="h-4 w-4 text-blue-600 mr-1.5" />
                    Vimeo
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="allow-ted" name="allow-ted" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                  <label htmlFor="allow-ted" className="ml-3 text-sm text-gray-700">
                    TED Talks
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="allow-other" name="allow-other" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                  <label htmlFor="allow-other" className="ml-3 text-sm text-gray-700">
                    Other
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-700 mb-3">
                Privacy
              </h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input id="warn-tracking" name="warn-tracking" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                  <label htmlFor="warn-tracking" className="ml-3 text-sm text-gray-700">
                    Warn about external tracking
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="embed-videos" name="embed-videos" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" defaultChecked />
                  <label htmlFor="embed-videos" className="ml-3 text-sm text-gray-700">
                    Embed videos (don't redirect)
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="block-minors" name="block-minors" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                  <label htmlFor="block-minors" className="ml-3 text-sm text-gray-700">
                    Block external content for minors
                  </label>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-3">
                Link Monitoring
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="check-frequency" className="block text-sm text-gray-700 mb-1">
                    Check links:
                  </label>
                  <select id="check-frequency" name="check-frequency" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                    <option>Weekly</option>
                    <option>Monthly</option>
                    <option>Quarterly</option>
                    <option>Never</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="notify-broken" className="block text-sm text-gray-700 mb-1">
                    Notify if broken:
                  </label>
                  <select id="notify-broken" name="notify-broken" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                    <option>Admins</option>
                    <option>Resource Owner</option>
                    <option>All Practitioners</option>
                    <option>Nobody</option>
                  </select>
                </div>
              </div>
              <div className="mt-4 bg-yellow-50 border border-yellow-100 rounded-md p-3">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertCircleIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3 flex-1 md:flex md:justify-between">
                    <p className="text-sm text-yellow-700">
                      3 external links need attention. They may be broken or
                      unavailable.
                    </p>
                    <p className="mt-3 text-sm md:mt-0 md:ml-6">
                      <button className="whitespace-nowrap font-medium text-yellow-700 hover:text-yellow-600 flex items-center">
                        <RefreshCwIcon className="h-4 w-4 mr-1" />
                        Check All Links
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>}
    </div>;
};