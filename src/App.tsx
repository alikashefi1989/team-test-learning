import { useState } from 'react';
import './App.css';
import Login from './components/login/Login';
import Users from './components/user/users';

function App() {

  const [state, setState] = useState<number>(1);

  function gholi() {
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
      <Users />

      <br /><br /><br /><br />
      <Login />
    </>
  );
}

export default App;


export function abc(a: number, b: number) {
  return a + b
}