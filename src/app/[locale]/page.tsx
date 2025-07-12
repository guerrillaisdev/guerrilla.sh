/**
 * @file src/app/page.tsx
 * @summary Main landing page for guerrilla.sh.
 * @journal
 *   - 2025-07-12: Replaced Next.js boilerplate with a basic page structure.
 *     - Added a main content area.
 *     - Included a footer with contact information.
 *     - Added a placeholder for the main application content.
 */
import {useTranslations} from 'next-intl';
import Link from 'next/link';

export default function Home() {
  const t = useTranslations('Home');
  const tFooter = useTranslations('Footer');

  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-900 text-white">
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center my-12">
          <h1 className="text-5xl font-bold text-green-400 mb-4">{t('title')}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t('subtitle')}</p>
        </section>

        {/* Services Section */}
        <section className="my-16">
          <h2 className="text-4xl font-bold text-center mb-8">{t('servicesTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-green-400 mb-2">{t('services.remoteTuning')}</h3>
              <p className="text-gray-400">{t('services.remoteTuningDesc')}</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-green-400 mb-2">{t('services.hardware')}</h3>
              <p className="text-gray-400">{t('services.hardwareDesc')}</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="my-16">
          <h2 className="text-4xl font-bold text-center mb-8">{t('whyUsTitle')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-green-400 mb-2">{t('whyUs.expertise')}</h3>
              <p className="text-gray-400">{t('whyUs.expertiseDesc')}</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-green-400 mb-2">{t('whyUs.p2p')}</h3>
              <p className="text-gray-400">{t('whyUs.p2pDesc')}</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-green-400 mb-2">{t('whyUs.community')}</h3>
              <p className="text-gray-400">{t('whyUs.communityDesc')}</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center my-12">
          <h2 className="text-3xl font-bold mb-4">{t('cta')}</h2>
          <Link href="/products" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-xl">
            {t('ctaButton')}
          </Link>
        </section>

      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>{tFooter('contact', {phone: '+1-737-747-2233', email: 'inquiries@guerrilla.sh'})}</p>
        <p>{tFooter('language')}</p>
      </footer>
    </div>
  );
}
