import React from "react";

function SortComponent({ sort, handleSort }) {
  return (
    <div className="max-w-7xl w-4/5 mx-auto py-6 flex flex-col items-start gap-2">
      <label htmlFor="sortMethod" className="text-zinc-200">
        Trier par:
      </label>
      <select
        id="sortMethod"
        value={sort}
        onChange={handleSort}
        className="border-none bg-neutral-800 text-neutral-400 rounded-sm text-sm px-2 py-1"
      >
        <option value="title">Titre</option>
        <option value="releaseDate">Date de sortie</option>
        <option value="score">Score</option>
      </select>
    </div>
  );
}
export default SortComponent;
