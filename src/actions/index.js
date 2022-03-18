


export function addMovieFavorite(payload) {
    return { type: "ADD_MOVIE_FAVORITE", payload };
}
  
export function getMovies(titulo) {
    return function(dispatch) {
      return fetch("http://www.omdbapi.com/?apikey=308019e&s=" + titulo)
        .then(response => response.json())  // las api nos devuelven objetos json, y nosotros lo pasa a objeto javascript con el response.json() 
        .then(json => {
          dispatch({ type: "GET_MOVIES", payload: json });
        });
    };
}

export function removeMovieFavorite(payload) {
  return { type: "REMOVE_MOVIE_FAVORITE", payload};
}

export function getMovieDetail(idMovie) {
  return function(dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=308019e&i=${idMovie}`)
      .then(response => response.json())
      .then(data => {
        dispatch({ type: "GET_MOVIES_DETAIL", payload: data });
      });
  };
}



