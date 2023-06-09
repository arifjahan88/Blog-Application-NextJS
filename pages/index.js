import Card from "@/Components/Home/Card";
import style from "../styles/Home.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://blog-application-next-js-server.vercel.app/blogs");
  const data = await res.json();

  return {
    props: {
      blogsData: data,
    },
  };
};

export default function Home({ blogsData }) {
  return (
    <>
      <div className={`container ${style.Cards_container}`}>
        {blogsData.map((data) => (
          <Card key={data._id} data={data}></Card>
        ))}
      </div>
    </>
  );
}
