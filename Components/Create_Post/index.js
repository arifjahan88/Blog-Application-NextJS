import React, { useEffect, useState } from "react";
import style from "./index.module.css";
import RichTextEditor from "./RichText";
import { getSession, signIn } from "next-auth/react";

export const Create_Post = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const securepage = async () => {
      const session = await getSession();
      if (!session) {
        signIn();
      } else {
        setLoading(false);
      }
    };
    securepage();
  }, []);

  if (loading) {
    return <h2>Loading . . . .</h2>;
  }
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
