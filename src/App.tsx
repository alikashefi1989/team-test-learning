import { useState } from 'react';
import './App.css';
import Users from './components/users';

function App() {

  const [state, setState] = useState<number>(1);



  function gholi() {
    // abc(1,2)
    setState(5)
  }


  return (
    <>
      <div className="App">
        Gholiiiiiiiiiiii
      </div>
      <span>jafar3</span>
      <p style={{ textAlign: 'center' }}>{state}</p>
      <button onClick={gholi}>click me</button>
      <Users/>
    </>
  );
}

export default App;


export function abc(a: number, b: number) {
  return a + b
}