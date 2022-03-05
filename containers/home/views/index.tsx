import Data from "../components/data";
import Form from "../components/form";

const Home = (props: any) => {
  console.log(props.data);
  return (
    <>
      <div className="home">
        <Form />
        <Data datas={props.data} />
      </div>
    </>
  );
};

export default Home;
