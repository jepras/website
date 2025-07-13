import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSortedPostsData, PostListItem } from "@/lib/content";
import Link from "next/link";
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// This will be a Client Component
function BlogPostListClient({
  allPostsData,
}: { allPostsData: (PostListItem & { id: string; category?: string })[] }) {
  return (
    <div className="space-y-6">
      {allPostsData.map(({ id, date, title, description, category = "Uncategorized" }) => (
        <Card key={id} className="group cursor-pointer transition-all duration-200 hover:shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <Badge>
                {category}
              </Badge>
              <p className="text-sm text-muted-foreground">{date}</p>
            </div>
            <CardTitle className="text-2xl group-hover:text-primary transition-colors">
              <Link href={`/blog/${id}`}>
                {title}
              </Link>
            </CardTitle>
            {description && (
              <CardDescription className="text-lg leading-relaxed">
                {description}
              </CardDescription>
            )}
          </CardHeader>
          <CardFooter>
            <Button asChild variant="ghost" className="p-0 h-auto">
              <Link href={`/blog/${id}`}>
                Read more
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </Button>
          </CardFooter>
        </Card>
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