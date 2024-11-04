import React, { useEffect, useState, ReactNode } from 'react';

interface FadeInButtonProps {
  children: ReactNode; 
}

const FadeInButton: React.FC<FadeInButtonProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay before fading in
    return () => clearTimeout(timer);
  }, []);

  return (
    <button
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 1s ease-in',
      }}
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
    >
      {children} {/* Render children here */}
    </button>
  );
};

export default FadeInButton;
