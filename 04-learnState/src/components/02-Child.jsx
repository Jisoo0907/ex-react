import { number, string } from 'prop-types';

Child.propTypes = {
  name: string.isRequired,
  age: number.isRequired,
};

function Child({ name, age }) {
  return (
    <div>
      내 이름은 {name}이고, 나이는 {age}(이)야.
    </div>
  );
}
export default Child;
