import { useState } from 'react';

function Form() {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');

  function handleFirstNameChange(e) {
    setFirst(e.target.value);
  }

  function handleLastNameChange(e) {
    setLast(e.target.value);
  }

  function handleReset() {
    setFirst('');
    setLast('');
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="First name"
        value={first}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={last}
        onChange={handleLastNameChange}
      />
      <h1>
        Hi, {first} {last}
      </h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
export default Form;
