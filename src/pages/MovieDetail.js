import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Backup from "../assets/backup.png";
import { useTitle } from "../hooks/useTitle";

export const MovieDetail = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : Backup;

  // Update page title
  useTitle(movie.title || "Movie Detail");

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=11f0ea9a02098da0d3728c424239c4a9`
      );
      const json = await response.json();
      setMovie(json);
    }
    fetchMovie();
  }, [params.id]);

  return (
    <main className="px-4 sm:px-6 lg:px-12 py-10 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <section className="flex flex-col lg:flex-row gap-8 lg:gap-16 max-w-7xl mx-auto items-center lg:items-start">
        {/* Poster */}
        <div className="flex-shrink-0 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4">
          <img
            src={image}
            alt={movie.title}
            className="rounded-xl w-64 sm:w-72 md:w-80"
          />
        </div>

        {/* Movie Info */}
        <div className="flex-1 text-gray-700 dark:text-gray-200">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-center lg:text-left">
            {movie.title}
          </h1>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6">
            {movie.overview || "No description available."}
          </p>

          {/* Genres */}
          {movie.genres?.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-full text-sm sm:text-base bg-gray-100 dark:bg-gray-700 font-medium"
                >
                  {genre.name}
                </span>
              ))}
            </div>
          )}

          {/* Ratings */}
          <div className="flex items-center mb-6 text-sm sm:text-base">
            <svg
              className="w-5 h-5 text-yellow-400 mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p className="font-semibold">{movie.vote_average || "N/A"}</p>
            <span className="w-1 h-1 mx-2 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <span>{movie.vote_count || 0} reviews</span>
          </div>

          {/* Movie Details */}
          <div className="space-y-3 text-sm sm:text-base md:text-lg">
            <p>
              <span className="font-bold">Runtime:</span>{" "}
              {movie.runtime ? `${movie.runtime} mins` : "N/A"}
            </p>
            <p>
              <span className="font-bold">Budget:</span>{" "}
              {movie.budget ? `$${movie.budget.toLocaleString()}` : "N/A"}
            </p>
            <p>
              <span className="font-bold">Revenue:</span>{" "}
              {movie.revenue ? `$${movie.revenue.toLocaleString()}` : "N/A"}
            </p>
            <p>
              <span className="font-bold">Release Date:</span>{" "}
              {movie.release_date || "N/A"}
            </p>
            <p>
              <span className="font-bold">IMDB code:</span>{" "}
              {movie.imdb_id ? (
                <a
                  href={`https://www.imdb.com/title/${movie.imdb_id}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {movie.imdb_id}
                </a>
              ) : (
                "N/A"
              )}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
