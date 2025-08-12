import React, { useEffect, useState } from 'react';
import { Calendar, Video, FileText, CreditCard, Shield, Users, MessageSquare, Brain, X } from 'lucide-react';
export const Features = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  // Animation states for modal
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);
  // Handle animation timing when activeVideo changes
  useEffect(() => {
    if (activeVideo && !isModalVisible) {
      // First make it visible but with opacity 0
      setIsModalVisible(true);
      setIsAnimatingIn(true);
      // Then after a frame, start the animation in
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimatingIn(false);
        });
      });
    } else if (!activeVideo && isModalVisible) {
      // Start animation out
      setIsAnimatingOut(true);
      // After animation completes, hide the modal
      const timer = setTimeout(() => {
        setIsModalVisible(false);
        setIsAnimatingOut(false);
      }, 300); // Match this with the CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [activeVideo, isModalVisible]);
  const features = [{
    icon: <Calendar className="h-6 w-6 text-indigo-600" />,
    title: 'Smart Scheduling',
    description: 'Intelligent calendar with wait-list management, external sync, and AI-powered scheduling suggestions.',
    videoId: 'scheduling-demo'
  }, {
    icon: <Video className="h-6 w-6 text-indigo-600" />,
    title: 'Telehealth Sessions',
    description: 'Secure video consultations with recording, transcription, and seamless client communication.',
    videoId: 'telehealth-demo'
  }, {
    icon: <FileText className="h-6 w-6 text-indigo-600" />,
    title: 'Documentation',
    description: 'Real-time notes, voice transcription, OCR for uploads, and customizable templates.',
    videoId: 'documentation-demo'
  }, {
    icon: <Users className="h-6 w-6 text-indigo-600" />,
    title: 'Client Portal',
    description: 'Engage clients with appointments, homework, resources, and secure messaging.',
    videoId: 'client-portal-demo'
  }, {
    icon: <CreditCard className="h-6 w-6 text-indigo-600" />,
    title: 'Billing & Payments',
    description: 'Process payments, handle insurance claims, and manage subscriptions effortlessly.',
    videoId: 'billing-demo'
  }, {
    icon: <Brain className="h-6 w-6 text-indigo-600" />,
    title: 'AI Assistant',
    description: 'AI-powered insights, evaluations, and recommendations to enhance client care.',
    videoId: 'ai-assistant-demo'
  }, {
    icon: <MessageSquare className="h-6 w-6 text-indigo-600" />,
    title: 'Secure Messaging',
    description: 'HIPAA-compliant communication with clients and team members.',
    videoId: 'messaging-demo'
  }, {
    icon: <Shield className="h-6 w-6 text-indigo-600" />,
    title: 'Reports & Compliance',
    description: 'Generate professional reports with version control and compliance tracking.',
    videoId: 'reports-demo'
  }];
  const openVideo = videoId => {
    setActiveVideo(videoId);
  };
  const closeVideo = () => {
    // Start animation out first, actual state change happens after animation completes
    setIsAnimatingOut(true);
    setTimeout(() => {
      setActiveVideo(null);
    }, 300);
  };
  return <section id="features" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Comprehensive Practice Management
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to run your practice efficiently and securely in
            one platform.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all hover:border-indigo-200 cursor-pointer transform hover:-translate-y-1" onClick={() => openVideo(feature.videoId)}>
              <div className="p-2 bg-indigo-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                {feature.title}
                <Video className="h-4 w-4 text-indigo-500 ml-2" />
              </h3>
              <p className="text-gray-600">{feature.description}</p>
              <div className="mt-4 text-sm text-indigo-600 font-medium">
                Watch demo
              </div>
            </div>)}
        </div>
      </div>
      {/* Video Modal with Animation */}
      {isModalVisible && <div className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out flex items-center justify-center z-50 p-4 ${isAnimatingIn ? 'bg-opacity-0' : isAnimatingOut ? 'bg-opacity-0' : 'bg-opacity-75'}`} onClick={closeVideo}>
          <div className={`bg-white rounded-lg shadow-md border border-gray-200 max-w-4xl w-full max-h-[80vh] overflow-hidden flex flex-col transition-all duration-300 ease-in-out ${isAnimatingIn ? 'opacity-0 scale-95' : isAnimatingOut ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`} onClick={e => e.stopPropagation()}>
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">
                {features.find(f => f.videoId === activeVideo)?.title} Demo
              </h3>
              <button onClick={closeVideo} className="text-gray-500 hover:text-gray-700">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex-1 bg-gray-100 flex items-center justify-center p-8">
              <div className="text-center">
                <Video className="h-16 w-16 text-indigo-400 mx-auto mb-4" />
                <p className="text-lg font-medium text-gray-700 mb-2">
                  Video Placeholder
                </p>
                <p className="text-gray-500 max-w-md">
                  In the production version, a video demonstration of the{' '}
                  {features.find(f => f.videoId === activeVideo)?.title}{' '}
                  feature would play here.
                </p>
              </div>
            </div>
            <div className="p-4 border-t border-gray-200 flex justify-end">
              <button onClick={closeVideo} className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                Close
              </button>
            </div>
          </div>
        </div>}
    </section>;
};