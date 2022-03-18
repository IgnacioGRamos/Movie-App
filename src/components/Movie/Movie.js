import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {


    // el componentDidmount es parte del ciclo de vida, apenas se renderice movies se ejecuta esta accion
    componentDidMount(){
        this.props.getMovieDetail(this.props.match.params.id)
    }



    render() {
        return (
            <div className="movie-detail">
                <h3>{this.props.movie.Title}</h3>
                <p>{this.props.movie.Genre}</p>
                <img src={this.props.movie.Poster} />
            </div>
        );
    }
}




function mapStateToProps(state) {
    return {
      movie: state.movieDetail
    };
  }
  
  
  
  export default connect(mapStateToProps, {getMovieDetail} )(Movie);

