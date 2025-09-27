import { useSearchParams } from "react-router-dom";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(apiPath, queryTerm);

  useTitle(`Search result for ${queryTerm}`);

  return (
    <main className="px-4 sm:px-6 lg:px-10 py-8">
      {/* Heading */}
      <section className="max-w-7xl mx-auto mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-white text-center sm:text-left">
          {movies.length === 0
            ? `No results found for '${queryTerm}'`
            : `Results for '${queryTerm}'`}
        </h2>
      </section>

      {/* Movies Grid */}
      <section className="max-w-7xl mx-auto">
        {movies.length > 0 ? (
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {movies.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg sm:text-xl">
              Try searching with a different keyword.
            </p>
          </div>
        )}
      </section>
    </main>
  );
};
