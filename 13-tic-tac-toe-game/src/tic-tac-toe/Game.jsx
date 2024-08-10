import './styles/main.css';
import S from './Game.module.css';
import Board from './Components/Board/Board';
import History from './Components/History/History';
// 가장 먼저 이것부터 =>
// https://github.com/yamoo9/likelion-10th/commit/250e2a2a0c396fbb867b76d10e6656186ac6f91e
function Game() {
  return (
    <div className={S.component}>
      <Board />
      <History />
    </div>
  );
}

export default Game;
