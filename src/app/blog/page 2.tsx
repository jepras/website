import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSortedPostsData, PostData } from "@/lib/content";
import Link from "next/link";
import React from 'react';

// This will be a Client Component
function BlogPostListClient({
  allPostsData,
}: { allPostsData: (Omit<PostData, 'content'> & { id: string })[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {allPostsData.map(({ id, date, title, description }) => (
        <div key={id} className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href={`/blog/${id}`} className="text-blue-600 hover:underline">
              {title}
            </Link>
          </h2>
          <p className="text-gray-600 mb-4">{date}</p>
          {description && <p className="text-gray-700">{description}</p>}
        </div>
      ))}
    </div>
  );
}

// This will be a Server Component
export default function BlogList() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="flex flex-col min-h-screen bg-background text-text">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-heading">Blog Posts</h1>
        {/* Render the Client Component and pass data */}
        <BlogPostListClient allPostsData={allPostsData} />
      </main>
      <Footer />
    </div>
  );
} 