/**
 * @file src/app/blog/[slug]/page.tsx
 * @purpose Renders a single, dynamic blog post page.
 * @version 2.0.0
 * @date 2025-07-14
 *
 * @description
 * This dynamic route fetches a specific blog post component based on the URL slug.
 * It dynamically imports the corresponding post component from the `posts` directory
 * and renders it. It also includes functions for generating static paths and
 * metadata for SEO.
 *
 * @dependencies
 * - fs: For reading the list of post files for static generation.
 * - path: For constructing file paths.
 * - next/link: For client-side navigation.
 * - next/navigation: For handling not-found cases.
 */

import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

const postsDirectory = path.join(process.cwd(), 'src/app/blog/posts');

// Generate static paths for all blog posts at build time
export async function generateStaticParams() {
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map((filename) => ({
    slug: filename.replace(/\.tsx$/, ''),
  }));
}

// Dynamically get the post component and its metadata
const getPost = async (slug: string) => {
  try {
    const postModule = await import(`@/app/blog/posts/${slug}`);
    return {
      PostComponent: postModule.default,
      metadata: postModule.metadata,
    };
  } catch (error) {
    return notFound();
  }
};

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { metadata } = await getPost(params.slug);
  return {
    title: `${metadata.title} | Guerrilla Automotive Blog`,
    description: metadata.excerpt,
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { PostComponent, metadata } = await getPost(params.slug);

  return (
    <main className="container mx-auto p-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2">{metadata.title}</h1>
        <p className="text-muted-foreground text-lg">
          {new Date(metadata.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </div>
      <PostComponent />
      <div className="mt-12 text-center">
        <Link href="/blog" className="text-primary font-semibold hover:underline">
          &larr; Back to Blog
        </Link>
      </div>
    </main>
  );
}