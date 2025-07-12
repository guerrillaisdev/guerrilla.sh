/**
 * @file src/components/Navbar.tsx
 * @summary Navigation bar component.
 * @journal
 *   - 2025-07-12: Created the initial Navbar component.
 *     - Added links to Home, Blog, and Contact pages.
 */
import {useTranslations} from 'next-intl';
import { useSession, signIn, signOut } from 'next-auth/react';
import Link from 'next/link';

export default function Navbar() {
  const t = useTranslations('Navbar');
  const { data: session } = useSession();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">
          Guerrilla.sh
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-gray-300 hover:text-white">
            {t('home')}
          </Link>
          <Link href="/blog" className="text-gray-300 hover:text-white">
            {t('blog')}
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">
            {t('contact')}
          </Link>
          <Link href="/products" className="text-gray-300 hover:text-white">
            {t('products')}
          </Link>
          <Link href="/tuning" className="text-gray-300 hover:text-white">
            {t('tuning')}
          </Link>
          {session ? (
            <button onClick={() => signOut()} className="text-gray-300 hover:text-white">
              Sign Out
            </button>
          ) : (
            <button onClick={() => signIn()} className="text-gray-300 hover:text-white">
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}