import { Component } from 'react';
import MoviesList from '../components/MoviesList';
import apiService from '../services/api-service';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';

class HomePage extends Component {
  state = { movies: [], loading: false, error: null };

  async componentDidMount() {
    this.setState({ loading: true });
    const { results } = await apiService
      .getFetchTrendingMovies()
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
    this.setState({ movies: results });
  }

  render() {
    const { movies, loading, error } = this.state;

    return (
      <div className="HomePage">
        <h1 className="title">Trending Today</h1>
        {loading ? (
          <Loader type="Oval" color="#999999" height={50} width={50} />
        ) : error ? (
          <p>Server is not responding</p>
        ) : (
          <MoviesList movies={movies} />
        )}
      </div>
    );
  }
}

HomePage.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  error: PropTypes.object,
};

export default HomePage;
