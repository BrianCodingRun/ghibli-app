import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import SortComponent from "./components/SortComponent";
import FavoritesPage from "./pages/FavoritesPage";
import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";

function App() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("title");

  const fetchMovies = async () => {
    try {
      const response = await fetch("https://ghibliapi.vercel.app/films");
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Fonction pour basculer l'état favori d'un film
  const toggleFavorite = (filmId) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(filmId)) {
        return prevFavorites.filter((id) => id !== filmId);
      } else {
        return [...prevFavorites, filmId];
      }
    });
  };
  // Vérifier si un film est dans les favoris
  const isFavorite = (filmId) => {
    return favorites.includes(filmId);
  };

  // Save Favorites on Local storage
  useEffect(() => {
    const savedFavorites = JSON.stringify(favorites);
    localStorage.setItem("favorites", savedFavorites);
  }, [favorites]);

  // Load favorites on localstorage
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  useEffect(() => {
    fetchMovies();
  }, [movies]);
  return (
    <BrowserRouter>
      <Navbar search={search} handleSearch={handleSearch} />
      <SortComponent sort={sort} handleSort={handleSort} />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              movies={movies}
              search={search}
              sort={sort}
              toggleFavorite={toggleFavorite}
              isFavorite={isFavorite}
            />
          }
        />
        <Route path="/film/:id" element={<MovieDetailPage movies={movies} />} />
        <Route
          path="/favorites"
          element={
            <FavoritesPage
              search={search}
              sort={sort}
              movies={movies}
              toggleFavorite={toggleFavorite}
              isFavorite={isFavorite}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
