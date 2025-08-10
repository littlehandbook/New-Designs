import React, { useState } from 'react';
import { XIcon, MicIcon, MicOffIcon, VideoIcon, VideoOffIcon, MoreHorizontalIcon, UserPlusIcon, UserIcon, PinIcon, VolumeIcon, Volume2Icon, ShieldIcon, ChevronRightIcon } from 'lucide-react';
interface TelesessionParticipantsProps {
  clientName: string;
  onClose: () => void;
  isMaximized: boolean;
}
interface Participant {
  id: string;
  name: string;
  role: 'host' | 'client' | 'guest';
  isMuted: boolean;
  isVideoOff: boolean;
  isPinned: boolean;
}
export const TelesessionParticipants: React.FC<TelesessionParticipantsProps> = ({
  clientName,
  onClose,
  isMaximized
}) => {
  const [participants, setParticipants] = useState<Participant[]>([{
    id: '1',
    name: 'You',
    role: 'host',
    isMuted: false,
    isVideoOff: false,
    isPinned: false
  }, {
    id: '2',
    name: clientName,
    role: 'client',
    isMuted: false,
    isVideoOff: false,
    isPinned: true
  }]);
  const [inviteEmail, setInviteEmail] = useState('');
  const [showInviteForm, setShowInviteForm] = useState(false);
  const toggleMute = (id: string) => {
    setParticipants(participants.map(p => p.id === id ? {
      ...p,
      isMuted: !p.isMuted
    } : p));
  };
  const toggleVideo = (id: string) => {
    setParticipants(participants.map(p => p.id === id ? {
      ...p,
      isVideoOff: !p.isVideoOff
    } : p));
  };
  const togglePin = (id: string) => {
    setParticipants(participants.map(p => p.id === id ? {
      ...p,
      isPinned: !p.isPinned
    } : p.id !== id && p.isPinned ? {
      ...p,
      isPinned: false
    } : p));
  };
  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault();
    if (inviteEmail.trim() === '') return;
    // Simulate adding a new participant
    const newParticipant: Participant = {
      id: Date.now().toString(),
      name: `Guest (${inviteEmail.split('@')[0]})`,
      role: 'guest',
      isMuted: true,
      isVideoOff: true,
      isPinned: false
    };
    setParticipants([...participants, newParticipant]);
    setInviteEmail('');
    setShowInviteForm(false);
  };
  return <div className={`flex flex-col h-full ${isMaximized ? 'border-l border-gray-200' : 'bg-white rounded-lg border border-gray-200'}`}>
      {/* Header */}
      <div className="flex items-center justify-between p-3 border-b border-gray-200 bg-gray-50">
        <div className="flex items-center">
          <h3 className="text-sm font-medium text-gray-900">
            Participants ({participants.length})
          </h3>
        </div>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-500">
          <XIcon className="h-5 w-5" />
        </button>
      </div>
      {/* Participants list */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-3">
          {participants.map(participant => <div key={participant.id} className={`mb-3 p-3 rounded-lg ${participant.isPinned ? 'bg-blue-50 border border-blue-100' : 'bg-gray-50 border border-gray-100'}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center mr-2">
                    <UserIcon className="h-4 w-4 text-gray-600" />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-900">
                        {participant.name}
                      </span>
                      {participant.role === 'host' && <span className="ml-2 px-1.5 py-0.5 text-xs bg-indigo-100 text-indigo-800 rounded">
                          Host
                        </span>}
                      {participant.isPinned && <span className="ml-2 px-1.5 py-0.5 text-xs bg-blue-100 text-blue-800 rounded flex items-center">
                          <PinIcon className="h-3 w-3 mr-0.5" />
                          Pinned
                        </span>}
                    </div>
                    <span className="text-xs text-gray-500">
                      {participant.role === 'host' ? 'You (Therapist)' : participant.role === 'client' ? 'Client' : 'Guest'}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <button onClick={() => toggleMute(participant.id)} className={`p-1.5 rounded-full ${participant.isMuted ? 'bg-red-100 text-red-600' : 'bg-gray-200 text-gray-700'} hover:bg-opacity-80`}>
                    {participant.isMuted ? <MicOffIcon className="h-3.5 w-3.5" /> : <MicIcon className="h-3.5 w-3.5" />}
                  </button>
                  <button onClick={() => toggleVideo(participant.id)} className={`p-1.5 rounded-full ${participant.isVideoOff ? 'bg-red-100 text-red-600' : 'bg-gray-200 text-gray-700'} hover:bg-opacity-80`}>
                    {participant.isVideoOff ? <VideoOffIcon className="h-3.5 w-3.5" /> : <VideoIcon className="h-3.5 w-3.5" />}
                  </button>
                  <button onClick={() => togglePin(participant.id)} className={`p-1.5 rounded-full ${participant.isPinned ? 'bg-blue-100 text-blue-600' : 'bg-gray-200 text-gray-700'} hover:bg-opacity-80`}>
                    <PinIcon className="h-3.5 w-3.5" />
                  </button>
                  <button className="p-1.5 rounded-full bg-gray-200 text-gray-700 hover:bg-opacity-80">
                    <MoreHorizontalIcon className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <div className="flex items-center">
                  <div className="flex items-center mr-3">
                    {participant.isMuted ? <MicOffIcon className="h-3 w-3 mr-1 text-gray-400" /> : <MicIcon className="h-3 w-3 mr-1 text-green-500" />}
                    <span>{participant.isMuted ? 'Muted' : 'Unmuted'}</span>
                  </div>
                  <div className="flex items-center">
                    {participant.isVideoOff ? <VideoOffIcon className="h-3 w-3 mr-1 text-gray-400" /> : <VideoIcon className="h-3 w-3 mr-1 text-green-500" />}
                    <span>
                      {participant.isVideoOff ? 'Video off' : 'Video on'}
                    </span>
                  </div>
                </div>
                {participant.role === 'host' && <div className="flex items-center">
                    <ShieldIcon className="h-3 w-3 mr-1 text-indigo-500" />
                    <span>Host controls</span>
                  </div>}
              </div>
            </div>)}
        </div>
      </div>
      {/* Invite section */}
      <div className="p-3 border-t border-gray-200">
        {showInviteForm ? <form onSubmit={handleInvite} className="space-y-2">
            <div>
              <label htmlFor="invite-email" className="block text-xs font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input type="email" id="invite-email" value={inviteEmail} onChange={e => setInviteEmail(e.target.value)} placeholder="colleague@example.com" className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
            </div>
            <div className="flex space-x-2">
              <button type="submit" className="flex-1 bg-indigo-600 text-white px-3 py-2 text-sm font-medium rounded-md hover:bg-indigo-700">
                Send Invite
              </button>
              <button type="button" onClick={() => setShowInviteForm(false)} className="px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200">
                Cancel
              </button>
            </div>
          </form> : <button onClick={() => setShowInviteForm(true)} className="w-full flex items-center justify-center px-3 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-md hover:bg-indigo-100">
            <UserPlusIcon className="h-4 w-4 mr-1.5" />
            Invite Participant
          </button>}
      </div>
      {/* Additional options */}
      <div className="p-3 pt-0">
        <button className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md">
          <div className="flex items-center">
            <Volume2Icon className="h-4 w-4 mr-1.5 text-gray-500" />
            <span>Audio settings</span>
          </div>
          <ChevronRightIcon className="h-4 w-4 text-gray-400" />
        </button>
      </div>
    </div>;
};