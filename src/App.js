import "./App.css";
import React, { useState } from "react";
import Item from "./Components/Item";
const {
  uniqueNamesGenerator,
  adjectives,
  colors,
} = require("unique-names-generator");

export default function App() {
  const [allList , setAllList] =useState([])
  const [search , setSearch] = useState("");

  const handleClick = () => {
    const shortName = uniqueNamesGenerator({
      dictionaries: [colors],
    });
    
    setAllList([...allList , shortName]);
  };

  function handleChange(event)
  {
      setSearch(event.target.value);
  }

  return (
    <div className="App">
      <div>
        <input type="text" className="search-box" value={search} onChange={handleChange} placeholder="Search" />
        <i className="fa-solid fa-square-plus" onClick={handleClick}></i>
      </div>
      <Item prefix={search} allList={allList} />
    </div>
  );
}
