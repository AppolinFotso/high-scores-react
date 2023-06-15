import React from "react";

function PlayerScore(props) {
  return (
    <div>
      <tbody>
        <tr>
          <td>{props.player}</td>
          <td>{props.score}</td>
        </tr>
      </tbody>
    </div>
  );
}

export default PlayerScore;
