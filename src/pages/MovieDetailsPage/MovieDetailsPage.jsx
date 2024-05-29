import { Suspense, useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";

import { movieDetal } from "../../components/movie-api";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import MovieCast from '../../components/MovieCast/MovieCast';
import Review from '../../components/MovieReviews/MovieReviews';
import MovieCard from '../../components/MoiveCard/MoiveCard';

export default function MovieDetailsPage() {
  const [details, setDetails] = useState(null);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (movieId === "") {
      return;
    }
    async function getDetails() {
      try {
        setLoading(true);
        setError(false);
        const fullDetalls = await movieDetal(movieId);
       
        setDetails(fullDetalls);
       
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getDetails();
  }, [movieId]);

console.log(details);

  const { poster_path, title, vote_average, release_date, overview } =
    details;
 
 
  return (
    <div>
      {/* {error && <ErrorMessage />} */}
      cast&Review
      {/* {details.length > 0 && <MovieCard items={details} />} */}
      <p>{title}</p>
      {/* <img
        src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
        alt={details.title}
      /> */}
    </div>
  );
}