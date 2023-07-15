import React, { useState } from 'react';
import Button from './Button';
import { player } from '../assets';

const EnterName = ({ onSave }) => {
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');
  const [error, setError] = useState('');

  const handleSave = (e) => {
    e.preventDefault()
    if (player1Name.trim() === '' || player2Name.trim() === '') {
      setError('Player names are required.');
    } else {
      onSave(player1Name, player2Name);
    }
  };

  return (
    <form className="flex justify-center items-center">
      <div className="w-full sm:w-2/5 p-8 md:p-16 bg-blue-gradient rounded-lg">
        <div className="mb-6">
          <h2 className="bg-blue-500 text-white text-2xl font-semibold px-2.5 py-0.5 rounded ml-2">Player Names</h2>
        </div>

        <div className="mb-6">
          <label className="m-2 font-bold">Player 1:</label>
          <input
            type="text"
            className="border border-black rounded px-2 py-1 ml-2 w-full sm:w-60"
            placeholder="Enter Player 1 Name"
            value={player1Name}
            onChange={(e) => setPlayer1Name(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="m-2 font-bold">Player 2:</label>
          <input
            type="text"
            className="border border-black rounded px-2 py-1 ml-2 w-full sm:w-60"
            placeholder="Enter Player 2 Name"
            value={player2Name}
            onChange={(e) => setPlayer2Name(e.target.value)}
          />
        </div>
          
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <Button
          onClick={handleSave}
          title="Save"
          styles="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full"
          icon={player}
        />
      </div>  
    </form>

    
  );
};

export default EnterName;
