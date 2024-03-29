import React, { useState } from 'react';
import tmdbApi from '../../api/services/tmdbApi';
import BasicCard from '../../components/BasicCard/BasicCard';
import './search.css';

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event, classification) => {
    event.preventDefault();
    setError('');
    const response = await tmdbApi.getBySearch(classification, query);
    setMovies(response.results);
    response.results.length === 0 &&
      setError(`No results were found associated with the search "${query}"`);
  };

  function handleChange(event) {
    setQuery(event.target.value);
  }

  return (
    <div className="moviesContainer">
      <div className="formsContainer">
        <form
          id="form"
          className="searchBar"
          onSubmit={(e) => handleSubmit(e, 'movie')}
        >
          <input
            type="search"
            placeholder="Search movies.."
            className="searchBarInput"
            onChange={handleChange}
          />
          <button className="searchBarBtn">
            <svg viewBox="0 0 1024 1024">
              <path d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path>
            </svg>
          </button>
        </form>
        <form
          id="form"
          className="searchBar"
          onSubmit={(e) => handleSubmit(e, 'tv')}
        >
          <input
            type="search"
            placeholder="Search series.."
            className="searchBarInput"
            onChange={handleChange}
          />
          <button className="searchBarBtn">
            <svg viewBox="0 0 1024 1024">
              <path d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"></path>
            </svg>
          </button>
        </form>
      </div>
      <ul className="movieCardContainer">
        {movies.map((movie) => (
          <li className="MovieCard">
            <BasicCard key={movie.id} movie={movie} />
          </li>
        ))}
        <p className="search-error">{error}</p>
      </ul>
    </div>
  );
};

export default Search;
