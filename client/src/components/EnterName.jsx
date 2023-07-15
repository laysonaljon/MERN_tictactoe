import React, { useState } from 'react';
import Button from './Button';

const EnterName = ({ onSave }) => {
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');
  const [error, setError] = useState('');

  const handleSave = () => {
    if (player1Name.trim() === '' || player2Name.trim() === '') {
      setError('Player names are required.');
    } else {
      onSave(player1Name, player2Name);
    }
  };

  return (
    <div>
      <label className="block mb-2">
        Player 1:
        <input
          type="text"
          className="border border-gray-300 rounded px-2 py-1"
          value={player1Name}
          onChange={(e) => setPlayer1Name(e.target.value)}
        />
      </label>
      <label className="block mb-2">
        Player 2:
        <input
          type="text"
          className="border border-gray-300 rounded px-2 py-1"
          value={player2Name}
          onChange={(e) => setPlayer2Name(e.target.value)}
        />
      </label>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <Button
        onClick={handleSave}
        title="Save"
        styles="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-5"
      />
    </div>
  );
};

export default EnterName;
