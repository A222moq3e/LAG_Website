import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { t } from '../../lib/i18n';
import { getAllNews } from "../../lib/notion";

// Regenerate this page every 60 seconds (ISR)
export const revalidate = 60;

export default async function News({ params }) {
  const { locale } =  await params;
  const currentLocale = locale || 'en';

  // Fetch news items from Notion (server-side)
  let news = [];
  try {
        const notionLang = currentLocale === 'ar' ? 'Ar' : 'En';
    news = await getAllNews(notionLang);
  } catch (error) {
    console.error(error);
    news = [];
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-8 main-gradient-text">
        {t(currentLocale, 'pages.news.title')}
      </h1>
      <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto mb-8">
        {t(currentLocale, 'pages.news.description')}
      </p>

      {/* News list */}
      { news.length === 0 ? (
        <p className="text-center text-gray-600">
          {t(currentLocale, 'pages.news.no_news')}
        </p>
      ) : (
      <ul
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
      >
        {news.map((item) => (
          <li
            key={item.id}
            className="bg-gradient-card p-0.25 rounded-lg shadow hover:shadow-lg transition-transform duration-200 hover:-translate-y-1"
          >
            <Link href={`/${currentLocale}/news/${item.id}`} className="block h-full bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={176}
                  loading="lazy"
                  className="w-full h-44 object-cover rounded-t-lg"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              )}
              <article className="p-6 flex flex-col gap-4">
                <header>
                  <h2 className="text-xl font-semibold mb-2 line-clamp-2">
                    {item.title}
                  </h2>
                  {item.date && (
                    <time
                      dateTime={item.date}
                      className="block text-sm text-gray-500 mb-4"
                    >
                      {new Date(item.date).toLocaleDateString(currentLocale, {
                        dateStyle: "medium",
                      })}
                    </time>
                  )}
                </header>

                {item.excerpt && (
                  <p className="text-gray-700 dark:text-gray-300 line-clamp-3 whitespace-pre-line">
                    {item.excerpt}
                  </p>
                )}

                <span
                  className="mt-2 inline-flex items-center font-medium"
                  style={{ color: 'var(--primary-blue-light)' }}
                >
                  {t(currentLocale, 'pages.news.read_more')}
                </span>
              </article>
            </Link>
          </li>
          ))}
        </ul>
      )}
    </div>
  );
} 