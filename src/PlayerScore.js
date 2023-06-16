import React from "react";

function PlayerScore(props) {
  return (
    <tbody>
      <tr>
        <td>{props.player}</td>
        <td className="redText">{props.score}</td>
      </tr>
    </tbody>
  );
}

export default PlayerScore;
