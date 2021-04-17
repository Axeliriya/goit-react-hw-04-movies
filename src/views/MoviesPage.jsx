import { Component } from 'react';
import apiService from '../components/services/api-service';
import MoviesList from '../components/MoviesList';
import Loader from 'react-loader-spinner';

class MoviesPage extends Component {
  state = { search: '', movies: [], loading: false, error: null };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.search !== this.state.search && this.state.search) {
      this.fetchMovies();
    }
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
    this.setState({ search: event.currentTarget.value });
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
        <div className="PosSpinner">
          {loading ? (
            <Loader type="Oval" color="#999999" height={50} width={50} />
          ) : (
            <MoviesList movies={movies} />
          )}
        </div>
      </div>
    );
  }
}

export default MoviesPage;
