import { withRouter, NavLink } from 'react-router-dom';

const AdditionalInformation = ({ location, match }) => {
  return (
    <div className="MovieDetails_links">
      <h4>Additional information</h4>

      <ul>
        <li>
          <NavLink
            className="MovieDetails_link"
            activeClassName="MovieDetails_link--active"
            to={{
              pathname: `${match.url}/cast`,
              state: {
                from: location,
              },
            }}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            className="MovieDetails_link"
            activeClassName="MovieDetails_link--active"
            to={{
              pathname: `${match.url}/reviews`,
              state: {
                from: location,
              },
            }}
          >
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(AdditionalInformation);
