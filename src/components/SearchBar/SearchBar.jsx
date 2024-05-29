import toast, { Toaster } from "react-hot-toast";

import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const searchMovie = form.elements.searchMovie.value;

    if (searchMovie.trim() === "") {
      toast("Please fill in search folder", {
        style: {
          color: "red",
        },
      });
      return;
    }

    onSearch(searchMovie);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="searchMovie"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button className={css.btn} type="submit">
          Search
        </button>
        <Toaster />
      </form>
    </header>
  );
}
