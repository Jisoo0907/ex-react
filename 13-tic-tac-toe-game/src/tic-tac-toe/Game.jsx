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
  const [gameHistory, setGameHistory] = useState([INITIAL_SQUARES]);
  const [gameIndex, setGameIndex] = useState(0);

  const handlePlayGame = (index) => () => {
    if (winnerInfo) {
      alert('GAME OVER');
      return;
    }

    const nextGameIndex = gameIndex + 1; // 다음 게임 인덱스
    setGameIndex(nextGameIndex);

    const nextSquares = currentSquares.map((square, idx) => {
      return idx === index ? nextPlayer : square;
    });

    const nextGameHistory = [...gameHistory, nextSquares];
    setGameHistory(nextGameHistory);
  };
  const currentSquares = gameHistory[gameIndex];

  const winnerInfo = checkWinner(currentSquares);

  const isPlayerOneTurn =
    currentSquares.filter(Boolean).length % PLAYER_COUNT === 0; // true
  const nextPlayer = isPlayerOneTurn ? PLAYER.ONE : PLAYER.TWO; // '🍟'
  const isDraw = !winnerInfo && currentSquares.every(Boolean);

  return (
    <div className={S.component}>
      <Board
        squares={currentSquares}
        winnerInfo={winnerInfo}
        nextPlayer={nextPlayer}
        onPlay={handlePlayGame}
        isDraw={isDraw}
      />
      <History gameHistory={gameHistory} />
    </div>
  );
}

export default Game;
