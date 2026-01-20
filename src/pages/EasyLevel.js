import React, { useState } from "react";
import { Link } from "react-router-dom";

const EasyLevel = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [result, setResult] = useState({});

  const questions = [
    {
      question: "What does the MODIS instrument provide every day?",
      options: [
        "A big picture of oceans, fires, and vegetation",
        "Studies of sunlight and heat",
        "Tracking of gases like carbon monoxide",
        "Views of Earth from different angles",
      ],
      answer: 0,
    },
    {
      question: "According to the text, what does the MOPITT instrument track in the atmosphere?",
      options: [
        "Clouds and air pollution",
        "Sunlight and heat",
        "Gases like carbon monoxide",
        "Mountains and forests",
      ],
      answer: 2,
    },
    {
      question: "How many instruments are mentioned in the text that help observe Earth?",
      options: ["Three", "Four", "Five", "Six"],
      answer: 2,
    },
    {
      question: "What is the overall goal of all the instruments (ASTER, CERES, MISR, MODIS, and MOPITT)?",
      options: [
        "To study other planets",
        "To help scientists keep our Earth safe and healthy",
        "To focus only on weather patterns",
        "To map cities and roads",
      ],
      answer: 1,
    },
  ];

  const handleAnswer = (qIndex, optIndex) => {
    setSelectedAnswers({ ...selectedAnswers, [qIndex]: optIndex });
    setResult({
      ...result,
      [qIndex]: optIndex === questions[qIndex].answer,
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-[url('/images/stars-bg.png')] bg-cover bg-center text-white p-8">
      <h1 className="text-4xl font-bold mb-8">Easy Level</h1>

      {/* 🎥 الفيديو */}
      <video
        controls
        className="w-full max-w-3xl rounded-xl shadow-lg mb-10"
      >
        <source src="/videos/easy-level.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="w-full max-w-3xl space-y-6">
        {questions.map((q, index) => (
          <div key={index} className="bg-white/10 p-6 rounded-xl shadow-lg backdrop-blur-sm">
            <p className="mb-3 font-semibold">{q.question}</p>
            <div className="space-y-2">
              {q.options.map((opt, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(index, i)}
                  className={`block w-full text-left px-4 py-2 rounded-lg transition ${
                    selectedAnswers[index] === i
                      ? result[index]
                        ? "bg-green-500"
                        : "bg-red-500"
                      : "bg-white/20 hover:bg-white/30"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
            {selectedAnswers[index] !== undefined && (
              <p className="mt-3 font-medium">
                {result[index] ? "✅ Correct!" : "❌ Wrong Answer"}
              </p>
            )}
          </div>
        ))}
      </div>

      <Link
        to="/"
        className="mt-10 bg-white/20 hover:bg-white/30 px-6 py-2 rounded-full font-semibold transition"
      >
        ⬅ Back to Home
      </Link>
    </div>
  );
};

export default EasyLevel;