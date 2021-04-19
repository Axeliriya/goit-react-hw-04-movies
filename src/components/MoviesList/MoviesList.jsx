import MoviesItem from '../MoviesItem';
import PropTypes from 'prop-types';

const MoviesList = ({ movies, search }) => {
  return (
    <ul>
      {movies.map(movie => (
        <MoviesItem key={movie.id} movie={movie} search={search} />
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
