import React, { useEffect, useState } from "react";

function Excercise1() {
  const [cards, setCards] = useState([]);

  const operating = async () => {
    let ApiIsHere = await fetch("https://jsonplaceholder.typicode.com/posts");
    let inJsonFormat = await ApiIsHere.json();
    setCards(inJsonFormat);
  };

  useEffect(() => {
    operating();
  }, []);

  return (
    <>
      <h1 className="cardsHeading">Cards Is Here</h1>
      <div className="container">
        {cards.map((prop) => {
          return (
            <div key={prop.id} className="card">
              <h1 style={{ fontSize: "30px" }}>{prop.title}</h1>
              <p>{prop.body}</p>
              <h3 style={{ fontSize: "22px" }}>{prop.userId}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Excercise1;
