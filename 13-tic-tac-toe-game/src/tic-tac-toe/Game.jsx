import './styles/main.css';
import S from './Game.module.css';
import Board from './Components/Board/Board';
import History from './Components/History/History';

function Game() {
  return (
    <div className={S.component}>
      <Board />
      <History />
    </div>
  );
}

export default Game;
