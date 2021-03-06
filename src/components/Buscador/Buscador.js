import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import {addMovieFavorite, getMovies, getMovieDetail} from '../../actions/index.js'




export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title)
  }

  render() {
    const { title } = this.state;
    
    return (
      <div className="div">
        <div>
            <h2 className="buscador">Buscador</h2>
            <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
              <div className="buscador">
                <label className="label" htmlFor="title">Película: </label>
                <input
                  type="text"
                  id="title"
                  autoComplete="off"
                  value={title}
                  onChange={(e) => this.handleChange(e)}
                />
              </div>
              <button type="submit">BUSCAR</button>
            </form>
            <ul>
              {this.props.movies.length > 0? this.props.movies.map(movie => 
                  <li key={movie.imdbID} className="movie">
                    <Link to={`/movie/${movie.imdbID}`} className="link" >
                    {movie.Title}
                    </Link>
                    <button className="button" onClick={() => this.props.addMovieFavorite({title: movie.Title, id: movie.imdbID})}>Fav</button>
                  </li>
                  ):
                  <div className="msg">Busca la pelicula que te imagines</div>
              }
            </ul>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded
  };
}

function mapDispatchToProps(dispatch) {
  
  return {
    addMovieFavorite: movie => dispatch(addMovieFavorite(movie)),
    getMovies: title => dispatch(getMovies(title)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buscador);


