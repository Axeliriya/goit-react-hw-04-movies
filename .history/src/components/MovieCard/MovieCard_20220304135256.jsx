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
            <h2 className="Movie_title">
              {title} ({release_date.slice(0, 4)})
            </h2>
            {production_countries.map(({ name, iso_3166_1: id }) => (
              <span className="country" key={id}>
                {name}{' '}
              </span>
            ))}
            <p className="tagline">"{tagline}"</p>
            <div className="rating">
              <div className="rating_body">
                <div
                  className="rating_active"
                  style={{ width: `${vote_average * 10}%` }}
                >
                  <div className="rating_items"></div>
                </div>
              </div>
              <p className="rating_value">
                {vote_average}
                <span className="rating_count">/{vote_count}</span>
              </p>
            </div>
            <h3 className="Overview_title">Overview</h3>
            <p className="Overview">{overview}</p>
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
