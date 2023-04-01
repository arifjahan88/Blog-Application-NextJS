import PostCard from "@/Components/PostCard";
import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/blogs");
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
  const res = await fetch(`http://localhost:5000/blogs/${id}`);
  const data = await res.json();

  return {
    props: { data },
  };
};

const PostDetails = ({ data }) => {
  console.log(data);
  return (
    <>
      <PostCard key={data._id} data={data} />
    </>
  );
};

export default PostDetails;
