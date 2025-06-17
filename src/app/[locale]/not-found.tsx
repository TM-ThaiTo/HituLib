'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, ArrowLeft, Home } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const NotFound = ({ error }: any) => {
  useEffect(() => {
    if (error) console.error(error);
  }, [error]);

  return <NotFoundContent />;
};

const NotFoundContent = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[var(--background)] px-4 text-[var(--foreground)]">
      {/* Animated background particles */}
      <div className="pointer-events-none absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[var(--primary)]/[0.15]"
            style={{
              width: `${Math.random() * 50 + 20}px`,
              height: `${Math.random() * 50 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.5, 0.3],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 space-y-8 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* 404 Text with Glitch Effect */}
        <motion.h1
          className="font-poppins relative bg-gradient-to-b from-[var(--primary)] to-[var(--accent)] bg-clip-text text-8xl font-bold tracking-tighter text-transparent md:text-9xl"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          404
          <motion.span
            className="absolute inset-0 text-[var(--primary)] opacity-20"
            animate={{
              x: [0, 2, -2, 0],
              y: [0, 1, -1, 0],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatType: 'loop',
            }}
          >
            404
          </motion.span>
        </motion.h1>

        {/* Error Message */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-[var(--foreground)] md:text-3xl">
            Oops, Page Not Found
          </h2>
          <p className="mx-auto max-w-md text-[var(--muted-foreground)]">
            The page you&apos;re looking for seems to have vanished. Let&apos;s get you back on
            track!
          </p>
        </motion.div>

        {/* Alert Icon */}
        <motion.div
          className="flex justify-center"
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, duration: 0.5, type: 'spring' }}
        >
          <div className="rounded-full bg-[var(--primary)]/[0.1] p-4">
            <AlertTriangle className="h-12 w-12 text-[var(--primary)]" />
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <button
            onClick={() => router.push('/')}
            className="inline-flex h-12 items-center justify-center rounded-full bg-[var(--primary)] px-6 font-semibold text-[var(--primary-foreground)] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[var(--primary)]/[0.9]"
          >
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </button>
          <button
            onClick={() => router.back()}
            className="inline-flex h-12 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] px-6 font-semibold text-[var(--foreground)] shadow-sm transition-all duration-300 hover:scale-105 hover:bg-[var(--accent)] hover:text-[var(--accent-foreground)]"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </button>
        </motion.div>

        {/* Documentation Link */}
        <motion.div
          className="text-sm text-[var(--muted-foreground)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <span>Need help? Visit our </span>
          <button
            onClick={() => router.push('/docs')}
            className="font-medium text-[var(--primary)] hover:underline"
          >
            documentation
          </button>
          <span>.</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
