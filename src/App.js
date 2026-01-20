import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaRocket, FaFeatherAlt, FaAtom } from "react-icons/fa";
import EasyLevel from "./pages/EasyLevel";
import MediumLevel from "./pages/MediumLevel";
import AdvancedLevel from "./pages/AdvancedLevel";
import "./index.css"; 
function Home() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex flex-col justify-between overflow-hidden"
      style={{ backgroundImage: "url('/images/stars-bg.png')" }}
    >
      {/* الخلفية المتحركة */}
      <div className="absolute inset-0 bg-[url('/images/stars-bg.png')] bg-cover bg-center animate-stars opacity-80"></div>

      {/* ===== Navbar ===== */}
      <nav className="relative flex justify-between items-center p-6 z-10">
        <div className="flex items-center space-x-2">
          <FaRocket className="text-white text-2xl" />
          <h1 className="text-2xl font-bold text-white tracking-wide">TERRA</h1>
        </div>

        <ul className="flex space-x-6 text-white font-semibold">
          <li><button className="hover:text-yellow-400 transition">Home</button></li>
          <li><button className="hover:text-yellow-400 transition">About</button></li>
          <li><button className="hover:text-yellow-400 transition">Contact</button></li>
        </ul>
      </nav>

      {/* ===== Terra Character & Levels ===== */}
      <div className="relative flex flex-col items-center z-10">
        <img
          src="/images/terra-character.png"
          alt="Terra Character"
          className="w-80 animate-bounce-slow"
          style={{ marginBottom: "-30px" }}
        />

        <p className="text-center text-lg text-yellow-300 mt-4 font-medium">
          🌟 Welcome to TerraNova — Let's explore Earth together! 🌟
        </p>

        <h2 className="text-3xl font-bold text-white mt-6 mb-4 drop-shadow-lg">
          Select Your Journey Level
        </h2>

        {/* Levels */}
        <div className="flex flex-col md:flex-row gap-8 mt-4">
          <Link to="/easy">
            <div className="bg-green-600/30 hover:bg-green-600/50 rounded-2xl p-6 w-48 text-center shadow-lg hover:scale-105 transition cursor-pointer">
              <FaFeatherAlt className="text-3xl mx-auto mb-2 text-green-300" />
              <h3 className="text-white text-xl font-bold">Easy</h3>
            </div>
          </Link>

          <Link to="/medium">
            <div className="bg-yellow-600/30 hover:bg-yellow-600/50 rounded-2xl p-6 w-48 text-center shadow-lg hover:scale-105 transition cursor-pointer">
              <FaAtom className="text-3xl mx-auto mb-2 text-yellow-300" />
              <h3 className="text-white text-xl font-bold">Medium</h3>
            </div>
          </Link>

          <Link to="/advanced">
            <div className="bg-red-600/30 hover:bg-red-600/50 rounded-2xl p-6 w-48 text-center shadow-lg hover:scale-105 transition cursor-pointer">
              <FaRocket className="text-3xl mx-auto mb-2 text-red-300" />
              <h3 className="text-white text-xl font-bold">Advanced</h3>
            </div>
          </Link>
        </div>
      </div>

      {/* ===== Footer ===== */}
      <footer className="relative flex justify-between items-center px-10 py-6 text-sm text-gray-400 z-10">
        <div className="flex items-center space-x-2">
          <img src="/images/nasa-logo.png" alt="NASA" className="w-10 h-10" />
          <p>In collaboration with NASA Space Education</p>
        </div>
        <p className="text-gray-400">© 2025 TerraNova Project</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/easy" element={<EasyLevel />} />
        <Route path="/medium" element={<MediumLevel />} />
        <Route path="/advanced" element={<AdvancedLevel />} />
      </Routes>
    </Router>
  );
}

export default App;

