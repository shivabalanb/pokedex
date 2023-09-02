import React, { useState } from "react";

const PokemonTab = ({ pokemon, selected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full h-24 text-2xl bg-gradient-to-b from-gray-400 to-gray-300
       flex  ${
         selected
           ? "bg-gradient-to-b from-red-600 to-red-400 text-white"
           : "hover:bg-gradient-to-b hover:from-red-600 hover:to-red-400 hover:text-white"
       } `}
    >
      <img src={pokemon.sprite} />
      <div className=" text-left self-center w-3/6">{pokemon.name}</div>
    </button>
  );
};

export default PokemonTab;
