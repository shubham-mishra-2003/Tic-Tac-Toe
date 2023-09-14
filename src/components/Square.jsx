import PropTypes from 'prop-types';

const Square = ({ value, onClick, isWinning }) => {
  return (
    <button
      type="button"
      className={`square ${value === 'X' ? 'colorX' : 'colorO'} ${
        isWinning ? 'won' : ''
      }`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

Square.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isWinning: PropTypes.bool.isRequired,
};

export default Square;
