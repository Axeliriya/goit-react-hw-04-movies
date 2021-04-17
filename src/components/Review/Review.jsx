const Review = ({ review }) => {
  const { author, content } = review;
  return (
    <li className="Rewiews_item">
      <h3>Author: {author}</h3>
      <p>{content}</p>
    </li>
  );
};

export default Review;
