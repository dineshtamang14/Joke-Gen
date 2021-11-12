import './App.css';
import { useEffect } from "react";

function App() {
  useEffect(()=>{
    const fetchJoke = async () => (
      await fetch(`http://api.icndb.com/jokes/random?firstName=dinesh&lastName=tamang`)
      .then(res => res.json())
      .then(data => {
      console.log(data);
    }));

    fetchJoke();
  }, []);

  return (
    <div className="App">
      <center>
        <h1>The Joke Generator</h1>

        <button>Generate Joke</button>
      </center>
    </div>
  );
}

export default App;
