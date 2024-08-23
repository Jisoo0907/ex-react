import { useState } from 'react';

function Data() {
  const [state, setState] = useState(0);

  function handleClick() {
    setState(state + 1);
    return setState;
  }

  return (
    <>
      <button onClick={handleClick}>state 연습</button>
      {state}
    </>
  );
}
export default Data;
