import React from 'react';
import { Save } from 'lucide-react';

export const AdminSettings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">System Settings</h1>
      </div>

      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <form className="space-y-6">
            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                General Settings
              </h3>
              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="site-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Site Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="site-name"
                      id="site-name"
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      defaultValue="Issue Tracker"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="host"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Host URL
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="host"
                      id="host"
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      defaultValue="https://example.com"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Email Settings
              </h3>
              <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="smtp-host"
                    className="block text-sm font-medium text-gray-700"
                  >
                    SMTP Host
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="smtp-host"
                      id="smtp-host"
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="smtp-port"
                    className="block text-sm font-medium text-gray-700"
                  >
                    SMTP Port
                  </label>
                  <div className="mt-1">
                    <input
                      type="number"
                      name="smtp-port"
                      id="smtp-port"
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Issue Settings
              </h3>
              <div className="mt-6">
                <fieldset>
                  <legend className="text-sm font-medium text-gray-900">
                    Default Issue Fields
                  </legend>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="comments"
                          name="comments"
                          type="checkbox"
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                          defaultChecked
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="comments"
                          className="font-medium text-gray-700"
                        >
                          Enable Comments
                        </label>
                        <p className="text-gray-500">
                          Allow users to comment on issues
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="time-tracking"
                          name="time-tracking"
                          type="checkbox"
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                          defaultChecked
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="time-tracking"
                          className="font-medium text-gray-700"
                        >
                          Time Tracking
                        </label>
                        <p className="text-gray-500">
                          Enable time tracking for issues
                        </p>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Save className="h-4 w-4 mr-2" />
                Save Settings
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};