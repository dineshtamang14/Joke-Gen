import './App.css';
import { useRef, useState } from "react";
import useRandomJoke from './useRandomJoke';

function App() {
   //custom hooks
   const firstNameRef = useRef(null);
   const lastNameRef = useRef(null);

   const [firstName, setFirstName] = useState("");
   const [lastName, setLastName] = useState("");
   const joke = useRandomJoke(firstName, lastName);

   const generateJoke = e =>{
      e.preventDefault();
      setFirstName(firstNameRef.current.value);
      setLastName(lastNameRef.current.value);
   }

  return (
    <div className="App">
      <center>
        <h1>The Joke Generator</h1>
        <h2>{joke}</h2>

        <form>
          <input placeholder="First Name" ref={firstNameRef} />
          <input placeholder="First Name" ref={lastNameRef} />
          <button onClick={generateJoke}>Generate Joke</button>
        </form>
        
      </center>
    </div>
  );
}

export default App;
