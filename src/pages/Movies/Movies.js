import React, { useState, useEffect } from 'react';
import { useTmdbApiContext } from '../../contexts/TmdbApiContext';
import BasicCard from '../../components/BasicCard/BasicCard';

const Movies = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  const { mostPopularMovies } = useTmdbApiContext();

  useEffect(() => {
    setPopularMovies(mostPopularMovies);
  }, [mostPopularMovies]);

  return (
    <div className="moviesContainer">
      <ul className="movieCardContainer">
        {popularMovies.map((movie) => (
          <li className="MovieCard">
            <BasicCard key={movie.id} movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
