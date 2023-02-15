import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(prevCounter => prevCounter + 1);
  }

  const handleDecrement = () => {
    setCounter(prevCounter => prevCounter - 1);
  }

  let color = '';
  if (counter <= 4) {
    color = 'green';
  } else if (counter <= 9) {
    color = 'blue';
  } else {
    color = 'red';
  }

  return (
    <div className="App">
      <h1 style={{ color }}>{counter}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;
