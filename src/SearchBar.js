import React from "react";
import icon from "./assets/pokeball.png";

const SearchBar = ({ input, onInputChange, onSubmit }) => {
  return (
    <div >
    <form onSubmit={onSubmit} className="fixed bottom-0 left-0 right-0 w-2/6 h-24 items-start flex ">
      <input
        type="text"
        className=" text-xl rounded-full px-8 border-solid border-8 border-black h-3/4 w-4/5"
        value={input}
        onChange={onInputChange}
        placeholder="Seach for a Pokemon..."
      />
      <button className="relative bottom-4 right-20 w-1/5">
        <img src={icon} />
      </button>
      </form>
    </div>
  );
};

export default SearchBar;
