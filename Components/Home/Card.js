import React, { useEffect } from "react";
import style from "./Card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = ({ data }) => {
  return (
    <div className={style.container}>
      <img className={style.image_container} src={data.image_url} alt="" />
      <h4 className={style.title}>{data.title.slice(0, 30) + "...."}</h4>
      <p className={style.description}>
        {data.details.slice(0, 100)}

        <Link href={`/post/${data._id}`}>
          <span className={style.read}>........Read More</span>
        </Link>
      </p>
      <div className={style.belowPart}>
        <div>
          <p>Author : {data.authorname}</p>
          <p>Published Date : {data.published_date}</p>
        </div>
        <div>
          <button className={style.buttonstyle}>Edit</button>
          <button className={style.buttonstyle}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
