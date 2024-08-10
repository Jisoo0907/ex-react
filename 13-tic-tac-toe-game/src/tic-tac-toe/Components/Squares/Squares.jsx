import { useState } from 'react';
import {
  INITIAL_SQUARES,
  PLAYER,
  PLAYER_COUNT,
  checkWinner,
  WINNERS_COLOR,
} from '@/tic-tac-toe/constants';
import S from './Squares.module.css';
import Square from '../Square/Square';

function Squares() {
  const [squares, setSquares] = useState(INITIAL_SQUARES);

  const handlePlayGame = (index) => () => {
    if (winnerInfo) {
      alert('GAME OVER');
      return;
    }
    setSquares((prevSquares) => {
      const nextSquares = prevSquares.map((square, idx) => {
        return idx === index ? currentPlayer : square;
      });

      return nextSquares;
    });
  };

  const winnerInfo = checkWinner(squares);

  const gameIndex = squares.filter(Boolean).length; // 0

  const isPlayerOneTurn = gameIndex % PLAYER_COUNT === 0; // true

  const currentPlayer = isPlayerOneTurn ? PLAYER.ONE : PLAYER.TWO; // '🍟'

  return (
    <div className={S.component}>
      {/* 리액트 (JSX) 마크업 : 리스트 렌더링 */}
      {squares.map((square, index) => {
        const winnerStyles = {
          backgroundColor: null,
        };

        if (winnerInfo) {
          const [x, y, z] = winnerInfo.condition;
          if (index === x || index === y || index === z) {
            winnerStyles.backgroundColor = WINNERS_COLOR;
          }
        }

        return (
          <Square
            key={index}
            style={winnerStyles}
            onPlay={handlePlayGame(index)}
          >
            {square}
          </Square>
        );
      })}
    </div>
  );
}

export default Squares;
