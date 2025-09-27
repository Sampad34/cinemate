import { Link } from "react-router-dom";
import Backup from "../assets/backup.png";

export const Card = ({ movie }) => {
  const { id, original_title, overview, poster_path } = movie;
  const image = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : Backup;

  return (
    <div
      className="w-full sm:w-72 md:w-80 lg:w-72 xl:w-80 
                 bg-white border border-gray-200 rounded-xl shadow-md 
                 hover:shadow-lg transition-shadow duration-300 
                 dark:bg-gray-800 dark:border-gray-700 
                 m-4 flex flex-col"
    >
      <Link to={`/movie/${id}`}>
        <img
          className="w-full h-64 object-cover rounded-t-xl"
          src={image}
          alt={original_title}
        />
      </Link>
      <div className="p-4 flex flex-col flex-grow">
        <Link to={`/movie/${id}`}>
          <h5 className="mb-2 text-lg md:text-xl font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-1">
            {original_title}
          </h5>
        </Link>
        <p className="mb-3 text-sm md:text-base font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
          {overview}
        </p>
      </div>
    </div>
  );
};
