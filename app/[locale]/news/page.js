import React from 'react';
import Link from 'next/link';

import { t } from '../../lib/i18n';
import { getAllNews } from "../../lib/notion";

// Regenerate this page every 60 seconds (ISR)
export const revalidate = 60;

export default async function News({ params }) {
  const { locale } = params;
  const currentLocale = locale || 'en';

  // Fetch news items from Notion (server-side)
  const news = await getAllNews();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        {t(currentLocale, 'pages.news.title')}
      </h1>
      <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto mb-8">
        {t(currentLocale, 'pages.news.description')}
      </p>

      {/* News list */}
      <ul
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
      >
        {news.map((item) => (
          <li
            key={item.id}
            className="bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-lg transition-transform duration-200 hover:-translate-y-1"
          >
            <Link href={`/${currentLocale}/news/${item.id}`} className="block h-full p-6">
              <article className="h-full flex flex-col justify-between">
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
                  <p className="text-gray-700 dark:text-gray-300 line-clamp-3">
                    {item.excerpt}
                  </p>
                )}

                <span className="mt-4 inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium">
                  Read more &rarr;
                </span>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
} 