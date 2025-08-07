import React from 'react';
export const CTA = () => {
  return <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-700 rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12 lg:px-16 lg:py-16 md:flex md:items-center md:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white tracking-tight">
                Ready to transform your practice?
              </h2>
              <p className="mt-3 max-w-3xl text-indigo-100">
                Join thousands of practitioners who are streamlining their
                operations, enhancing client care, and growing their businesses
                with our platform.
              </p>
            </div>
            <div className="mt-8 md:mt-0 flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4">
              <a href="#" className="px-8 py-3 rounded-md bg-white text-indigo-700 font-medium text-base hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-white shadow-sm transition-colors">
                Start Free Trial
              </a>
              <a href="#" className="px-8 py-3 rounded-md bg-indigo-800 text-white font-medium text-base border border-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm transition-colors">
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Trusted by Leading Wellness Practices
          </h3>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
            {/* These would be actual logos in a real implementation */}
            <div className="flex justify-center items-center h-16 text-gray-400">
              <div className="font-semibold">WELLNESS CLINIC</div>
            </div>
            <div className="flex justify-center items-center h-16 text-gray-400">
              <div className="font-semibold">HEALING CENTER</div>
            </div>
            <div className="flex justify-center items-center h-16 text-gray-400">
              <div className="font-semibold">MIND & BODY</div>
            </div>
            <div className="flex justify-center items-center h-16 text-gray-400">
              <div className="font-semibold">THERAPY GROUP</div>
            </div>
            <div className="flex justify-center items-center h-16 text-gray-400 md:col-span-4 lg:col-span-1">
              <div className="font-semibold">HEALTH PARTNERS</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};