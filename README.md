# React 공부 저장소

### 기록

#20240806

#### <JSX>

- Put data in React JSX

#20240811

#### <props>

- **Passing** props from parent to child in React.
- **State** that acts like a **snapshot**
- How to update the same state variable before the next rendering (Use **update function**)
  - The update function should be a **pure function** because it runs during rendering.
- Instead of modifying an object, **create a new object** and then set the state to trigger a rerender. (You can use spread operator.)
- **Create a new array** from the original array using the **filter or map function**, and then set it to the state.
  - Even if you copy the array, you should not change the data inside the array. (Because it's swallow copy.)

#20240812

#### <useRef>

- Learn **useRef**
- useRef has a **current property**, and it's just a **JavaScript object**.
- We can access the current value from **ref.current**.
- If you don't want to trigger a re-render, use ref.
- When the component needs to save some data that doesn't affect the rendering logic, use ref.
- When you need to access a DOM element, you usually use a ref.
- Do not try to directly modify DOM nodes managed by React.

#20240814

#### <useEffect>

- Learn **useEffect**
- If you don't want the Effect to run unnecessarily, set the **dependencies list** as the second argument.
- Effects are usually used to **sync with external systems** that are outside of React.
- Effects **run after all commits**.
- You can add a **cleanup function**.
- useEffect **delays inside the code** until the changes are reflected on the screen.

#20240820

#### <useMemo>

- Learn **useMemo**
- useMemo(calculateValue, dependencies)
  **calculatevalue**
- Calculate the value you want to cache.
- It should be pure.
- React calls the function during the first rendering.
- React **returns the same value** when the dependencies **haven't changed since the last rendering**.
  **dependencies**
- A list of all reactive values referenced within the calculateValue function.
- useMemo caches the result of a calculation between re-renders until its dependencies change.
  #20240821

#### <useContext>

- To solve prop drilling, we can use **Context**.
- Context helps to deliver data to the **entire subtree**.
- useContext is a **React hook**, so you can only call it inside a React component.

#20240825

#### <useReducer>

- useReducer is a React Hook that adds a reducer to a component.
- useReducer returns an array that has two elements.
- The first element is the state, and the second is the dispatch function.
- The dispatch function updates the state to a new value and triggers a re-render.
- The dispatch function takes an argument called action.
- React receives the current state and an action through dispatch, and then determines the next state based on the return value of the called reducer.
