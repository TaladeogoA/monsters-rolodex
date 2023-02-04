import { Component } from "react";
import CardList from "./components/card-list/card-list";
import "./App.css";
import SearchBox from "./components/search-box/search-box";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchQuery: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  searchHandler = (e) => {
    const searchQuery = e.target.value.toLowerCase();

    this.setState(() => {
      return { searchQuery };
    });
  };

  render() {
    const { monsters, searchQuery } = this.state;
    const { searchHandler } = this;
    const results = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchQuery);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          searchHandler={searchHandler}
          placeholder="Find a monster"
          className="monsters-search-box"
        />

        <CardList monsters={results} />

        <div></div>
      </div>
    );
  }
}
export default App;
