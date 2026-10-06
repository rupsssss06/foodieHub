import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link>Cart</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              setLoggedIn(!loggedIn);
            }}
          >
            {loggedIn ? "Logout" : "Login"}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
