import React, { useEffect, useState } from 'react';
import { XIcon, SaveIcon, ClockIcon, CheckIcon, FileTextIcon, TagIcon, PlusIcon, LinkIcon, ImageIcon, ListIcon, BoldIcon, ItalicIcon, UnderlineIcon, TextIcon } from 'lucide-react';
interface TelesessionNotesProps {
  clientName: string;
  onClose: () => void;
  isMaximized: boolean;
  sessionStartTime: string;
  billingTime: number;
}
export const TelesessionNotes: React.FC<TelesessionNotesProps> = ({
  clientName,
  onClose,
  isMaximized,
  sessionStartTime,
  billingTime
}) => {
  const [notes, setNotes] = useState('');
  const [isSaved, setIsSaved] = useState(true);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [showTagSelector, setShowTagSelector] = useState(false);
  // Available tags for notes
  const availableTags = [{
    id: 'progress',
    label: 'Progress',
    color: 'bg-green-100 text-green-800'
  }, {
    id: 'concern',
    label: 'Concern',
    color: 'bg-red-100 text-red-800'
  }, {
    id: 'goal',
    label: 'Goal',
    color: 'bg-blue-100 text-blue-800'
  }, {
    id: 'insight',
    label: 'Insight',
    color: 'bg-purple-100 text-purple-800'
  }, {
    id: 'followup',
    label: 'Follow-up',
    color: 'bg-yellow-100 text-yellow-800'
  }];
  // Auto-generate initial template
  useEffect(() => {
    const currentDate = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    const template = `# Session Notes: ${clientName}\n` + `Date: ${currentDate}\n` + `Time: ${sessionStartTime}\n\n` + `## Session Goals\n` + `- \n\n` + `## Key Discussion Points\n` + `- \n\n` + `## Observations\n` + `- \n\n` + `## Action Items\n` + `- \n\n` + `## Next Session\n` + `- \n`;
    setNotes(template);
  }, [clientName, sessionStartTime]);
  // Mark as unsaved when notes change
  useEffect(() => {
    setIsSaved(false);
  }, [notes]);
  const handleSave = () => {
    // Simulate saving notes
    setTimeout(() => {
      setIsSaved(true);
    }, 500);
  };
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(seconds % 3600 / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  const insertTag = (tagId: string) => {
    setSelectedTag(tagId);
    setShowTagSelector(false);
    const tag = availableTags.find(t => t.id === tagId);
    if (tag) {
      setNotes(notes + `\n[${tag.label}] `);
    }
  };
  return <div className={`flex flex-col h-full ${isMaximized ? 'border-l border-gray-200' : 'bg-white rounded-lg border border-gray-200'}`}>
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center">
          <FileTextIcon className="h-4 w-4 text-gray-500 mr-2" />
          <h3 className="text-sm font-medium text-gray-900">Session Notes</h3>
        </div>
        <div className="flex items-center">
          <button onClick={handleSave} className={`mr-2 p-1.5 rounded-md ${isSaved ? 'text-green-600 bg-green-50' : 'text-indigo-600 bg-indigo-50 hover:bg-indigo-100'}`}>
            {isSaved ? <CheckIcon className="h-4 w-4" /> : <SaveIcon className="h-4 w-4" />}
          </button>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-500 p-1.5">
            <XIcon className="h-4 w-4" />
          </button>
        </div>
      </div>
      {/* Toolbar */}
      <div className="flex items-center p-2 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center space-x-1 mr-2">
          <button className="p-1.5 rounded hover:bg-gray-200 text-gray-700">
            <BoldIcon className="h-4 w-4" />
          </button>
          <button className="p-1.5 rounded hover:bg-gray-200 text-gray-700">
            <ItalicIcon className="h-4 w-4" />
          </button>
          <button className="p-1.5 rounded hover:bg-gray-200 text-gray-700">
            <UnderlineIcon className="h-4 w-4" />
          </button>
        </div>
        <div className="h-5 border-l border-gray-300 mx-1"></div>
        <div className="flex items-center space-x-1 mr-2">
          <button className="p-1.5 rounded hover:bg-gray-200 text-gray-700">
            <ListIcon className="h-4 w-4" />
          </button>
          <button className="p-1.5 rounded hover:bg-gray-200 text-gray-700">
            <TextIcon className="h-4 w-4" />
          </button>
        </div>
        <div className="h-5 border-l border-gray-300 mx-1"></div>
        <div className="flex items-center space-x-1">
          <button className="p-1.5 rounded hover:bg-gray-200 text-gray-700">
            <LinkIcon className="h-4 w-4" />
          </button>
          <button className="p-1.5 rounded hover:bg-gray-200 text-gray-700">
            <ImageIcon className="h-4 w-4" />
          </button>
          <div className="relative">
            <button className="p-1.5 rounded hover:bg-gray-200 text-gray-700" onClick={() => setShowTagSelector(!showTagSelector)}>
              <TagIcon className="h-4 w-4" />
            </button>
            {showTagSelector && <div className="absolute left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <div className="p-2 text-xs font-medium text-gray-700 border-b border-gray-100">
                  Select a tag
                </div>
                <div className="p-1">
                  {availableTags.map(tag => <button key={tag.id} className="w-full text-left px-2 py-1.5 text-xs hover:bg-gray-50 rounded flex items-center" onClick={() => insertTag(tag.id)}>
                      <span className={`inline-block w-2 h-2 rounded-full ${tag.color.split(' ')[0]} mr-2`}></span>
                      {tag.label}
                    </button>)}
                </div>
              </div>}
          </div>
        </div>
        <div className="ml-auto flex items-center">
          <div className="flex items-center text-xs text-gray-500">
            <ClockIcon className="h-3.5 w-3.5 mr-1" />
            <span>Duration: {formatTime(billingTime)}</span>
          </div>
        </div>
      </div>
      {/* Notes textarea */}
      <div className="flex-1 overflow-y-auto p-3">
        <textarea value={notes} onChange={e => setNotes(e.target.value)} className="w-full h-full p-2 text-sm text-gray-800 border-0 focus:outline-none resize-none font-mono" placeholder="Type your session notes here..." />
      </div>
      {/* Footer */}
      <div className="p-3 border-t border-gray-200 flex justify-between items-center">
        <div className="flex space-x-1">
          {selectedTag && <div className={`px-2 py-0.5 rounded-full text-xs ${availableTags.find(t => t.id === selectedTag)?.color}`}>
              {availableTags.find(t => t.id === selectedTag)?.label}
            </div>}
        </div>
        <div className="flex items-center text-xs text-gray-500">
          {!isSaved && <span className="italic mr-2">Unsaved changes</span>}
          <button onClick={handleSave} className={`px-3 py-1.5 rounded-md text-xs font-medium ${isSaved ? 'bg-gray-100 text-gray-500' : 'bg-indigo-600 text-white hover:bg-indigo-700'}`} disabled={isSaved}>
            {isSaved ? 'Saved' : 'Save Notes'}
          </button>
        </div>
      </div>
    </div>;
};