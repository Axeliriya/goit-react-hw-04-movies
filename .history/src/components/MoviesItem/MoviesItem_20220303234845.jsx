import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const MoviesItem = ({ movie, location, search }) => {
  const { id, title, poster_path, vote_average, release_date } = movie;
  const url = `https://image.tmdb.org/t/p/w500${poster_path}`;

  useEffect(() => {
    console.log(movie);
  }, []);

  return (
    <li className="MovieItem">
      <NavLink
        className="MovieItem_link"
        activeClassName="MovieItem_link--active"
        to={{
          pathname: `/movies/${id}`,
          state: {
            from: location,
            search,
          },
        }}
      >
        <div className="MovieItem_card">
          <div className="MovieItem_image">
            <img src={url} width="60" alt={title} />
          </div>

          <div className="MovieItem_descr">
            <h3>{title}</h3>
            <p>Vote: {vote_average}</p>
            <p>Release date: {release_date}</p>
          </div>
        </div>
      </NavLink>
    </li>
  );
};

MoviesItem.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
  }),
  location: PropTypes.object.isRequired,
};

export default withRouter(MoviesItem);
