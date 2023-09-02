import React from "react";

const Image = ({p}) => {
  return (
    <div className="w-2/3 h-full">
      <img
        className=" m-auto p-10 h-full"
        src={p.sprites.other["official-artwork"].front_default}
      ></img>
    </div>
  );
};

export default Image;
