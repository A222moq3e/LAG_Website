'use client';

import React from 'react';
import { t } from '../../lib/i18n';
import Link from 'next/link';

export default function QuizCharacters({ params }) {
  const { locale } = React.use(params) || {}
  const currentLocale = locale || "ar"

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
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-purple-400">
                {t(currentLocale, "quizCharacters.title")}
              </h1>

              <p className="text-lg text-gray-300">{t(currentLocale, "quizCharacters.description")}</p>

              <div className="flex justify-center items-center gap-6">
                <span className="text-3xl hover:scale-110 transition-transform">🏆</span>
                <span className="text-3xl hover:scale-110 transition-transform">⚡</span>
                <span className="text-3xl hover:scale-110 transition-transform">🎮</span>
                <span className="text-3xl hover:scale-110 transition-transform">🧠</span>
                <span className="text-3xl hover:scale-110 transition-transform">👑</span>
              </div>

              <Link
                href={`/${currentLocale}/quiz-characters/questions`}
                className="main-bg-gradient text-white font-bold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-3 text-lg"
              >
                <span>{t(currentLocale, "quizCharacters.startButton")}</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
