import PropTypes from 'prop-types';
import Square from './Square';

const Board = ({ squares, clickHandler, winningSquares }) => {
  const renderSquare = position => {
    const isWinningSquare = winningSquares && winningSquares.includes(position);

    return (
      <Square
        value={squares[position]}
        onClick={() => clickHandler(position)}
        isWinning={isWinningSquare}
      />
    );
  };

  return (
    <div className="board">
      <div className="boardRow">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="boardRow">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="boardRow">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

Board.propTypes = {
  squares: PropTypes.array.isRequired,
  clickHandler: PropTypes.func.isRequired,
  winningSquares: PropTypes.array,
};

export default Board;