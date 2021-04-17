import { NavLink, withRouter } from 'react-router-dom';

const MoviesItem = ({ movie, location }) => {
  const { id, title, poster_path, vote_average, release_date } = movie;
  return (
    <li className="MovieItem">
      <NavLink
        className="MovieItem_link"
        activeClassName="MovieItem_link--active"
        to={{
          pathname: `/movies/${id}`,
          state: {
            from: location,
          },
        }}
      >
        <div className="MovieItem_card">
          <img
            className="MovieItem_image"
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            width="60"
            alt={title}
          />
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

export default withRouter(MoviesItem);
