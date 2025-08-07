import React from 'react';
import { Link } from 'react-router-dom';
import { MailIcon } from 'lucide-react';
export const VerifyEmail = () => {
  return <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
              <MailIcon className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
              Verify your email
            </h2>
            <p className="text-gray-600 mb-6">
              We've sent you a verification link. Please check your email to
              verify your account.
            </p>
            <p className="text-gray-600 mb-8">
              If you don't see the email in your inbox, please check your spam
              folder or request a new verification link.
            </p>
            <button type="button" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Resend verification email
            </button>
            <div className="mt-4">
              <Link to="/login" className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                Return to login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>;
};