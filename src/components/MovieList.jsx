function MovieList({ children }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-4">
      {children}
    </section>
  );
}

export default MovieList;
