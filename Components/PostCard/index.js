import React from "react";
import style from "./index.module.css";

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
          <button>Back to Home</button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
