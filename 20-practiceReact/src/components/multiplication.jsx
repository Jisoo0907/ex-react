import PropTypes from 'prop-types';

Multiplication.propTypes = {
  number: PropTypes.number.isRequired,
  className: PropTypes.string,
};

function Multiplication({ number, className }) {
  const numbers = Array.from({ length: 9 }, (_, i) => i + 1);
  return (
    <div className={className}>
      {numbers.map((i) => (
        <div key={i}>
          {number} x {i} = {number * i}
        </div>
      ))}
    </div>
  );
}
export default Multiplication;
/* 
S.row로 className을 전달했지만 Multiplication 컴포넌트에서 이 className을 받아서 사용하는
코드가 없었음.
=> className이라는 prop이 전달은 됐지만 사용되지 않았음!
*/
