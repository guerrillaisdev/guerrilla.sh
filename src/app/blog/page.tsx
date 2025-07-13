/**
 * @file src/app/blog/page.tsx
 * @purpose The main index page for the blog.
 * @version 1.0.0
 * @date 2025-07-13
 *
 * @description
 * This page fetches all blog posts from the `content/blog` directory,
 * parses their frontmatter, and displays them as a list of article previews,
 * sorted by publication date.
 *
 * @dependencies
 * - fs: For reading files from the filesystem.
 * - path: For constructing file paths.
 * - gray-matter: For parsing YAML frontmatter from Markdown files.
 * - next/link: For client-side navigation to individual blog posts.
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

interface Post {
  slug: string;
  frontmatter: {
    [key: string]: any;
    title: string;
    date: string;
    excerpt: string;
  };
}

const getPosts = (): Post[] => {
  const postsDirectory = path.join(process.cwd(), 'content/blog');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const slug = filename.replace(/\.md$/, '');
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data: frontmatter } = matter(fileContents);

    return {
      slug,
      frontmatter: {
        title: frontmatter.title,
        date: frontmatter.date,
        excerpt: frontmatter.excerpt,
      },
    };
  });

  // Sort posts by date in descending order
  return posts.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
};

export default function BlogIndex() {
  const posts = getPosts();

  return (
    <main className="container mx-auto p-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Tuning Insights & News</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-border pb-8">
            <h2 className="text-2xl font-bold mb-2">
              <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                {post.frontmatter.title}
              </Link>
            </h2>
            <p className="text-muted-foreground text-sm mb-4">
              {new Date(post.frontmatter.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            <p className="text-muted-foreground">{post.frontmatter.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="text-primary font-semibold mt-4 inline-block hover:underline">
              Read More &rarr;
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}