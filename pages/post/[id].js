import PostCard from "@/Components/PostCard";
import React, { useEffect, useState } from "react";
import { getSession, signIn } from "next-auth/react";

export const getStaticPaths = async () => {
  const res = await fetch("https://blog-application-next-js-server.vercel.app/blogs");
  const data = await res.json();

  const paths = data.map((singledata) => {
    return {
      params: { id: singledata._id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://blog-application-next-js-server.vercel.app/blogs/${id}`);
  const data = await res.json();

  return {
    props: { data },
  };
};

const PostDetails = ({ data }) => {
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
      <PostCard key={data._id} data={data} />
    </>
  );
};

export default PostDetails;
