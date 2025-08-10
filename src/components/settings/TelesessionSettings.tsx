import React, { useState } from 'react';
import { VideoIcon, MessageSquareIcon, FileTextIcon, LockIcon, DatabaseIcon, ClockIcon } from 'lucide-react';
export const TelesessionSettings = () => {
  return <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Telesession Preferences
        </h3>
        <p className="text-sm text-gray-600">
          Configure default settings for all telesessions in your practice.
        </p>
      </div>
      {/* Recording & Transcription Settings */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <div className="flex items-center mb-4">
          <VideoIcon className="h-5 w-5 text-indigo-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">
            Recording & Transcription
          </h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">
                Auto-record all sessions
              </p>
              <p className="text-xs text-gray-500">
                All sessions will be recorded automatically (requires consent)
              </p>
            </div>
            <div className="relative inline-block w-12 h-6">
              <input type="checkbox" id="toggle-auto-record" className="absolute opacity-0 w-0 h-0" />
              <label htmlFor="toggle-auto-record" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                <span className="block h-6 w-6 rounded-full bg-white shadow transition-transform duration-200 ease-in-out"></span>
              </label>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">
                Auto-transcribe all sessions
              </p>
              <p className="text-xs text-gray-500">
                Generate text transcripts for all recorded sessions
              </p>
            </div>
            <div className="relative inline-block w-12 h-6">
              <input type="checkbox" id="toggle-auto-transcribe" className="absolute opacity-0 w-0 h-0" />
              <label htmlFor="toggle-auto-transcribe" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                <span className="block h-6 w-6 rounded-full bg-white shadow transition-transform duration-200 ease-in-out"></span>
              </label>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">
                Save transcripts separately from recordings
              </p>
              <p className="text-xs text-gray-500">
                Store transcripts as separate files from video recordings
              </p>
            </div>
            <div className="relative inline-block w-12 h-6">
              <input type="checkbox" id="toggle-separate-transcripts" className="absolute opacity-0 w-0 h-0" defaultChecked />
              <label htmlFor="toggle-separate-transcripts" className="block overflow-hidden h-6 rounded-full bg-indigo-600 cursor-pointer">
                <span className="block h-6 w-6 rounded-full bg-white shadow transform translate-x-6 transition-transform duration-200 ease-in-out"></span>
              </label>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">
                Allow clients to access transcripts
              </p>
              <p className="text-xs text-gray-500">
                Clients can view and download session transcripts
              </p>
            </div>
            <div className="relative inline-block w-12 h-6">
              <input type="checkbox" id="toggle-client-transcript-access" className="absolute opacity-0 w-0 h-0" />
              <label htmlFor="toggle-client-transcript-access" className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer">
                <span className="block h-6 w-6 rounded-full bg-white shadow transition-transform duration-200 ease-in-out"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* Chat Persistence Settings */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <div className="flex items-center mb-4">
          <MessageSquareIcon className="h-5 w-5 text-indigo-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">
            Chat Persistence
          </h3>
        </div>
        <div className="space-y-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Post-Session Chat Handling
            </label>
            <div className="space-y-2">
              <div className="flex items-center">
                <input id="chat-delete" name="chat-persistence" type="radio" className="h-4 w-4 text-indigo-600 border-gray-300" />
                <label htmlFor="chat-delete" className="ml-2 block text-sm text-gray-700">
                  Delete immediately after session
                </label>
              </div>
              <div className="flex items-center">
                <input id="chat-save-practitioner" name="chat-persistence" type="radio" className="h-4 w-4 text-indigo-600 border-gray-300" />
                <label htmlFor="chat-save-practitioner" className="ml-2 block text-sm text-gray-700">
                  Save to session record (practitioner access only)
                </label>
              </div>
              <div className="flex items-center">
                <input id="chat-save-client" name="chat-persistence" type="radio" className="h-4 w-4 text-indigo-600 border-gray-300" defaultChecked />
                <label htmlFor="chat-save-client" className="ml-2 block text-sm text-gray-700">
                  Save and include in client record
                </label>
              </div>
              <div className="flex items-center">
                <input id="chat-save-temp" name="chat-persistence" type="radio" className="h-4 w-4 text-indigo-600 border-gray-300" />
                <label htmlFor="chat-save-temp" className="ml-2 block text-sm text-gray-700">
                  Save for limited time then auto-delete
                </label>
              </div>
            </div>
          </div>
          <div className="pl-6">
            <label htmlFor="chat-retention" className="block text-sm font-medium text-gray-700 mb-1">
              Auto-delete after
            </label>
            <div className="flex items-center">
              <input type="number" id="chat-retention" name="chat-retention" className="max-w-[80px] shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" defaultValue="30" min="1" />
              <span className="ml-2 text-sm text-gray-500">days</span>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center">
            <input id="client-download-chat" name="client-download-chat" type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" />
            <label htmlFor="client-download-chat" className="ml-2 block text-sm text-gray-700">
              Allow clients to download chat history
            </label>
          </div>
          <div className="flex items-center">
            <input id="include-chat-summary" name="include-chat-summary" type="checkbox" className="h-4 w-4 text-indigo-600 border-gray-300 rounded" defaultChecked />
            <label htmlFor="include-chat-summary" className="ml-2 block text-sm text-gray-700">
              Include chat in session summaries
            </label>
          </div>
        </div>
      </div>
      {/* Storage Duration Settings */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <div className="flex items-center mb-4">
          <DatabaseIcon className="h-5 w-5 text-indigo-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">
            Storage Duration
          </h3>
        </div>
        <div className="space-y-4">
          <div>
            <label htmlFor="video-storage" className="block text-sm font-medium text-gray-700 mb-1">
              Video Recordings
            </label>
            <div className="flex items-center space-x-2">
              <select id="video-storage" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                <option>30 days</option>
                <option>90 days</option>
                <option>6 months</option>
                <option selected>1 year</option>
                <option>2 years</option>
                <option>7 years</option>
                <option>Permanent</option>
              </select>
              <span className="text-sm text-gray-500">then</span>
              <select id="video-action" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                <option>Delete</option>
                <option selected>Archive</option>
                <option>Require review</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="transcript-storage" className="block text-sm font-medium text-gray-700 mb-1">
              Transcripts
            </label>
            <div className="flex items-center space-x-2">
              <select id="transcript-storage" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                <option>30 days</option>
                <option>90 days</option>
                <option>6 months</option>
                <option>1 year</option>
                <option>2 years</option>
                <option>7 years</option>
                <option selected>Permanent</option>
              </select>
              <span className="text-sm text-gray-500">then</span>
              <select id="transcript-action" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md" disabled>
                <option>Delete</option>
                <option>Archive</option>
                <option>Require review</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="chat-storage" className="block text-sm font-medium text-gray-700 mb-1">
              Chat Logs
            </label>
            <div className="flex items-center space-x-2">
              <select id="chat-storage" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                <option>30 days</option>
                <option selected>90 days</option>
                <option>6 months</option>
                <option>1 year</option>
                <option>2 years</option>
                <option>7 years</option>
                <option>Permanent</option>
              </select>
              <span className="text-sm text-gray-500">then</span>
              <select id="chat-action" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
                <option selected>Delete</option>
                <option>Archive</option>
                <option>Require review</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* HIPAA Compliance Settings */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <div className="flex items-center mb-4">
          <LockIcon className="h-5 w-5 text-indigo-600 mr-2" />
          <h3 className="text-lg font-medium text-gray-900">
            Security & Compliance
          </h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">
                Enforce end-to-end encryption
              </p>
              <p className="text-xs text-gray-500">
                All telesessions will use end-to-end encryption
              </p>
            </div>
            <div className="relative inline-block w-12 h-6">
              <input type="checkbox" id="toggle-encryption" className="absolute opacity-0 w-0 h-0" defaultChecked />
              <label htmlFor="toggle-encryption" className="block overflow-hidden h-6 rounded-full bg-indigo-600 cursor-pointer">
                <span className="block h-6 w-6 rounded-full bg-white shadow transform translate-x-6 transition-transform duration-200 ease-in-out"></span>
              </label>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">
                Require waiting room
              </p>
              <p className="text-xs text-gray-500">
                Clients must be admitted by the practitioner
              </p>
            </div>
            <div className="relative inline-block w-12 h-6">
              <input type="checkbox" id="toggle-waiting-room" className="absolute opacity-0 w-0 h-0" defaultChecked />
              <label htmlFor="toggle-waiting-room" className="block overflow-hidden h-6 rounded-full bg-indigo-600 cursor-pointer">
                <span className="block h-6 w-6 rounded-full bg-white shadow transform translate-x-6 transition-transform duration-200 ease-in-out"></span>
              </label>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">
                Show HIPAA compliance indicators
              </p>
              <p className="text-xs text-gray-500">
                Display compliance status in telesession interface
              </p>
            </div>
            <div className="relative inline-block w-12 h-6">
              <input type="checkbox" id="toggle-hipaa-indicators" className="absolute opacity-0 w-0 h-0" defaultChecked />
              <label htmlFor="toggle-hipaa-indicators" className="block overflow-hidden h-6 rounded-full bg-indigo-600 cursor-pointer">
                <span className="block h-6 w-6 rounded-full bg-white shadow transform translate-x-6 transition-transform duration-200 ease-in-out"></span>
              </label>
            </div>
          </div>
          <div>
            <label htmlFor="recording-consent" className="block text-sm font-medium text-gray-700 mb-1">
              Recording Consent Handling
            </label>
            <select id="recording-consent" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md">
              <option selected>Ask every time</option>
              <option>Require written consent on file</option>
              <option>Use client preferences from profile</option>
              <option>No recording allowed</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Save Telesession Settings
        </button>
      </div>
    </div>;
};