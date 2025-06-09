import React, { useState } from 'react';

const Configuration = () => {
  const [activeCategory, setActiveCategory] = useState('General Settings');

  const renderContent = () => {
    switch (activeCategory) {
      case 'General Settings':
        return (
          <>
            {/* General Settings */}
            <div>
              <h2 className="text-xl font-semibold mb-4">General Settings</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mb-4">Save Changes</button>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-300 mb-2">System Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">System Name</label>
                      <input type="text" className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white" value="RADMS" readOnly />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Version</label>
                      <input type="text" className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white" value="2.0" readOnly />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Department</label>
                      <input type="text" className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white" value="Faridabad Police Department" readOnly />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Location</label>
                      <input type="text" className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white" value="Faridabad" readOnly />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-300 mb-2">Time Zone & Language</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Time Zone</label>
                      <select className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white">
                        <option>Asia/Kolkata (IST)</option>
                        <option>UTC</option>
                        <option>Asia/Dubai</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Default Language</label>
                      <select className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white">
                        <option>English</option>
                        <option>Hindi</option>
                        <option>Punjabi</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-300 mb-2">Data Retention</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Report Retention (months)</label>
                      <input type="number" className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white" value="36" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Log Retention (months)</label>
                      <input type="number" className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white" value="12" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case 'Notifications':
        return (
          <>
            {/* Notifications Settings */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mb-4">Save Changes</button>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-300 mb-2">SMS Notifications</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="enableSms" className="form-checkbox h-4 w-4 text-blue-600 bg-gray-700 border-gray-600 rounded" checked />
                      <label htmlFor="enableSms" className="text-gray-300">Enable SMS Notifications</label>
                    </div>
                    <p className="text-gray-400 text-sm">Send SMS alerts for critical events</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">SMS Gateway</label>
                        <select className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white">
                          <option>Twilio</option>
                          <option>AWS SNS</option>
                          <option>Local Gateway</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Sender ID</label>
                        <input type="text" className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white" value="RADMS_ALERT" />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-300 mb-2">Email Notifications</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="enableEmail" className="form-checkbox h-4 w-4 text-blue-600 bg-gray-700 border-gray-600 rounded" checked />
                      <label htmlFor="enableEmail" className="text-gray-300">Enable Email Notifications</label>
                    </div>
                    <p className="text-gray-400 text-sm">Send email alerts and reports</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">SMTP Server</label>
                        <input type="text" className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white" value="smtp.radms.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Port</label>
                        <input type="number" className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white" value="587" />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-300 mb-2">Notification Rules</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-gray-300">New public report submitted</label>
                      <div className="flex gap-2">
                        <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 bg-gray-700 border-gray-600 rounded" checked />
                        <span className="text-gray-400 text-sm">SMS</span>
                        <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 bg-gray-700 border-gray-600 rounded" checked />
                        <span className="text-gray-400 text-sm">Email</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="text-gray-300">Case requires urgent attention</label>
                      <div className="flex gap-2">
                        <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 bg-gray-700 border-gray-600 rounded" checked />
                        <span className="text-gray-400 text-sm">SMS</span>
                        <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 bg-gray-700 border-gray-600 rounded" checked />
                        <span className="text-gray-400 text-sm">In-App</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="text-gray-300">System maintenance scheduled</label>
                      <div className="flex gap-2">
                        <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600 bg-gray-700 border-gray-600 rounded" checked />
                        <span className="text-gray-400 text-sm">Email</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case 'Case Rules':
        return (
          <>
            {/* Case Classification Rules */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Case Classification Rules</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mb-4">Save Changes</button>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-300 mb-2">Automatic Classification</h3>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="enableAutoClass" className="form-checkbox h-4 w-4 text-blue-600 bg-gray-700 border-gray-600 rounded" checked />
                    <label htmlFor="enableAutoClass" className="text-gray-300">Enable Auto Classification</label>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">Automatically classify cases based on criteria</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-300 mb-2">Small Profile Case Criteria</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Max Vehicles</label>
                      <input type="number" className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white" value="2" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Max Fatalities</label>
                      <input type="number" className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white" value="0" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Max Injuries</label>
                      <input type="number" className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white" value="1" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Auto-close Time (hours)</label>
                      <input type="number" className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white" value="48" />
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mt-2">≤2 vehicles, no fatalities, minor to moderate damage</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-300 mb-2">Complex Case Criteria</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="fatalities" className="form-checkbox h-4 w-4 text-blue-600 bg-gray-700 border-gray-600 rounded" checked />
                      <label htmlFor="fatalities" className="text-gray-300">Any fatalities involved</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="moreVehicles" className="form-checkbox h-4 w-4 text-blue-600 bg-gray-700 border-gray-600 rounded" checked />
                      <label htmlFor="moreVehicles" className="text-gray-300">More than 2 vehicles involved</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="commercialVehicle" className="form-checkbox h-4 w-4 text-blue-600 bg-gray-700 border-gray-600 rounded" />
                      <label htmlFor="commercialVehicle" className="text-gray-300">Commercial vehicle involved</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="infraDamage" className="form-checkbox h-4 w-4 text-blue-600 bg-gray-700 border-gray-600 rounded" />
                      <label htmlFor="infraDamage" className="text-gray-300">Infrastructure damage reported</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case 'Security':
        return (
          <>
            {/* Security Settings */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Security Settings</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mb-4">Save Changes</button>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-300 mb-2">Authentication</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="require2FA" className="form-checkbox h-4 w-4 text-blue-600 bg-gray-700 border-gray-600 rounded" checked />
                      <label htmlFor="require2FA" className="text-gray-300">Require Two-Factor Authentication</label>
                    </div>
                    <p className="text-gray-400 text-sm">Mandatory 2FA for all users</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Session Timeout (minutes)</label>
                        <input type="number" className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white" value="30" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">Max Login Attempts</label>
                        <input type="number" className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white" value="5" />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-300 mb-2">Password Policy</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Minimum Length</label>
                      <input type="number" className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white" value="8" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Password Expiry (days)</label>
                      <input type="number" className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white" value="90" />
                    </div>
                    <div className="flex items-center space-x-2 col-span-2">
                      <input type="checkbox" id="requireUppercase" className="form-checkbox h-4 w-4 text-blue-600 bg-gray-700 border-gray-600 rounded" checked />
                      <label htmlFor="requireUppercase" className="text-gray-300">Require uppercase letters</label>
                    </div>
                    <div className="flex items-center space-x-2 col-span-2">
                      <input type="checkbox" id="requireNumbers" className="form-checkbox h-4 w-4 text-blue-600 bg-gray-700 border-gray-600 rounded" checked />
                      <label htmlFor="requireNumbers" className="text-gray-300">Require numbers</label>
                    </div>
                    <div className="flex items-center space-x-2 col-span-2">
                      <input type="checkbox" id="requireSpecial" className="form-checkbox h-4 w-4 text-blue-600 bg-gray-700 border-gray-600 rounded" checked />
                      <label htmlFor="requireSpecial" className="text-gray-300">Require special characters</label>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-300 mb-2">Data Encryption</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-gray-300">Database encryption</label>
                      <span className="bg-green-600 text-white text-xs px-2.5 py-0.5 rounded">Enabled</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="text-gray-300">File encryption</label>
                      <span className="bg-green-600 text-white text-xs px-2.5 py-0.5 rounded">Enabled</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="text-gray-300">Communication encryption</label>
                      <span className="bg-green-600 text-white text-xs px-2.5 py-0.5 rounded">TLS 1.3</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case 'Integrations':
        return (
          <>
            {/* System Integrations */}
            <div>
              <h2 className="text-xl font-semibold mb-4">System Integrations</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mb-4">Save Changes</button>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-300 mb-2">External APIs</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-gray-300">Google Maps API</label>
                      <div className="flex items-center gap-2">
                        <span className="bg-green-600 text-white text-xs px-2.5 py-0.5 rounded">Connected</span>
                        <button className="bg-gray-700 text-white px-2 py-1 rounded-md text-sm">Configure</button>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">For location services and mapping</p>
                    <div className="flex items-center justify-between">
                      <label className="text-gray-300">Weather API</label>
                      <div className="flex items-center gap-2">
                        <span className="bg-yellow-600 text-white text-xs px-2.5 py-0.5 rounded">Pending</span>
                        <button className="bg-gray-700 text-white px-2 py-1 rounded-md text-sm">Configure</button>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">For weather data correlation</p>
                    <div className="flex items-center justify-between">
                      <label className="text-gray-300">Insurance Database</label>
                      <div className="flex items-center gap-2">
                        <span className="bg-red-600 text-white text-xs px-2.5 py-0.5 rounded">Disconnected</span>
                        <button className="bg-gray-700 text-white px-2 py-1 rounded-md text-sm">Configure</button>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">For vehicle insurance verification</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-300 mb-2">Backup Configuration</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Backup Frequency</label>
                      <select className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white">
                        <option>Daily</option>
                        <option>Weekly</option>
                        <option>Monthly</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Backup Time</label>
                      <input type="time" className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white" value="02:00" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Backup Location</label>
                      <select className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white">
                        <option>Local Storage</option>
                        <option>Cloud Storage</option>
                        <option>Both</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Retention Period (days)</label>
                      <input type="number" className="w-full p-2 rounded-md bg-gray-700 border border-gray-600 text-white" value="90" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          

          {/* Configuration Management */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Configuration Management</h2>
            <div className="grid grid-cols-3 gap-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Export Config</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Import Config</button>
              <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">Reset to Default</button>
            </div>
          </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6 text-white bg-gray-900 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Configuration</h1>
      <p className="text-gray-400 mb-6">System configuration and settings management for administrators</p>

      <div className="flex gap-6 h-[calc(100vh-12rem)]">
        {/* Left Pane - Settings Categories */}
        <div className="w-1/4 bg-gray-800 rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-3">Settings Categories</h2>
          <nav className="space-y-2 text-sm">
            <button
              className={`w-full text-left p-2 rounded-md ${activeCategory === 'General Settings' ? 'bg-gray-700 text-white' : 'hover:bg-gray-700'}`}
              onClick={() => setActiveCategory('General Settings')}
            >
              General Settings
            </button>
            <button
              className={`w-full text-left p-2 rounded-md ${activeCategory === 'Notifications' ? 'bg-gray-700 text-white' : 'hover:bg-gray-700'}`}
              onClick={() => setActiveCategory('Notifications')}
            >
              Notifications
            </button>
            <button
              className={`w-full text-left p-2 rounded-md ${activeCategory === 'Case Rules' ? 'bg-gray-700 text-white' : 'hover:bg-gray-700'}`}
              onClick={() => setActiveCategory('Case Rules')}
            >
              Case Rules
            </button>
            <button
              className={`w-full text-left p-2 rounded-md ${activeCategory === 'Security' ? 'bg-gray-700 text-white' : 'hover:bg-gray-700'}`}
              onClick={() => setActiveCategory('Security')}
            >
              Security
            </button>
            <button
              className={`w-full text-left p-2 rounded-md ${activeCategory === 'Integrations' ? 'bg-gray-700 text-white' : 'hover:bg-gray-700'}`}
              onClick={() => setActiveCategory('Integrations')}
            >
              Integrations
            </button>
          </nav>
        </div>

        {/* Right Pane - Settings Content */}
        <div className="flex-1 bg-gray-800 rounded-lg shadow-md p-6 overflow-y-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Configuration; 