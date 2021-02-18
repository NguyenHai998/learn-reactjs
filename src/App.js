import logo from './logo.svg';
import './App.css';
import TodoFeature from './features/ToDo';
import AlbumFeature from './features/Album';

function App() {

  const name = 'Hai';
  const age = 23;
  const isMale = true;
  const info = {
    university: 'Quang Binh University',
    isLove: false
  };
  const colors = ['red', 'green', 'blue'];


  return (
    <div>
      <h3>Có thể bạn sẽ thích đấy</h3>
      {/* <TodoFeature /> */}
      <AlbumFeature />
    </div >

  );
}

export default App;
