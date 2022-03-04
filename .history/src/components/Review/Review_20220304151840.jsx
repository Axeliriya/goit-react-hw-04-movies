import PropTypes from 'prop-types';

const Review = ({ review }) => {
  const { author, content } = review;
  return (
    <li className="Rewiews_item">
      <p className="Rewiew_content">{content}</p>
      <p className="Rewiew_author">Author: {author}</p>
    </li>
  );
};

Review.propTypes = {
  review: PropTypes.shape({
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
};

export default Review;
