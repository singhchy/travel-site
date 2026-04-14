'use client';

import { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import MobileMenu from './MobileMenu';
import SearchModal from './SearchModal';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen || isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen, isSearchOpen]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md shadow-md'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="/"
                className={`text-2xl font-bold transition-colors duration-300 ${
                  isScrolled
                    ? 'text-neutral-900 dark:text-white'
                    : 'text-white'
                }`}
              >
                Travlla
              </a>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center gap-6">
              {/* Search Icon */}
              <button
                onClick={handleSearchToggle}
                className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  isScrolled
                    ? 'text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800'
                    : 'text-white hover:bg-white/20'
                }`}
                aria-label="Open search"
              >
                <Search className="w-6 h-6" />
              </button>

              {/* Hamburger Menu Icon */}
              <button
                onClick={handleMenuToggle}
                className={`p-2 rounded-full transition-all duration-300 hover:scale-110 ${
                  isScrolled
                    ? 'text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800'
                    : 'text-white hover:bg-white/20'
                }`}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
