import PropTypes from 'prop-types';

const Review = ({ review }) => {
  const { author, content, author_details, created_at } = review;
  return (
    <li className="Rewiews_item">
      <div className="Rewiew_content">
        <p className="Rewiew_date">
          {created_at.slice(0, 10)} {created_at.slice(11, 19)}
        </p>
        <span>{content}</span>
      </div>
      <div className="Rewiew_author">
        {author_details &&
          [author_details].map(({ avatar_path, username }) => (
            <img
              src={`https://image.tmdb.org/t/p/w500${avatar_path}`}
              alt={username}
              width={50}
            />
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
