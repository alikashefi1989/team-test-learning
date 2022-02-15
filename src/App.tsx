import { useState } from 'react';
// import './App.css';
import Login from './components/login/Login';
import Users from './components/user/users';

function App() {

  const [state, setState] = useState<number>(1);

  function gholi() {
    setState(5)
  }

  return (
    <>
      <h3 className="text-3xl font-bold underline mb-5 sm:text-green-400 md:text-green-700 2xl:text-red-500">react app testin</h3>
      <h3 className="transition-all duration-1000 text-green-700 hover:text-green-300 mb-4 p-5 hover:p-14 bg-gray-300">transition</h3>

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