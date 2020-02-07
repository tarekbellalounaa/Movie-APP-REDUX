import React from "react";
import { connect } from "react-redux";
import MovieCard from "./movieCard";

function MovieList(props) {
  return (
    <div className="main4">
      {props.movielist.listMovies
        .filter(
          el =>
            el.rating >= props.movielist.rate &&
            el.title
              .toUpperCase()
              .includes(props.movielist.keyword.toUpperCase().trim())
        )
        .map(el => (
          <MovieCard movie={el} />
        ))}
    </div>
  );
}
const mapStateToProps = state => {
  return {
    movielist: state.movies
  };
};

export default connect(mapStateToProps)(MovieList);
