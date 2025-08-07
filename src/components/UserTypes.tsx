import React from 'react';
export const UserTypes = () => {
  return <section id="users" className="py-20 bg-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Tailored for Every Role
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform provides specialized experiences for practitioners,
            clients, and administrators.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {/* Practitioners */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-indigo-600 mb-4">
              For Practitioners
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-2">✓</span>
                <span>Streamlined client management</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-2">✓</span>
                <span>Efficient scheduling and calendar sync</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-2">✓</span>
                <span>Integrated telehealth capabilities</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-2">✓</span>
                <span>Customizable note templates</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-2">✓</span>
                <span>AI-powered clinical insights</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-2">✓</span>
                <span>Simplified billing and payment processing</span>
              </li>
            </ul>
            <div className="mt-8">
              <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800 inline-flex items-center">
                Learn more about practitioner features
                <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          {/* Clients */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-indigo-600 mb-4">
              For Clients
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-2">✓</span>
                <span>Self-service appointment booking</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-2">✓</span>
                <span>Secure messaging with practitioners</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-2">✓</span>
                <span>Easy access to resources and homework</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-2">✓</span>
                <span>Digital intake and consent forms</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-2">✓</span>
                <span>Progress tracking and journaling</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-2">✓</span>
                <span>Simple payment processing</span>
              </li>
            </ul>
            <div className="mt-8">
              <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800 inline-flex items-center">
                Learn more about client features
                <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          {/* Administrators */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-indigo-600 mb-4">
              For Administrators
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-2">✓</span>
                <span>Multi-tenant management</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-2">✓</span>
                <span>Staff onboarding and role assignment</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-2">✓</span>
                <span>Comprehensive audit logging</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-2">✓</span>
                <span>Practice-wide analytics</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-2">✓</span>
                <span>Feature flag management</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-2">✓</span>
                <span>Billing and subscription oversight</span>
              </li>
            </ul>
            <div className="mt-8">
              <a href="#" className="text-indigo-600 font-medium hover:text-indigo-800 inline-flex items-center">
                Learn more about admin features
                <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};