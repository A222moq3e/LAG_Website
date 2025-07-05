import React from 'react';
import { notFound } from 'next/navigation';
import { t } from '../../../lib/i18n';
import { getNewsById } from '../../../lib/notion';

export const revalidate = 60;

export default async function NewsDetail({ params }) {
  const { locale, slug } = params;
  const currentLocale = locale || 'en';

  const newsItem = await getNewsById(slug);
  if (!newsItem) {
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl mt-10">
      {newsItem.image && (
        <img
          src={newsItem.image}
          alt={newsItem.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
      )}
      <h1 className="text-3xl font-bold mb-4">{newsItem.title}</h1>
      {newsItem.date && (
        <p className="text-sm text-gray-600 mb-6">
          {new Date(newsItem.date).toLocaleDateString(currentLocale)}
        </p>
      )}
      {newsItem.excerpt && <p className="mb-4">{newsItem.excerpt}</p>}
      {/* Add more detailed rendering or blocks here as needed */}
      <p className="mt-12 text-center text-gray-500">
        {t(currentLocale, 'pages.news.back_to_list') || '← Back to news list'}
      </p>
    </div>
  );
} 