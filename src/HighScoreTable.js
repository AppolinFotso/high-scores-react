import { nanoid } from "nanoid";
import React from "react";
import PlayerScore from "./PlayerScore";
//

function HighScoreTable(props) {
  const rowOfScore = props.scores.map((el) => {
    return (
      <PlayerScore
        key={nanoid()}
        player={el.n}
        score={typeof el.s === "string" ? Number(el.s) : el.s}
      />
    );
  });
  return (
    <div>
      <table className="table tableWidth">
        <thead>
          <tr>
            <th>
              <h1 className="blueText">High Scores: {props.country}</h1>
            </th>
          </tr>
        </thead>
        {rowOfScore}
      </table>
    </div>
  );
}

export default HighScoreTable;
