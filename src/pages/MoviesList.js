import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

export const MoviesList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);
  useTitle(title);

  return (
    <main className="px-4 sm:px-6 lg:px-10 py-8">
      <section className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 dark:text-white text-center sm:text-left">
          {title}
        </h2>

        {/* Movie Grid */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
