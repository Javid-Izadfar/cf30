import { useContext } from "react";
import { UserContext } from "@/context/userContext";

const Home = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <div>inside Home component</div>
      <div>name: {user.name}</div>
      <div>age: {user.age}</div>
    </div>
  );
};

export default Home;
