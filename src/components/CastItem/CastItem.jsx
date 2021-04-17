const CastItem = ({ person }) => {
  const { name, character, profile_path } = person;
  return (
    <li className="Cast">
      <div className="Cast_card">
        <img
          className="Cast_image"
          src={`https://image.tmdb.org/t/p/w500${profile_path}`}
          alt={name}
        />
        <div className="Cast_descr">
          <p>Name: {name}</p>
          <p>Character: {character}</p>
        </div>
      </div>
    </li>
  );
};

export default CastItem;
