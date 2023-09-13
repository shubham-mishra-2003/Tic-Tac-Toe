const Status = ({ winner, gameBoard }) => {
  const { squares, isXNext } = gameBoard;

  //To display draw message.
  const draw = squares.every(SquareValue => SquareValue != null);
  
  //To display turn message.
  const turnMessage = isXNext ? 'X' : 'O';

  const renderStatus = () => {
    //To display turn message.
    if (!winner && !draw) {
      return (
        <div className="message">Now your Turn <span id="turn">{turnMessage}</span></div>
      );
    }
    //To display winner message.
    if (winner) {
      return (
        <div className="message"><span id="winnermsg">{winner}</span> Won &#129321;</div>
      );
    }
    //To display draw message.
    if (!winner && draw) {
      return <div className="drawmsg">Match Draw &#128542;</div>;
    }

    return null;
  };

  return <h2 className="statusmessage">{renderStatus()}</h2>;
};

export default Status;