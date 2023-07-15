import React from 'react';
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
import { Button } from './components';
import { logo, play, home } from './assets';
import { Home, Game } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

const AppContent = () => {
  const location = useLocation();
  const isGamePage = location.pathname === '/game';

  return (
    <>
      <header className="w-full flex justify-between items-center bg-black-gradient sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/" className="flex items-center">
          <img src={logo} class="h-10 mr-2" alt="logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap text-gradient hidden sm:inline">TicTacToe</span>
       
        </Link>

        <Link to={isGamePage ? '/' : '/game'}>
          <Button
            onClick={() => {}}
            title={isGamePage ? 'Home' : 'Start New Game'}
            styles={`${
              isGamePage ? 'bg-blue-500 hover:bg-blue-600' : 'bg-green-500 hover:bg-green-600 '
            } text-white font-bold py-2 px-4 rounded w-48`}
            icon={isGamePage ? home : play}
          />
        </Link>
      </header>

      <main className="bg-black-gradient-2 sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
