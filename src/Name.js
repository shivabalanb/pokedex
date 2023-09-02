import React from "react";
import { getColor } from "./Type";

const Name = ({ p }) => {
  console.log(getColor(p.types[0].type.name));
  return (
    <div
      className={`${
        getColor(p.types[0].type.name)[0]
      } text-white h-4/5 flex justify-around items-center bg-gradient-to-r from-black `}
    >
      <p className="text-8xl">{p.name}</p>
      <p className="text-9xl opacity-50">#{p.id}</p>
    </div>
  );
};

export default Name;
