import Child from './02-Child';

function Props() {
  return (
    <>
      <h1>Props를 부모 컴포넌트로 만든 후 자식에서 props 받아보기</h1>
      <Child name={'name1'} age={1} />
    </>
  );
}
export default Props;
