// const options = {
//   method: "GET",
//   headers: {
//     accept: "application/json",
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmY4NDRkMjBjYjAxMmE0MGU2OGJjNWViY2Q1M2I3NCIsInN1YiI6IjY2NGRmOGM0NTE5NTYwMmQ0YjQzY2U4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PX_uKoG-vAsOfEp68QuaSYaGGHH0Akieec3W_LMAUTU",
//   },
// };

// fetch("https://api.themoviedb.org/3/trending/movie/day", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

  import axios from "axios";

  export const getMovies = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmY4NDRkMjBjYjAxMmE0MGU2OGJjNWViY2Q1M2I3NCIsInN1YiI6IjY2NGRmOGM0NTE5NTYwMmQ0YjQzY2U4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PX_uKoG-vAsOfEp68QuaSYaGGHH0Akieec3W_LMAUTU",
    },
  };

  fetch("https://api.themoviedb.org/3/trending/movie/day", options)
    .then((response) => {return response.json()})
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

    // try {
    //   const response = await axios.get(
    //     `https://api.themoviedb.org/3/trending/movie/day`,
    //     {
    //       params: {
    //         accept: "application/json",
    //         Authorization:
    //           "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmY4NDRkMjBjYjAxMmE0MGU2OGJjNWViY2Q1M2I3NCIsInN1YiI6IjY2NGRmOGM0NTE5NTYwMmQ0YjQzY2U4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PX_uKoG-vAsOfEp68QuaSYaGGHH0Akieec3W_LMAUTU",
    //       },
    //     }
    //   );
    //   return response;
    // } catch (error) {
    //   console.error("Error fetching articles:", error);
    //   throw error;
    // }
  };