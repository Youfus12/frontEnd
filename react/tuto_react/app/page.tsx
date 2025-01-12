'use client';

import { useState } from "react";

function Home() {

  const [counter,setCounter] = useState(0);
  const incrementer = () => {
    setCounter(counter +1)
  }
  
  return (
    <main >
      <h1>HOME</h1>
      <div>Counter : {counter}</div>
      <button onClick={incrementer}>Increment</button>
    </main>
  );
}
export default Home;