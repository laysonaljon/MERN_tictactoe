import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, FormField, ScoreCard, Loader } from '../components';

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return (
      data.map((score) => <ScoreCard key={score._id} {...score} />)
    );
  }

  return (
    <h2 className="mt-5 font-bold text-[#6469ff] text-xl uppercase">{title}</h2>
  );
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allScores, setAllScores] = useState(null);

  const [searchText, setSearchText] = useState('');
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState(null);

  const fetchScores = async () => {
    setLoading(true);

    try {
      const response = await fetch('https://tictactoe-j8a9.onrender.com/api/v1/score', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const result = await response.json();
        setAllScores(result.data.reverse());
      }
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchScores();
  }, []);

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = allScores.filter((item) => item.player1name.toLowerCase().includes(searchText.toLowerCase()) || item.player2name.toLowerCase().includes(searchText.toLowerCase()));
        setSearchedResults(searchResult);
      }, 500),
    );
  };

  return (
    <section className=" bg-black-gradientmax-w-7xl mx-auto justify-center text-center">
      <div>
        <h1 className="font-extrabold text-white text-[32px]">TicTacToe Game Record Book</h1>
        <p className="mt-2 text-[#666e75] text-[14px]">
          The full list of TicTacToe Games played by different players through this website.
        </p>
      </div>
     
      <div className="mt-16">
        <FormField
          labelName="Search Game Record"
          type="text"
          name="text"
          placeholder="Search Player Name"
          value={searchText}
          handleChange={handleSearchChange}
        />
      </div>

      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="font-medium text-[#666e75] text-xl mb-3">
                Showing Resuls for: <span className="text-white">{searchText}</span>
              </h2>
            )}
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
              {searchText ? (
                <RenderCards
                  data={searchedResults}
                  title="No Search Results Found"
                />
              ) : (
                <RenderCards
                  data={allScores}
                  title="No Posts Yet"
                />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Home;
