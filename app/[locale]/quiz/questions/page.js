'use client';

import React, { useState } from 'react';
import { t } from '../../../lib/i18n';
import { quizQuestions } from '../../../data/quizQuestions';
import Link from 'next/link';

function interpolate(str, variables = {}) {
  if (typeof str !== 'string') return str;
  return str.replace(/\{(\w+)\}/g, (_, key) => variables[key] ?? `{${key}}`);
}

export default function QuizQuestions({ params }) {
  // Get the current locale from params 
  const { locale } = React.use(params) || {};
  const currentLocale = locale || 'ar';
  const isRTL = currentLocale === 'ar';

  // State for quiz progress and answers
  const [currentStep, setCurrentStep] = useState('quiz');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  // Get the current question object
  const currentQuestion = quizQuestions[currentQuestionIndex];

  // Handle answer selection and move to next question or results
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

  // Reset the quiz to the beginning
  const retakeQuiz = () => {
    setCurrentStep('quiz');
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  // Mapping: each game to a unique set of 5 answers
  const exclusiveAnswerMappings = [
    { answers: ['Q1A', 'Q3B', 'Q6A', 'Q8A', 'Q10A'], games: ['Apex Legends', 'Valorant'] },
    { answers: ['Q1A', 'Q3B', 'Q4A', 'Q6A', 'Q8A'], games: ['COD/Warzone'] },
    { answers: ['Q1B', 'Q2D', 'Q3A', 'Q4A', 'Q10D'], games: ['Dota 2'] },
    { answers: ['Q1B', 'Q2A', 'Q3A', 'Q4A', 'Q10D'], games: ['League of Legends'] },
    { answers: ['Q1B', 'Q2A', 'Q4A', 'Q5A', 'Q10A'], games: ['CS2'] },
    { answers: ['Q1B', 'Q2A', 'Q4A', 'Q5A', 'Q10D'], games: ['R6 Siege'] },
    { answers: ['Q1A', 'Q2A', 'Q3B', 'Q8B', 'Q10A'], games: ['Overwatch 2'] },
    { answers: ['Q1C', 'Q2C', 'Q3C', 'Q4B', 'Q10C'], games: ['Rocket League'] },
    { answers: ['Q1C', 'Q3C', 'Q4C', 'Q8C', 'Q10C'], games: ['EA FC 25'] },
    { answers: ['Q1C', 'Q4C', 'Q6B', 'Q8C', 'Q10C'], games: ['Rennsport'] },
    { answers: ['Q1E', 'Q3E', 'Q4C', 'Q5B', 'Q10B'], games: ['Chess'] },
    { answers: ['Q1E', 'Q3A', 'Q4A', 'Q5A', 'Q10B'], games: ['TFT'] },
    { answers: ['Q1E', 'Q3E', 'Q4C', 'Q5B', 'Q10B'], games: ['StarCraft II'] },
    { answers: ['Q1D', 'Q2B', 'Q3D', 'Q5B', 'Q10C'], games: ['Tekken 8'] },
    { answers: ['Q1D', 'Q2B', 'Q3D', 'Q5B', 'Q10C'], games: ['Street Fighter 6'] },
    { answers: ['Q1A', 'Q7A', 'Q3C', 'Q6A', 'Q10A'], games: ['Free Fire'] },
    { answers: ['Q1A', 'Q7A', 'Q3C', 'Q6A', 'Q10A'], games: ['Mobile Legends'] },
    { answers: ['Q1A', 'Q7A', 'Q4B', 'Q6A', 'Q10A'], games: ['PUBG Mobile'] },
    { answers: ['Q1A', 'Q7A', 'Q4B', 'Q6A', 'Q10A'], games: ['PUBG Battlegrounds'] },
  ];

  // Convert user's answers to IDs like Q1A, Q2B, and so on.
  const userAnswerIds = quizQuestions.map(q => {
    const selected = answers[q.id];
    if (!selected) return null;
    const [qStr, optIdxStr] = selected.split('_');
    const qNum = q.id;
    const optIdx = parseInt(optIdxStr, 10);
    const optLetter = String.fromCharCode(64 + optIdx); // 1->A, 2->B, and so on.
    return `Q${qNum}${optLetter}`;
  }).filter(Boolean);

  // Helper to compare two arrays regardless of order
  function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    const sortedA = [...a].sort();
    const sortedB = [...b].sort();
    return sortedA.every((val, idx) => val === sortedB[idx]);
  }

  // Find exact matches (all 5 answers match)
  let strictMatchGames = [];
  for (const mapping of exclusiveAnswerMappings) {
    if (arraysEqual(userAnswerIds, mapping.answers)) {
      strictMatchGames.push(...mapping.games);
    }
  }
  strictMatchGames = [...new Set(strictMatchGames)];

  // If no exact match, find close matches (4/5 answers match)
  let closeMatchGames = [];
  if (strictMatchGames.length === 0) {
    for (const mapping of exclusiveAnswerMappings) {
      const matches = mapping.answers.filter(ans => userAnswerIds.includes(ans)).length;
      if (matches === 4) {
        closeMatchGames.push(...mapping.games);
      }
    }
    closeMatchGames = [...new Set(closeMatchGames)];
  }

  // Use strict match if found, otherwise close match, otherwise fallback
  const topGames = strictMatchGames.length > 0
    ? strictMatchGames.map(game => ({ game }))
    : closeMatchGames.length > 0
      ? closeMatchGames.map(game => ({ game }))
      : [];

  // Game group mapping for recommendation text
  const gameGroupMap = {
    'Apex Legends': 'battle_royale',
    'COD/Warzone': 'battle_royale',
    'Free Fire': 'battle_royale',
    'PUBG Mobile': 'battle_royale',
    'PUBG Battlegrounds': 'battle_royale',
    'Tekken 8': 'fighting',
    'Street Fighter 6': 'fighting',
    'Mobile Legends': 'mobile',
    'Dota 2': 'moba',
    'League of Legends': 'moba',
    'TFT': 'moba',
    'Rocket League': 'sports',
    'EA FC 25': 'football',
    'Rennsport': 'racing',
    'Chess': 'strategy',
    'StarCraft II': 'strategy',
    'R6 Siege': 'tactical_shooter',
    'CS2': 'tactical_shooter',
    'Overwatch 2': 'tactical_shooter',
  };

  // Friendly, modern group recommendation paragraphs
  const groupRecommendations = {
    battle_royale: 'You love the thrill of fast-paced action and outsmarting everyone to be the last one standing. Battle royale games are totally your vibe!',
    fighting: 'You’re all about epic showdowns and pulling off awesome combos. Fighting games are where you shine!',
    mobile: 'You like to play anywhere, anytime. Mobile games are perfect for your on-the-go lifestyle!',
    moba: 'You’re a team player who loves big battles and smart moves. MOBA games are made for you!',
    sports: 'You have a competitive edge and love the rush of a close match. Sports games are your thing!',
    football: 'You live for the excitement of football matches and scoring the winning goal. Football games are your passion!',
    racing: 'Speed is your thing! Racing games like Rennsport get your adrenaline pumping.',
    strategy: 'You’re a thinker who loves planning ahead and outsmarting the competition. Strategy games are your playground!',
    tactical_shooter: 'You’re quick, precise, and love working with a team. Tactical shooters are right up your alley!',
  };

  // Helper to bold top games in the recommendation text
  const boldGamesInText = (text, games) => {
    if (!text) return text;
    let result = text;
    games.forEach(({ game }) => {
      const escaped = game.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(`(${escaped})`, 'g');
      result = result.replace(regex, '<span class="font-bold">$1</span>');
    });
    return result;
  };

  // Build a friendly recommendation string for the top game group
  const getGroupRecommendation = () => {
    if (!topGames.length) return '';
    const topGame = topGames[0].game;
    const group = gameGroupMap[topGame] || topGame;
    const baseText = groupRecommendations[group] || `You’ve got your own style, and ${topGame} totally matches your energy!`;
    const gamesList = topGames.map(g => g.game).join(', ');
    return `${baseText} Your top recommended games: ${gamesList}.`;
  };

  // Get the recommendation text for each top game from the translation file
  const getGameRecommendationText = () => {
    if (!topGames.length) return '';
    // If multiple games, join their recommendations
    return topGames.map(g => t(currentLocale, `gameRecommendations.${g.game}`)).join(' ');
  };

  const improvedRecommendation = getGroupRecommendation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900">
      <div className="flex justify-center items-center min-h-screen p-4">
        <div className="w-full max-w-2xl">
          <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-600/50">
            {/* Quiz step: showing current question and options */}
            {currentStep === 'quiz' && (
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
                    {interpolate(
                      t(currentLocale, 'quiz.questionCounter'),
                      { current: currentQuestionIndex + 1, total: quizQuestions.length }
                    )}
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

            {/* Results step: showing recommendations and top games */}
            {currentStep === 'results' && (
              <div className="text-center space-y-8">
                <div className="flex justify-center mb-8">
                  <span className="text-6xl drop-shadow-lg">🏆</span>
                </div>

                <h1 className="mt-4 text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent leading-[1.3] md:leading-[1.3] drop-shadow-lg">
                  {t(currentLocale, 'results.title')}
                </h1>

                {/* Showing top games */}
                <div className="bg-gray-700/50 rounded-xl p-6 border border-gray-600/50 mb-4">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center justify-center gap-2">
                    <span>🥇</span>
                    {t(currentLocale, 'results.suggestedActivities')}
                  </h3>
                  <div className="space-y-2">
                    {topGames.length === 0 ? (
                      <div className="text-gray-400 text-lg font-normal flex items-center justify-center">{t(currentLocale, 'gameRecommendations.noMatch')}</div>
                    ) : (
                      topGames.map(({ game }) => (
                        <div key={game} className="text-cyan-400 text-lg font-bold flex gap-2 items-center justify-center">
                          <span>{t(currentLocale, `gameNames.${game}`)}</span>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Showing game recommendation */}
                <div className="bg-gray-700/50 rounded-xl p-6 border border-gray-600/50">
                  <h3 className="text-xl font-semibold text-white mb-3 flex items-center justify-center gap-2">
                    <span>🎮</span>
                    {t(currentLocale, 'gameRecommendations.title')}
                  </h3>
                  {topGames.length === 0 ? (
                    <p className={`text-gray-400 ${isRTL ? 'text-right' : 'text-left'}`}>{t(currentLocale, 'gameRecommendations.noMatch')}</p>
                  ) : (
                    <p className={`text-gray-300 ${isRTL ? 'text-right' : 'text-left'}`} dangerouslySetInnerHTML={{ __html: boldGamesInText(getGameRecommendationText(), topGames.map(g => ({ game: t(currentLocale, `gameNames.${g.game}`) }))) }} />
                  )}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={retakeQuiz}
                    className="main-bg-gradient text-white font-bold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all border-none cursor-pointer text-lg"
                  >
                    {t(currentLocale, 'pages.quiz.retakeTest')}
                  </button>
                  <Link
                    href={`/${currentLocale}/about-us`}
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