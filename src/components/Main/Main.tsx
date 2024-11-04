import React from "react";
import { useTheme } from "../../Context/ThemeContext";

const Main: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <main className="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen">
      <button
        onClick={toggleTheme}
        className="p-2 bg-gray-200 dark:bg-gray-700 rounded"
      >
        Toggle Theme {isDark ? "Light" : "Dark"}
      </button>
      <h1 className="text-2xl">Welcome to the Main Page</h1>
      <p>This is where your content goes.</p>
    </main>
  );
};

export default Main;
