import { useEffect, useState } from "react";
import axios from "axios";

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
       const options = {
         method: "GET",
         headers: {
           accept: "application/json",
           Authorization:
             "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmY4NDRkMjBjYjAxMmE0MGU2OGJjNWViY2Q1M2I3NCIsInN1YiI6IjY2NGRmOGM0NTE5NTYwMmQ0YjQzY2U4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PX_uKoG-vAsOfEp68QuaSYaGGHH0Akieec3W_LMAUTU",
         },
       };

      //  fetch("https://api.themoviedb.org/3/trending/movie/day", options)
      //    .then((response) => {return response.json()})
      //    .then((response) => console.log(response))
      //    .catch((err) => console.error(err));
  

      //  try {
         const response = await axios.get(
           "<https://api.themoviedb.org/3/trending/movie/day>",        
                {
                  params: {
              method: "GET",
              headers: {
                accept: "application/json",
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmY4NDRkMjBjYjAxMmE0MGU2OGJjNWViY2Q1M2I3NCIsInN1YiI6IjY2NGRmOGM0NTE5NTYwMmQ0YjQzY2U4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PX_uKoG-vAsOfEp68QuaSYaGGHH0Akieec3W_LMAUTU",
              },
            },
                },
                
         );
 console.log(response);
 return response;
    
      //  } catch (error) {
      //    console.error("Error fetching articles:", error);
      //    throw error;
      //  }
     }

     fetchMovies();
   }, []);
      return (
        <div>
          <h2>Trending movies </h2>

        </div>
      );
}
