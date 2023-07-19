import {Routes, Route } from "react-router-dom";
import {MoviesList, MovieDetail, Search, PageNotFound } from "../pages";


export const AllRoutes = () => {
  return (
    <div className="dark:bg-darkbg">
    <Routes>
    <Route path="/" element={<MoviesList apiPath="movie/now_playing" title="Home" />} />
    <Route path="movie/:id" element={<MovieDetail />}></Route>
    <Route path="movies/popular" element={<MoviesList apiPath="movie/popular" title="Popular" />} />
    <Route path="movies/top" element={<MoviesList apiPath="movie/top_rated" title="Top Rated" />} />
    <Route path="movies/upcoming" element={<MoviesList apiPath="movie/upcoming" title="Upcoming" />} />
    <Route path="search" element={<Search apiPath="search/movie" />}></Route>
    <Route path="*" element={<PageNotFound  title="Page Not Found" />}></Route>

    </Routes>
    
    </div>
  )
}

