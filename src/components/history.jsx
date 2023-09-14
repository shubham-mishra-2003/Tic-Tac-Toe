import PropTypes from 'prop-types';

const History = ({ history, moveto, currentMove }) => {
  return (
    <div className="historydisplay">
      <div className="gameHistory">
        <h2>Game History</h2>
      </div>
      <ul className="history">
        {history.map((_, index) => (
          <li key={index}>
            <button
              type="button"
              className={`btn-move ${currentMove == index ? 'active' : ''}`}
              onClick={() => moveto(index)}
            >
              {index === 0 ? 'Go to start' : `Go to move #${index}`}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

History.propTypes = {
  history: PropTypes.array.isRequired,
  moveto: PropTypes.func.isRequired, 
  currentMove: PropTypes.number.isRequired,
};

export default History;