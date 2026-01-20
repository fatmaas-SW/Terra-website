import React, { useState } from "react";
import { Link } from "react-router-dom";

const MediumLevel = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [result, setResult] = useState({});

  const questions = [
    {
      question: "What is the main purpose of ASTER’s high-resolution images?",
      options: [
        "To track stars and planets",
        "To monitor land use, glaciers, and volcanic eruptions",
        "To measure sunlight",
        "To study sea levels",
      ],
      answer: 1,
    },
    {
      question: "CERES helps scientists understand:",
      options: [
        "The balance between incoming and outgoing energy on Earth",
        "The amount of rainfall in forests",
        "The movement of tectonic plates",
        "The thickness of glaciers",
      ],
      answer: 0,
    },
    {
      question: "MISR helps us learn more about:",
      options: [
        "Radiation and sunlight",
        "Smoke, clouds, and air quality",
        "Forest fires and storms",
        "Ocean waves",
      ],
      answer: 1,
    },
    {
      question: "What does MODIS provide information about every day?",
      options: [
        "Stars and space objects",
        "Oceans, wildfires, storms, and vegetation",
        "Volcano eruptions only",
        "Pollution gases only",
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
      <h1 className="text-4xl font-bold mb-8">Medium Level</h1>

      {/* 🎥 الفيديو */}
      <video
        controls
        className="w-full max-w-3xl rounded-xl shadow-lg mb-10"
      >
        <source src="/videos/medium-level.mp4" type="video/mp4" />
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

export default MediumLevel;