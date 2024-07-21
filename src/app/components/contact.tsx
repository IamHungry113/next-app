import React from "react";

export const SignUpPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-center">
        <p className="text-sm text-gray-500 mb-2">LAUNCHING 2025</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Grow your users.
          <br />
          Smarter.
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter email"
            className="p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Sign Up Now
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          We care about your data in our{" "}
          <a href="/privacy-policy" className="text-blue-500 underline">
            privacy policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};
