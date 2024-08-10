import './styles/main.css';
import Board from './Components/Board/Board';
import History from './Components/History/History';

function Game() {
  return (
    <div className="Game">
      <Board />
      <History />
    </div>
  );
}

export default Game;
