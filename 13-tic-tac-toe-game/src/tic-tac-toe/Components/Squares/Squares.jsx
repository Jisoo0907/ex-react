import { useState } from 'react';
import { INITIAL_SQUARES, PLAYER, PLAYER_COUNT } from '@/tic-tac-toe/constants';
import Square from '../Square/Square';
import S from './Squares.module.css';

function Squares() {
  const [squares, setSquares] = useState(INITIAL_SQUARES);

  const handlePlay = (index) => () => {
    console.log(`play game #${index}`);
  };

  const gameIndex = squares.filter(Boolean).length % PLAYER_COUNT;

  const currentPlayer = gameIndex === 0 ? PLAYER.ONE : PLAYER.TWO;

  return (
    <div className={S.component}>
      {squares.map((square, index) => {
        return (
          <Square key={index} onPlay={handlePlay(index)}>
            {square}
          </Square>
        );
      })}
    </div>
  );
}

export default Squares;
