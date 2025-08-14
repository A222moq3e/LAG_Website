'use client';

import React, { useState } from 'react';
import { t } from '../../../lib/i18n';
import Link from 'next/link';


const characterQuestions = [
  {
    id: 1,
    questionKey: "quizCharacters.q1.question",
    options: [
      {
        id: "1_1",
        emoji: "🏆",
        textKey: "quizCharacters.q1.option1",
        players: ["msdossary", "vejrgang", "manubachoore"],
      },
      { id: "1_2", emoji: "🎭", textKey: "quizCharacters.q1.option2", players: ["magnus", "hikaru", "chovy"] },
      { id: "1_3", emoji: "💥", textKey: "quizCharacters.q1.option3", players: ["aydan", "zsmit", "exnid"] },
      { id: "1_4", emoji: "👥", textKey: "quizCharacters.q1.option4", players: ["trk511", "rw9", "kiileerrz"] },
    ],
  },
  {
    id: 2,
    questionKey: "quizCharacters.q2.question",
    options: [
      {
        id: "2_1",
        emoji: "⚽",
        textKey: "quizCharacters.q2.option1",
        players: ["msdossary", "vejrgang", "manubachoore"],
      },
      { id: "2_2", emoji: "🔫", textKey: "quizCharacters.q2.option2", players: ["aydan", "zsmit", "exnid"] },
      { id: "2_3", emoji: "🧠", textKey: "quizCharacters.q2.option3", players: ["magnus", "hikaru", "chovy"] },
      { id: "2_4", emoji: "🚗", textKey: "quizCharacters.q2.option4", players: ["trk511", "rw9", "kiileerrz"] },
    ],
  },
  {
    id: 3,
    questionKey: "quizCharacters.q3.question",
    options: [
      { id: "3_1", emoji: "🤔", textKey: "quizCharacters.q3.option1", players: ["magnus", "hikaru", "chovy"] },
      { id: "3_2", emoji: "🔥", textKey: "quizCharacters.q3.option2", players: ["aydan", "zsmit", "exnid"] },
      { id: "3_3", emoji: "😅", textKey: "quizCharacters.q3.option3", players: ["almond", "ruler", "kiin"] },
      { id: "3_4", emoji: "😤", textKey: "quizCharacters.q3.option4", players: ["trk511", "rw9", "kiileerrz"] },
    ],
  },
  {
    id: 4,
    questionKey: "quizCharacters.q4.question",
    options: [
      { id: "4_1", emoji: "⏱", textKey: "quizCharacters.q4.option1", players: ["almond", "ruler", "kiin"] },
      {
        id: "4_2",
        emoji: "⏱",
        textKey: "quizCharacters.q4.option2",
        players: ["msdossary", "vejrgang", "manubachoore"],
      },
      { id: "4_3", emoji: "⏱", textKey: "quizCharacters.q4.option3", players: ["magnus", "hikaru", "chovy"] },
      { id: "4_4", emoji: "⏱", textKey: "quizCharacters.q4.option4", players: ["trk511", "rw9", "kiileerrz"] },
    ],
  },
  {
    id: 5,
    questionKey: "quizCharacters.q5.question",
    options: [
      { id: "5_1", emoji: "🧠", textKey: "quizCharacters.q5.option1", players: ["magnus", "hikaru", "chovy"] },
      { id: "5_2", emoji: "⚡", textKey: "quizCharacters.q5.option2", players: ["aydan", "zsmit", "exnid"] },
      {
        id: "5_3",
        emoji: "🎯",
        textKey: "quizCharacters.q5.option3",
        players: ["msdossary", "vejrgang", "manubachoore"],
      },
      { id: "5_4", emoji: "😎", textKey: "quizCharacters.q5.option4", players: ["trk511", "rw9", "almond"] },
    ],
  },
  {
    id: 6,
    questionKey: "quizCharacters.q6.question",
    options: [
      { id: "6_1", emoji: "🌅", textKey: "quizCharacters.q6.option1", players: ["msdossary", "magnus", "hikaru"] },
      { id: "6_2", emoji: "🌇", textKey: "quizCharacters.q6.option2", players: ["chovy", "ruler", "kiin"] },
      { id: "6_3", emoji: "🌙", textKey: "quizCharacters.q6.option3", players: ["aydan", "zsmit", "exnid"] },
      { id: "6_4", emoji: "⏰", textKey: "quizCharacters.q6.option4", players: ["trk511", "rw9", "kiileerrz"] },
    ],
  },
  {
    id: 7,
    questionKey: "quizCharacters.q7.question",
    options: [
      { id: "7_1", emoji: "📋", textKey: "quizCharacters.q7.option1", players: ["magnus", "hikaru", "chovy"] },
      {
        id: "7_2",
        emoji: "🎯",
        textKey: "quizCharacters.q7.option2",
        players: ["msdossary", "vejrgang", "manubachoore"],
      },
      { id: "7_3", emoji: "😎", textKey: "quizCharacters.q7.option3", players: ["almond", "ruler", "kiin"] },
      { id: "7_4", emoji: "🔥", textKey: "quizCharacters.q7.option4", players: ["trk511", "rw9", "kiileerrz"] },
    ],
  },
  {
    id: 8,
    questionKey: "quizCharacters.q8.question",
    options: [
      { id: "8_1", emoji: "🤝", textKey: "quizCharacters.q8.option1", players: ["chovy", "ruler", "kiin"] },
      { id: "8_2", emoji: "⚡", textKey: "quizCharacters.q8.option2", players: ["aydan", "zsmit", "exnid"] },
      { id: "8_3", emoji: "🧠", textKey: "quizCharacters.q8.option3", players: ["magnus", "hikaru", "msdossary"] },
      { id: "8_4", emoji: "🏆", textKey: "quizCharacters.q8.option4", players: ["trk511", "rw9", "vejrgang"] },
    ],
  },
  {
    id: 9,
    questionKey: "quizCharacters.q9.question",
    options: [
      { id: "9_1", emoji: "💪", textKey: "quizCharacters.q9.option1", players: ["aydan", "zsmit", "exnid"] },
      { id: "9_2", emoji: "🧩", textKey: "quizCharacters.q9.option2", players: ["magnus", "hikaru", "chovy"] },
      { id: "9_3", emoji: "😂", textKey: "quizCharacters.q9.option3", players: ["trk511", "rw9", "almond"] },
      {
        id: "9_4",
        emoji: "🔄",
        textKey: "quizCharacters.q9.option4",
        players: ["msdossary", "vejrgang", "manubachoore"],
      },
    ],
  },
  {
    id: 10,
    questionKey: "quizCharacters.q10.question",
    options: [
      {
        id: "10_1",
        emoji: "🏆",
        textKey: "quizCharacters.q10.option1",
        players: ["msdossary", "vejrgang", "manubachoore"],
      },
      { id: "10_2", emoji: "🧠", textKey: "quizCharacters.q10.option2", players: ["magnus", "hikaru", "chovy"] },
      { id: "10_3", emoji: "💥", textKey: "quizCharacters.q10.option3", players: ["aydan", "zsmit", "exnid"] },
      { id: "10_4", emoji: "😎", textKey: "quizCharacters.q10.option4", players: ["trk511", "rw9", "almond"] },
    ],
  },
]

const playersData = {
  trk511: {
    nameKey: "quizCharacters.players.trk511.name",
    teamKey: "quizCharacters.players.trk511.team",
    gameKey: "quizCharacters.players.trk511.game",
    descKey: "quizCharacters.players.trk511.description",
  },
  rw9: {
    nameKey: "quizCharacters.players.rw9.name",
    teamKey: "quizCharacters.players.rw9.team",
    gameKey: "quizCharacters.players.rw9.game",
    descKey: "quizCharacters.players.rw9.description",
  },
  kiileerrz: {
    nameKey: "quizCharacters.players.kiileerrz.name",
    teamKey: "quizCharacters.players.kiileerrz.team",
    gameKey: "quizCharacters.players.kiileerrz.game",
    descKey: "quizCharacters.players.kiileerrz.description",
  },
  msdossary: {
    nameKey: "quizCharacters.players.msdossary.name",
    teamKey: "quizCharacters.players.msdossary.team",
    gameKey: "quizCharacters.players.msdossary.game",
    descKey: "quizCharacters.players.msdossary.description",
  },
  aydan: {
    nameKey: "quizCharacters.players.aydan.name",
    teamKey: "quizCharacters.players.aydan.team",
    gameKey: "quizCharacters.players.aydan.game",
    descKey: "quizCharacters.players.aydan.description",
  },
  zsmit: {
    nameKey: "quizCharacters.players.zsmit.name",
    teamKey: "quizCharacters.players.zsmit.team",
    gameKey: "quizCharacters.players.zsmit.game",
    descKey: "quizCharacters.players.zsmit.description",
  },
  almond: {
    nameKey: "quizCharacters.players.almond.name",
    teamKey: "quizCharacters.players.almond.team",
    gameKey: "quizCharacters.players.almond.game",
    descKey: "quizCharacters.players.almond.description",
  },
  magnus: {
    nameKey: "quizCharacters.players.magnus.name",
    teamKey: "quizCharacters.players.magnus.team",
    gameKey: "quizCharacters.players.magnus.game",
    descKey: "quizCharacters.players.magnus.description",
  },
  hikaru: {
    nameKey: "quizCharacters.players.hikaru.name",
    teamKey: "quizCharacters.players.hikaru.team",
    gameKey: "quizCharacters.players.hikaru.game",
    descKey: "quizCharacters.players.hikaru.description",
  },
  chovy: {
    nameKey: "quizCharacters.players.chovy.name",
    teamKey: "quizCharacters.players.chovy.team",
    gameKey: "quizCharacters.players.chovy.game",
    descKey: "quizCharacters.players.chovy.description",
  },
  ruler: {
    nameKey: "quizCharacters.players.ruler.name",
    teamKey: "quizCharacters.players.ruler.team",
    gameKey: "quizCharacters.players.ruler.game",
    descKey: "quizCharacters.players.ruler.description",
  },
  manubachoore: {
    nameKey: "quizCharacters.players.manubachoore.name",
    teamKey: "quizCharacters.players.manubachoore.team",
    gameKey: "quizCharacters.players.manubachoore.game",
    descKey: "quizCharacters.players.manubachoore.description",
  },
  vejrgang: {
    nameKey: "quizCharacters.players.vejrgang.name",
    teamKey: "quizCharacters.players.vejrgang.team",
    gameKey: "quizCharacters.players.vejrgang.game",
    descKey: "quizCharacters.players.vejrgang.description",
  },
  exnid: {
    nameKey: "quizCharacters.players.exnid.name",
    teamKey: "quizCharacters.players.exnid.team",
    gameKey: "quizCharacters.players.exnid.game",
    descKey: "quizCharacters.players.exnid.description",
  },
  kiin: {
    nameKey: "quizCharacters.players.kiin.name",
    teamKey: "quizCharacters.players.kiin.team",
    gameKey: "quizCharacters.players.kiin.game",
    descKey: "quizCharacters.players.kiin.description",
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
                    <p className="text-sm text-gray-400">{t(currentLocale, "quiz.progressLabel")}</p>
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
                    {interpolate(t(currentLocale, "quiz.questionCounter"), {
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
