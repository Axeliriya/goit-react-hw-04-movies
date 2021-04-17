import { Component } from 'react';
import MoviesList from '../components/MoviesList';
import apiService from '../components/services/api-service';
import Loader from 'react-loader-spinner';

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
    const { movies, loading } = this.state;

    return (
      <div className="HomePage">
        <h1>Trending Today</h1>
        {loading ? (
          <Loader type="Oval" color="#999999" height={50} width={50} />
        ) : (
          <MoviesList movies={movies} />
        )}
      </div>
    );
  }
}

export default HomePage;
