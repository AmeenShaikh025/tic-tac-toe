import React, { useState, useEffect } from 'react';
import Square from './Square';

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  const calculateWinner = (squares) => {
    //possible winning combinationss
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 8],
    ];

    // loop over winning patterns
    for (let i = 0; i < winningPatterns.length; i++) {
      const [a, b, c] = winningPatterns[i];

      if (
        squares[i] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    // if no one has won
    return null;
  };

  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = isX ? 'X' : 'O';
    setSquares(squares);
    setIsX(!isX);
  };

  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = `Winner ${winner}`;
  } else {
    status = `Next Player: ${isX ? 'X' : 'O'}`;
  }

  const handleRestart = () => {
    setIsX(true);
    setSquares(Array(9).fill(null));
  };

  return (
    <div className="board">
      <div className="board-row">
        <Square
          id="square-0"
          onClick={() => handleClick(0)}
          value={squares[0]}
        />
        <Square
          id="square-1"
          onClick={() => handleClick(1)}
          value={squares[1]}
        />
        <Square
          id="square-2"
          onClick={() => handleClick(2)}
          value={squares[2]}
        />
      </div>
      <div className="board-row">
        <Square
          id="square-3"
          onClick={() => handleClick(3)}
          value={squares[3]}
        />
        <Square
          id="square-4"
          onClick={() => handleClick(4)}
          value={squares[4]}
        />
        <Square
          id="square-5"
          onClick={() => handleClick(5)}
          value={squares[5]}
        />
      </div>
      <div className="board-row">
        <Square
          id="square-6"
          onClick={() => handleClick(6)}
          value={squares[6]}
        />
        <Square
          id="square-7"
          onClick={() => handleClick(7)}
          value={squares[7]}
        />
        <Square
          id="square-8"
          onClick={() => handleClick(8)}
          value={squares[8]}
        />
      </div>

      <div className="status">{status}</div>
      <button className="restart" onClick={handleRestart}>
        Restart Game!
      </button>
    </div>
  );
}
