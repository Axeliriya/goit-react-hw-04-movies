import PropTypes from 'prop-types';

const ButtonGoBack = ({ onGoBack }) => {
  return (
    <button className="Button" type="button" onClick={onGoBack}>
      Go back ↩
    </button>
  );
};

ButtonGoBack.propTypes = {
  onGoBack: PropTypes.func.isRequired,
};

export default ButtonGoBack;
