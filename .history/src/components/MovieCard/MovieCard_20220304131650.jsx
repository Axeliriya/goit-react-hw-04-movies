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
            <h2 className="Movie_title">
              {title} ({release_date.slice(0, 4)})
            </h2>
            <p className="tagline">"{tagline}"</p>
            {production_countries.map(({ name, iso_3166_1: id }) => (
              <p className="country" key={id}>
                Country: {name}
              </p>
            ))}
            {/* {production_companies.map(({ id, logo_path, name }) => (
              <div key={id} className="production">
                {logo_path && (
                  <img
                    className="production_logo"
                    src={`https://image.tmdb.org/t/p/w500${logo_path}`}
                    alt={name}
                  />
                )}
                <span key={id}>Production companies: {name}</span>
              </div>
            ))} */}
            <div className="rating">
              <div className="rating_body">
                <div className="rating_active" width={100}>
                  <div className="rating_items">
                    <input
                      type="radio"
                      className="rating_item"
                      name="rating"
                      value="1"
                    />
                    <input
                      type="radio"
                      className="rating_item"
                      name="rating"
                      value="1"
                    />
                    <input
                      type="radio"
                      className="rating_item"
                      name="rating"
                      value="1"
                    />
                    <input
                      type="radio"
                      className="rating_item"
                      name="rating"
                      value="1"
                    />
                    <input
                      type="radio"
                      className="rating_item"
                      name="rating"
                      value="1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className="rating_value">User Score: {vote_average * 10}%</p>
            <p className="rating_count">Vote count: {vote_count}</p>
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
