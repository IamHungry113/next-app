"use client";
import React, { useState } from "react";

export const Swap = () => {
  const [fromToken, setFromToken] = useState("CHR");
  const [toToken, setToToken] = useState("");
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");

  const handleSwap = () => {
    // Add swap logic here
    console.log(
      `Swapping ${fromAmount} ${fromToken} to ${toAmount} ${toToken}`
    );
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-3xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Swap</h2>
      <p className="text-sm text-gray-500 mb-6">
        Easy way to trade your tokens
      </p>
      <div className="mb-4 border rounded p-2">
        <label className="block text-gray-700 mb-2">From</label>
        <div className="flex">
          <input
            type="number"
            className="flex-1 focus:outline-none "
            value={fromAmount}
            onChange={(e) => setFromAmount(e.target.value)}
            placeholder="0.0"
          />
          <select
            className="focus:outline-none"
            value={fromToken}
            onChange={(e) => setFromToken(e.target.value)}
          >
            <option value="CHR">CHR</option>
            {/* Add more options here */}
          </select>
        </div>
      </div>
      <div className="flex justify-center mb-4">
        <span className="text-gray-500">↓</span>
      </div>
      <div className="mb-6 border rounded p-2">
        <label className="block text-gray-700 mb-2">To</label>
        <div className="flex">
          <input
            type="number"
            className="flex-1 focus:outline-none"
            value={toAmount}
            onChange={(e) => setToAmount(e.target.value)}
            placeholder="0.0"
          />
          <select
            className="focus:outline-none "
            value={toToken}
            onChange={(e) => setToToken(e.target.value)}
          >
            <option value="">Select a token</option>
            {/* Add more options here */}
          </select>
        </div>
      </div>
      <button
        className="mt-6 w-full bg-[#FFF1F2] text-[#F43F5E] p-2 rounded"
        onClick={handleSwap}
      >
        Connect a wallet
      </button>
    </div>
  );
};
