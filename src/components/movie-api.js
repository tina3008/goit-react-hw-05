

// curl --request GET \
//      --url https://api.themoviedb.org/3/trending/movie/day \
//      --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmY4NDRkMjBjYjAxMmE0MGU2OGJjNWViY2Q1M2I3NCIsInN1YiI6IjY2NGRmOGM0NTE5NTYwMmQ0YjQzY2U4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PX_uKoG-vAsOfEp68QuaSYaGGHH0Akieec3W_LMAUTU' \
//      --header 'accept: application/json'

// =====================================

import axios from "axios";

export const getMovie = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day`,
      {
        params: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmY4NDRkMjBjYjAxMmE0MGU2OGJjNWViY2Q1M2I3NCIsInN1YiI6IjY2NGRmOGM0NTE5NTYwMmQ0YjQzY2U4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PX_uKoG-vAsOfEp68QuaSYaGGHH0Akieec3W_LMAUTU",
        },
      }
    );

    return response;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};