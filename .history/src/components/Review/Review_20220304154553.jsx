import PropTypes from 'prop-types';

const Review = ({ review }) => {
  const { author, content, author_details } = review;
  return (
    <li className="Rewiews_item">
      <p className="Rewiew_date">{content}</p>
      <p className="Rewiew_content">{content}</p>
      <div className="Rewiew_author">
        {author_details.map(({ avatar_path, username }) => (
          <img src={avatar_path} alt={username} width={50} />
        ))}
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
