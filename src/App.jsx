// src/App.jsx
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import InputArea from "./components/InputArea";
import PayloadCard from "./components/PayloadCard";
import TimeWidget from "./components/TimeWidget";
import FooterNote from "./components/FooterNote";

const App = () => {
  const [decoded, setDecoded] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <section id="decode" className="text-center">
          <h1 className="text-3xl font-bold mb-6">JWT Decoder</h1>
          <InputArea setDecoded={setDecoded} />
          {decoded && (
            <div className="mt-6">
              <PayloadCard decoded={decoded} />
            </div>
          )}
        </section>

        <section id="time" className="mt-12 flex justify-center">
          <TimeWidget />
        </section>
      </main>

      {/* Footer */}
      <FooterNote />
    </div>
  );
};

export default App;
