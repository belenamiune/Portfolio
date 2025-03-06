"use-client";
import { useEffect } from "react";

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000); 

    return () => clearTimeout(timer); 
  }, [onFinish]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 animate-pulse">Welcome</h1>
    </div>
  );
};

export default SplashScreen;
