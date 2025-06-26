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
      className={`flex min-h-screen items-center justify-center bg-[var(--background)] p-4 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="w-full max-w-md transform overflow-hidden rounded-2xl bg-[var(--card)] shadow-xl transition-all duration-500 ease-in-out">
        <div className="flex justify-center bg-[var(--primary)] p-6">
          <div className="relative">
            <div className="absolute inset-0 animate-ping rounded-full bg-[var(--primary)] opacity-20"></div>
            <AlertCircle size={80} className="relative z-10 text-[var(--primary-foreground)]" />
          </div>
        </div>

        <div className="p-6 md:p-8">
          <h2 className="mb-2 text-center text-2xl font-bold text-[var(--foreground)] md:text-3xl">
            Oh no! Something went wrong
          </h2>

          <div className="my-4 rounded border-l-4 border-[var(--destructive)] bg-[var(--destructive)]/10 p-4">
            <p className="text-sm font-medium text-[var(--destructive)] md:text-base">
              {error.message || "We couldn't process your request at this time."}
            </p>
          </div>

          <p className="mb-6 text-center text-[var(--muted-foreground)]">
            Don't worry, we've logged this error and our team is working on it.
          </p>

          <div className="flex flex-col justify-center gap-3 md:flex-row">
            <button
              onClick={handleReset}
              className="flex items-center justify-center gap-2 rounded-lg bg-[var(--primary)] px-6 py-3 font-medium text-[var(--primary-foreground)] transition-colors hover:bg-[var(--primary)]/90 focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:outline-none"
            >
              <RefreshCw size={18} className={`${isRotating ? 'animate-spin' : ''}`} />
              Try Again
            </button>

            <button
              onClick={() => (window.location.href = '/')}
              className="flex items-center justify-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--card)] px-6 py-3 font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--muted)] focus:ring-2 focus:ring-[var(--border)] focus:ring-offset-2 focus:outline-none"
            >
              Go Home
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-[var(--border)] bg-[var(--muted)] px-6 py-4">
          <p className="text-sm text-[var(--muted-foreground)]">
            Error Code: {Math.floor(Math.random() * 90000) + 10000}
          </p>
          <p className="text-sm text-[var(--muted-foreground)]">{new Date().toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Error;
