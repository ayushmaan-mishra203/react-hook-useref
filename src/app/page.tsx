// src/app/page.tsx
"use client";

import React, { useRef } from 'react';

const Home: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.value = "Focused!";
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-4">useRef Hook Example</h1>
      <input
        ref={inputRef}
        className="mt-4 p-2 border rounded"
        type="text"
        placeholder="Click the button to focus"
      />
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleButtonClick}
      >
        Focus Input
      </button>
    </div>
  );
};

export default Home;
