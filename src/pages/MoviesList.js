import { useState, useEffect } from "react";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
import { Pagination } from "../components/Pagination";
import { useLocation, useNavigate } from "react-router-dom";

export const MoviesList = ({ apiPath, title }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get 'page' from URL query params
  const searchParams = new URLSearchParams(location.search);
  const initialPage = parseInt(searchParams.get("page")) || 1;

  const [page, setPage] = useState(initialPage);
  const queryTerm = searchParams.get("q") || "";

  const { data: movies, totalPages, loading } = useFetch(apiPath, queryTerm, page);

  useTitle(title);

  // Update URL when page changes
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    params.set("page", page);
    if (queryTerm) params.set("q", queryTerm);
    navigate({ search: params.toString() }, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <main className="px-4 sm:px-6 lg:px-10 py-10 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <section className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 text-gray-900 dark:text-white text-center sm:text-left tracking-tight">
          {title}
        </h2>

        {loading ? (
          <p className="text-center text-gray-500 dark:text-gray-400 mt-10 text-lg">
            Loading...
          </p>
        ) : movies.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400 mt-10 text-lg">
            No movies found.
          </p>
        ) : (
          <>
            <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {movies.map((movie) => (
                <Card key={movie.id} movie={movie} />
              ))}
            </div>

            <Pagination
              currentPage={page}
              totalPages={totalPages}
              onPageChange={(p) => setPage(p)}
            />
          </>
        )}
      </section>
    </main>
  );
};
