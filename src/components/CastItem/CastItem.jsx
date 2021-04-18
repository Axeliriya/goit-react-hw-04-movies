import PropTypes from 'prop-types';

const CastItem = ({ person }) => {
  const { name, character, profile_path } = person;
  return (
    <li className="Cast">
      <div className="Cast_card">
        <div className="Cast_image">
          <img
            src={`https://image.tmdb.org/t/p/w500${profile_path}`}
            alt={name}
          />
        </div>

        <div className="Cast_descr">
          <p>
            <span className="Cast_descr_label">Name:</span> {name}
          </p>
          <p>
            <span className="Cast_descr_label">Character:</span> {character}
          </p>
        </div>
      </div>
    </li>
  );
};

CastItem.propTypes = {
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    character: PropTypes.string.isRequired,
  }),
};

export default CastItem;
