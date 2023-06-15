import React from "react";
import PlayerScore from "./PlayerScore";
//

function HighScoreTable(props) {
  return (
    <div>
      <h1>High Scores: {props.country}</h1>
    </div>
  );
}

export default HighScoreTable;
