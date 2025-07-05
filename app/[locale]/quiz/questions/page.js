'use client';

import React, { useState, use } from 'react';
import { t } from '../../../lib/i18n';
import { quizQuestions } from '../../../data/quizQuestions';
import Link from 'next/link';

export default function QuizQuestions({ params }) {
  const { locale } = use(params) || {};
  const currentLocale = locale || 'ar';
  const isRTL = currentLocale === 'ar';

  const [currentStep, setCurrentStep] = useState('quiz');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const selectAnswer = (questionId, optionId) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionId }));
    
    setTimeout(() => {
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
      } else {
        setCurrentStep('results');
      }
    }, 300);
  };

  const retakeQuiz = () => {
    setCurrentStep('quiz');
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  const calculateScore = () => {
    let totalScore = 0;
    let answeredCount = 0;

    quizQuestions.forEach(question => {
      const selectedOptionId = answers[question.id];
      if (selectedOptionId) {
        const selectedOption = question.options.find(option => option.id === selectedOptionId);
        if (selectedOption) {
          totalScore += selectedOption.score;
          answeredCount++;
        }
      }
    });

    const percentage = answeredCount > 0 ? Math.round((totalScore / (answeredCount * 3)) * 100) : 0;
    const performance = totalScore;

    let level = 'needsImprovement';
    if (percentage >= 80) level = 'excellent';
    else if (percentage >= 60) level = 'good';
    else if (percentage >= 40) level = 'fair';

    return { percentage, performance, level };
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const score = calculateScore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900">
      <div className="flex justify-center items-center min-h-screen p-4">
        <div className="w-full max-w-2xl">
          <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-600/50">
            
            {currentStep === 'quiz' && currentQuestion && (
              <div className="space-y-6">
                <div className={isRTL ? "text-right" : "text-left"}>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm text-gray-400">
                      {t(currentLocale, 'quiz.progressLabel')}
                    </p>
                    <p className="text-sm text-gray-400 font-semibold">
                      {Math.round(((currentQuestionIndex + 1) / quizQuestions.length) * 100)}%
                    </p>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-purple-400 to-cyan-400 h-3 rounded-full transition-all"
                      style={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="text-center space-y-2">
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {t(currentLocale, currentQuestion.questionKey)}
                  </h2>
                  <p className="text-sm text-gray-400">
                    {currentLocale === 'ar' 
                      ? `سؤال ${currentQuestionIndex + 1} من ${quizQuestions.length}`
                      : `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`
                    }
                  </p>
                </div>

                <div className="space-y-4">
                  {currentQuestion.options.map(option => (
                    <button
                      key={option.id}
                      onClick={() => selectAnswer(currentQuestion.id, option.id)}
                      className={`
                        w-full p-4 rounded-xl transition-all flex items-center gap-4 border-none outline-none
                        ${isRTL ? 'text-right' : 'text-left'}
                        ${answers[currentQuestion.id] === option.id
                          ? 'main-bg-gradient text-white shadow-lg scale-105'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:scale-105'
                        }
                      `}
                      disabled={answers[currentQuestion.id] !== undefined}
                    >
                      <span className="text-2xl hover:scale-110 transition-transform">{option.emoji}</span>
                      <span className="flex-grow text-lg">
                        {t(currentLocale, option.textKey)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 'results' && (
              <div className="text-center space-y-8">
                <div className="flex justify-center">
                  <span className="text-6xl drop-shadow-lg">🏆</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {t(currentLocale, 'results.title')}
                </h1>

                <p className="text-lg text-gray-300">
                  {t(currentLocale, `results.${score.level}`)}
                </p>

                <div className="flex justify-center gap-8">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-purple-400">{score.percentage}%</p>
                    <p className="text-sm text-gray-400">{t(currentLocale, 'results.percentage')}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-cyan-400">{score.performance}</p>
                    <p className="text-sm text-gray-400">{t(currentLocale, 'results.performance')}</p>
                  </div>
                </div>

                <div className="bg-gray-700/50 rounded-xl p-6 border border-gray-600/50">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center justify-center gap-2">
                    <span>❤️</span>
                    {t(currentLocale, 'results.suggestedActivities')}
                  </h3>
                  <p className={`text-gray-300 ${isRTL ? '' : 'text-left'}`}>
                    {t(currentLocale, 'results.suggestedText')}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={retakeQuiz}
                    className="main-bg-gradient text-white font-bold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all border-none cursor-pointer text-lg"
                  >
                    {t(currentLocale, 'pages.quiz.retakeTest')}
                  </button>
                  <Link
                    href={`/${currentLocale}#who-we-are-section`}
                    className="bg-gray-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-gray-600 hover:shadow-xl hover:scale-105 transition-all text-center no-underline inline-block text-lg"
                  >
                    {t(currentLocale, 'pages.quiz.learnMore')}
                  </Link>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
} 