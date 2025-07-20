"use client";

import React from 'react';
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="border-b border-separator backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
              Jeppe Rasmussen
            </Link>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
              blog
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              about
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-muted-foreground hover:text-primary"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors">
                Home
              </Link>
              <Link href="/blog" className="block px-3 py-2 text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors">
                Blog
              </Link>
              <Link href="/about" className="block px-3 py-2 text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors">
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 