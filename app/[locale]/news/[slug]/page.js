import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { t } from '../../../lib/i18n';
import { getNewsById } from '../../../lib/notion';

export const revalidate = 60;

export default async function NewsDetail({ params }) {
  const { locale, slug } = await params;
  const currentLocale = locale || 'en';
  let newsItem;
  try {
    newsItem = await getNewsById(slug);
  } catch (error) {
    console.error('Failed to fetch news from Notion:',error);
    return notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl mt-10">
      {newsItem.image && (
        <img
          src={newsItem.image}
          alt={newsItem.title}
          loading="lazy"
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
      <div className="mt-12 flex justify-center">
        <Link
          href={`/${currentLocale}/news`}
          className="inline-flex items-center px-6 py-3 main-bg-gradient hover:opacity-90 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          {t(currentLocale, 'pages.news.back_to_list') || '← Back to news list'}
        </Link>
      </div>
    </div>
  );
} 