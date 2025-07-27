import React, { useState, useEffect } from 'react'; 
 
function Counter() { 
  const [count, setCount] = useState(0); 
  // useEffect runs after every render when count changes 
  useEffect(() => { 
    console.log(`Count changed to ${count}`); 
  }, [count]); 
  return ( 
    <div> 
      <h2>Simple Counter with useEffect</h2> 
      <p>Count: {count}</p> 
      <button onClick={() => setCount(count + 1)}>Increase</button> 
    </div> 
  ); 
} 
export default Counter;