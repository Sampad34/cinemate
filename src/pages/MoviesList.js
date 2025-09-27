import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

export const MoviesList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);
  useTitle(title);

  return (
    <main className="px-4 sm:px-6 lg:px-10 py-10 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <section className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 text-gray-900 dark:text-white text-center sm:text-left tracking-tight">
          {title}
        </h2>

        {/* Movie Grid */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>

        {/* No Movies Fallback */}
        {movies.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 mt-10 text-lg">
            No movies found.
          </p>
        )}
      </section>
    </main>
  );
};
