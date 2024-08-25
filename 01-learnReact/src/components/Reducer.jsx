import { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'incremented_age': {
      return {
        name: state.name,
        age: state.age + 1,
      };
    }
    case 'changed_name': {
      return {
        name: action.nextName,
        age: state.age,
      };
    }
  }
  throw Error('Unknown action: ' + action.type);
}

const initialState = { name: 'Kelly', age: 42 };

function Reducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleInputChange(e) {
    dispatch({
      type: 'changed_name',
      nextName: e.target.value,
    });
  }

  function handleClick() {
    dispatch({ type: 'incremented_age' });
  }

  return (
    <>
      <input value={state.name} onChange={handleInputChange} />
      <button type="button" onClick={handleClick}>
        Increment age
      </button>
      <p>
        Hello, {state.name}. You are {state.age}.
      </p>
    </>
  );
}
export default Reducer;
