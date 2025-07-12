import { getPostData, getSortedPostsData } from '@/lib/content';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import React from 'react';
import { Badge } from '@/components/ui/badge';

export async function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    slug: post.id,
  }));
}

// This will be a Client Component to render the post content
function PostContentClient({ content, category }: { content: React.ReactNode; category?: string }) {
  return (
    <article className="prose prose-lg prose-invert prose-headings:text-white prose-p:text-gray-400 prose-a:text-emerald-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-code:text-emerald-400 prose-code:bg-gray-900 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-800 max-w-none">
      {content}
    </article>
  );
}

// This will be a Server Component to fetch the post data
export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postData = await getPostData(slug);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Category */}
          {postData.category && (
            <div className="flex items-center space-x-2 mb-4">
              <Badge>
                {postData.category}
              </Badge>
            </div>
          )}
          
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {postData.title}
          </h1>
          
          {/* Date */}
          <p className="text-muted-foreground mb-8">
            {postData.date}
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <PostContentClient content={postData.content} category={postData.category} />
          
          {/* Back to blog link */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <Link 
              href="/blog"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
            >
              <svg className="mr-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to blog
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 