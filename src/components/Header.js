import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const { loggedInUser } = useContext(UserContext);

  //subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);

  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between m-4 border border-solid border-black">
      <div>
        <img className="w-64" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex m-8">
          <li className="px-4 py-1 font-bold">
            Online Status: {onlineStatus ? " ✅ " : "🔴"}
          </li>
          <li className="px-4 py-1 font-bold">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="px-4 py-1 font-bold">
            <Link to="/about" className="link">
              About Us
            </Link>
          </li>
          <li className="px-4 py-1 font-bold">
            <Link to="/contact" className="link">
              Contact Us
            </Link>
          </li>
          <li className="px-4 py-1 font-bold">
            <Link to="/grocery" className="link">
              Grocery
            </Link>
          </li>
          <li className="px-4 py-1 font-bold">
            <Link to="/cart">Cart {cartItems.length}</Link>
          </li>
          <li className="px-4">
            <button
              className="px-4 py-1 bg-gray-400 rounded-lg"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li className="px-4 py-1 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
