'use client';

import { AlertCircle, ArrowRight, RefreshCw } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ErrorStateProps {
  error: Error;
  reset: () => void;
}

const Error: React.FC<ErrorStateProps> = ({ error, reset }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleReset = () => {
    setIsRotating(true);
    setTimeout(() => {
      reset();
      setIsRotating(false);
    }, 600);
  };

  return (
    <div
      className={`flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100 p-4 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white shadow-xl transition-all duration-500 ease-in-out">
        <div className="flex justify-center bg-gradient-to-r from-purple-500 to-blue-600 p-6">
          <div className="relative">
            <div className="absolute inset-0 animate-ping rounded-full bg-white opacity-20"></div>
            <AlertCircle size={80} className="relative z-10 text-white" />
          </div>
        </div>

        <div className="p-6 md:p-8">
          <h2 className="mb-2 text-center text-2xl font-bold text-gray-800 md:text-3xl">
            Oh no! Something went wrong
          </h2>

          <div className="my-4 rounded border-l-4 border-red-400 bg-red-50 p-4">
            <p className="text-sm font-medium text-red-700 md:text-base">
              {error.message || "We couldn't process your request at this time."}
            </p>
          </div>

          <p className="mb-6 text-center text-gray-600">
            Don't worry, we've logged this error and our team is working on it.
          </p>

          <div className="flex flex-col justify-center gap-3 md:flex-row">
            <button
              onClick={handleReset}
              className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
            >
              <RefreshCw size={18} className={`${isRotating ? 'animate-spin' : ''}`} />
              Try Again
            </button>

            <button
              onClick={() => (window.location.href = '/')}
              className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none"
            >
              Go Home
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-gray-100 bg-gray-50 px-6 py-4">
          <p className="text-sm text-gray-500">
            Error Code: {Math.floor(Math.random() * 90000) + 10000}
          </p>
          <p className="text-sm text-gray-500">{new Date().toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Error;
