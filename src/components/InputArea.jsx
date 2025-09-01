import React, { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { readFromFile, saveAsFile } from "../utils/fileUtils";

const InputArea = ({ setDecoded }) => {
  const [token, setToken] = useState("");

  // Decode & send both header and payload
  const handleDecode = () => {
    try {
      // jwtDecode only gives payload, so we split header
      const payload = jwtDecode(token);
      const [headerB64] = token.split(".");
      const header = JSON.parse(atob(headerB64));

      const decoded = { header, payload };

      setDecoded(decoded); // update App.jsx state
    } catch (error) {
      alert("Invalid JWT Token: " + error);
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      readFromFile(file, (content) => setToken(content));
    }
  };

  const handleDownload = () => {
    if (!token) {
      alert("Please decode a token first!");
      return;
    }
    try {
      const payload = jwtDecode(token);
      const [headerB64] = token.split(".");
      const header = JSON.parse(atob(headerB64));

      const decoded = { header, payload };

      saveAsFile(decoded); // ✅ download both header+payload
      setDecoded(decoded); // ✅ update UI too
    } catch {
      alert("Invalid JWT Token. Cannot save.");
    }
  };

  return (
    <div
      id="decode"
      className="w-full max-w-2xl flex flex-col mx-auto bg-gray-800 p-6 rounded-2xl shadow-lg"
    >
      <textarea
        className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        rows="4"
        placeholder="Paste your JWT token here..."
        value={token}
        onChange={(e) => setToken(e.target.value)}
      />

      <div className="flex flex-wrap gap-4 mt-4">
        <button
          onClick={handleDecode}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow"
        >
          Decode
        </button>

        <label className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg shadow cursor-pointer">
          Upload Token
          <input type="file" accept=".txt,.jwt" hidden onChange={handleFileUpload} />
        </label>

        <button
          onClick={handleDownload}
          className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg shadow"
        >
          Download JSON
        </button>
      </div>
    </div>
  );
};

export default InputArea;

