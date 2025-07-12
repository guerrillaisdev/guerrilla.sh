/**
 * @file src/app/contact/page.tsx
 * @summary Contact page for guerrilla.sh.
 * @journal
 *   - 2025-07-12: Created the initial contact page.
 *     - Added contact information.
 */
import {useTranslations} from 'next-intl';

export default function Contact() {
  const t = useTranslations('Contact');
  const tFooter = useTranslations('Footer');

  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-900 text-white">
      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="text-center my-12">
          <h1 className="text-5xl font-bold text-green-400 mb-4">{t('title')}</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t('intro')}</p>
        </section>

        <section className="grid md:grid-cols-2 gap-16 my-16 items-start">
          {/* Contact Info */}
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-green-400">{t('phone')}</h2>
              <p className="text-lg text-gray-300">+1-737-747-2233</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-green-400">{t('email')}</h2>
              <p className="text-lg text-gray-300">inquiries@guerrilla.sh</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4 bg-gray-800 p-8 rounded-lg">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">{t('form.name')}</label>
              <input type="text" name="name" id="name" className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm text-white focus:ring-green-500 focus:border-green-500 sm:text-sm p-2" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">{t('form.email')}</label>
              <input type="email" name="email" id="email" className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm text-white focus:ring-green-500 focus:border-green-500 sm:text-sm p-2" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">{t('form.message')}</label>
              <textarea id="message" name="message" rows={4} className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm text-white focus:ring-green-500 focus:border-green-500 sm:text-sm p-2"></textarea>
            </div>
            <div>
              <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg">
                {t('form.submit')}
              </button>
            </div>
          </form>
        </section>
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>{tFooter('contact', {phone: '+1-737-747-2233', email: 'inquiries@guerrilla.sh'})}</p>
        <p>{tFooter('language')}</p>
      </footer>
    </div>
  );
}