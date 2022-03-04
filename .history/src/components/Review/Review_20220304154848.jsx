import PropTypes from 'prop-types';

const Review = ({ review }) => {
  const { author, content, author_details, created_at } = review;
  return (
    <li className="Rewiews_item">
      <p className="Rewiew_date">
        {created_at.slice(0, 9)} {created_at.slice(11, 18)}
      </p>
      <p className="Rewiew_content">{content}</p>
      <div className="Rewiew_author">
        {author_details &&
          author_details.map(({ avatar_path, username }) => (
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
