/**
 * @file src/app/blog/page.tsx
 * @purpose The main index page for the blog.
 * @version 2.0.0
 * @date 2025-07-14
 *
 * @description
 * This page fetches all blog post components from the `src/app/blog/posts` directory,
 * imports their metadata, and displays them as a list of article previews,
 * sorted by publication date.
 *
 * @dependencies
 * - fs: For reading the list of post files.
 * - path: For constructing file paths.
 * - next/link: For client-side navigation to individual blog posts.
 */

import fs from 'fs';
import path from 'path';
import Link from 'next/link';

interface Post {
  slug: string;
  metadata: {
    [key: string]: any;
    title: string;
    date: string;
    excerpt: string;
  };
}

const getPosts = async (): Promise<Post[]> => {
  const postsDirectory = path.join(process.cwd(), 'src/app/blog/posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const slug = filename.replace(/\.tsx$/, '');
      const { metadata } = await import(`@/app/blog/posts/${filename.replace(/\.tsx$/, '')}`);
      
      return {
        slug,
        metadata,
      };
    })
  );

  // Sort posts by date in descending order
  return posts.sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());
};

export default async function BlogIndex() {
  const posts = await getPosts();

  return (
    <main className="container mx-auto p-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Tuning Insights & News</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-border pb-8">
            <h2 className="text-2xl font-bold mb-2">
              <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                {post.metadata.title}
              </Link>
            </h2>
            <p className="text-muted-foreground text-sm mb-4">
              {new Date(post.metadata.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <p className="text-muted-foreground">{post.metadata.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="text-primary font-semibold mt-4 inline-block hover:underline">
              Read More &rarr;
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}