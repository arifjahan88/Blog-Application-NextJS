import React from "react";
import style from "./index.module.css";
import Link from "next/link";
import RichTextEditor from "./RichText";

export const Create_Post = () => {
  return (
    <>
      <div className={style.form_container}>
        <h2 className={style.form_title}>Create Your Post</h2>

        <form>
          <div className={style.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" required />
          </div>
          <div className={style.form_control}>
            <label htmlFor="text">Name</label>
            <input type="text" name="name" required />
          </div>
          <div className={style.form_control}>
            <label htmlFor="text">Title</label>
            <input type="text" name="title" required />
          </div>
          <div>
            <RichTextEditor />
          </div>

          <input className={style.btn_submit} type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
};
