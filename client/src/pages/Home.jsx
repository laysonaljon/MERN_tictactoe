import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components';

const Home = () => {
  return (
    <section className="max-w-7xl mx-auto justify-center text-center">
      <div>
        <Link to="/game">
          <Button
            onClick={() => {}}
            title="Start New Game"
            styles="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          />
        </Link>
        <h1 className="font-extrabold text-[#222328] text-[32px]">TicTacToe Game Record Book</h1>
        <p className="mt-2 text-[#666e75] text-[14px]">
          List of TicTacToe Games played by different players through this website.
        </p>
      </div>
    </section>
  );
};

export default Home;
