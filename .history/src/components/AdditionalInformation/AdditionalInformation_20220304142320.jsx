import { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { routesDetails } from '../../routes';

class AdditionalInformation extends Component {
  state = {
    location: this.props.location,
    match: this.props.match,
    stateSearch: this.props.state,
  };
  render() {
    const { location, match, stateSearch } = this.state;

    return (
      <div className="MovieDetails_links">
        <ul className="MovieDetails_list">
          <li className="MovieDetails_item">
            {routesDetails.map(({ path, label }) => (
              <NavLink
                key={label}
                className="MovieDetails_link"
                activeClassName="MovieDetails_link--active"
                to={{
                  pathname: `${match.url}${path}`,
                  state: {
                    from: location,
                    search: stateSearch,
                  },
                }}
              >
                {label}
              </NavLink>
            ))}
          </li>
        </ul>
      </div>
    );
  }
}

AdditionalInformation.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(AdditionalInformation);
