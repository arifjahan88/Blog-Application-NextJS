import React from "react";
import style from "./Card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = ({ data }) => {
  return (
    <div className="">
      <img className={style.image_container} src={data.urlToImage} alt="" />
      <h4 className={style.title}>{data.title.slice(0, 30) + "...."}</h4>
      <p className={style.description}>
        {data.description}
        <span>{data.content.slice(0, 10)}</span>
        <Link href="">
          <span className={style.read}>........Read More</span>
        </Link>
      </p>
      <div className={style.belowPart}>
        <p>Author : {data.author}</p>
        <p>Published Date : {data.publishedAt}</p>
      </div>
    </div>
  );
};

export default Card;
