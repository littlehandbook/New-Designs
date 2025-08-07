import React, { lazy } from 'react';
export const Hero: React.FC = () => {
  return <section className="bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-[min(5rem,8vw)] py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="text-center md:text-left md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-[clamp(2rem,5vw,4rem)] font-bold text-gray-900 leading-tight">
              Secure practice management for wellness professionals
            </h1>
            <p className="mt-4 text-[clamp(1rem,2vw,1.25rem)] text-gray-600 max-w-2xl">
              Streamline your practice with our all-in-one platform. Manage
              clients, scheduling, telehealth, documentation, and billing in one
              secure environment.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a href="#" className="min-h-[44px] px-8 py-3 rounded-md bg-indigo-600 text-white font-medium text-base hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 shadow-sm transition-colors" aria-label="Start your free trial">
                Start Free Trial
              </a>
              <a href="#" className="min-h-[44px] px-8 py-3 rounded-md bg-white text-indigo-600 font-medium text-base border border-indigo-600 hover:bg-indigo-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 shadow-sm transition-colors" aria-label="Schedule a demo">
                Schedule Demo
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Wellness practitioner using platform" className="w-full h-auto max-w-full aspect-video object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};