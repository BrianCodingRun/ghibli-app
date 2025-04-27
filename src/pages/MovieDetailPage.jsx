import { useParams } from "react-router-dom";

function MovieDetailPage({ movies }) {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === id);

  if (!movie) {
    return <div>Chargement...</div>;
  }

  return (
    <main className="max-w-7xl w-4/5 mx-auto py-6">
      <h1 className="text-2xl text-zinc-200 mb-8">{movie.title}</h1>
      <div className="flex gap-8">
        <div className="w-[300px]">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-zinc-200 text-xl">Synopsis:</h3>
            <p className="text-gray-400 text-sm">{movie.description}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-zinc-200 text-base">
              Durée:{" "}
              <span className="text-gray-400 text-sm">
                {movie.running_time}min
              </span>
            </p>
            <p className="text-zinc-200 text-base">
              Producteur:{" "}
              <span className="text-gray-400 text-sm">{movie.producer}</span>
            </p>
            <p className="text-zinc-200 text-base">
              Directeur:{" "}
              <span className="text-gray-400 text-sm">{movie.director}</span>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MovieDetailPage;
