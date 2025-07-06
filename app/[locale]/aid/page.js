import React from 'react';
import { t } from '../../lib/i18n';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';

export default async function Aid({ params }) {
  const { locale } = await params;
  const currentLocale = locale || 'en';

  return (

    <div className="container mx-auto px-4 py-20">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-6 main-gradient-text leading-relaxed py-2">
          {t(currentLocale, 'pages.aid.title')}
        </h1>
        <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto">
          {t(currentLocale, 'pages.aid.description')}
        </p>
      </div>
    </div>
  );
} 