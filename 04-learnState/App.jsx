import { useState } from 'react';

function App() {
  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    },
  });
  const nextArtwork = { ...person.artwork, city: 'seoul' };
  console.log(nextArtwork);

  return <div className="App"></div>;
}
export default App;
