import { useState } from 'react';
import './App.css';

function App() {
  const [state, setState] = useState(0);
  console.log(state);
  return (
    <>
      <h1>{state}</h1>
      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        증가
      </button>
    </>
  );
}

export default App;
