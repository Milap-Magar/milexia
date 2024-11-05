import React from "react";
import "../index.css";
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa6";
import { useTheme } from "../../Context/ThemeContext";
import { useAuth } from "../../Context/useAuth";
import TypingEffect from "../Dashboard/TypingEffect";
import FadeInButton from "../Dashboard/FadeInButton";
import { Logout } from "../../pages/Login/Logout";
import { useNavigate } from "react-router-dom";

const Main: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const user = useAuth();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/milexia/home");
  };

  return (
    <main className="relative bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen flex items-center justify-center">
      <div className="mesh-bg"></div>
      <div className="relative z-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-lg w-full animate-fade-in transition-all duration-300 text-center">
        <button onClick={toggleTheme} className="cursor-pointer mb-4">
          {isDark ? <FaRegLightbulb size={24} /> : <FaLightbulb size={24} />}
        </button>
        <TypingEffect text="WELLCOME TO MILEXIA" speed={200} />{" "}
        {user ? (
          <div>
            <h1 className="text-xl">Hiee, {user.displayName || "User"}!</h1>
            <div className="mt-3" onClick={handleNavigate}>
              <FadeInButton>Continue</FadeInButton>
            </div>
          </div>
        ) : (
          <h1 className="text-2xl">Welcome, Guest</h1>
        )}
      </div>
      <Logout />
    </main>
  );
};

export default Main;
