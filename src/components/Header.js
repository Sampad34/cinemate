import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo.avif";
import { useEffect, useState } from "react";

export const Header = () => {
  const [hidden, setHidden] = useState(true);
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const activeClass =
    "text-base block py-2 px-3 text-white bg-blue-600 rounded-lg md:bg-transparent md:text-blue-600 md:p-0 dark:text-white";
  const inactiveClass =
    "text-base block py-2 px-3 text-gray-700 rounded-lg hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";

  const handleSubmit = (event) => {
    event.preventDefault();
    const queryTerm = event.target.search.value.trim();
    if (!queryTerm) return;
    event.target.reset();
    navigate(`/search?q=${queryTerm}&page=1`);
  };

  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm sm:px-4 py-3 transition-colors duration-300">
        <div className="flex flex-wrap items-center justify-between mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={Logo}
              className="h-7 sm:h-9 mr-2 rounded"
              alt="Cinemate Logo"
            />
            <span className="self-center text-xl sm:text-2xl font-semibold whitespace-nowrap dark:text-white">
              Cinemate
            </span>
          </Link>

          {/* Right Section */}
          <div id="mobile-nav" className="flex items-center md:order-2 space-x-2">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              type="button"
              className="flex items-center p-2 text-sm sm:text-base text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-600 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-white transition-all"
            >
              {darkMode ? (
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 
                    11-2 0V3a1 1 0 011-1zm4 8a4 4 
                    0 11-8 0 4 4 0 018 0zm-.464 
                    4.95l.707.707a1 1 0 
                    001.414-1.414l-.707-.707a1 1 0 
                    00-1.414 1.414zM17 11a1 1 0 
                    100-2h-1a1 1 0 100 2h1z"
                  ></path>
                </svg>
              ) : (
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 
                  2.707a8.001 8.001 0 1010.586 
                  10.586z"></path>
                </svg>
              )}
            </button>

            {/* Search (Mobile Icon) */}
            <button
              type="button"
              onClick={() => setHidden(!hidden)}
              className="md:hidden p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 
                  1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>

            {/* Desktop Search */}
            <div className="relative hidden md:block">
              <form onSubmit={handleSubmit}>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 
                      1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  name="search"
                  placeholder="Search..."
                  autoComplete="off"
                  className="block w-full sm:w-60 md:w-72 lg:w-80 p-2 pl-10 text-sm rounded-lg border border-gray-300 bg-gray-50 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition"
                />
              </form>
            </div>

            {/* Hamburger Menu */}
            <button
              onClick={() => setHidden(!hidden)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 transition"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
              <span className="sr-only">Open main menu</span>
            </button>
          </div>

          {/* Nav Links */}
          <div
            id="nav-links"
            className={`${hidden ? "hidden" : ""} w-full md:flex md:w-auto md:order-1`}
          >
            {/* Mobile Search */}
            <div className="relative mt-3 md:hidden px-2">
              <form onSubmit={handleSubmit}>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 
                      1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  name="search"
                  placeholder="Search..."
                  autoComplete="off"
                  className="block w-full p-2 pl-10 text-sm rounded-lg border border-gray-300 bg-gray-50 text-gray-900 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition"
                />
              </form>
            </div>

            {/* Navigation Items */}
            <ul className="flex flex-col p-4 md:p-0 mt-4 md:mt-0 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              <li>
                <NavLink to="/" end className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/movies/popular?page=1" className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>
                  Popular
                </NavLink>
              </li>
              <li>
                <NavLink to="/movies/top?page=1" className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>
                  Top-Rated
                </NavLink>
              </li>
              <li>
                <NavLink to="/movies/upcoming?page=1" className={({ isActive }) => (isActive ? activeClass : inactiveClass)}>
                  Upcoming
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
