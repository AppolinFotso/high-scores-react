import { nanoid } from "nanoid";
import React from "react";
import PlayerScore from "./PlayerScore";
//

function HighScoreTable(props) {
  const rowOfScore = props.scores.map((el) => {
    return <PlayerScore key={nanoid()} player={el.n} score={el.score} />;
  });
  return (
    <div>
      <h1>High Scores: {props.country}</h1>
      <table>{rowOfScore}</table>
    </div>
  );
}

export default HighScoreTable;
