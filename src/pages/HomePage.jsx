import MovieCard from "../components/MovieCard";
import MovieList from "../components/MovieList";

function HomePage({ movies, toggleFavorite, isFavorite, search, sort }) {
  return (
    <main className="min-h-screen max-w-7xl w-4/5 mx-auto py-6">
      <h1 className="text-4xl text-zinc-200 mb-8">Home movies</h1>
      <MovieList>
        {movies
          .filter(
            (movie) =>
              movie.title.toLowerCase().includes(search.toLowerCase()) ||
              movie.director.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) => {
            switch (sort) {
              case "title":
                return a.title.localeCompare(b.title);
              case "releaseDate":
                return parseInt(a.release_date) - parseInt(b.release_date);
              case "score":
                return parseInt(b.rt_score) - parseInt(a.rt_score);

              default:
                break;
            }
          })
          .map((movie, index) => (
            <MovieCard
              key={index}
              movie={movie}
              toggleFavorite={toggleFavorite}
              isFavorite={isFavorite}
            />
          ))}
      </MovieList>
    </main>
  );
}

export default HomePage;
