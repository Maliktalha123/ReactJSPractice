import React, { useEffect, useState } from "react";
import UseStatePractice from "./UseStatePractice";

/* Note : 1 : It will re render so the Elements will be re render  
   2 : It will not used in DOM  */

function UseEffectPractice() {
  const [color, setColor] = useState(0);
  let number = 0;
// There are three types of useEffect 

  //_________ 1 : It will run on every render
  useEffect(() => {
    alert("I am running on every Render");
  });
  // _________  2: It will run only first time when you will open your website
  useEffect(() => {
    alert("I will run only first time of web page");
  }, []);
  // ________ 3 : It will render when you want/set it's value
  useEffect(() => {
    number = ++number;
    console.log("Number is " + number);
    alert("I will run when you set/want to render me" + color);
  }, [color]);
  return (
    <div>
      <h2>orange is {number}</h2>
      <h2>The value of color is {color}</h2>
      <button
        style={{ border: "2px solid", padding: "10px" }}
        onClick={() => setColor(color + 1)}
      >
        Add IT
      </button>
    </div>
  );
}

export default UseEffectPractice;
