import { Component } from 'react';
import apiService from '../services/api-service';
import MoviesList from '../components/MoviesList';
import Loader from 'react-loader-spinner';
import debounce from 'lodash.debounce';

class MoviesPage extends Component {
  state = {
    search: '',
    debouncedSearch: '',
    movies: [],
    loading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { debouncedSearch } = this.state;
    if (prevState.debouncedSearch !== debouncedSearch && debouncedSearch) {
      this.fetchMovies();
    }
  }

  async fetchMovies() {
    this.setState({ loading: true });
    const { debouncedSearch } = this.state;

    const { results } = await apiService
      .getFetchSearchMovie(debouncedSearch)
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));

    this.setState({ movies: results });
  }

  handleDebounceSearch = debounce(value => {
    this.setState({ debouncedSearch: value });
  }, 300);

  handleChange = event => {
    const { value } = event.currentTarget;

    this.setState({ search: value });

    this.handleDebounceSearch(value);
  };

  render() {
    const { search, movies, loading } = this.state;

    return (
      <div className="Searchbar">
        <div className="SearchForm">
          <div type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </div>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            value={search}
            onChange={this.handleChange}
            autoFocus
            placeholder="Search movies"
          />
        </div>

        <div className="SearchQuery">
          <div className="PosSpinner">
            {loading ? (
              <Loader type="Oval" color="#999999" height={50} width={50} />
            ) : (
              <MoviesList movies={movies} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MoviesPage;
