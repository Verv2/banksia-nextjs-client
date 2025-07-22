"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface WebsiteLoaderProps {
  onLoadingComplete?: () => void;
  duration?: number;
}

export function Loading({
  onLoadingComplete,
  duration = 3000,
}: WebsiteLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Initializing...");

  const loadingSteps = [
    "Initializing...",
    "Loading assets...",
    "Preparing interface...",
    "Almost ready...",
    "Welcome!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 100 / (duration / 100);

        // Update loading text based on progress
        const stepIndex = Math.floor(
          (newProgress / 100) * (loadingSteps.length - 1)
        );
        setLoadingText(loadingSteps[stepIndex] || loadingSteps[0]);

        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete?.(), 500);
          return 100;
        }
        return newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [duration, onLoadingComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 flex items-center justify-center z-50">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#F16232] opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#F16232] opacity-5 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#F16232] opacity-3 rounded-full blur-3xl animate-pulse [animation-delay:2s]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-lg mx-auto px-6">
        {/* Logo with Animation */}
        <div className="mb-12">
          <div className="relative inline-block">
            <Image
              src="/placeholder.svg?height=100&width=300&text=Banksia+Logo"
              alt="Banksia Logo"
              width={300}
              height={100}
              className="h-20 w-auto opacity-90 transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-[#F16232] opacity-10 blur-2xl rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Advanced Loading Animation */}
        <div className="relative mb-10">
          <div className="w-32 h-32 mx-auto relative">
            {/* Multiple Rotating Rings */}
            <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-[#F16232] border-t-transparent rounded-full animate-spin"></div>

            <div className="absolute inset-4 border-3 border-gray-100 rounded-full"></div>
            <div className="absolute inset-4 border-3 border-[#F16232]/70 border-r-transparent rounded-full animate-spin [animation-direction:reverse] [animation-duration:1.5s]"></div>

            <div className="absolute inset-8 border-2 border-gray-50 rounded-full"></div>
            <div className="absolute inset-8 border-2 border-[#F16232]/50 border-b-transparent rounded-full animate-spin [animation-duration:2s]"></div>

            {/* Center Logo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 bg-[#F16232] rounded-full flex items-center justify-center animate-pulse">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Welcome Message */}
        <div className="mb-8 space-y-4">
          <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
            Welcome to Banksia
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-md mx-auto">
            We&apos;re crafting an exceptional experience just for you
          </p>
        </div>

        {/* Progress Section */}
        <div className="mb-8 space-y-4">
          <div className="text-sm font-medium text-[#F16232]">
            {loadingText}
          </div>

          {/* Progress Bar */}
          <div className="w-full max-w-sm mx-auto">
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#F16232] to-[#F16232]/80 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="text-xs text-gray-500 mt-2">
              {Math.round(progress)}% Complete
            </div>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-[#F16232] rounded-full opacity-30 animate-float"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + (i % 2)}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-xs text-gray-400 font-medium tracking-wider">
          EXPERIENCE EXCELLENCE
        </p>
      </div>
    </div>
  );
}
