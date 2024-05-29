
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
     
        src={"https://image.tmdb.org/t/p/w500/${poster_path}"}
        alt={title}
        onClick={handleClick}
      />
      <ul>
        <li>{title}</li>
        <li>{overview}</li>
      
        <li>{release_date}</li>
      </ul>
    </div>
  );
}
