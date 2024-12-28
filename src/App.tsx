import  { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="app-container">
      <div className="title-rectangle">
        <h2>Welcome to Counter Application</h2>
        <p>Track your clicks and have fun!</p>
        <p>MSSV: 22127348 22127341</p>
        <p>testing 19 with pull</p>

      </div>
      <h1>Simple Counter App</h1>
      <div className="counter-display">Count: {count}</div>
      <div className="button-group">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;