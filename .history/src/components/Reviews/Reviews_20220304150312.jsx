import { Component } from 'react';
import apiService from '../../services/api-service';
import Review from '../Review';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';

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
        <ul className='Review_list'>
          {loading ? (
            <li className='Review_item'>
              <Loader type="Oval" color="#999999" height={50} width={50} />
            </li>
          ) : reviews.length > 0 ? (
            reviews.map(({ id, ...review }) => (
              <Review key={id} review={review} />
            ))
          ) : (
            <li className='Review_item'>We don't have any rewiews for this movie.</li>
          )}
        </ul>
      </div>
    );
  }
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  error: PropTypes.object,
  review: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }),
};

export default Reviews;
