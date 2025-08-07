import React from 'react';
import { LockIcon, ShieldIcon, ServerIcon, KeyIcon } from 'lucide-react';
export const Security = () => {
  const securityFeatures = [{
    icon: <LockIcon className="h-6 w-6 text-white" />,
    title: 'HIPAA Compliance',
    description: 'Built from the ground up with healthcare privacy laws in mind.'
  }, {
    icon: <ShieldIcon className="h-6 w-6 text-white" />,
    title: 'Data Encryption',
    description: 'Field-level encryption of PHI via Supabase Vault and pgsodium.'
  }, {
    icon: <ServerIcon className="h-6 w-6 text-white" />,
    title: 'Tenant Isolation',
    description: 'Complete data separation between practices with row-level security.'
  }, {
    icon: <KeyIcon className="h-6 w-6 text-white" />,
    title: 'Multi-Factor Authentication',
    description: 'Secure access with TOTP and FIDO2 authentication options.'
  }];
  return <section id="security" className="py-16 sm:py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Uncompromising Security
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Your clients' data deserves the highest level of protection. Our
            platform provides enterprise-grade security for practices of all
            sizes.
          </p>
        </div>
        <div className="mt-12 sm:mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {securityFeatures.map((feature, index) => <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
              <div className="p-2 bg-indigo-600 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-gray-400">{feature.description}</p>
            </div>)}
        </div>
        <div className="mt-12 sm:mt-16 bg-gray-800 p-6 sm:p-8 rounded-lg shadow-md border border-gray-700">
          <h3 className="text-xl font-semibold mb-4">
            Comprehensive Audit Trail
          </h3>
          <p className="text-gray-300">
            Every action within the platform is logged and available for review,
            ensuring accountability and compliance with regulatory requirements.
          </p>
          <div className="mt-6 bg-gray-900 p-4 rounded border border-gray-700 font-mono text-sm text-gray-300 overflow-x-auto">
            <pre className="whitespace-pre-wrap sm:whitespace-pre">
              {`[2023-10-15 14:32:19] practitioner_id: 12345 | action: "view_client_record" | client_id: 56789 | ip: 192.168.1.1
[2023-10-15 14:35:47] practitioner_id: 12345 | action: "update_session_note" | session_id: 98765 | ip: 192.168.1.1
[2023-10-15 14:42:11] practitioner_id: 12345 | action: "generate_report" | client_id: 56789 | ip: 192.168.1.1`}
            </pre>
          </div>
        </div>
      </div>
    </section>;
};