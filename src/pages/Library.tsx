import React, { useState } from 'react';
import { BookOpenIcon, PlusIcon, SearchIcon, GridIcon, ListIcon, ChevronDownIcon, FolderIcon, TagIcon, FileTextIcon, LinkIcon, VideoIcon, MusicIcon, FilterIcon, ExternalLinkIcon, UploadIcon, FileIcon, CheckIcon, AlertCircleIcon, EyeIcon, LockIcon, UsersIcon, ClockIcon, XIcon, DownloadIcon, PrinterIcon, CalendarIcon, UserIcon, MessageSquareIcon } from 'lucide-react';
import { CollapsibleSidebar } from '../components/layout/CollapsibleSidebar';
import { SettingsModal } from '../components/layout/SettingsModal';
// Resource type definitions
type ResourceType = 'document' | 'external-video' | 'uploaded-video' | 'audio';
type ResourceStatus = 'active' | 'expiring' | 'expired' | 'broken';
type ResourceVisibility = 'practice' | 'private';
interface Resource {
  id: number;
  title: string;
  type: ResourceType;
  fileType?: string;
  size?: string;
  pages?: number;
  duration?: string;
  tags: string[];
  primaryTags: string[];
  thumbnail?: string;
  inClientFiles: number;
  sharedCount: number;
  status: ResourceStatus;
  visibility: ResourceVisibility;
  platform?: string;
  url?: string;
}
export const Library = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('recent');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [previewResource, setPreviewResource] = useState<Resource | null>(null);
  const [showAddResourceModal, setShowAddResourceModal] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showAddToDocumentsModal, setShowAddToDocumentsModal] = useState(false);
  const [resourceToShare, setResourceToShare] = useState<Resource | null>(null);
  const [selectedResourceAction, setSelectedResourceAction] = useState<'share' | 'add' | null>(null);
  // Mock data for resources
  const resources: Resource[] = [{
    id: 1,
    title: 'Anxiety Coping Skills',
    type: 'document',
    fileType: 'PDF',
    size: '145KB',
    pages: 2,
    tags: ['cbt', 'homework', 'worksheet'],
    primaryTags: ['anxiety-treatment', 'evidence-based', 'adults'],
    thumbnail: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    inClientFiles: 23,
    sharedCount: 127,
    status: 'active',
    visibility: 'practice'
  }, {
    id: 2,
    title: 'Progressive Relaxation',
    type: 'external-video',
    platform: 'YouTube',
    duration: '12:43',
    tags: ['standard-practice'],
    primaryTags: ['relaxation-exercise'],
    thumbnail: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    inClientFiles: 15,
    sharedCount: 56,
    status: 'active',
    visibility: 'practice',
    url: 'https://www.youtube.com/watch?v=example'
  }, {
    id: 3,
    title: 'Depression Assessment',
    type: 'document',
    fileType: 'PDF',
    size: '220KB',
    pages: 3,
    tags: ['phq-9', 'screening', 'intake'],
    primaryTags: ['depression-treatment', 'evidence-based', 'adults'],
    thumbnail: 'https://images.unsplash.com/photo-1606326608690-4e0281b1e588?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    inClientFiles: 89,
    sharedCount: 312,
    status: 'active',
    visibility: 'practice'
  }, {
    id: 4,
    title: 'Mindfulness Meditation',
    type: 'audio',
    fileType: 'MP3',
    size: '8.5MB',
    duration: '15:20',
    tags: ['meditation', 'stress-reduction'],
    primaryTags: ['mindfulness', 'standard-practice', 'all-ages'],
    thumbnail: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    inClientFiles: 12,
    sharedCount: 78,
    status: 'active',
    visibility: 'practice'
  }, {
    id: 5,
    title: 'Informed Consent Form',
    type: 'document',
    fileType: 'PDF',
    size: '180KB',
    pages: 4,
    tags: ['legal', 'required'],
    primaryTags: ['practice-developed', 'adults'],
    thumbnail: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    inClientFiles: 67,
    sharedCount: 245,
    status: 'active',
    visibility: 'practice'
  }, {
    id: 6,
    title: 'Sleep Hygiene Guide',
    type: 'document',
    fileType: 'PDF',
    size: '130KB',
    pages: 2,
    tags: ['insomnia', 'health'],
    primaryTags: ['evidence-based', 'adults'],
    thumbnail: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    inClientFiles: 18,
    sharedCount: 98,
    status: 'expiring',
    visibility: 'practice'
  }];
  // Get resource icon based on type
  const getResourceIcon = (type: ResourceType) => {
    switch (type) {
      case 'document':
        return <FileTextIcon className="h-5 w-5" />;
      case 'external-video':
      case 'uploaded-video':
        return <VideoIcon className="h-5 w-5" />;
      case 'audio':
        return <MusicIcon className="h-5 w-5" />;
      default:
        return <FileIcon className="h-5 w-5" />;
    }
  };
  // Get status indicator
  const getStatusIndicator = (status: ResourceStatus) => {
    switch (status) {
      case 'active':
        return <span className="h-2.5 w-2.5 rounded-full bg-green-500" title="Active"></span>;
      case 'expiring':
        return <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" title="Expiring soon"></span>;
      case 'expired':
        return <span className="h-2.5 w-2.5 rounded-full bg-red-500" title="Expired"></span>;
      case 'broken':
        return <span className="h-2.5 w-2.5 rounded-full bg-red-500" title="Broken link"></span>;
      default:
        return null;
    }
  };
  // Get visibility icon
  const getVisibilityIcon = (visibility: ResourceVisibility) => {
    switch (visibility) {
      case 'practice':
        return <UsersIcon className="h-4 w-4 text-gray-500" title="Practice-wide" />;
      case 'private':
        return <LockIcon className="h-4 w-4 text-gray-500" title="Private" />;
      default:
        return null;
    }
  };
  // Toggle filter
  const toggleFilter = (tag: string) => {
    if (activeFilters.includes(tag)) {
      setActiveFilters(activeFilters.filter(t => t !== tag));
    } else {
      setActiveFilters([...activeFilters, tag]);
    }
  };
  // Clear all filters
  const clearFilters = () => {
    setActiveFilters([]);
    setSearchQuery('');
  };
  // Filter resources based on search and active filters
  const filteredResources = resources.filter(resource => {
    // Filter by search query
    if (searchQuery && !resource.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    // Filter by active filters (tags)
    if (activeFilters.length > 0) {
      const allTags = [...resource.tags, ...resource.primaryTags];
      return activeFilters.every(filter => allTags.includes(filter));
    }
    return true;
  });
  // Handle resource action selection
  const handleResourceAction = (resource: Resource, action: 'share' | 'add') => {
    setResourceToShare(resource);
    setSelectedResourceAction(action);
    if (action === 'share') {
      setShowShareModal(true);
    } else {
      setShowAddToDocumentsModal(true);
    }
  };
  // Render resource preview modal
  const renderPreviewModal = () => {
    if (!previewResource) return null;
    return <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {previewResource.title}
                </h3>
                <div className="flex items-center space-x-2">
                  {previewResource.type === 'external-video' && <button className="text-gray-400 hover:text-gray-500">
                      <ExternalLinkIcon className="h-5 w-5" aria-hidden="true" />
                    </button>}
                  <button className="text-gray-400 hover:text-gray-500" onClick={() => setPreviewResource(null)}>
                    <XIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg overflow-hidden aspect-video flex items-center justify-center">
                {previewResource.type === 'external-video' || previewResource.type === 'uploaded-video' ? <div className="w-full h-full bg-black flex items-center justify-center text-white">
                    <div className="text-center">
                      <PlayIcon className="h-16 w-16 mx-auto" />
                      <p className="mt-2">Video Preview</p>
                    </div>
                  </div> : previewResource.type === 'audio' ? <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <MusicIcon className="h-16 w-16 mx-auto text-gray-400" />
                      <p className="mt-2 text-gray-600">Audio Preview</p>
                      <div className="mt-4 w-3/4 mx-auto bg-gray-200 h-2 rounded-full overflow-hidden">
                        <div className="bg-indigo-600 h-2 w-1/3 rounded-full"></div>
                      </div>
                      <div className="mt-2 flex justify-between text-xs text-gray-500 w-3/4 mx-auto">
                        <span>0:00</span>
                        <span>{previewResource.duration}</span>
                      </div>
                    </div>
                  </div> : <img src={previewResource.thumbnail} alt={previewResource.title} className="w-full h-full object-cover" />}
              </div>
              <div className="mt-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  {previewResource.primaryTags.map(tag => <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                      #{tag}
                    </span>)}
                  {previewResource.tags.map(tag => <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      #{tag}
                    </span>)}
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center mr-4">
                    <FolderIcon className="h-4 w-4 mr-1" />
                    <span>In {previewResource.inClientFiles} client files</span>
                  </div>
                  <div className="flex items-center">
                    <EyeIcon className="h-4 w-4 mr-1" />
                    <span>Shared {previewResource.sharedCount} times</span>
                  </div>
                </div>
                {previewResource.type === 'external-video' && <div className="bg-yellow-50 border border-yellow-100 rounded-md p-2 text-xs text-yellow-700 flex items-start mb-4">
                    <AlertCircleIcon className="h-4 w-4 mr-2 flex-shrink-0 mt-0.5" />
                    <span>
                      This is an external video from {previewResource.platform}.
                      External content may track viewing activity.
                    </span>
                  </div>}
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => {
              setResourceToShare(previewResource);
              setShowShareModal(true);
              setPreviewResource(null);
            }}>
                Share Temporarily
              </button>
              <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => {
              setResourceToShare(previewResource);
              setShowAddToDocumentsModal(true);
              setPreviewResource(null);
            }}>
                Add to Client Documents
              </button>
              {previewResource.type !== 'external-video' && <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                  <DownloadIcon className="h-4 w-4 mr-2" />
                  Download
                </button>}
              {previewResource.type === 'document' && <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                  <PrinterIcon className="h-4 w-4 mr-2" />
                  Print
                </button>}
            </div>
          </div>
        </div>
      </div>;
  };
  // Render add resource modal
  const renderAddResourceModal = () => {
    if (!showAddResourceModal) return null;
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
                  <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                    Add Resource to Library
                  </h3>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500 mb-4">
                      Choose resource type:
                    </p>
                    <div className="grid grid-cols-3 gap-4">
                      <button type="button" className="inline-flex flex-col items-center justify-center p-4 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <UploadIcon className="h-8 w-8 text-indigo-600 mb-2" />
                        <span className="text-sm font-medium text-gray-900">
                          Upload File
                        </span>
                      </button>
                      <button type="button" className="inline-flex flex-col items-center justify-center p-4 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <LinkIcon className="h-8 w-8 text-indigo-600 mb-2" />
                        <span className="text-sm font-medium text-gray-900">
                          Add Link
                        </span>
                      </button>
                      <button type="button" className="inline-flex flex-col items-center justify-center p-4 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <FileTextIcon className="h-8 w-8 text-indigo-600 mb-2" />
                        <span className="text-sm font-medium text-gray-900">
                          Create Template
                        </span>
                      </button>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <button type="button" className="inline-flex flex-col items-center justify-center p-4 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <FolderIcon className="h-8 w-8 text-indigo-600 mb-2" />
                        <span className="text-sm font-medium text-gray-900">
                          Create Folder
                        </span>
                      </button>
                      <button type="button" className="inline-flex flex-col items-center justify-center p-4 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <DownloadIcon className="h-8 w-8 text-indigo-600 mb-2" />
                        <span className="text-sm font-medium text-gray-900">
                          Import Pack
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => setShowAddResourceModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>;
  };
  // Render share resource modal
  const renderShareModal = () => {
    if (!showShareModal || !resourceToShare) return null;
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
                  <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                    Share Resource Temporarily
                  </h3>
                  <div className="mt-4">
                    <div className="bg-indigo-50 p-3 rounded-md border border-indigo-100 mb-4 flex items-start">
                      <div className="flex-shrink-0 mt-0.5">
                        <InfoIcon className="h-5 w-5 text-indigo-500" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-indigo-700">
                          Temporary shares are available in the client portal
                          and can be revoked or set to expire. The client will
                          be notified.
                        </p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="share-clients" className="block text-sm font-medium text-gray-700 mb-1">
                        Share with:
                      </label>
                      <div className="relative">
                        <select id="share-clients" name="share-clients" className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" defaultValue="" multiple>
                          <option value="client1">John Doe</option>
                          <option value="client2">Sarah Smith</option>
                          <option value="client3">Michael Chen</option>
                          <option value="client4">Emma Wilson</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Expiration:
                      </label>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input id="expiration-never" name="expiration" type="radio" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300" defaultChecked />
                          <label htmlFor="expiration-never" className="ml-3 block text-sm text-gray-700">
                            Never
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input id="expiration-days" name="expiration" type="radio" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300" />
                          <label htmlFor="expiration-days" className="ml-3 block text-sm text-gray-700">
                            After
                            <input type="number" className="mx-2 w-16 inline-block border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" defaultValue="30" min="1" />
                            days
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="share-message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message (optional):
                      </label>
                      <textarea id="share-message" name="share-message" rows={3} className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Add a personal message..."></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => setShowShareModal(false)}>
                Share Now
              </button>
              <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => setShowShareModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>;
  };
  // Render add to client documents modal
  const renderAddToDocumentsModal = () => {
    if (!showAddToDocumentsModal || !resourceToShare) return null;
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
                  <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                    Add to Client Documents
                  </h3>
                  <div className="mt-4">
                    <div className="bg-indigo-50 p-3 rounded-md border border-indigo-100 mb-4 flex items-start">
                      <div className="flex-shrink-0 mt-0.5">
                        <InfoIcon className="h-5 w-5 text-indigo-500" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-indigo-700">
                          Adding to client documents makes this a permanent part
                          of the client's record. It will be visible in their
                          Documents tab and creates an audit trail.
                        </p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="document-clients" className="block text-sm font-medium text-gray-700 mb-1">
                        Select clients:
                      </label>
                      <div className="relative">
                        <select id="document-clients" name="document-clients" className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" defaultValue="" multiple>
                          <option value="client1">John Doe</option>
                          <option value="client2">Sarah Smith</option>
                          <option value="client3">Michael Chen</option>
                          <option value="client4">Emma Wilson</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="document-category" className="block text-sm font-medium text-gray-700 mb-1">
                        Document category:
                      </label>
                      <select id="document-category" name="document-category" className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                        <option>Treatment Materials</option>
                        <option>Intake Documents</option>
                        <option>Homework Assignments</option>
                        <option>Educational Resources</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Link type:
                      </label>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input id="link-type-linked" name="link-type" type="radio" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300" defaultChecked />
                          <label htmlFor="link-type-linked" className="ml-3 block text-sm text-gray-700">
                            Keep linked to library (auto-updates)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input id="link-type-copy" name="link-type" type="radio" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300" />
                          <label htmlFor="link-type-copy" className="ml-3 block text-sm text-gray-700">
                            Create independent copy
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="document-note" className="block text-sm font-medium text-gray-700 mb-1">
                        Note (optional):
                      </label>
                      <input type="text" name="document-note" id="document-note" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="e.g., Provided in session 8" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => setShowAddToDocumentsModal(false)}>
                Add to Client Files
              </button>
              <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => setShowAddToDocumentsModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>;
  };
  // Render grid view of resources
  const renderGridView = () => {
    return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredResources.map(resource => <div key={resource.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="h-40 bg-gray-100 relative cursor-pointer" onClick={() => setPreviewResource(resource)}>
              {resource.thumbnail ? <img src={resource.thumbnail} alt="" className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center bg-gray-100">
                  {getResourceIcon(resource.type)}
                </div>}
              {(resource.type === 'external-video' || resource.type === 'uploaded-video') && <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                  <div className="h-12 w-12 rounded-full bg-white bg-opacity-75 flex items-center justify-center">
                    <PlayIcon className="h-6 w-6 text-gray-900" />
                  </div>
                </div>}
              {resource.type === 'external-video' && <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs py-1 px-2 rounded">
                  {resource.duration}
                </div>}
              <div className="absolute bottom-2 right-2 flex items-center space-x-1">
                {getStatusIndicator(resource.status)}
                {getVisibilityIcon(resource.visibility)}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-900 mb-1">
                {resource.title}
              </h3>
              <p className="text-xs text-gray-500 mb-2">
                {resource.fileType}{' '}
                {resource.pages && `• ${resource.pages} pages`}{' '}
                {resource.size && `• ${resource.size}`}
                {resource.platform && `${resource.platform} • ${resource.duration}`}
              </p>
              <div className="flex flex-wrap gap-1 mb-3">
                {resource.primaryTags.map(tag => <span key={tag} className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 cursor-pointer" onClick={() => toggleFilter(tag)}>
                    #{tag}
                  </span>)}
              </div>
              <div className="flex flex-wrap gap-1 mb-3">
                {resource.tags.slice(0, 3).map(tag => <span key={tag} className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 cursor-pointer" onClick={() => toggleFilter(tag)}>
                    #{tag}
                  </span>)}
                {resource.tags.length > 3 && <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    +{resource.tags.length - 3}
                  </span>}
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center">
                  <FolderIcon className="h-3 w-3 mr-1" />
                  <span>In {resource.inClientFiles} files</span>
                </div>
                <div className="flex items-center">
                  <EyeIcon className="h-3 w-3 mr-1" />
                  <span>Shared {resource.sharedCount} times</span>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between">
                <button className="text-xs font-medium text-indigo-600 hover:text-indigo-800" onClick={() => setPreviewResource(resource)}>
                  Preview
                </button>
                <div className="flex items-center space-x-2">
                  <button className="text-xs font-medium text-indigo-600 hover:text-indigo-800" onClick={() => handleResourceAction(resource, 'share')}>
                    Share
                  </button>
                  <div className="relative group">
                    <button className="text-gray-400 hover:text-gray-600">
                      <DotsHorizontalIcon className="h-4 w-4" />
                    </button>
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                      <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleResourceAction(resource, 'add')}>
                        Add to Client Documents
                      </button>
                      <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Download
                      </button>
                      <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Edit
                      </button>
                      <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>)}
      </div>;
  };
  // Render list view of resources
  const renderListView = () => {
    return <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {filteredResources.map(resource => <li key={resource.id}>
              <div className="px-4 py-4 flex items-center hover:bg-gray-50">
                <div className="min-w-0 flex-1 flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded bg-gray-100 flex items-center justify-center mr-4 relative">
                    {getResourceIcon(resource.type)}
                    <div className="absolute -bottom-1 -right-1">
                      {getStatusIndicator(resource.status)}
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-indigo-600 truncate cursor-pointer" onClick={() => setPreviewResource(resource)}>
                        {resource.title}
                      </p>
                      <div className="ml-2 flex-shrink-0 flex">
                        {getVisibilityIcon(resource.visibility)}
                      </div>
                    </div>
                    <div className="mt-1 flex items-center text-xs text-gray-500">
                      <span className="truncate">
                        {resource.fileType}{' '}
                        {resource.pages && `• ${resource.pages} pages`}{' '}
                        {resource.size && `• ${resource.size}`}
                        {resource.platform && `${resource.platform} • ${resource.duration}`}
                      </span>
                    </div>
                    <div className="mt-1 flex flex-wrap gap-1">
                      {resource.primaryTags.map(tag => <span key={tag} className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 cursor-pointer" onClick={() => toggleFilter(tag)}>
                          #{tag}
                        </span>)}
                      {resource.tags.slice(0, 2).map(tag => <span key={tag} className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 cursor-pointer" onClick={() => toggleFilter(tag)}>
                          #{tag}
                        </span>)}
                      {resource.tags.length > 2 && <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          +{resource.tags.length - 2}
                        </span>}
                    </div>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0 flex items-center space-x-4">
                  <div className="flex items-center text-xs text-gray-500">
                    <FolderIcon className="h-3 w-3 mr-1" />
                    <span>{resource.inClientFiles}</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <EyeIcon className="h-3 w-3 mr-1" />
                    <span>{resource.sharedCount}</span>
                  </div>
                  <button className="text-xs font-medium text-indigo-600 hover:text-indigo-800" onClick={() => setPreviewResource(resource)}>
                    Preview
                  </button>
                  <button className="text-xs font-medium text-indigo-600 hover:text-indigo-800" onClick={() => handleResourceAction(resource, 'share')}>
                    Share
                  </button>
                  <div className="relative group">
                    <button className="text-gray-400 hover:text-gray-600">
                      <DotsHorizontalIcon className="h-4 w-4" />
                    </button>
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
                      <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => handleResourceAction(resource, 'add')}>
                        Add to Client Documents
                      </button>
                      <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Download
                      </button>
                      <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Edit
                      </button>
                      <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>)}
        </ul>
      </div>;
  };
  return <div className="flex h-screen bg-white">
      <CollapsibleSidebar activeItem="resources" onSettingsClick={() => setSettingsOpen(true)} />
      <div className="flex-1 overflow-auto bg-gray-50">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h1 className="text-2xl font-bold text-gray-900 flex items-center">
              <BookOpenIcon className="h-6 w-6 text-indigo-600 mr-2" />
              Resource Library
            </h1>
            <div className="mt-4 md:mt-0">
              <button onClick={() => setShowAddResourceModal(true)} className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <PlusIcon className="h-4 w-4 mr-2" />
                Add Resource
              </button>
            </div>
          </div>
          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 rounded-md bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <FileTextIcon className="h-5 w-5" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-500">
                    Total Resources
                  </p>
                  <p className="text-xl font-semibold text-gray-900">247</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 rounded-md bg-green-100 flex items-center justify-center text-green-600">
                  <FolderIcon className="h-5 w-5" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-500">
                    In Client Documents
                  </p>
                  <p className="text-xl font-semibold text-gray-900">89</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 rounded-md bg-blue-100 flex items-center justify-center text-blue-600">
                  <ShareIcon className="h-5 w-5" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-500">
                    Shared This Week
                  </p>
                  <p className="text-xl font-semibold text-gray-900">34</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 rounded-md bg-purple-100 flex items-center justify-center text-purple-600">
                  <DatabaseIcon className="h-5 w-5" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-500">Storage</p>
                  <p className="text-xl font-semibold text-gray-900">
                    2.3GB / 10GB
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 rounded-md bg-yellow-100 flex items-center justify-center text-yellow-600">
                  <StarIcon className="h-5 w-5" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-500">Most Used</p>
                  <p className="text-xl font-semibold text-gray-900">PHQ-9</p>
                </div>
              </div>
            </div>
          </div>
          {/* Quick Actions */}
          <div className="flex flex-wrap gap-2 mb-6">
            <button onClick={() => setShowAddResourceModal(true)} className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <UploadIcon className="h-4 w-4 mr-1.5" />
              Upload File
            </button>
            <button onClick={() => setShowAddResourceModal(true)} className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <LinkIcon className="h-4 w-4 mr-1.5" />
              Add Link
            </button>
            <button onClick={() => setShowAddResourceModal(true)} className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <FolderIcon className="h-4 w-4 mr-1.5" />
              Create Folder
            </button>
            <button onClick={() => setShowAddResourceModal(true)} className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <FileTextIcon className="h-4 w-4 mr-1.5" />
              Create Template
            </button>
            <button onClick={() => setShowAddResourceModal(true)} className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <DownloadIcon className="h-4 w-4 mr-1.5" />
              Import Pack
            </button>
          </div>
          <div className="flex flex-col lg:flex-row">
            {/* Left Sidebar */}
            <div className="w-full lg:w-64 flex-shrink-0 mb-6 lg:mb-0 lg:mr-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="px-4 py-5 border-b border-gray-200">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Organization
                  </h3>
                </div>
                <div className="px-4 py-3 border-b border-gray-200">
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                    By Folder
                  </h4>
                  <nav className="space-y-1" aria-label="Folders">
                    <button className="w-full flex items-center px-2 py-2 text-sm font-medium text-indigo-600 rounded-md bg-indigo-50 hover:bg-indigo-100">
                      <FolderIcon className="mr-3 h-5 w-5 text-indigo-500" aria-hidden="true" />
                      <span className="truncate">All Resources</span>
                      <span className="ml-auto inline-block py-0.5 px-2 text-xs rounded-full bg-indigo-100">
                        247
                      </span>
                    </button>
                    <button className="w-full flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900">
                      <FolderIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                      <span className="truncate">Intake & Assessment</span>
                      <span className="ml-auto inline-block py-0.5 px-2 text-xs rounded-full bg-gray-100">
                        42
                      </span>
                    </button>
                    <button className="w-full flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900">
                      <FolderIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                      <span className="truncate">Psychoeducation</span>
                      <span className="ml-auto inline-block py-0.5 px-2 text-xs rounded-full bg-gray-100">
                        78
                      </span>
                    </button>
                    <button className="w-full flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900">
                      <FolderIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                      <span className="truncate">Worksheets</span>
                      <span className="ml-auto inline-block py-0.5 px-2 text-xs rounded-full bg-gray-100">
                        65
                      </span>
                    </button>
                    <button className="w-full flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900">
                      <FolderIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                      <span className="truncate">Practice Policies</span>
                      <span className="ml-auto inline-block py-0.5 px-2 text-xs rounded-full bg-gray-100">
                        23
                      </span>
                    </button>
                  </nav>
                  <button className="mt-2 text-xs font-medium text-indigo-600 hover:text-indigo-800">
                    Manage Folders
                  </button>
                </div>
                <div className="px-4 py-3 border-b border-gray-200">
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                    Popular Tags
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <button className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${activeFilters.includes('anxiety-treatment') ? 'bg-indigo-100 text-indigo-800' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`} onClick={() => toggleFilter('anxiety-treatment')}>
                      #anxiety-treatment
                      <span className="ml-1 text-gray-500">(45)</span>
                    </button>
                    <button className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${activeFilters.includes('evidence-based') ? 'bg-indigo-100 text-indigo-800' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`} onClick={() => toggleFilter('evidence-based')}>
                      #evidence-based
                      <span className="ml-1 text-gray-500">(78)</span>
                    </button>
                    <button className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${activeFilters.includes('adults') ? 'bg-indigo-100 text-indigo-800' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`} onClick={() => toggleFilter('adults')}>
                      #adults
                      <span className="ml-1 text-gray-500">(156)</span>
                    </button>
                    <button className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${activeFilters.includes('homework') ? 'bg-indigo-100 text-indigo-800' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`} onClick={() => toggleFilter('homework')}>
                      #homework
                      <span className="ml-1 text-gray-500">(89)</span>
                    </button>
                  </div>
                  <button className="mt-2 text-xs font-medium text-indigo-600 hover:text-indigo-800">
                    Show All Tags
                  </button>
                </div>
                <div className="px-4 py-3">
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
                    By Type
                  </h4>
                  <nav className="space-y-1" aria-label="Resource Types">
                    <button className="w-full flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900">
                      <FileTextIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                      <span className="truncate">Documents</span>
                      <span className="ml-auto inline-block py-0.5 px-2 text-xs rounded-full bg-gray-100">
                        156
                      </span>
                    </button>
                    <button className="w-full flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900">
                      <LinkIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                      <span className="truncate">External Videos</span>
                      <span className="ml-auto inline-block py-0.5 px-2 text-xs rounded-full bg-gray-100">
                        67
                      </span>
                    </button>
                    <button className="w-full flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900">
                      <VideoIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                      <span className="truncate">Uploaded Videos</span>
                      <span className="ml-auto inline-block py-0.5 px-2 text-xs rounded-full bg-gray-100">
                        12
                      </span>
                    </button>
                    <button className="w-full flex items-center px-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900">
                      <MusicIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                      <span className="truncate">Audio</span>
                      <span className="ml-auto inline-block py-0.5 px-2 text-xs rounded-full bg-gray-100">
                        11
                      </span>
                    </button>
                  </nav>
                </div>
              </div>
            </div>
            {/* Main Content */}
            <div className="flex-1">
              {/* Search and Filters */}
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  {/* Search */}
                  <div className="w-full md:w-1/2 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <SearchIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input type="text" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Search resources or type #tag..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
                  </div>
                  {/* View and Sort Controls */}
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500 mr-2">View:</span>
                      <div className="flex items-center rounded-md shadow-sm" role="group">
                        <button type="button" className={`px-3 py-2 text-sm font-medium rounded-l-md border ${viewMode === 'grid' ? 'bg-indigo-50 text-indigo-700 border-indigo-300' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`} onClick={() => setViewMode('grid')}>
                          <GridIcon className="h-4 w-4" />
                        </button>
                        <button type="button" className={`px-3 py-2 text-sm font-medium rounded-r-md border-t border-r border-b ${viewMode === 'list' ? 'bg-indigo-50 text-indigo-700 border-indigo-300' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`} onClick={() => setViewMode('list')}>
                          <ListIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500 mr-2">Sort:</span>
                      <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" value={sortBy} onChange={e => setSortBy(e.target.value)}>
                        <option value="recent">Most Recent</option>
                        <option value="used">Most Used</option>
                        <option value="alpha">A-Z</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* Active Filters */}
                {activeFilters.length > 0 && <div className="mt-4 flex items-center">
                    <span className="text-sm text-gray-500 mr-2">
                      Active Filters:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeFilters.map(filter => <span key={filter} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                          #{filter}
                          <button type="button" className="flex-shrink-0 ml-1.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:bg-indigo-500 focus:text-white" onClick={() => toggleFilter(filter)}>
                            <span className="sr-only">
                              Remove filter for {filter}
                            </span>
                            <XIcon className="h-2 w-2" aria-hidden="true" />
                          </button>
                        </span>)}
                      <button type="button" className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200" onClick={clearFilters}>
                        Clear All
                      </button>
                    </div>
                  </div>}
              </div>
              {/* Resource Grid/List */}
              {filteredResources.length > 0 ? viewMode === 'grid' ? renderGridView() : renderListView() : <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
                  <div className="mx-auto h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <SearchIcon className="h-6 w-6 text-gray-400" />
                  </div>
                  <h3 className="mt-2 text-sm font-medium text-gray-900">
                    No resources found
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Try adjusting your search or filter criteria.
                  </p>
                  <div className="mt-6">
                    <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={clearFilters}>
                      Clear Filters
                    </button>
                  </div>
                </div>}
            </div>
          </div>
        </div>
      </div>
      {/* Preview Modal */}
      {renderPreviewModal()}
      {/* Add Resource Modal */}
      {renderAddResourceModal()}
      {/* Share Modal */}
      {renderShareModal()}
      {/* Add to Documents Modal */}
      {renderAddToDocumentsModal()}
      {/* Settings Modal */}
      <SettingsModal isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </div>;
};
// Icons that aren't imported from lucide-react
const PlayIcon = props => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>;
const DotsHorizontalIcon = props => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="1" />
    <circle cx="19" cy="12" r="1" />
    <circle cx="5" cy="12" r="1" />
  </svg>;
const ShareIcon = props => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    <polyline points="16 6 12 2 8 6" />
    <line x1="12" y1="2" x2="12" y2="15" />
  </svg>;
const DatabaseIcon = props => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>;
const StarIcon = props => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>;
const InfoIcon = props => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>;