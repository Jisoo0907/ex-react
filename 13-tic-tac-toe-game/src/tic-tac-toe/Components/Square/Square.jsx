import { node } from 'prop-types';
import S from './Square.module.css';

Square.propTypes = {
  children: node,
};

function Square({ children }) {
  const isDisabled = !!children; // 파생된 상태

  return (
    <button className={S.component} disabled={isDisabled}>
      {children}
    </button>
  );
}

export default Square;
