import { Link } from "react-router-dom";
import PageNotFoundImage from "../assets/pagenotfoundimage.png";
import { Button } from "../components";
import { useEffect } from "react";

export const PageNotFound = () => {
  useEffect(() => {
    document.title = `Page Not Found | Cinemate`;
  });

  return (
    <main className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <section className="flex flex-col items-center text-center">
        {/* Error Code */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white mb-4">
          404 - Page Not Found
        </h1>

        {/* Subtext */}
        <p className="text-gray-600 dark:text-gray-400 mb-6 text-base sm:text-lg max-w-lg">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Image */}
        <div className="max-w-sm w-full mb-6">
          <img
            className="rounded-lg shadow-md w-full"
            src={PageNotFoundImage}
            alt="404 page not found"
          />
        </div>

        {/* Back Button */}
        <Link to="/">
          <Button>Back to Cinemate</Button>
        </Link>
      </section>
    </main>
  );
};
