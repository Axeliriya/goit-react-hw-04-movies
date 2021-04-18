import MoviesItem from '../MoviesItem';
import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <MoviesItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
};

export default MoviesList;
