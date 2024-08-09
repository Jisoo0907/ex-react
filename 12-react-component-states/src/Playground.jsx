import NoteApp from './NoteApp/App';

function Playground() {
  return (
    <div style={styles}>
      <NoteApp />
    </div>
  );
}

const styles = {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
};

export default Playground;
