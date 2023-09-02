import axios from "axios";
import { useEffect, useRef, useState } from "react";
import SideBar from "./SideBar";
import SearchBar from "./SearchBar";
import ShowStats from "./ShowStats";

function App() {
  const [pokemonList, setPokemonList] = useState([]); // [...{id,name,sprite,url}...]
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const [input, setInput] = useState(""); // name
  const URL = "https://pokeapi.co/api/v2/pokemon/";

  const nextUrl = useRef("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20");
  useEffect(() => {
    fetch("default");
  }, []);

  // useEffect(() => {}, [selectedPokemon]);

  // status: default, fetchMore
  async function fetch(status) {
    let arr;
    let tempArr;
    if (status == "default") {
      arr = [];
      tempArr = [];
      await axios.get(URL).then((res) => {
        for (var i = 0; i < res.data.results.length; i++) {
          let p = res.data.results[i];
          const name = p.name;
          const url = p.url;
          tempArr = [...tempArr, { name, url }];
        }
      });
    } else if (status == "fetchMore") {
      arr = [...pokemonList];
      tempArr = [];
      await axios.get(nextUrl.current).then((res) => {
        nextUrl.current = res.data.next;
        for (var i = 0; i < res.data.results.length; i++) {
          let p = res.data.results[i];
          const name = p.name;
          const url = p.url;
          tempArr = [...tempArr, { name, url }];
        }
      });
    }

    for (var i = 0; i < tempArr.length; i++) {
      let p = tempArr[i];
      await axios.get(p.url).then((res) => {
        const sprite = res.data.sprites.front_default;
        const id = res.data.id;
        const name = p.name;
        const url = p.url;
        let pokemonObj = { id, name, sprite, url };
        let temp = [...arr, pokemonObj];
        arr = temp;
      });
    }
    setPokemonList(arr);
  }

  function searchPokemon(p, override = false) {
    if (!override && input == "") {
      fetch("default");
      return;
    }

    axios
      .get(`${URL}${p}`)
      .then((res) => {
        const name = res.data.name;
        const sprite = res.data.sprites.front_default;
        const id = res.data.id;
        const url = p.url;
        const pokemon = { id, name, sprite, url };
        // setSelectedPokemon(pokemon);
        // console.log(pokemon);
        setPokemonList([pokemon]);
      })
      .catch((error) => {
        alert("Pokemon Not Found!");
        fetch("default");
        return;
      });
  }

  function onInputChange(e) {
    setInput(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    searchPokemon(input.toLowerCase());
    setInput("");
    setSelectedPokemon("");
  }

  return (
    <div className="flex">
      <div className="w-1/5  bg-slate-400">
        <SideBar
          pokemonList={pokemonList}
          fetchData={fetch}
          selected={selectedPokemon}
          setSelected={setSelectedPokemon}
        />
        <SearchBar input={input} onInputChange={onInputChange} onSubmit={onSubmit} />
      </div>
      <div className="w-4/5">
        {selectedPokemon && <ShowStats key={selectedPokemon} pokemon={selectedPokemon}></ShowStats>}
      </div>
    </div>
  );
}

export default App;
