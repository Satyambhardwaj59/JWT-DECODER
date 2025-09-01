// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between h-16 items-center">
          {/* Brand */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-white tracking-wide">
              🔐 JWT Decoder
            </h1>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#decode"
              className="text-gray-300 hover:text-white hover:underline underline-offset-4 transition duration-200 font-medium"
            >
              Decode
            </a>
            <a
              href="#time"
              className="text-gray-300 hover:text-white hover:underline underline-offset-4 transition duration-200 font-medium"
            >
              Time
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white hover:underline underline-offset-4 transition duration-200 font-medium"
            >
              About
            </a>
          </div>

          {/* GitHub Button */}
          <div>
            <a
              href="https://github.com/Satyambhardwaj59/JWT-DECODER"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-gray-700 to-gray-600 text-white font-medium shadow-lg hover:from-gray-600 hover:to-gray-500 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
