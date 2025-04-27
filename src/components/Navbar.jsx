import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";

function Navbar({ search, handleSearch }) {
  const location = useLocation();
  const [pathname, setPathname] = useState("");

  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  return (
    <header className="p-4 max-w-5xl mx-auto">
      <nav className="flex justify-between items-center">
        <Logo />
        <div className="py-2">
          <input
            placeholder="Rechercher un film"
            className="w-full h-10 px-4 text-zinc-200 bg-neutral-900 rounded-md"
            onChange={handleSearch}
            value={search}
          />
        </div>
        <ul className="flex gap-4">
          <li>
            <NavLink
              to="/"
              className={`${
                pathname === "/" ? "text-green-700" : "text-zinc-200"
              }`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/favorites"
              className={`${
                pathname === "/favorites" ? "text-green-700" : "text-zinc-200"
              }`}
            >
              Favorites
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
