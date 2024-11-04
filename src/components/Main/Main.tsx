// src/components/Main.tsx
import React from "react";
import "../index.css"; // Ensure your styles are included
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa6";
import { useTheme } from "../../Context/ThemeContext";
import { useAuth } from "../../Context/useAuth";
import "../index.css";

const Main: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const user = useAuth();

  return (
    <main className="relative bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen flex items-center justify-center">
      <div className="mesh-bg"></div> {/* Add the mesh background here */}
      <div className="relative z-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-lg w-full animate-fade-in transition-all duration-300">
        <button onClick={toggleTheme} className="cursor-pointer mb-4">
          {isDark ? <FaRegLightbulb size={24} /> : <FaLightbulb size={24} />}
        </button>
        {user ? (
          <div className="text-center">
            <h1 className="text-2xl font-semibold">Welcome to Milexia</h1>
            <h1 className="text-xl">Hello, {user.displayName || "User"}!</h1>
          </div>
        ) : (
          <h1 className="text-2xl text-center">Welcome, Guest</h1>
        )}
      </div>
    </main>
  );
};

export default Main;
