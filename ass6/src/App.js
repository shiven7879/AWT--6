import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Initialize the counter state with 0
  const [counter, setCounter] = useState(0);

  // Update the document title whenever the counter changes
  useEffect(() => {
    document.title = `Counter: ${counter}`;
  }, [counter]);

  // Function to increment the counter
  const increment = () => setCounter(counter + 1);

  // Function to decrement the counter
  const decrement = () => setCounter(counter - 1);

  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Current count: {counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
