const ButtonGoBack = ({ onGoBack }) => {
  return (
    <button className="Button" type="button" onClick={onGoBack}>
      Go back
    </button>
  );
};

export default ButtonGoBack;
