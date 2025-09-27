import { Link } from "react-router-dom";
import Backup from "../assets/backup.png";

export const Card = ({ movie }) => {
  const { id, original_title, overview, poster_path } = movie;
  const image = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : Backup;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105">
      {/* Poster */}
      <Link to={`/movie/${id}`}>
        <img
          src={image}
          alt={original_title}
          className="w-full h-72 sm:h-80 object-cover"
        />
      </Link>

      {/* Info */}
      <div className="p-4 flex flex-col flex-grow">
        <Link to={`/movie/${id}`}>
          <h5 className="text-lg sm:text-xl font-bold mb-2 line-clamp-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
            {original_title}
          </h5>
        </Link>
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-400 line-clamp-3 flex-grow">
          {overview}
        </p>
      </div>
    </div>
  );
};
