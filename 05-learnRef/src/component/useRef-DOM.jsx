import { useRef } from 'react';

function Form() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      {/* React에 이 input의 DOM 노드를 inputRef.current에 넣어줘 */}
      <input ref={inputRef} />
      {/* ref는 React에서 제공하는 특별한 prop */}
      {/* React는 컴포넌트가 마운트 될 때 ref prop에 지정된 */}
      {/* ref객체의 current속성에 해당 DOM 요소를 할당함  */}
      {/* React는 가상 DOM을 사용하여 렌더링을 최적화함 */}
      {/* ref는 이 가상 DOM을 우회하고 실제 DOM 노드에 직접 접근할 수 있게 해줌. */}
      <button onClick={handleClick}> Focus the input</button>
    </>
  );
}

export default Form;
