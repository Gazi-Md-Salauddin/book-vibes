import React from 'react';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black px-4">
      <div className="text-center max-w-md">
        {/* Error Code */}
        <h1 className="text-7xl font-extrabold text-red-500 drop-shadow-lg">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl font-semibold">
          Oops! Page not found
        </h2>

        {/* Description */}
        <p className="mt-2 text-gray-400">
          The page you're looking for doesn’t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="/"
            className="px-5 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 transition duration-300 shadow-md">
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;