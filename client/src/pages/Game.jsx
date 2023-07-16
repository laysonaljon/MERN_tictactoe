import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../App.css';
import { Button, Board, ScoreBoard, EnterName, Modal } from '../components';

const Game = () => {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const navigate = useNavigate();

  const [form, setForm] = useState({
    player1name: '',
    player1score: 0,
    player2name: '',
    player2score: 0,
  });

  const [xPlaying, setXPlaying] = useState(true);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [players, setPlayers] = useState({ player1: '', player2: '' });
  const [winner, setWinner] = useState(null);
  const [loading, setLoading] = useState(false);
  

  const handleBoxClick = (boxIdx) => {
    // Step 1: Update the board
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying ? 'X' : 'O';
      } else {
        return value;
      }
    });

    setBoard(updatedBoard);

    // Step 2: Check if either player has won the game
    const winner = checkWinner(updatedBoard);

    if (winner) {
      const winnerName = xPlaying ? players.player1 : players.player2;
      setWinner(winnerName);

      if (winner === 'O') {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      }

      setGameOver(true);
    } else if (!updatedBoard.includes(null)) {
      // All squares are filled and no winner
      resetBoard();
    }

    // Step 3: Change active player
    setXPlaying(!xPlaying);
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];

      // Iterate through win conditions and check if either player satisfies them
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true);
        resetBoard();
        return board[x];
      }
    }
  };

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
    setWinner(null);
  };

  const handleSaveNames = (player1Name, player2Name) => {
    setPlayers({ player1: player1Name, player2: player2Name });
  };

  const handleSaveRecord= async () => {

    setLoading(true);
    try {

      const updatedForm = {
        player1name: players.player1,
        player1score: scores.xScore,
        player2name: players.player2,
        player2score: scores.oScore,
      };

      const response = await fetch('https://tictactoe-j8a9.onrender.com/api/v1/score', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedForm), // Use updatedForm instead of form
      });

      await response.json();
      alert('Success');
      navigate('/');
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100.8px] leading-[75px] text-gradient">TicTacToe</h1>
      <br />
      {!players.player1 && !players.player2 ? (
        <EnterName onSave={handleSaveNames} />
      ) : (
        <div>
          <ScoreBoard scores={scores} players={players} xPlaying={xPlaying} />
          <Board board={board} onClick={handleBoxClick} />
          {winner && <Modal winner={winner} resetBoard={resetBoard} handleSaveRecord={handleSaveRecord} />}
        </div>
      )}
    </div>
  );
};

export default Game;
