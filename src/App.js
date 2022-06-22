
import React, {useState} from 'react';
import './App.css'

function Counter() {
  const [count, setCount] = useState(0);
  return (
  <div className='container'>
    <p> you clicked {count} times</p>
    <button onClick= {()=> setCount(count+1)}>
    Click  here
    </button>
  </div>
  );
}

export default Counter;
