import Home from "../containers/home/views";

export const getServerSideProps = async () => {
  const res = await fetch(process.env.PORT || `http://localhost:3000/api/marts`);
  const data = await res.json();

  return {
    props: { data }
  };
};

export default Home;