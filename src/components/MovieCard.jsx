import { Link } from "react-router-dom";

function MovieCard({ movie, toggleFavorite, isFavorite }) {
  return (
    <div className="w-[290px] h-full flex flex-col gap-2 group">
      <div className="relative w-full h-full">
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-hull object-cover"
        />
        <button
          className={`absolute z-20 top-2 right-2 flex items-center justify-center w-8 h-8 bg-neutral-950/75 cursor-pointer border-none ${
            isFavorite(movie.id) ? "text-yellow-300" : "text-white"
          } text-lg rounded-4xl opacity-0 invisible transition-opacity group-hover:opacity-100 group-hover:visible`}
          aria-label="Add to favorites"
          onClick={() => toggleFavorite(movie.id)}
        >
          <i className="bx bxs-star"></i>
        </button>
        <div className="absolute bg-neutral-950/75 top-0 left-0 h-full w-full opacity-0 transition-opacity group-hover:opacity-100" />
      </div>
      <div className="w-full flex flex-col">
        <span className="text-xs text-neutral-400">{movie.release_date}</span>
        <h5 className="text-white text-xl font-bold">
          <Link to={`/film/${movie.id}`}>
            {movie.title.length > 25
              ? movie.title.substring(0, 20) + "..."
              : movie.title}
          </Link>
        </h5>
        <span className="text-xs text-neutral-400">{movie.director}</span>
      </div>
    </div>
  );
}

export default MovieCard;
