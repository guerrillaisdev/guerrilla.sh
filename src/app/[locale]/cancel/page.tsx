'use client';

import { useTranslations } from 'next-intl';

export default function CancelPage() {
  const t = useTranslations('CancelPage');

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold text-red-500 mb-4">{t('title')}</h1>
      <p>{t('message')}</p>
    </div>
  );
}