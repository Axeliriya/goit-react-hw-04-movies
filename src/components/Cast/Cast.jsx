import { Component } from 'react';
import apiService from '../../services/api-service';
import CastItem from '../CastItem';
import Loader from 'react-loader-spinner';

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
      <div className="PosSpinnerCast">
        {loading ? (
          <Loader type="Oval" color="#999999" height={50} width={50} />
        ) : cast.length > 0 ? (
          <ul>
            {cast.map(({ id, ...person }) => (
              <CastItem key={id} person={person} />
            ))}
          </ul>
        ) : (
          <div>We don't have any rewiews for this movie.</div>
        )}
      </div>
    );
  }
}

export default Cast;
