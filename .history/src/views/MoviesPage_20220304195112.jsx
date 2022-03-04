import { Component, Suspense } from 'react';
import apiService from '../services/api-service';
import Loader from 'react-loader-spinner';
import { Route, Switch } from 'react-router-dom';
import { routesQuery } from '../routes';
import PropTypes from 'prop-types';
import searchIcon from '../assets/img/search.png';

class MoviesPage extends Component {
  state = {
    search: this.props.location?.state?.search || '',
    movies: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    const { search } = this.state;
    search && this.fetchMovies();
  }

  async fetchMovies() {
    this.setState({ loading: true });
    const { search } = this.state;

    const { results } = await apiService
      .getFetchSearchMovie(search)
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));

    this.setState({ movies: results });
  }

  handleChange = event => {
    const { value } = event.currentTarget;
    this.setState({ search: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { search } = this.state;
    const { history } = this.props;

    search && this.fetchMovies();

    history.push({
      search: `?query=${search}`,
    });

    this.setState({ search: search });
  };

  render() {
    const { search, movies, loading, error } = this.state;
    return (
      <div className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm_button">
            <img src={searchIcon} alt="search" />
          </button>

          <input
            className="SearchForm_input"
            type="text"
            autoComplete="off"
            value={search}
            onChange={this.handleChange}
            autoFocus
            placeholder="Search movies"
          />
        </form>

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
          
            {loading ? (
              <div className="spinner">
                <Loader type="Oval" color="#999999" height={50} width={50} />
              </div>
            ) : error ? (
              <p>Server is not responding</p>
            ) : (
              <Switch>
              routesQuery.map(({ path, exact, component: Component }) => (
                <Route
                  key={path}
                  path={`${this.props.match.path}`}
                  exact={exact}
                  render={props => (
                    <Component {...props} movies={movies} search={search} />
                  )}
                />
              ))</Switch>
            )}
          
        </Suspense>
      </div>
    );
  }
}

MoviesPage.propTypes = {
  search: PropTypes.string,
  movies: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  error: PropTypes.object,
};

export default MoviesPage;
