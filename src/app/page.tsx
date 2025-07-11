"use client";

import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
// import { getSortedPostsData } from "@/lib/content"; // We won't fetch posts directly on the homepage for now

export default function Home() {
  // const allPostsData = getSortedPostsData(); // No need to fetch all posts here

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Jeppe Rasmussen
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-8">
            Ex-microsoft, ex-founder exploring new technical avenues
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/blog" 
              className="inline-flex items-center px-6 py-3 border border-emerald-500/20 text-emerald-400 bg-emerald-500/10 rounded-lg hover:bg-emerald-500/20 transition-colors"
            >
              Projects
            </Link>
            <Link 
              href="/about" 
              className="inline-flex items-center px-6 py-3 border border-gray-700 text-gray-300 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      </section>

      {/* Brief intro section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-lg mx-auto">
            <p className="text-gray-400 text-center">
              I write about web development, focusing on React, TypeScript, and modern web technologies.
              Check out my <Link href="/blog" className="text-emerald-400 hover:text-emerald-300">blog</Link> for the latest posts.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 