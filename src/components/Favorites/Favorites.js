import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Favorites.css';
import {removeMovieFavorite} from '../../actions/index.js'

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2 className="fav">Películas Favoritas</h2>
        <ul>
          {this.props.movies.map(movie => 
        <li className="movie">
          <Link to={`/movie/${movie.id}`} className="link">
          {movie.title}
          </Link>
          <button className="button" onClick={() => this.props.removeMovieFavorite(movie.title)}>X</button>
        </li>
          )
          }
        </ul>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    movies: state.moviesFavourites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: movie => dispatch(removeMovieFavorite(movie))
  
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedList);

