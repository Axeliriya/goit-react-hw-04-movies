import PropTypes from 'prop-types';

const Review = ({ review }) => {
  const { author, content, created_at } = review;
  return (
    <li className="Rewiews_item">
      <div className="Rewiew_content">
        <p className="Rewiew_date">
          {created_at.slice(8, 10)}.{created_at.slice(5, 7)}.
          {created_at.slice(0, 4)} {created_at.slice(11, 19)}
        </p>
        <p className="Review_content">{content}</p>
      </div>
      <div className="Rewiew_author">
        <span>Author: {author}</span>
      </div>
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
