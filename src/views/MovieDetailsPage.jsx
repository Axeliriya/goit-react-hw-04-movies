import { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import apiService from '../components/services/api-service';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';
import MovieCard from '../components/MovieCard';
import routes from '../routes';

class MovieDetailsPage extends Component {
  state = {
    poster_path: null,
    title: null,
    genres: [],
    vote_average: null,
    overview: null,
    loading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const movieDetails = await apiService
      .getFetchDetailesMovie(this.props.match.params.movieId)
      .then(data => data)
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));

    this.setState({ ...movieDetails });
  }

  handleGoBack = () => {
    const { location, history } = this.props;
    history.push(location?.state?.from || routes.home);
  };

  render() {
    const {
      poster_path,
      title,
      genres,
      vote_average,
      overview,
      loading,
    } = this.state;

    return (
      <>
        <div className="MovieDetails">
          <button className="Button" type="button" onClick={this.handleGoBack}>
            Go back
          </button>
        </div>
        <MovieCard
          poster_path={poster_path}
          title={title}
          genres={genres}
          vote_average={vote_average}
          overview={overview}
          loading={loading}
        />
        <div className="MovieDetails">
          <div>
            <h4>Additional information</h4>

            <ul>
              <li>
                <Link to={`${this.props.match.url}/cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`${this.props.match.url}/reviews`}>Reviews</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="MovieDetails">
          <Switch>
            <Route
              path={`${this.props.match.path}/cast`}
              render={props => <Cast {...props} />}
            />
            <Route
              path={`${this.props.match.path}/reviews`}
              render={props => <Reviews {...props} />}
            />
          </Switch>
        </div>
      </>
    );
  }
}

export default MovieDetailsPage;
