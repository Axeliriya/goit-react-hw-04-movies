import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import apiService from '../services/api-service';
import Cast from '../components/Cast';
import Reviews from '../components/Reviews';
import MovieCard from '../components/MovieCard';
import AdditionalInformation from '../components/AdditionalInformation';
import { routes } from '../routes';

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
    const home = routes.find(route => route.label === 'Home');
    history.push(
      location?.state?.from?.state?.from || location?.state?.from || home.path,
    );
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

        <AdditionalInformation location={this.props} match={this.props} />

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
