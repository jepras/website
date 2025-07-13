import { getPostData, getSortedPostsData } from '@/lib/content';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Prose } from '@/components/ui/prose';
import { Separator } from '@/components/ui/separator';
import TableOfContents from '@/components/blog-components/TableOfContents';
import { ScrollArea } from '@/components/ui/scroll-area';

export async function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    slug: post.id,
  }));
}

// This will be a Client Component to render the post content
function PostContentClient({ content, category }: { content: React.ReactNode; category?: string }) {
  return (
    <Prose>
      {content}
    </Prose>
  );
}

// This will be a Server Component to fetch the post data
export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postData = await getPostData(slug, { minLevel: 2, maxLevel: 4 });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-8 px-4 sm:px-6 lg:px-8">
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
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
            {/* Main content */}
            <ScrollArea className="max-w-4xl h-[calc(100vh-8rem)] pr-4 [&_*::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <div>
                <PostContentClient content={postData.content} category={postData.category} />
                {/* Back to blog link */}
                <div className="mt-12">
                  <Separator className="mb-8" />
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
            </ScrollArea>
            
            {/* Table of Contents */}
            <div className="lg:pl-8 lg:self-start">
              <TableOfContents items={postData.toc} />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 