import { Route, Routes } from "react-router-dom";

import { UserContext } from "@/context/userContext";

import Foo from "@/components/foo.jsx";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import { useState, useReducer } from "react";

const defaultUser = { name: "jay", age: 32 };
const userReducer = (state, action) => {
  switch (action.type) {
    case "change-name":
      return {
        ...state,
        name: action.value,
      };
    default:
      return state;
  }
};

const App = () => {
  // const [user, setUser] = useState({ name: "jay", age: 32 });
  const [user, dispatch] = useReducer(userReducer, defaultUser);

  return (
    <>
      <UserContext.Provider value={{ user, dispatch }}>
        <Foo />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
};

export default App;
