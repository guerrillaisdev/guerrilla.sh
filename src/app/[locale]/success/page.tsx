'use client';

import { useTranslations } from 'next-intl';

export default function SuccessPage() {
  const t = useTranslations('SuccessPage');

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold text-green-500 mb-4">{t('title')}</h1>
      <p>{t('message')}</p>
    </div>
  );
}