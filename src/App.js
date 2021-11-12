import './App.css';
import useRandomJoke from './useRandomJoke';

function App() {
   //custom hooks
   const joke = useRandomJoke("Dinesh", "Tamang");

  return (
    <div className="App">
      <center>
        <h1>The Joke Generator</h1>
        <h2>{joke}</h2>
        <button>Generate Joke</button>
      </center>
    </div>
  );
}

export default App;
