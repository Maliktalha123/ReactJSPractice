import React, { useState } from "react";
import "./Components.css";

function UseStatePractice() {
  let [count, setCount] = useState(0);

  return (
    <div className="useState">
      <h1>Counter</h1>
      <h2>{count}</h2>
      <div className="buttons">
        <button onClick={() => setCount(++count)}>Increement</button>
        <button onClick={() => setCount(--count)}>Decreement</button>
      </div>
    </div>
  );
}

export default UseStatePractice;
