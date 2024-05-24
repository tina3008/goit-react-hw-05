import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org";
export const getMovies = async () => {
  // const options = {
  //   method: "GET",
    // headers: {
      // accept: "application/json",
      // Authorization:
      //   "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmY4NDRkMjBjYjAxMmE0MGU2OGJjNWViY2Q1M2I3NCIsInN1YiI6IjY2NGRmOGM0NTE5NTYwMmQ0YjQzY2U4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PX_uKoG-vAsOfEp68QuaSYaGGHH0Akieec3W_LMAUTU",
      //    },
  // };
  // fetch("https://api.themoviedb.org/3/trending/movie/day", options)
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((response) => console.log(response))
  //   .catch((err) => console.error(err));

// away===========================

const url =
  "https://api.themoviedb.org/3/trending/movie/day";

const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmY4NDRkMjBjYjAxMmE0MGU2OGJjNWViY2Q1M2I3NCIsInN1YiI6IjY2NGRmOGM0NTE5NTYwMmQ0YjQzY2U4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PX_uKoG-vAsOfEp68QuaSYaGGHH0Akieec3W_LMAUTU",
         },
};

axios
  .get(url, options)  
  .then((response) => console.log(response.data))
  .then((response) => {return response.data})
  .catch((error) => console.log("Error fetching movie:", error));
  
};
