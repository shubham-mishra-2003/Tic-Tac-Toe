import Square from './Square';

const Board = ({squares, clickHandler}) => {
  const rendersquare = position => {
    return (
      <Square
        value={squares[position]}
        onClick={() => clickHandler(position)}
      />
    );
  };

  //To make the board.
  return (
    <div className="board">
      <div className="boardRow">
        {rendersquare(0)}
        {rendersquare(1)}
        {rendersquare(2)}
      </div>
      <div className="boardRow">
        {rendersquare(3)}
        {rendersquare(4)}
        {rendersquare(5)}
      </div>
      <div className="boardRow">
        {rendersquare(6)}
        {rendersquare(7)}
        {rendersquare(8)}
      </div>
    </div>
  );
};


//To export the properties of board.jsx
export default Board;