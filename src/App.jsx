import { useState, useEffect } from "react";
import "./App.css";
import Cardlist from "./components/card-list/Cardlist";

function App() {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  return (
    <div className="App">
      <Cardlist monsters={monsters} />
    </div>
  );
}

export default App;
