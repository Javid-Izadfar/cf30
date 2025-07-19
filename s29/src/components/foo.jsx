import { useContext } from "react";
import { UserContext } from "@/context/userContext";

const Foo = () => {
  const { user, dispatch } = useContext(UserContext);

  const changeUserToMaryam = () => {
    dispatch({
      type: "change-name",
      value: "Reza",
    });
  };

  return (
    <div>
      <div className="bg-blue-600 text-white p-2 mb-3 rounded-xl">
        inside foo component
      </div>
      <div className="py-2 px-8 text-xl font-bold border border-red-500 hover:bg-orange-400">
        name: {user.name}
      </div>
      <div className="bg-jay inline-block w-28 h-12">age: {user.age}</div>
      <button onClick={changeUserToMaryam} className="btn">
        Change User
      </button>
      <div className="flex wrap gap-2">
        <div className="bg-red-500 grow">1</div>
        <div className="bg-orange-500 w-1/2 hover:bg-blue-300 transition-colors duration-1000 ease-in-out">
          2
        </div>
        <div className="bg-green-500 grow">3</div>
      </div>
    </div>
  );
};

export default Foo;
