import { useState } from 'react';
import './styles.scss';
import Board from './components/board';
import Status from './components/status';
import { winnerCalculate } from './winner';
import History from './components/history';

const new_game = [{ squares: Array(9).fill(null), isXNext: false }];

function App() {
  //To save history of game
  const [history, setHistory] = useState([
    { squares: Array(9).fill(null), isXNext: false },
  ]);

  const [currentMove, setcurrentMove] = useState(0);

  const gameBoard = history[currentMove];
  //To show winner message.
  const { winner, winningSquares } = winnerCalculate(gameBoard.squares);

  //To stop the clicking of boxes after getting either winner or getting al boxes filled.
  const clickHandler = positionsClicked => {
    if (gameBoard.squares[positionsClicked] || winner) {
      return;
    }
    setHistory(currentHistory => {
      const traverse = currentMove + 1 != currentHistory.length;

      const lastGameState = traverse
        ? currentHistory[currentMove]
        : currentHistory[currentHistory.length - 1];

      const nextSquareState = lastGameState.squares.map(
        (squareValue, position) => {
          if (positionsClicked == position) {
            return lastGameState.isXNext ? 'X' : 'O';
          }
          return squareValue;
        }
      );

      const base = traverse
        ? currentHistory.slice(0, currentHistory.indexOf(lastGameState) + 1)
        : currentHistory;

      return base.concat({
        squares: nextSquareState,
        isXNext: !lastGameState.isXNext,
      });
    });

    //To ensure that the button don't clicks again after filling the array
    setcurrentMove(move => move + 1);
  };

  const moveto = move => {
    setcurrentMove(move);
  };

  const gameReset = () => {
    setHistory(new_game);
    setcurrentMove(0);
  };

  return (
    <div className="container">
      <h1 id="title">TicTacToe Game | shubham.mishra</h1>
      <div className="heading">
        <div className="playerName">
          <h2>
            <Status winner={winner} gameBoard={gameBoard} />
          </h2>
        </div>
        <button
          type="button"
          className={`resetBtn ${
            winner || gameBoard.squares.every(square => square) ? 'active' : ''
          }`}
          onClick={gameReset}
        >
          Start New Game
        </button>
      </div>
      <div className="mainGame">
        <Board
          squares={gameBoard.squares}
          clickHandler={clickHandler}
          winningSquares={winningSquares}
        />
        <History history={history} moveto={moveto} currentMove={currentMove} />
      </div>
    </div>
  );
}

export default App;
