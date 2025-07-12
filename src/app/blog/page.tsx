import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSortedPostsData, PostData } from "@/lib/content";
import Link from "next/link";
import React from 'react';

// This will be a Client Component
function BlogPostListClient({
  allPostsData,
}: { allPostsData: (Omit<PostData, 'content'> & { id: string; category?: string })[] }) {
  return (
    <div className="space-y-12">
      {allPostsData.map(({ id, date, title, description, category = "Uncategorized" }) => (
        <article 
          key={id} 
          className="group cursor-pointer transition-all duration-200 hover:bg-accent -mx-4 px-4 py-6 rounded-lg"
        >
          <div className="flex flex-col space-y-3">
            {/* Category */}
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/30">
                {category}
              </span>
            </div>
            
            {/* Title */}
            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
              <Link href={`/blog/${id}`}>
                {title}
              </Link>
            </h3>
            
            {/* Date */}
            <p className="text-muted-foreground">{date}</p>
            
            {/* Excerpt */}
            {description && (
              <p className="text-muted-foreground leading-relaxed text-lg">
                {description}
              </p>
            )}
            
            {/* Read More Link */}
            <div className="pt-2">
              <Link 
                href={`/blog/${id}`}
                className="inline-flex items-center text-primary font-medium group-hover:text-primary/80 transition-colors"
              >
                Read more
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

// This will be a Server Component
export default function BlogList() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Thoughts and tutorials on web development
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <main className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <BlogPostListClient allPostsData={allPostsData} />
        </div>
      </main>

      <Footer />
    </div>
  );
} 