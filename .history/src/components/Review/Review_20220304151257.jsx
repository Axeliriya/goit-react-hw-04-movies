import PropTypes from 'prop-types';

const Review = ({ review }) => {
  const { author, content } = review;
  return (
    <li className="Rewiews_item">
      <h3>Author: {author}</h3>
      {/* <p>{content}</p> */}
      <div dangerouslySetInnerHTML={{ __html: content }} />
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
