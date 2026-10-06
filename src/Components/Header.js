import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  console.log("Header Rendered");
  useEffect(() => {
    console.log("useEffect called");
  }, [loggedIn]);

  //IF no dependency array =>useEffect is called on every render
  //If  dependency array is empty=> useEffect is called once after intial render

  //if dependency array is [loggedIn]=> called everytime loggedIn is updated
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
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
