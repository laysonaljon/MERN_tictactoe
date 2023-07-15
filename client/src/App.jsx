import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Button } from './components'
import { logo } from './assets';
import { Home, Game } from './pages';

const App = () => {
  return (
    <BrowserRouter>
    <header className="bg-blue-gradient w-full flex items-center justify-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      </Link>
    </header>
    <main className="bg-black-gradient-2 sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </main>
  </BrowserRouter>
  )
}

export default App