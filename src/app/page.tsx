"use client";

import React from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
// import { getSortedPostsData } from "@/lib/content"; // We won't fetch posts directly on the homepage for now

export default function Home() {
  // const allPostsData = getSortedPostsData(); // No need to fetch all posts here

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
            Jeppe Rasmussen
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            Builder exploring new technical avenues
          </p>
          
          
          {/* ShadCN Button Comparison */}
          <div className="flex justify-center space-x-4 mt-8">
            <Button asChild size="lg">
              <Link href="/blog">Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">About</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brief intro section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert prose-lg mx-auto">
            <p className="text-muted-foreground text-center">
              I develop modern AI assisted systems for people who need reliable solutions. 
              Look at my <Link href="/blog" className="text-primary hover:text-primary/80">blog</Link> for the latest posts & project writeups.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
} 