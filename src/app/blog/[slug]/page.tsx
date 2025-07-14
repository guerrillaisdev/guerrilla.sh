/**
 * @file src/app/blog/[slug]/page.tsx
 * @purpose Renders a single, dynamic blog post page.
 * @version 1.0.0
 * @date 2025-07-13
 *
 * @description
 * This dynamic route fetches a specific blog post based on the URL slug.
 * It reads the corresponding Markdown file, parses the frontmatter for metadata,
 * and renders the main content using ReactMarkdown. It also includes functions
 * for generating static paths and metadata for SEO.
 *
 * @dependencies
 * - fs: For reading files from the filesystem.
 * - path: For constructing file paths.
 * - gray-matter: For parsing YAML frontmatter from Markdown files.
 * - react-markdown: For rendering Markdown content as React components.
 * - next/link: For client-side navigation.
 */

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const postsDirectory = path.join(process.cwd(), 'content/blog');

// Function to get a single post by its slug
const getPost = (slug: string) => {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    return notFound();
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data: frontmatter, content } = matter(fileContents);

  return {
    frontmatter,
    content,
  };
};

// Generate static paths for all blog posts at build time
export async function generateStaticParams() {
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { frontmatter } = getPost(params.slug);
  return {
    title: `${frontmatter.title} | Guerrilla Automotive Blog`,
    description: frontmatter.excerpt,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const { frontmatter, content } = getPost(params.slug);

  return (
    <main className="container mx-auto p-4 py-12">
      <article className="prose dark:prose-invert max-w-none">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-2">{frontmatter.title}</h1>
          <p className="text-muted-foreground text-lg">
            {new Date(frontmatter.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
        <div className="prose dark:prose-invert max-w-none">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
        <div className="mt-12 text-center">
          <Link href="/blog" className="text-primary font-semibold hover:underline">
            &larr; Back to Blog
          </Link>
        </div>
      </article>
    </main>
  );
}