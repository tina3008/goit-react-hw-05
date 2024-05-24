import { useEffect, useState } from "react";

import {getMovies} from '../../components/movie-api'

export default function HomePage() {
const [movies, setMovies] = useState([]);
const [error, setError] = useState(false);
const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
   const [totalPage, setTotalPage] = useState(false);

   useEffect(() => {
    //  if (searchQuery.trim() === "") {
    //    return;
    //  }

     async function fetchMovies() {
const qqq = await getMovies();
        // console.log(qqq);
      //  console.log(total_results);
     }

     fetchMovies();
   }, []);
      return (
        <div>
          <h2>Trending movies </h2>

        </div>
      );
}
