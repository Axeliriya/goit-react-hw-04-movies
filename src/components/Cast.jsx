import { Component } from 'react';
import apiService from './services/api-service';

class Cast extends Component {
  state = {
    cast: [],
  };
  async componentDidMount() {
    const { cast } = await apiService.getFetchCastMovie(
      this.props.match.params.movieId,
    );
    this.setState({ cast: cast });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.cast.map(({ id, name, character, profile_path }) => (
            <li className="Cast" key={id}>
              <div className="Cast_card">
                <img
                  className="Cast_image"
                  src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                  alt={name}
                />
                <div className="Cast_descr">
                  <p>Name: {name}</p>
                  <p>Character: {character}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Cast;
