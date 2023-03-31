import React, { useEffect, useState } from "react";
import Card from "./Card";
import style from "./index.module.css";

const Home_Blog = () => {
  const [CardData, setCardData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setCardData(data));
  }, []);

  return (
    <div className={`container ${style.Cards_container}`}>
      {CardData.map((data) => (
        <Card key={data.id} data={data}></Card>
      ))}
    </div>
  );
};

export default Home_Blog;
