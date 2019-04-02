import React from 'react';

import styled from 'styled-components';

// // Styled Components

const StyledMovieCard = styled.div`
  background-color: #fff;
  border: 0;
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);
  padding: 1rem;
  cursor: pointer;
  position: relative;
  margin: 1rem auto;
`

const MovieDirector = styled.div`
  padding: 4px 0;
  font-size: 0.8rem;
`

// Movie Card Component

const MovieCard = props => {
  return(
    <StyledMovieCard>
      <h2>{props.title}</h2>
      <MovieDirector>
        Director: <em>{props.director}</em>
      </MovieDirector>
      <div className="movie-metascore">
        Metascore: <strong>{props.metascore}</strong>
      </div>
      <h3>Actors</h3>

      {props.stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </StyledMovieCard>
  );
};

export default MovieCard;
