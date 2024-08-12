import { useState } from 'react';

function Picture() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="background background--active">
      <img
        className="picture"
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  );
}
export default Picture;
