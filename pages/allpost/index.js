import React, { useEffect, useState } from "react";
import PostCard from "@/Components/PostCard";
import { getSession, signIn } from "next-auth/react";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/blogs");
  const data = await res.json();

  return {
    props: {
      blogsData: data,
    },
  };
};

const index = ({ blogsData }) => {
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
      {blogsData.map((data) => (
        <PostCard key={data._id} data={data}></PostCard>
      ))}
    </>
  );
};

export default index;
