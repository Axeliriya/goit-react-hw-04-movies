import { Component } from 'react';
import apiService from '../../services/api-service';
import Review from '../Review';
import Loader from 'react-loader-spinner';

class Reviews extends Component {
  state = {
    reviews: [],
    loading: false,
    error: null,
  };
  async componentDidMount() {
    this.setState({ loading: true });

    const { results } = await apiService
      .getFetchReviewsMovie(this.props.match.params.movieId)
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));

    this.setState({ reviews: results });
  }

  render() {
    const { reviews, loading } = this.state;
    return (
      <div className="PosSpinnerRewiews">
        <ul>
          {loading ? (
            <li>
              <Loader type="Oval" color="#999999" height={50} width={50} />
            </li>
          ) : reviews.length > 0 ? (
            reviews.map(({ id, ...review }) => (
              <Review key={id} review={review} />
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
