import { Component } from 'react';
import apiService from '../../services/api-service';
import CastItem from '../CastItem';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';

class Cast extends Component {
  state = {
    cast: [],
    error: null,
    loading: false,
  };
  async componentDidMount() {
    this.setState({ loading: true });

    const { cast } = await apiService
      .getFetchCastMovie(this.props.match.params.movieId)
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));

    this.setState({ cast: cast });
  }

  render() {
    const { cast, loading } = this.state;
    return (
      <>
        {loading ? (
          <div className="spinner">
            <Loader type="Oval" color="#999999" height={50} width={50} />
          </div>
        ) : cast.length > 0 ? (
          <ul className="Cast_list">
            {cast.map(({ id, ...person }) => (
              <CastItem key={id} person={person} />
            ))}
          </ul>
        ) : (
          <div>We have no data on the actors for this film.</div>
        )}
      </>
    );
  }
}

Cast.propTypes = {
  cast: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  error: PropTypes.object,
  person: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
};

export default Cast;
