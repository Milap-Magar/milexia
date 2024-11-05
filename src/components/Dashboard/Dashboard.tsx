import React from "react";
import { useTheme } from "../../Context/ThemeContext";
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa6";

export const Dashboard: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="flex flex-col h-screen p-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <header className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100">
          Chat AI Dashboard
        </h1>
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="p-2 bg-gray-200 dark:bg-gray-800 rounded"
        >
          <span className="text-gray-800 dark:text-gray-200">
            {isDark ? <FaRegLightbulb size={24} /> : <FaLightbulb size={24} />}
          </span>
        </button>
      </header>

      <main className="flex-grow flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 bg-gray-200 dark:bg-gray-800 p-4 rounded-lg shadow-md mb-4 md:mb-0 md:mr-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Menu
          </h2>
          <ul className="mt-4 space-y-2">
            <li className="text-gray-700 dark:text-gray-300 cursor-pointer hover:underline">
              Dashboard
            </li>
            <li className="text-gray-700 dark:text-gray-300 cursor-pointer hover:underline">
              Messages
            </li>
            <li className="text-gray-700 dark:text-gray-300 cursor-pointer hover:underline">
              Settings
            </li>
          </ul>
        </aside>

        {/* Main Chat Section */}
        <section className="flex-1 bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-md">
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto mb-4">
              <p className="text-gray-900 dark:text-gray-100">
                Welcome to the Chat AI!
              </p>
              {/* Example of chat messages */}
              <div className="mt-4 space-y-4">
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-900 dark:text-gray-100">
                    User: Hello, AI!
                  </p>
                </div>
                <div className="bg-blue-100 dark:bg-blue-800 p-4 rounded-lg self-end">
                  <p className="text-gray-900 dark:text-gray-100">
                    AI: Hello! How can I assist you today?
                  </p>
                </div>
              </div>
            </div>

            {/* Input Section */}
            <div className="border-t border-gray-300 dark:border-gray-700 pt-4">
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none"
                placeholder="Type your message..."
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
