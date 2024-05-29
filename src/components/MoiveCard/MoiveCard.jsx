
// import css from "./ImageCard.module.css";
import clsx from "clsx";

export default function MovieCard({details:{
  poster_path,
  title,
  vote_average,
  release_date,
  overview
}}) {
  const handleClick = () => {
  
  };
  return (
    <div>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w300${poster_path}`
            : `http://www.suryalaya.org/images/no_image.jpg`
        }
        loading="lazy"
        alt="Movie poster"
    
      />
      <ul>
        <li>{title}</li>
        <li>{overview}</li>

        <li>{release_date}</li>
      </ul>
    </div>
  );
}
