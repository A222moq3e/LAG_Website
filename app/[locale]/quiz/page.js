'use client';

import React, { use } from 'react';
import { t } from '../../lib/i18n';
import Link from 'next/link';

export default function Quiz({ params }) {
  const { locale } = use(params) || {};
  const currentLocale = locale || 'ar';

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900">
      <div className="flex justify-center items-center min-h-screen p-4">
        <div className="w-full max-w-2xl">
          <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-600/50">
            
            <div className="text-center space-y-8">
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-24 h-24 text-cyan-400 drop-shadow-lg animate-pulse"
                  aria-hidden="true"
                  role="img"
                  aria-label="Lightning bolt quiz icon"
                >
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold">
                <span className="text-purple-400">
                  {t(currentLocale, 'quiz.title')}
                </span>
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {t(currentLocale, 'quiz.subtitle')}
                </span>
              </h1>

              <p className="text-lg text-gray-300">
                {t(currentLocale, 'quiz.description')}
              </p>

              <div className="flex justify-center items-center gap-6">
                  <span className="text-3xl hover:scale-110 transition-transform" role="img" aria-label="Gaming">🎮</span>
                  <span className="text-3xl hover:scale-110 transition-transform" role="img" aria-label="Energy">⚡</span>
                  <span className="text-3xl hover:scale-110 transition-transform" role="img" aria-label="Health">❤️</span>
                  <span className="text-3xl hover:scale-110 transition-transform" role="img" aria-label="Brain">🧠</span>
                  <span className="text-3xl hover:scale-110 transition-transform" role="img" aria-label="Achievement">🏆</span>
              </div>

              <Link
                href={`/${currentLocale}/quiz/questions`}
                className="main-bg-gradient text-white font-bold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-3 text-lg"
              >
                <span>{t(currentLocale, 'quiz.startButton')}</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}