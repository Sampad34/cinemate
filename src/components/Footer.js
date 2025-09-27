import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer
      className="fixed bottom-0 left-0 z-20 w-full 
                 bg-white/80 dark:bg-gray-800/80 
                 border-t border-gray-200 dark:border-gray-700 
                 backdrop-blur-md shadow-sm 
                 px-4 sm:px-6 lg:px-8 py-3 
                 flex flex-col sm:flex-row sm:items-center sm:justify-between"
    >
      <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 text-center sm:text-left mb-2 sm:mb-0">
        © 2023{" "}
        <Link to="/" className="hover:underline font-medium">
          Cinemate™
        </Link>{" "}
        All Rights Reserved.
      </span>

      <ul className="flex flex-wrap justify-center sm:justify-end items-center gap-3 sm:gap-6 text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
        <li>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/sampadrb-447435a4/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            YouTube
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Sampad34"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
};
