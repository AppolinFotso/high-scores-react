import logo from "./logo.svg";
import "./App.css";
import HighScoreTable from "./HighScoreTable";
import allCountryScores from "./scores";
import { nanoid } from "nanoid";

//
function App() {
  const tableByCountry = allCountryScores.map((el) => {
    return (
      <HighScoreTable key={nanoid()} country={el.name} scores={el.scores} />
    );
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>High Score App</p>
      </header>
      {tableByCountry}
    </div>
  );
}

export default App;
