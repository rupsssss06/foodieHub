import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="flex justify-between items-center border-s-black py-2.5 px-5">
      <div>
        <img className="w-20 h-20 object-contain" src={LOGO_URL} />
      </div>
      <div className="py-2 px-5">
        <ul className="flex align-middle m-0 p-0 list-none">
          <li className="m-2.5">
            <Link
              className="p-2.5 text-lg font-medium text-[#222] transition-colors duration-300 hover:text-[#ff5200]"
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="m-2.5">
            <Link
              className="p-2.5 text-lg font-medium text-[#222] transition-colors duration-300 hover:text-[#ff5200]"
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="m-2.5">
            <Link
              className="p-2.5 text-lg font-medium text-[#222] transition-colors duration-300 hover:text-[#ff5200]"
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li className="m-2.5">
            <Link className="p-2.5 text-lg font-medium text-[#222] transition-colors duration-300 hover:text-[#ff5200]">
              Cart
            </Link>
          </li>
          <button
            className="my-2.5 ml-3.75 rounded-full bg-linear-to-br  from-[#ff5200] to-[#ff7a18] px-5.5 py-2.5 text-[15px] font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:from-[#e84900] hover:to-[#ff6410] hover:shadow-lg active:translate-y-0"
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
