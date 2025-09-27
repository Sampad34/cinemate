import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm = "", page = 1) => {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${
    process.env.REACT_APP_API_KEY
  }${queryTerm ? `&query=${queryTerm}` : ""}&page=${page}`;

  useEffect(() => {
    async function fetchMovies() {
      setLoading(true);
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json.results || []);
        setTotalPages(json.total_pages || 1);
      } catch (err) {
        console.error(err);
        setData([]);
        setTotalPages(1);
      }
      setLoading(false);
    }

    fetchMovies();
  }, [url]);

  return { data, totalPages, loading };
};
