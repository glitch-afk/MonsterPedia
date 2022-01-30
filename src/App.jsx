import { useState, useEffect } from "react";
import "./App.css";
import Cardlist from "./components/card-list/Cardlist";
import SearchBox from "./components/search-box/SearchBox";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
        placeholder="Search a monster..."
        handleChange={handleChange}
      />
      <Cardlist monsters={filteredMonsters} />
    </div>
  );
}

export default App;
