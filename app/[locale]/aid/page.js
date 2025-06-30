import React from 'react';
import { t } from '../../lib/i18n';

export default async function Aid({ params }) {
  const { locale } = await params;
  const currentLocale = locale || 'en';

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        {t(currentLocale, 'pages.aid.title')}
      </h1>
      <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto">
        {t(currentLocale, 'pages.aid.description')}
      </p>
    </div>
  );
} 