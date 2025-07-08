import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    // console.log("inside Headers useEffect");
  }, []);

  return <header>My Counter App</header>;
};

export default Header;
