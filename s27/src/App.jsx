import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

import Header from "./components/layout/header";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";

const App = () => {
  useEffect(() => {
    console.log("initial Render");
  }, []);

  return (
    <>
      <Header>Inside Header</Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
