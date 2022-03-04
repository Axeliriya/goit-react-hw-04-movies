import Loader from 'react-loader-spinner';

const MovieCard = ({
  poster_path,
  title,
  genres,
  vote_average,
  overview,
  loading,
}) => {
  return (
    <div className="MovieDetails">
      {loading ? (
        <div className="PosSpinnerLoad">
          <Loader type="Oval" color="#999999" height={50} width={50} />
        </div>
      ) : (
        <>
          <h2>{title}</h2>
          <img
            className="MovieDetails_image"
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
          <div className="MovieDetails_descr">
            <p>User Score: {vote_average * 10}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <ul className="MovieDetails_genres">
              {genres.map(({ id, name }) => (
                <li className="MovieDetails_genre" key={id}>
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieCard;
