import React, { useState } from "react";
import PokemonTab from "./PokemonTab";

const SideBar = ({ pokemonList, fetchData, selected, setSelected }) => {
  return (
    <div
      className="w-full h-screen overflow-y-auto"
      onScroll={(e) => {
        let percentage =
          (e.currentTarget.scrollTop + e.currentTarget.clientHeight) / e.currentTarget.scrollHeight;

        if (percentage > 0.9 && percentage < 1) {
          fetchData("fetchMore");
        }
      }}
    >
      {pokemonList &&
        pokemonList.map((p) => (
          <PokemonTab
            key={p.id}
            pokemon={p}
            onClick={() => {
              setSelected(p.id);
            }}
            selected={p.id == selected}
          />
        ))}
    </div>
  );
};

export default SideBar;
