function FeedbackForm() {
  function handleClick() {
    const name = prompt('이름');
    alert(`Hello, ${name}!`);
  }

  return <button onClick={handleClick}>Greet</button>;
}

export default FeedbackForm;
