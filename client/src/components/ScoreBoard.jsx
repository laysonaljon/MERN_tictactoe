import React from 'react';
import './ScoreBoard.css';

const ScoreBoard = ({ scores, xPlaying, players }) => {
  const { xScore, oScore } = scores;

  return (
    <div className="scoreboard">
      {players.player1 && players.player2 ? (
        <>
          <div className={`score x-score ${!xPlaying && 'inactive'}`}>
            <span>{players.player1}</span>
            <br />
            <span className="font-extrabold">X: {xScore}</span>
          </div>
          <div className={`score o-score ${xPlaying && 'inactive'}`}>
            <span>{players.player2}</span>
            <br />
            <span className="font-extrabold">O: {oScore}</span>
          </div>
        </>
      ) : (
        <div className="scoreboard-message">Enter player names</div>
      )}
    </div>
  );
};

export default ScoreBoard;
