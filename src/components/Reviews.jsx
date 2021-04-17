import { Component } from 'react';
import apiService from './services/api-service';

class Reviews extends Component {
  state = {
    reviews: [],
  };
  async componentDidMount() {
    const { results } = await apiService.getFetchReviewsMovie(
      this.props.match.params.movieId,
    );

    this.setState({ reviews: results });
  }

  render() {
    const { reviews } = this.state;
    return (
      <div>
        <ul>
          {reviews.length > 0 ? (
            reviews.map(({ id, author, content }) => (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            ))
          ) : (
            <li>We don't have any rewiews for this movie.</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Reviews;
