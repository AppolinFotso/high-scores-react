import logo from "./logo.svg";
import "./App.css";
import HighScoreTable from "./HighScoreTable";
import allCountryScores from "./scores";
import { nanoid } from "nanoid";
import sortMe from "./sortMyNumber";
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
      <div className="App-title">
        <h1> High Scores per Country</h1>
        <button className="btn btn-primary" onClick={sortMe}>
          Sort Scores
        </button>
        <div className="flexTable">{tableByCountry}</div>
      </div>
    </div>
  );
}

export default App;
