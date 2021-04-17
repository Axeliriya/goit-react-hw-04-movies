import MoviesItem from '../MoviesItem';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <MoviesItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MoviesList;
