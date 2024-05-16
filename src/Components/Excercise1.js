import React, { useEffect, useState } from "react";
import './Components.css'
const Excercise1 = () => {
  const [cards, setCards] = useState([]);
  const fetching = async () => {
    let linkOfApi = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await linkOfApi.json()
    setCards(data);
    console.log(data)
  };
  useEffect(() => {
    fetching();
  }, []);

  return(  <div className="container">
    {
      cards.map((card)=>{
       return(  <div key={card.id} className="card">
<h1 style={{fontSize :"26px"}}>{card.title}</h1>
<p>{card.body}</p>
<p>USer ID : {card.userId}</p>
        </div>)
      })
    }
  </div>);
};

export default Excercise1;
