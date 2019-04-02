import React from 'react';

import { Link, NavLink } from 'react-router-dom';

import styled from 'styled-components';

// Styled Components

const StyledSavedList = styled.div`
  background-color: #fff;
  border: 0;
  box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
    0 2px 4px rgba(0, 0, 0, 0.24);
  padding: 1rem;
  cursor: pointer;
  position: relative;
  margin: 1rem auto;
  width: 75%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    margin-right: 10px;
  }

  .active {
    color: blue;
    border: 1px solid grey;
    padding: 5px;
  }
`

const HomeButton = styled.div`
  padding: 5px 10px;
  background-color: lightskyblue;
`

const SavedMovie = styled.span`
  margin: 0 10px;
`

// Saved List Component

export default function SavedList(props) {
  return (
    <StyledSavedList>
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <NavLink key={movie.id} to={`/movies/${movie.id}`}><SavedMovie>{movie.title}</SavedMovie></NavLink>
      ))}
      <Link to="/"><HomeButton className="home-button">Home</HomeButton></Link>
    </StyledSavedList>
  );
}