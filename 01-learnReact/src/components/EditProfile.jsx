import { useState } from 'react';

function EditProfile() {
  const [isedit, setIsEdit] = useState(false);
  const [firstName, setFirstName] = useState('양');
  const [lastName, setLastName] = useState('나리');

  const handleEdit = (e) => {
    e.preventDefault();
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  return (
    <form>
      <label>
        First name: <b>{firstName}</b>
        <input onChange={handleFirstName} />
      </label>
      <label>
        Last name: <b>{lastName}</b>
        <input onChange={handleLastName} />
      </label>
      <button type="submit" onClick={handleEdit}>
        Edit Profile
      </button>
      <p>
        <i>
          Hello, {firstName} {lastName}{' '}
        </i>
      </p>
    </form>
  );
}
export default EditProfile;
