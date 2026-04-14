'use client';

import { useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Search submitted');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed top-0 left-0 right-0 z-50 p-4 sm:p-6"
          >
            <div className="max-w-3xl mx-auto">
              <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden">
                {/* Search Header */}
                <div className="flex items-center p-4 border-b border-neutral-200 dark:border-neutral-800">
                  <Search className="w-6 h-6 text-neutral-400 mr-4" />
                  <form onSubmit={handleSearch} className="flex-1">
                    <input
                      ref={searchInputRef}
                      type="text"
                      placeholder="Search destinations, tours, experiences..."
                      className="w-full bg-transparent text-lg text-neutral-900 dark:text-white placeholder-neutral-400 focus:outline-none"
                      aria-label="Search"
                    />
                  </form>
                  <button
                    onClick={onClose}
                    className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors duration-200 ml-2"
                    aria-label="Close search"
                  >
                    <X className="w-6 h-6 text-neutral-600 dark:text-neutral-400" />
                  </button>
                </div>

                {/* Quick Search Suggestions */}
                <div className="p-6">
                  <h3 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-4">
                    Popular Searches
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Vietnam',
                      'Halong Bay',
                      'Hanoi',
                      'Ho Chi Minh City',
                      'Da Nang',
                      'Hoi An',
                      'Sapa',
                      'Phu Quoc',
                    ].map((term) => (
                      <button
                        key={term}
                        onClick={() => {
                          console.log(`Searching for: ${term}`);
                          onClose();
                        }}
                        className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full text-sm hover:bg-primary hover:text-white transition-all duration-200"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Search Categories */}
                <div className="px-6 pb-6">
                  <h3 className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-4">
                    Browse by Category
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { icon: '🏝️', label: 'Beaches' },
                      { icon: '🏔️', label: 'Mountains' },
                      { icon: '🏛️', label: 'Culture' },
                      { icon: '🍜', label: 'Food Tours' },
                      { icon: '🚴', label: 'Adventure' },
                      { icon: '🌿', label: 'Nature' },
                      { icon: '🏨', label: 'Luxury' },
                      { icon: '👨‍👩‍👧‍👦', label: 'Family' },
                    ].map((category) => (
                      <button
                        key={category.label}
                        onClick={() => {
                          console.log(`Browsing category: ${category.label}`);
                          onClose();
                        }}
                        className="flex flex-col items-center p-4 bg-neutral-50 dark:bg-neutral-800/50 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200 group"
                      >
                        <span className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">
                          {category.icon}
                        </span>
                        <span className="text-sm text-neutral-700 dark:text-neutral-300">
                          {category.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
