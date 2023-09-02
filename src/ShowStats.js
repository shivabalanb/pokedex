import axios from "axios";
import React, { useEffect, useState } from "react";
import Name from "./Name";
import Type from "./Type";
import Image from "./Image";
import Stats from "./Stats";

const ShowStats = ({ pokemon }) => {
  const [p, setP] = useState("");
  const color = "";
  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((res) => {
      setP(res.data);
    });
  }, []);

  return (
    p && (
      <div className="h-screen w-full ">
        <div className=" h-1/4 w-full flex flex-col content-end ">
          <Name p={p} />
          <Type p={p} />
        </div>
        <div className="h-3/4 flex ">
          <Image p={p} />
          <Stats p={p} />
        </div>
      </div>
    )
  );
};

export default ShowStats;
