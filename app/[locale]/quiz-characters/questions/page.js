'use client';

import React, { useState } from 'react';
import { t } from '../../../lib/i18n';
import Link from 'next/link';
const characterQuestions = [
  {
    id: 1,
    questionKey: "quizCharacters.q1.question",
    options: [
      { id: "1_1", emoji: "🏆", textKey: "quizCharacters.q1.options.a", players: ["s1mple", "faker", "shroud"] },
      { id: "1_2", emoji: "🎭", textKey: "quizCharacters.q1.options.b", players: ["device", "rekkles", "coldzera"] },
      { id: "1_3", emoji: "💥", textKey: "quizCharacters.q1.options.c", players: ["ninja", "tfue", "uzi"] },
      { id: "1_4", emoji: "👥", textKey: "quizCharacters.q1.options.d", players: ["caps", "scream", "tenz"] },
    ],
  },
  {
    id: 2,
    questionKey: "quizCharacters.q2.question",
    options: [
      { id: "2_1", emoji: "⚽", textKey: "quizCharacters.q2.options.a", players: ["s1mple", "faker", "device"] },
      { id: "2_2", emoji: "🔫", textKey: "quizCharacters.q2.options.b", players: ["shroud", "coldzera", "rekkles"] },
      { id: "2_3", emoji: "🧠", textKey: "quizCharacters.q2.options.c", players: ["ninja", "caps", "scream"] },
      { id: "2_4", emoji: "🚗", textKey: "quizCharacters.q2.options.d", players: ["tfue", "tenz", "uzi"] },
    ],
  },
  {
    id: 3,
    questionKey: "quizCharacters.q3.question",
    options: [
      { id: "3_1", emoji: "🤔", textKey: "quizCharacters.q3.options.a", players: ["faker", "caps", "perkz"] },
      { id: "3_2", emoji: "🔥", textKey: "quizCharacters.q3.options.b", players: ["rekkles", "device", "coldzera"] },
      { id: "3_3", emoji: "😅", textKey: "quizCharacters.q3.options.c", players: ["s1mple", "ninja", "uzi"] },
      { id: "3_4", emoji: "😤", textKey: "quizCharacters.q3.options.d", players: ["shroud", "scream", "tenz"] },
    ],
  },
  {
    id: 4,
    questionKey: "quizCharacters.q4.question",
    options: [
      { id: "4_1", emoji: "⏱", textKey: "quizCharacters.q4.options.a", players: ["s1mple", "ninja", "tfue"] },
      { id: "4_2", emoji: "⏱", textKey: "quizCharacters.q4.options.b", players: ["faker", "device", "rekkles"] },
      { id: "4_3", emoji: "⏱", textKey: "quizCharacters.q4.options.c", players: ["shroud", "caps", "anomaly"] },
      { id: "4_4", emoji: "⏱", textKey: "quizCharacters.q4.options.d", players: ["coldzera", "scream", "tenz"] },
    ],
  },
  {
    id: 5,
    questionKey: "quizCharacters.q5.question",
    options: [
      { id: "5_1", emoji: "🧠", textKey: "quizCharacters.q5.options.a", players: ["tenz", "scream", "s1mple"] },
      { id: "5_2", emoji: "⚡", textKey: "quizCharacters.q5.options.b", players: ["faker", "caps", "theshy"] },
      { id: "5_3", emoji: "🎯", textKey: "quizCharacters.q5.options.c", players: ["device", "rekkles", "coldzera"] },
      { id: "5_4", emoji: "😎", textKey: "quizCharacters.q5.options.d", players: ["ninja", "tfue", "anomaly"] },
    ],
  },
  {
    id: 6,
    questionKey: "quizCharacters.q6.question",
    options: [
      { id: "6_1", emoji: "🌅", textKey: "quizCharacters.q6.options.a", players: ["s1mple", "faker", "shroud"] },
      { id: "6_2", emoji: "🌇", textKey: "quizCharacters.q6.options.b", players: ["ninja", "caps", "perkz"] },
      { id: "6_3", emoji: "🌙", textKey: "quizCharacters.q6.options.c", players: ["device", "rekkles", "coldzera"] },
      { id: "6_4", emoji: "⏰", textKey: "quizCharacters.q6.options.d", players: ["tfue", "tenz", "anomaly"] },
    ],
  },
  {
    id: 7,
    questionKey: "quizCharacters.q7.question",
    options: [
      { id: "7_1", emoji: "📋", textKey: "quizCharacters.q7.options.a", players: ["s1mple", "ninja", "uzi"] },
      { id: "7_2", emoji: "🎯", textKey: "quizCharacters.q7.options.b", players: ["faker", "device", "rekkles"] },
      { id: "7_3", emoji: "😎", textKey: "quizCharacters.q7.options.c", players: ["caps", "scream", "tenz"] },
      { id: "7_4", emoji: "🔥", textKey: "quizCharacters.q7.options.d", players: ["shroud", "tfue", "theshy"] },
    ],
  },
  {
    id: 8,
    questionKey: "quizCharacters.q8.question",
    options: [
      { id: "8_1", emoji: "🤝", textKey: "quizCharacters.q8.options.a", players: ["s1mple", "ninja", "tfue"] },
      { id: "8_2", emoji: "⚡", textKey: "quizCharacters.q8.options.b", players: ["faker", "caps", "theshy"] },
      { id: "8_3", emoji: "🧠", textKey: "quizCharacters.q8.options.c", players: ["shroud", "scream", "tenz"] },
      { id: "8_4", emoji: "🏆", textKey: "quizCharacters.q8.options.d", players: ["device", "rekkles", "coldzera"] },
    ],
  },
  {
    id: 9,
    questionKey: "quizCharacters.q9.question",
    options: [
      { id: "9_1", emoji: "💪", textKey: "quizCharacters.q9.options.a", players: ["s1mple", "ninja", "uzi"] },
      { id: "9_2", emoji: "🧩", textKey: "quizCharacters.q9.options.b", players: ["device", "rekkles", "anomaly"] },
      { id: "9_3", emoji: "😂", textKey: "quizCharacters.q9.options.c", players: ["caps", "scream", "tenz"] },
      { id: "9_4", emoji: "🔄", textKey: "quizCharacters.q9.options.d", players: ["faker", "tfue", "theshy"] },
    ],
  },
  {
    id: 10,
    questionKey: "quizCharacters.q10.question",
    options: [
      { id: "10_1", emoji: "🏆", textKey: "quizCharacters.q10.options.a", players: ["s1mple", "ninja", "uzi"] },
      { id: "10_2", emoji: "🧠", textKey: "quizCharacters.q10.options.b", players: ["faker", "caps", "perkz"] },
      { id: "10_3", emoji: "💥", textKey: "quizCharacters.q10.options.c", players: ["shroud", "tfue", "theshy"] },
      { id: "10_4", emoji: "😎", textKey: "quizCharacters.q10.options.d", players: ["device", "scream", "tenz"] },
    ],
  },
]

const playersData = {
  s1mple: {
    nameKey: "quizCharacters.players.s1mple.name",
    teamKey: "quizCharacters.players.s1mple.team",
    gameKey: "quizCharacters.players.s1mple.game",
    descKey: "quizCharacters.players.s1mple.description",
  },
  faker: {
    nameKey: "quizCharacters.players.faker.name",
    teamKey: "quizCharacters.players.faker.team",
    gameKey: "quizCharacters.players.faker.game",
    descKey: "quizCharacters.players.faker.description",
  },
  shroud: {
    nameKey: "quizCharacters.players.shroud.name",
    teamKey: "quizCharacters.players.shroud.team",
    gameKey: "quizCharacters.players.shroud.game",
    descKey: "quizCharacters.players.shroud.description",
  },
  ninja: {
    nameKey: "quizCharacters.players.ninja.name",
    teamKey: "quizCharacters.players.ninja.team",
    gameKey: "quizCharacters.players.ninja.game",
    descKey: "quizCharacters.players.ninja.description",
  },
  uzi: {
    nameKey: "quizCharacters.players.uzi.name",
    teamKey: "quizCharacters.players.uzi.team",
    gameKey: "quizCharacters.players.uzi.game",
    descKey: "quizCharacters.players.uzi.description",
  },
  coldzera: {
    nameKey: "quizCharacters.players.coldzera.name",
    teamKey: "quizCharacters.players.coldzera.team",
    gameKey: "quizCharacters.players.coldzera.game",
    descKey: "quizCharacters.players.coldzera.description",
  },
  caps: {
    nameKey: "quizCharacters.players.caps.name",
    teamKey: "quizCharacters.players.caps.team",
    gameKey: "quizCharacters.players.caps.game",
    descKey: "quizCharacters.players.caps.description",
  },
  tfue: {
    nameKey: "quizCharacters.players.tfue.name",
    teamKey: "quizCharacters.players.tfue.team",
    gameKey: "quizCharacters.players.tfue.game",
    descKey: "quizCharacters.players.tfue.description",
  },
  device: {
    nameKey: "quizCharacters.players.device.name",
    teamKey: "quizCharacters.players.device.team",
    gameKey: "quizCharacters.players.device.game",
    descKey: "quizCharacters.players.device.description",
  },
  rekkles: {
    nameKey: "quizCharacters.players.rekkles.name",
    teamKey: "quizCharacters.players.rekkles.team",
    gameKey: "quizCharacters.players.rekkles.game",
    descKey: "quizCharacters.players.rekkles.description",
  },
  scream: {
    nameKey: "quizCharacters.players.scream.name",
    teamKey: "quizCharacters.players.scream.team",
    gameKey: "quizCharacters.players.scream.game",
    descKey: "quizCharacters.players.scream.description",
  },
  tenz: {
    nameKey: "quizCharacters.players.tenz.name",
    teamKey: "quizCharacters.players.tenz.team",
    gameKey: "quizCharacters.players.tenz.game",
    descKey: "quizCharacters.players.tenz.description",
  },
  anomaly: {
    nameKey: "quizCharacters.players.anomaly.name",
    teamKey: "quizCharacters.players.anomaly.team",
    gameKey: "quizCharacters.players.anomaly.game",
    descKey: "quizCharacters.players.anomaly.description",
  },
  theshy: {
    nameKey: "quizCharacters.players.theshy.name",
    teamKey: "quizCharacters.players.theshy.team",
    gameKey: "quizCharacters.players.theshy.game",
    descKey: "quizCharacters.players.theshy.description",
  },
  perkz: {
    nameKey: "quizCharacters.players.perkz.name",
    teamKey: "quizCharacters.players.perkz.team",
    gameKey: "quizCharacters.players.perkz.game",
    descKey: "quizCharacters.players.perkz.description",
  },
}

function interpolate(str, variables = {}) {
  if (typeof str !== "string") return str
  return str.replace(/\{(\w+)\}/g, (_, key) => variables[key] ?? `{${key}}`)
}

export default function QuizCharactersQuestions({ params }) {
  const { locale } = React.use(params) || {}
  const currentLocale = locale || "ar"
  const isRTL = currentLocale === "ar"

  const [currentStep, setCurrentStep] = useState("quiz")
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState({})

  const currentQuestion = characterQuestions[currentQuestionIndex]

  const selectAnswer = (questionId, optionId) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }))
    setTimeout(() => {
      if (currentQuestionIndex < characterQuestions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1)
      } else {
        setCurrentStep("results")
      }
    }, 300)
  }

  const retakeQuiz = () => {
    setCurrentStep("quiz")
    setCurrentQuestionIndex(0)
    setAnswers({})
  }

  const calculatePlayerScores = () => {
    const scores = {}

    // Initialize points for all players
    Object.keys(playersData).forEach((player) => {
      scores[player] = 0
    })

    // Calculate points based on answers
    characterQuestions.forEach((question) => {
      const selectedOptionId = answers[question.id]
      if (selectedOptionId) {
        const selectedOption = question.options.find((opt) => opt.id === selectedOptionId)
        if (selectedOption) {
          selectedOption.players.forEach((player) => {
            scores[player] = (scores[player] || 0) + 1
          })
        }
      }
    })

    return scores
  }

  const getTopPlayer = () => {
    const scores = calculatePlayerScores()
    let topPlayer = null
    let maxScore = 0

    Object.entries(scores).forEach(([player, score]) => {
      if (score > maxScore) {
        maxScore = score
        topPlayer = player
      }
    })

    return {
      player: topPlayer,
      score: maxScore,
      playerData: {
        name: t(currentLocale, playersData[topPlayer]?.nameKey || ""),
        team: t(currentLocale, playersData[topPlayer]?.teamKey || ""),
        game: t(currentLocale, playersData[topPlayer]?.gameKey || ""),
        description: t(currentLocale, playersData[topPlayer]?.descKey || ""),
      },
    }
  }

  const topResult = getTopPlayer()

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-purple-900">
      <div className="flex justify-center items-center min-h-screen p-4">
        <div className="w-full max-w-2xl">
          <div className="bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-600/50">
            {currentStep === "quiz" && (
              <div className="space-y-6">
                <div className={isRTL ? "text-right" : "text-left"}>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm text-gray-400">{t(currentLocale, "quiz.progressLabel") || "التقدم"}</p>
                    <p className="text-sm text-gray-400 font-semibold">
                      {Math.round(((currentQuestionIndex + 1) / characterQuestions.length) * 100)}%
                    </p>
                  </div>
                  <div className="w-full bg-gray-600 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-purple-400 to-cyan-400 h-3 rounded-full transition-all"
                      style={{ width: `${((currentQuestionIndex + 1) / characterQuestions.length) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="text-center space-y-2">
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {t(currentLocale, currentQuestion.questionKey)}
                  </h2>
                  <p className="text-sm text-gray-400">
                    {interpolate(t(currentLocale, "quiz.questionCounter") || "السؤال {current} من {total}", {
                      current: currentQuestionIndex + 1,
                      total: characterQuestions.length,
                    })}
                  </p>
                </div>

                <div className="space-y-4">
                  {currentQuestion.options.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => selectAnswer(currentQuestion.id, option.id)}
                      className={`
                        w-full p-4 rounded-xl transition-all flex items-center gap-4 border-none outline-none
                        ${isRTL ? "text-right" : "text-left"}
                        ${
                          answers[currentQuestion.id] === option.id
                            ? "main-bg-gradient text-white shadow-lg scale-105"
                            : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:scale-105"
                        }
                      `}
                      disabled={answers[currentQuestion.id] !== undefined}
                    >
                      <span className="text-2xl hover:scale-110 transition-transform">{option.emoji}</span>
                      <span className="flex-grow text-lg">{t(currentLocale, option.textKey)}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === "results" && (
              <div className="text-center space-y-8">
                <div className="flex justify-center mb-8">
                  <span className="text-6xl drop-shadow-lg">👑</span>
                </div>

                <h1 className="mt-4 text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent leading-[1.3] md:leading-[1.3] drop-shadow-lg">
                  {currentLocale === "ar" ? "شخصيتك المحترفة" : "Your Professional Character"}
                </h1>

                {topResult.player && (
                  <div className="bg-gray-700/50 rounded-xl p-6 border border-gray-600/50 mb-4">
                    <div className="space-y-4">
                      <div className="text-cyan-400 text-3xl font-bold">{topResult.playerData.name}</div>
                      <div className="text-gray-300 text-lg space-y-2">
                        <div className="flex items-center justify-center gap-2">
                          <span>🎮</span>
                          <span>{topResult.playerData.game}</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <span>⚡</span>
                          <span>{topResult.playerData.team}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="bg-gray-700/50 rounded-xl p-6 border border-gray-600/50">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center justify-center gap-2">
                    <span>✨</span>
                    {currentLocale === "ar" ? "وصف الشخصية" : "Character Description"}
                  </h3>
                  <p className={`text-gray-300 leading-relaxed ${isRTL ? "text-right" : "text-left"}`}>
                    {topResult.playerData.description}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={retakeQuiz}
                    className="main-bg-gradient text-white font-bold py-4 px-8 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all border-none cursor-pointer text-lg"
                  >
                    {t(currentLocale, "quizCharacters.restartButton")}
                  </button>
                  <Link
                    href={`/${locale || "ar"}`}
                    className="bg-gray-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:bg-gray-600 hover:shadow-xl hover:scale-105 transition-all text-center no-underline inline-block text-lg"
                  >
                    {currentLocale === "ar" ? "العودة للرئيسية" : "Back to Home"}
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
