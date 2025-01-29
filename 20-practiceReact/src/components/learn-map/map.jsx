function Map() {
  const numbers = [10, 20, 30];
  return <>{numbers.map((value, index) => value + index) + ''}</>;
}
export default Map;
