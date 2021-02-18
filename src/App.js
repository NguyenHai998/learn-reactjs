import logo from './logo.svg';
import './App.css';

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>My name {name}, {age} age</p>
        <p>
          Gender:
          {isMale && (
            <>
              <p>Male</p>
              <p>Not Be De 😇 </p>
            </>
          )}
          {!isMale && 'Female'}
        </p>
        <p>Have studied at {info.university} and {info.isLove ? 'Co nguoi yeu roi' : 'Not Lover 😔'}</p>

        <ul>
          {colors.map(color => (
            < li style={{ backgroundColor: color, listStyle: 'none' }}>{color}</li>
          ))}
        </ul>



      </header>
    </div >
  );
}

export default App;
