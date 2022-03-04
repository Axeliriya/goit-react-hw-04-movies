import PropTypes from 'prop-types';

const Review = ({ review }) => {
  const { author, content, author_details } = review;
  return (
    <li className="Rewiews_item">
      <p className="Rewiew_content">{content}</p>
      <p className="Rewiew_author">Author: {author}</p>
      {author_details.map(({ avatar_path, username }) => (
        <img src={avatar_path} alt={username} />
      ))}
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
