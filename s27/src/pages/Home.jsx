import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const doStuff = () => {
    setTimeout(() => {
      console.log("doStuff");
      navigate("about-us");
    }, 1500);
  };

  return (
    <div>
      <div>Home Page</div>
      <button onClick={doStuff}>Do Stuff</button>
    </div>
  );
};

export default Home;
