import React from 'react';

import { Link, NavLink } from 'react-router-dom';

import styled from 'styled-components';

// Styled Components

const StyledSavedList = styled.div`
  display: flex;
  justify-content: space-between;
  background: #FFF;
  border: 0;
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);
  padding: 1rem;
  position: relative;
  margin: 1rem auto;
  width: 90%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .active {
    background: lightblue;
    padding: 0 5px;
    border-radius: 5px;
    transition: all 200ms ease;
  }
`

const HomeButton = styled.div`
  padding: 5px 10px;
  background: #6D7993;
  color: white;
  border-radius: 5px;

  &:hover {
    background: #9099A2;
    transition: all 200ms ease;
  }
`

const SavedMovie = styled.span`
  line-height: 2;
  width: auto;
`

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 400px;
`

// Saved List Component

export default function SavedList(props) {
  return (
    <StyledSavedList>
      <h3>Saved Movies:</h3>
      <ListContainer>
        {props.list.map(movie => (
          <NavLink key={movie.id} to={`/movies/${movie.id}`}><SavedMovie>{movie.title}</SavedMovie></NavLink>
        ))}
      </ListContainer>
      <Link to="/"><HomeButton className="home-button">Home</HomeButton></Link>
    </StyledSavedList>
  );
}