import Loader from 'react-loader-spinner';

const MovieCard = ({
  poster_path,
  title,
  genres,
  vote_average,
  overview,
  loading,
  adult,
  production_countries,
  production_companies,
  release_date,
  tagline,
  vote_count,
}) => {
  return (
    <div className="MovieDetails">
      {loading ? (
        <div className="PosSpinnerLoad">
          <Loader type="Oval" color="#999999" height={50} width={50} />
        </div>
      ) : (
        <>
          <div className="MovieDetails_poster">
            <img
              className="MovieDetails_image"
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
            />
            {adult && <span className="MovieDetails_adults">18+</span>}
          </div>
          <div className="MovieDetails_descr">
            <h2>{title}</h2>
            {production_countries.map(({ name, iso_3166_1: id }) => (
              <p key={id}>Production countries: {name}</p>
            ))}
            {production_companies.map(({ id }) => (
              <p key={id}>Production countries: {name}</p>
            ))}
            <p>Tagline: {tagline}</p>
            <p>User Score: {vote_average * 10}%</p>
            <p>Vote count: {vote_count}</p>
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
            {/* <p>Release date: {release_date}</p> */}
          </div>
        </>
      )}
    </div>
  );
};

export default MovieCard;
