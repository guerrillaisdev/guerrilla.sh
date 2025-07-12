/**
 * @file src/app/blog/page.tsx
 * @summary Blog listing page for guerrilla.sh.
 * @journal
 *   - 2025-07-12: Created the initial blog page.
 *     - Added a placeholder for the blog posts.
 */
import {useTranslations} from 'next-intl';
import Link from 'next/link';

export default function Blog() {
  const t = useTranslations('Blog');
  const tFooter = useTranslations('Footer');

  // Placeholder data for blog posts
  const posts = [
    {
      id: 1,
      title: 'The Art of E-Tuning: How We Deliver Power Safely',
      excerpt: 'A deep dive into our remote tuning process and the technology that makes it possible to achieve significant power gains while maintaining engine safety and reliability.',
      slug: 'the-art-of-e-tuning'
    },
    {
      id: 2,
      title: 'Why the Tactrix Openport 2.0 is Our Go-To Cable',
      excerpt: 'An overview of the Tactrix Openport 2.0, its features, and why it has become the industry standard for reliable vehicle communication during tuning.',
      slug: 'why-tactrix-openport'
    },
    {
      id: 3,
      title: 'Case Study: 100hp Gain on a Stage 2 Subaru WRX',
      excerpt: 'Follow along as we take a customer\'s lightly modified Subaru WRX and unlock an additional 100 horsepower through a custom remote e-tune.',
      slug: 'case-study-wrx'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-900 text-white">
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="text-center my-12">
          <h1 className="text-5xl font-bold text-green-400 mb-4">{t('title')}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t('subtitle')}</p>
        </section>

        <section className="my-16">
          <div className="grid md:grid-cols-1 gap-8">
            {posts.map((post) => (
              <div key={post.id} className="bg-gray-800 p-6 rounded-lg">
                <h2 className="text-3xl font-bold text-green-400 mb-2">{post.title}</h2>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-green-400 hover:text-green-300 font-bold">
                  {t('readMore')}
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>{tFooter('contact', {phone: '+1-737-747-2233', email: 'inquiries@guerrilla.sh'})}</p>
        <p>{tFooter('language')}</p>
      </footer>
    </div>
  );
}