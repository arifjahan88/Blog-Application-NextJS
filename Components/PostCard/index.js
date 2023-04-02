import React from "react";
import style from "./index.module.css";
import Link from "next/link";
import { RoutingVariables } from "@/utilites/RoutingVariables/RoutingVariables";

const PostCard = ({ data }) => {
  return (
    <div className={`container ${style.container}`}>
      <div className={style.imagediv}>
        <img className={style.image_container} src={data.image_url} alt="" />
      </div>
      <h4 className={style.title}>{data.title}</h4>
      <p className={style.description}>{data.details}</p>
      <hr />
      <div className={style.belowPart}>
        <div>
          <p>Author : {data.authorname}</p>
          <p>Published Date : {data.published_date}</p>
        </div>
        <div>
          <Link href={RoutingVariables.home}>
            <button className={style.backbutton}>Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
