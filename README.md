# React 공부 저장소

### 기록

#20240806

- Put data in React JSX

#20240811

- **Passing** props from parent to child in React.
- **State** that acts like a **snapshot**
- How to update the same state variable before the next rendering (Use **update function**)
  - The update function should be a **pure function** because it runs during rendering.
- Instead of modifying an object, **create a new object** and then set the state to trigger a rerender. (You can use spread operator.)
- **Create a new array** from the original array using the **filter or map function**, and then set it to the state.
  - Even if you copy the array, you should not change the data inside the array. (Because it's swallow copy.)
