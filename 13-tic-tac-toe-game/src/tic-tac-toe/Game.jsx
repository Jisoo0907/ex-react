import { useState } from 'react';
import {
  checkWinner,
  INITIAL_SQUARES,
  PLAYER,
  PLAYER_COUNT,
} from './constants';
import History from './Components/History/History';
import Board from './Components/Board/Board';
import S from './Game.module.css';
import './styles/main.css';

function Game() {
  const [squares, setSquares] = useState(INITIAL_SQUARES);

  const handlePlayGame = (index) => () => {
    if (winnerInfo) {
      alert('GAME OVER');

      return;
    }

    setSquares((prevSquares) => {
      const nextSquares = prevSquares.map((square, idx) => {
        return idx === index ? nextPlayer : square;
      });

      return nextSquares;
    });
  };

  const winnerInfo = checkWinner(squares);

  const gameIndex = squares.filter(Boolean).length; // 0

  const isPlayerOneTurn = gameIndex % PLAYER_COUNT === 0; // true
  const nextPlayer = isPlayerOneTurn ? PLAYER.ONE : PLAYER.TWO; // '🍟'
  const isDraw = !winnerInfo && squares.every(Boolean);

  return (
    <div className={S.component}>
      <Board
        squares={squares}
        winnerInfo={winnerInfo}
        nextPlayer={nextPlayer}
        onPlay={handlePlayGame}
        isDraw={isDraw}
      />
      <History />
    </div>
  );
}

export default Game;
