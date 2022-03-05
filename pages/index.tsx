import Home from "../containers/home/views";
import axios from 'axios';

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.PRODUCTION}/api/marts` || `${process.env.LOCAL}/api/marts`);
  const data = await res.json();

  return {
    props: { data }
  };
};

export default Home;