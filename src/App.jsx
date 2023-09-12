import { useState } from 'react';
import './styles.scss';
import Board from "./components/board";
import { winnerCalculate } from './winner';

function App(){

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const clickHandler = clickedPosition => {
    //To ensure that X and O doesn't change on clicking again on a filled index
    //To stop the function after having a winner
    if(squares[clickedPosition] || winner){
        return;
    }

    //To print X and O on clicking.
    setSquares(currentSquare => {
      return currentSquare.map((squareValue, position) => {
        if (clickedPosition === position) {
          return isXNext ? 'X' : 'O';
        }
        return squareValue;
      });
    });

    //To neglect the booleans which means that if true then false and if false than true. It's used to envoke multiple player in the game, that's one's X then O on again clicking another square.
    setIsXNext(currentIsXNext => !currentIsXNext);
  };

  //To display winner.
  const winner = winnerCalculate(squares);
  
  //To add message for turn of the player.
  const turnMessage = isXNext ? 'X' : 'O';

  //To display draw message
  const draw = squares.every(squareValue => squareValue !== null);

  //Winner, turn and draw display.
  const status = () => {
    if(!winner && !draw){
      return <div className='message'>It's your Turn <span id='turn'>{turnMessage}</span></div>;
    }
    if(winner){
      return <div className='message'><span id='winnermsg'>{winner}</span> Won &#129321;</div>;
    }
    if(!winner && draw){
      return <div className='drawmsg'>Match Draw &#128542;</div>;
    }
  };
  return (
    <div className="container">
      <h1 id='title'>TicTacToe Game | shubham.mishra</h1>
      <div className='playerName'>
        <h2>{status()}</h2>
      </div>
      <Board squares={squares} clickHandler={clickHandler}/>
    </div>
  );
}

export default App;