import Multiplication from './multiplication';
import S from './style.module.css';

function Math() {
  return (
    <div className={S.component}>
      <Multiplication className={S.row} number={2} />
      <Multiplication className={S.row2} number={3} />
      <Multiplication className={S.row3} number={4} />
      <Multiplication className={S.row4} number={6} />
      <Multiplication className={S.row5} number={7} />
      <Multiplication className={S.row6} number={8} />
      <Multiplication className={S.row7} number={9} />
    </div>
  );
}
export default Math;
