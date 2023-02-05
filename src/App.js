import { useEffect, useState } from "react";
import SearchBox from "./components/search-box/search-box";
import CardList from "./components/card-list/card-list";
import "./App.css";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetching monsters
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  // Filtered monsters
  useEffect(() => {
    const results = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchQuery);
    });
    setFilteredMonsters(results);
  }, [monsters, searchQuery]);

  // Search Handler
  const searchHandler = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  // Return
  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        searchHandler={searchHandler}
        placeholder="Find a monster"
        className="monsters-search-box"
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
