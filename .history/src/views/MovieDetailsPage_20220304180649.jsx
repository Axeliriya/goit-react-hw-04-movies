import { Component, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import apiService from '../services/api-service';
import MovieCard from '../components/MovieCard';
import AdditionalInformation from '../components/AdditionalInformation';
import ButtonGoBack from '../components/ButtonGoBack';
import { routes, routesDetails } from '../routes';
import PropTypes from 'prop-types';

class MovieDetailsPage extends Component {
  state = {
    poster_path: null,
    title: null,
    genres: [],
    vote_average: null,
    overview: null,
    loading: false,
    error: null,
    location: '',
    adult: false,
    production_countries: [],
    release_date: '',
    tagline: '',
    vote_count: null,
  };

  async componentDidMount() {
    const { location } = this.props;

    this.setState({ loading: true });

    const movieDetails = await apiService
      .getFetchDetailesMovie(this.props.match.params.movieId)
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));

    this.setState({
      ...movieDetails,
      location: location?.state?.from?.pathname,
    });
  }

  handleGoBack = () => {
    const { history } = this.props;
    const { location } = this.state;
    const home = routes.find(route => route.label === 'Home');
    history.push({
      pathname: location || home.path,
      state: this.props.location.state,
    });
  };

  render() {
    const {
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
    } = this.state;

    return (
      <>
        <div className="MovieDetails_button">
          <ButtonGoBack onGoBack={this.handleGoBack} />
        </div>

        <MovieCard
          poster_path={poster_path}
          title={title}
          genres={genres}
          vote_average={vote_average}
          overview={overview}
          loading={loading}
          adult={adult}
          production_countries={production_countries}
          release_date={release_date}
          tagline={tagline}
          vote_count={vote_count}
        />

        <AdditionalInformation
          location={this.props}
          match={this.props}
          state={this.props.location.state.search}
        />

        <div className="MovieDetails_spinner">
          <Suspense
            fallback={
              <div className="spinner">
                <Loader
                  type="ThreeDots"
                  color="#999999"
                  height={50}
                  width={150}
                />
              </div>
            }
          >
            <Switch>
              {routesDetails.map(({ path, exact, component: Component }) => (
                <Route
                  key={path}
                  path={`${this.props.match.path}${path}`}
                  exact={exact}
                  render={props => <Component {...props} />}
                />
              ))}
            </Switch>
          </Suspense>
        </div>
      </>
    );
  }
}

MovieDetailsPage.propTypes = {
  title: PropTypes.string,
  poster_path: PropTypes.string,
  overview: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  vote_average: PropTypes.number,
};

export default MovieDetailsPage;
