import axios from "axios";
import React from "react";

const Type = ({ p }) => {
  return (
    <div className={` h-1/5 w-full flex justify-stretch bg-black`}>
      {p.types.map((obj) => (
        <div
          key={obj.type.name}
          className={`${
            getColor(obj.type.name)[0]
          } tracking-[0.5em] italic text-white text-3xl h-full text-center ${
            p.types.length == 1 ? "w-full" : `w-1/2`
          }`}
        >
          {/* {console.log(getColor(obj.type.name)[0])} */}
          {obj.type.name.toUpperCase()}
        </div>
      ))}
    </div>
  );
};

export function getColor(type = "") {
  const types = {
    Normal: ["bg-stone-400", "bg-gray-500"],
    Fire: ["bg-orange-600", "bg-red-500"],
    Water: ["bg-cyan-400", "bg-cyan-500"],
    Grass: ["bg-lime-400", "bg-green-500"],
    Rock: ["bg-yellow-800", "bg-yellow-500"],
    Fighting: ["bg-orange-800", "bg-orange-400"],
    Psychic: ["bg-pink-500", "bg-pink-600"],
    Ghost: ["bg-violet-950", "bg-violet-800"],
    Bug: ["bg-lime-700", "bg-lime-500"],
    Poison: ["bg-purple-900", "bg-purple-700"],
    Flying: ["bg-violet-400", "bg-violet-700"],
    Electric: ["bg-yellow-400", "bg-yellow-700"],
    Ground: ["bg-yellow-600", "bg-amber-500"],
    Ice: ["bg-sky-300", "bg-sky-500"],
    Dragon: ["bg-indigo-700", "bg-indigo-600"],
    Dark: ["bg-stone-800", "bg-stone-800"],
    Steel: ["bg-slate-400", "bg-slate-500"],
    Fairy: ["bg-rose-300", "bg-rose-500"],
  };
  return types[type.charAt(0).toUpperCase() + type.slice(1)];
}

export default Type;
