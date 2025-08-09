import React, { useState } from 'react';
import { MonitorIcon, SmartphoneIcon, SunIcon, MoonIcon, RefreshCwIcon } from 'lucide-react';
interface LivePreviewProps {
  brandData: any;
}
export const LivePreview: React.FC<LivePreviewProps> = ({
  brandData
}) => {
  const [previewMode, setPreviewMode] = useState<'light' | 'dark'>('light');
  const [deviceView, setDeviceView] = useState<'desktop' | 'mobile'>('desktop');
  const [previewScreen, setPreviewScreen] = useState<'login' | 'dashboard' | 'booking' | 'messaging'>('dashboard');
  const colors = previewMode === 'light' ? brandData.lightMode : brandData.darkMode;
  const logo = previewMode === 'light' ? brandData.logos.light : brandData.logos.dark;
  const renderLoginPreview = () => <div className="h-full w-full flex flex-col items-center justify-center p-8" style={{
    backgroundColor: colors.background
  }}>
      <div className="w-full max-w-md p-8 rounded-lg shadow-lg" style={{
      backgroundColor: colors.surface
    }}>
        <div className="flex justify-center mb-8">
          {logo ? <img src={logo} alt="Practice logo" className="h-12 object-contain" /> : <div className="text-2xl font-bold" style={{
          color: colors.primary
        }}>
              Practice Name
            </div>}
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" style={{
            color: colors.textPrimary
          }}>
              Email
            </label>
            <input type="email" className="w-full px-3 py-2 border rounded-md" style={{
            borderColor: colors.border,
            backgroundColor: colors.surface,
            color: colors.textPrimary
          }} placeholder="your@email.com" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" style={{
            color: colors.textPrimary
          }}>
              Password
            </label>
            <input type="password" className="w-full px-3 py-2 border rounded-md" style={{
            borderColor: colors.border,
            backgroundColor: colors.surface,
            color: colors.textPrimary
          }} placeholder="••••••••" />
          </div>
          <button className="w-full py-2 px-4 rounded-md font-medium" style={{
          backgroundColor: colors.primary,
          color: '#ffffff'
        }}>
            Sign In
          </button>
          <div className="text-center">
            <a href="#" className="text-sm" style={{
            color: colors.primary
          }}>
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    </div>;
  const renderDashboardPreview = () => <div className="h-full w-full flex flex-col" style={{
    backgroundColor: colors.background
  }}>
      <div className="p-4 border-b flex items-center justify-between" style={{
      backgroundColor: colors.surface,
      borderColor: colors.border
    }}>
        <div className="flex items-center">
          {logo ? <img src={logo} alt="Practice logo" className="h-8 object-contain mr-4" /> : <div className="text-lg font-bold mr-4" style={{
          color: colors.primary
        }}>
              Practice Name
            </div>}
        </div>
        <div className="flex space-x-2">
          <div className="w-8 h-8 rounded-full" style={{
          backgroundColor: colors.secondary
        }}></div>
        </div>
      </div>
      <div className="flex flex-1 overflow-hidden">
        <div className="w-48 border-r hidden md:block" style={{
        backgroundColor: colors.surface,
        borderColor: colors.border
      }}>
          <div className="p-4">
            <div className="py-2 px-3 rounded-md mb-1 flex items-center" style={{
            backgroundColor: colors.primary,
            color: '#ffffff'
          }}>
              <div className="w-4 h-4 mr-3 rounded-full bg-white opacity-80"></div>
              <span>Dashboard</span>
            </div>
            {['Clients', 'Calendar', 'Messages', 'Settings'].map(item => <div key={item} className="py-2 px-3 rounded-md mb-1 flex items-center" style={{
            color: colors.textSecondary
          }}>
                <div className="w-4 h-4 mr-3 rounded-full opacity-60" style={{
              backgroundColor: colors.textSecondary
            }}></div>
                <span>{item}</span>
              </div>)}
          </div>
        </div>
        <div className="flex-1 overflow-auto p-4">
          <h1 className="text-xl font-bold mb-4" style={{
          color: colors.textPrimary
        }}>
            Practice Dashboard
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {[{
            label: 'Total Clients',
            value: '48'
          }, {
            label: 'Upcoming Sessions',
            value: '12'
          }, {
            label: 'New Messages',
            value: '3'
          }].map(stat => <div key={stat.label} className="p-4 rounded-lg" style={{
            backgroundColor: colors.surface
          }}>
                <div className="text-sm font-medium mb-1" style={{
              color: colors.textSecondary
            }}>
                  {stat.label}
                </div>
                <div className="text-2xl font-bold" style={{
              color: colors.textPrimary
            }}>
                  {stat.value}
                </div>
              </div>)}
          </div>
          <div className="p-4 rounded-lg mb-6" style={{
          backgroundColor: colors.surface
        }}>
            <h2 className="text-lg font-medium mb-4" style={{
            color: colors.textPrimary
          }}>
              Today's Sessions
            </h2>
            <div className="space-y-2">
              {[{
              time: '9:00 AM',
              client: 'Michael Chen',
              type: 'Initial Consultation'
            }, {
              time: '11:30 AM',
              client: 'Sarah Johnson',
              type: 'Follow-up'
            }, {
              time: '2:00 PM',
              client: 'David Wilson',
              type: 'Therapy Session'
            }].map((session, index) => <div key={index} className="p-3 rounded-md flex justify-between items-center" style={{
              backgroundColor: index === 0 ? colors.primary + '10' : 'transparent',
              borderLeft: index === 0 ? `4px solid ${colors.primary}` : 'none'
            }}>
                  <div>
                    <div className="font-medium" style={{
                  color: colors.textPrimary
                }}>
                      {session.client}
                    </div>
                    <div className="text-sm" style={{
                  color: colors.textSecondary
                }}>
                      {session.type}
                    </div>
                  </div>
                  <div className="text-sm font-medium" style={{
                color: index === 0 ? colors.primary : colors.textSecondary
              }}>
                    {session.time}
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>;
  const renderBookingPreview = () => <div className="h-full w-full flex flex-col" style={{
    backgroundColor: colors.background
  }}>
      <div className="p-4 border-b" style={{
      backgroundColor: colors.surface,
      borderColor: colors.border
    }}>
        <div className="flex items-center">
          {logo ? <img src={logo} alt="Practice logo" className="h-8 object-contain mr-4" /> : <div className="text-lg font-bold mr-4" style={{
          color: colors.primary
        }}>
              Practice Name
            </div>}
        </div>
      </div>
      <div className="flex-1 overflow-auto p-4">
        <h1 className="text-xl font-bold mb-6" style={{
        color: colors.textPrimary
      }}>
          Book a Session
        </h1>
        <div className="p-4 rounded-lg mb-6" style={{
        backgroundColor: colors.surface
      }}>
          <h2 className="text-lg font-medium mb-4" style={{
          color: colors.textPrimary
        }}>
            Select Session Type
          </h2>
          <div className="space-y-2">
            {[{
            name: 'Initial Consultation',
            duration: '60 min',
            price: '$150'
          }, {
            name: 'Therapy Session',
            duration: '50 min',
            price: '$120'
          }, {
            name: 'Brief Check-in',
            duration: '30 min',
            price: '$75'
          }].map((sessionType, index) => <div key={index} className="p-3 rounded-md border flex justify-between items-center cursor-pointer" style={{
            backgroundColor: index === 1 ? colors.primary + '10' : 'transparent',
            borderColor: index === 1 ? colors.primary : colors.border
          }}>
                <div>
                  <div className="font-medium" style={{
                color: colors.textPrimary
              }}>
                    {sessionType.name}
                  </div>
                  <div className="text-sm" style={{
                color: colors.textSecondary
              }}>
                    {sessionType.duration}
                  </div>
                </div>
                <div className="text-sm font-medium" style={{
              color: colors.textPrimary
            }}>
                  {sessionType.price}
                </div>
              </div>)}
          </div>
        </div>
        <div className="p-4 rounded-lg" style={{
        backgroundColor: colors.surface
      }}>
          <h2 className="text-lg font-medium mb-4" style={{
          color: colors.textPrimary
        }}>
            Select Date & Time
          </h2>
          <div className="grid grid-cols-3 gap-2 mb-4">
            {['Mon', 'Tue', 'Wed'].map((day, index) => <div key={index} className="p-2 rounded-md text-center cursor-pointer" style={{
            backgroundColor: index === 1 ? colors.primary : 'transparent',
            color: index === 1 ? '#ffffff' : colors.textPrimary,
            border: `1px solid ${index === 1 ? colors.primary : colors.border}`
          }}>
                <div className="text-sm font-medium">{day}</div>
                <div className="text-lg font-bold">{index + 10}</div>
              </div>)}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {['9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM'].map((time, index) => <div key={index} className="p-2 rounded-md text-center cursor-pointer" style={{
            backgroundColor: index === 2 ? colors.primary : 'transparent',
            color: index === 2 ? '#ffffff' : colors.textPrimary,
            border: `1px solid ${index === 2 ? colors.primary : colors.border}`
          }}>
                {time}
              </div>)}
          </div>
        </div>
      </div>
      <div className="p-4 border-t" style={{
      backgroundColor: colors.surface,
      borderColor: colors.border
    }}>
        <button className="w-full py-2 px-4 rounded-md font-medium" style={{
        backgroundColor: colors.primary,
        color: '#ffffff'
      }}>
          Confirm Booking
        </button>
      </div>
    </div>;
  const renderMessagingPreview = () => <div className="h-full w-full flex flex-col" style={{
    backgroundColor: colors.background
  }}>
      <div className="p-4 border-b flex items-center" style={{
      backgroundColor: colors.surface,
      borderColor: colors.border
    }}>
        <div className="w-10 h-10 rounded-full mr-3" style={{
        backgroundColor: colors.secondary
      }}></div>
        <div>
          <div className="font-medium" style={{
          color: colors.textPrimary
        }}>
            Sarah Johnson
          </div>
          <div className="text-sm" style={{
          color: colors.textSecondary
        }}>
            Online
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-auto p-4" style={{
      backgroundColor: colors.background
    }}>
        <div className="space-y-4">
          {[{
          sender: 'them',
          text: 'Hello Dr. Smith, I wanted to follow up about our last session.'
        }, {
          sender: 'me',
          text: 'Hi Sarah, of course. What questions do you have?'
        }, {
          sender: 'them',
          text: "I've been practicing the techniques we discussed and wanted to share some progress."
        }, {
          sender: 'me',
          text: "That's great to hear! I'd love to hear more about what's working well for you."
        }].map((message, index) => <div key={index} className={`max-w-[80%] p-3 rounded-lg ${message.sender === 'me' ? 'ml-auto' : 'mr-auto'}`} style={{
          backgroundColor: message.sender === 'me' ? colors.primary : colors.surface,
          color: message.sender === 'me' ? '#ffffff' : colors.textPrimary
        }}>
              {message.text}
            </div>)}
        </div>
      </div>
      <div className="p-4 border-t" style={{
      backgroundColor: colors.surface,
      borderColor: colors.border
    }}>
        <div className="flex">
          <input type="text" className="flex-1 px-3 py-2 border rounded-l-md" placeholder="Type a message..." style={{
          borderColor: colors.border,
          backgroundColor: colors.background,
          color: colors.textPrimary
        }} />
          <button className="px-4 py-2 rounded-r-md font-medium" style={{
          backgroundColor: colors.primary,
          color: '#ffffff'
        }}>
            Send
          </button>
        </div>
      </div>
    </div>;
  const renderPreview = () => {
    switch (previewScreen) {
      case 'login':
        return renderLoginPreview();
      case 'dashboard':
        return renderDashboardPreview();
      case 'booking':
        return renderBookingPreview();
      case 'messaging':
        return renderMessagingPreview();
      default:
        return renderDashboardPreview();
    }
  };
  return <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-medium text-gray-900">Live Preview</h3>
          <div className="flex space-x-2">
            <button onClick={() => setDeviceView('desktop')} className={`p-2 rounded-md ${deviceView === 'desktop' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'}`} title="Desktop view">
              <MonitorIcon className="h-5 w-5" />
            </button>
            <button onClick={() => setDeviceView('mobile')} className={`p-2 rounded-md ${deviceView === 'mobile' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'}`} title="Mobile view">
              <SmartphoneIcon className="h-5 w-5" />
            </button>
            <button onClick={() => setPreviewMode(previewMode === 'light' ? 'dark' : 'light')} className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100" title={`Switch to ${previewMode === 'light' ? 'dark' : 'light'} mode`}>
              {previewMode === 'light' ? <MoonIcon className="h-5 w-5" /> : <SunIcon className="h-5 w-5" />}
            </button>
            <button onClick={() => setPreviewScreen(previewScreen === 'login' ? 'dashboard' : previewScreen === 'dashboard' ? 'booking' : previewScreen === 'booking' ? 'messaging' : 'login')} className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100" title="Change preview screen">
              <RefreshCwIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className={`border border-gray-300 rounded-lg overflow-hidden ${deviceView === 'mobile' ? 'w-72' : 'w-full'}`} style={{
          height: '500px'
        }}>
            {renderPreview()}
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <div className="flex space-x-2">
            <button onClick={() => setPreviewScreen('login')} className={`px-3 py-1.5 text-sm font-medium rounded-md ${previewScreen === 'login' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}>
              Login
            </button>
            <button onClick={() => setPreviewScreen('dashboard')} className={`px-3 py-1.5 text-sm font-medium rounded-md ${previewScreen === 'dashboard' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}>
              Dashboard
            </button>
            <button onClick={() => setPreviewScreen('booking')} className={`px-3 py-1.5 text-sm font-medium rounded-md ${previewScreen === 'booking' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}>
              Booking
            </button>
            <button onClick={() => setPreviewScreen('messaging')} className={`px-3 py-1.5 text-sm font-medium rounded-md ${previewScreen === 'messaging' ? 'bg-indigo-100 text-indigo-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}>
              Messaging
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Before & After Comparison
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="text-sm font-medium text-gray-700 mb-2">
              Default Theme
            </div>
            <div className="border border-gray-300 rounded-lg overflow-hidden h-48 bg-gray-50 flex items-center justify-center">
              <div className="text-center p-4">
                <div className="h-8 w-32 bg-indigo-600 rounded mx-auto mb-2"></div>
                <div className="h-4 w-48 bg-gray-300 rounded mx-auto mb-2"></div>
                <div className="h-4 w-40 bg-gray-300 rounded mx-auto"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-700 mb-2">
              Your Custom Theme
            </div>
            <div className="border border-gray-300 rounded-lg overflow-hidden h-48 flex items-center justify-center" style={{
            backgroundColor: colors.background
          }}>
              <div className="text-center p-4">
                <div className="h-8 w-32 rounded mx-auto mb-2" style={{
                backgroundColor: colors.primary
              }}></div>
                <div className="h-4 w-48 rounded mx-auto mb-2" style={{
                backgroundColor: colors.secondary,
                opacity: 0.7
              }}></div>
                <div className="h-4 w-40 rounded mx-auto" style={{
                backgroundColor: colors.secondary,
                opacity: 0.7
              }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};