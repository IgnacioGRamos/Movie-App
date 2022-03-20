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
                <div className='container'>
                    <div className='details'>
                        <h3>{this.props.movie.Title}</h3>
                    </div>
                    <div className='details'>
                        <p>{this.props.movie.Genre}</p>
                    </div>
                    <div className='details'>
                        <p>{this.props.movie.Year}</p>
                    </div>
                    <div className='details'>
                        <img src={this.props.movie.Poster} />
                    </div>
                </div> 
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

