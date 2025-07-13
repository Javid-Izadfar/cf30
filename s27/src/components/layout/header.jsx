import { Link } from "react-router-dom";

const Header = ({ children }) => {
  return (
    <header style={{ background: "grey" }}>
      <div>{children}</div>
      <nav>
        <ul>
          <li>
            <Link to="/" title="-">
              Go to Home Page
            </Link>
          </li>
          <li>
            <Link to="/about-us" title="-">
              Go to About Us Page
            </Link>
          </li>
          <li>
            <Link to="/article/12" title="-">
              Go to Article Page 12
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
