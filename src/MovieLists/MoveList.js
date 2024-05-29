import React, { useEffect, useState } from 'react';
import Navbar from '../MenuBar/Navbar';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch('https://hoblist.com/api/movieList', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          category: 'movies',
          language: 'kannada',
          genre: 'all',
          sort: 'voting'
        })
      });
      const data = await response.json();
      const sortedMovies = data.result.sort((a, b) => b.voting - a.voting);
      setMovies(sortedMovies);
    } catch (err) {
      setError('Failed to fetch movies.');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-10">
      <Navbar/>
      <h1 className="text-xl font-bold mb-4">Movie List</h1>
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
      {movies.length > 0 ? (
        <ul className="space-y-4">
          {movies.map((movie) => (
            <li key={movie.id || movie.title} className="flex bg-white shadow-md p-4 rounded-lg">
              <div className="flex items-center mr-4">
                <div className="flex flex-col items-center">
                  <button aria-label="Upvote">
                    <svg className="w-6 h-6 text-gray-600 hover:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                    </svg>
                  </button>
                  <p className="text-lg font-bold">{movie.voting}</p>
                  <span>Votes</span>
                  <button aria-label="Downvote">
                    <svg className="w-6 h-6 text-gray-600 hover:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex-none w-24 mr-4">
                <img src={movie.poster} alt={movie.title} className="w-full h-auto rounded-lg" />
              </div>
              <div className="flex-grow">
                <h2 className="text-lg font-bold">{movie.title}</h2>
                <p>Genre: {movie.genre}</p>
                <p>Language: {movie.language}</p>
                <p>Director: {movie.director}</p>
                <p>Starring: {movie.stars}</p>
                <p>Mins | {movie.language} | {movie.releasedDate}</p>
                <p>{movie.pageViews} views | Voted by {movie.totalVoted} People</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 mt-2 rounded" aria-label="Watch Trailer">
                  Watch Trailer
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading movies...</p>
      )}
    </div>
  );
};

export default MovieList;
