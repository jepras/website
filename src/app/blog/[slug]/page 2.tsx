import { getPostData, getSortedPostsData } from '@/lib/content';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React from 'react';

export async function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    slug: post.id,
  }));
}

// This will be a Client Component to render the post content
function PostContentClient({ content }: { content: React.ReactNode }) {
  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
      {content}
    </article>
  );
}

// This will be a Server Component to fetch the post data
export default async function Post({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug);

  return (
    <div className="flex flex-col min-h-screen bg-background text-text">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-2 text-heading">{postData.title}</h1>
        <p className="text-gray-600 mb-4">{postData.date}</p>
        {/* Render the Client Component and pass content */}
        <PostContentClient content={postData.content} />
      </main>
      <Footer />
    </div>
  );
} 