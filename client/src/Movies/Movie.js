import React, { Component } from 'react';
import axios from 'axios';

import MovieCard from './MovieCard';

import styled from 'styled-components';

import PropTypes from 'prop-types';

// Styled Components

const SaveWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 1rem auto;
`

const SaveButton = styled.div`
  position: absolute;
  top: 25px;
  right: 25px;
  border-radius: 5px;
  padding: 5px 10px;
  background: #6699CC;
  cursor: pointer;
  color: white;

  &:hover {
    background: #9099A2;
    transition: all 200ms ease;
  }
`

// Movie Component Constructor

export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }

  componentDidMount(props) {
    // change this line to grab the id passed on the URL
    const id = this.props.match.params.id;
    this.fetchMovie(id);
  }

  fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        this.setState(() => ({ movie: response.data }));
      })
      .catch(error => {
        console.error(error);
      });
  };
  
  // Uncomment this code when you're ready for the stretch problems

  componentWillReceiveProps(newProps){
    if(this.props.match.params.id !== newProps.match.params.id){
      this.fetchMovie(newProps.match.params.id);
    }
  }

  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.movie)
  }

  render() {
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }

    const { title, director, metascore, stars } = this.state.movie;
    return (
      <SaveWrapper>
        <MovieCard
          title={title}
          director={director}
          metascore={metascore}
          stars={stars}
        />
        <SaveButton
          onClick={this.saveMovie}
        >Save</SaveButton>
      </SaveWrapper>
    );
  }
}

// Prop Types

Movie.propTypes = {
  addToSavedList: PropTypes.func
}
