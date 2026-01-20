import React, { useState } from "react";
import { Link } from "react-router-dom";

const AdvancedLevel = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [result, setResult] = useState({});

  const questions = [
    {
      question: "What type of images does ASTER capture?",
      options: [
        "Only visible light images",
        "Multispectral and thermal infrared images",
        "Radar and microwave images",
        "Satellite video recordings",
      ],
      answer: 1,
    },
    {
      question: "What is the main contribution of CERES?",
      options: [
        "It studies volcanoes and glaciers",
        "It measures Earth's magnetic field",
        "It provides data on Earth’s energy budget for climate models",
        "It records earthquakes",
      ],
      answer: 2,
    },
    {
      question: "How does MISR collect its data?",
      options: [
        "Using only one camera angle",
        "By nine different viewing angles",
        "Through underwater sensors",
        "By ground-based telescopes",
      ],
      answer: 1,
    },
    {
      question: "What does MISR study about aerosols?",
      options: [
        "Their temperature only",
        "Their color",
        "Their particle sizes and movement across regions",
        "Their effects on ocean salinity",
      ],
      answer: 2,
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
      <h1 className="text-4xl font-bold mb-8">Advanced Level</h1>

      {/* 🎥 الفيديو */}
      <video
        controls
        className="w-full max-w-3xl rounded-xl shadow-lg mb-10"
      >
        <source src="/videos/advanced-level.mp4" type="video/mp4" />
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

export default AdvancedLevel;