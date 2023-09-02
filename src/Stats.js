import React from "react";
import icon from "./assets/pokeball.png";

const MAXSTATS = {
  HP: 255,
  ATTACK: 181,
  SPECIAL_ATTACK: 280,
  DEFENSE: 230,
  SPECIAL_DEFENSE: 230,
  SPEED: 200,
};

const Stats = ({ p }) => {
  return (
    <div className="w-2/3 my-14 flex-col">
      <div className="w-full flex">
        <img className="w-1/6 relative left-10 " src={icon} />
        <p className="w-5/6  py-4 px-14 bg-gradient-to-b from-slate-400 to-slate-100 rounded text-6xl">
          stats
        </p>
      </div>
      <div className="w-full px-2 py-4">
        {p.stats.map((t) => (
          <div className="  flex text-right p-2">
            <div className="w-1/6 ">{t.stat.name}</div>
            <div className="w-5/6 mx-2 bg-gradient-to-l from-sky-100">
              <div
                style={{
                  width: `${Math.floor(
                    100 * (t.base_stat / MAXSTATS[t.stat.name.toUpperCase().replace("-", "_")])
                  )}%`,
                }}
                className={`  bg-gradient-to-l from-poke-red  to-poke-blue text-white text-center h-full`}
              >
                {/* {console.log(`bg-type-${p.types[0].type.name}`)} */}
                {t.base_stat}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
