import { useState,useContext } from "react";
import Logo from "../assets/img/download.jpeg"
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

// const loggedIn = ()=>{
//   //API check
//   return log;
// }

//SPA:Single Page Application
//Client Side Routing

const Title =()=> (
  <a href="/">
    <img
      className="h-28 p-2" 
      alt="logo" 
      src={Logo}
      />
  </a>
);

const Header = () => {
  const [isLoggedIn,setIsLoggedIn]=useState(false);

  const {loggedInUser}=useContext(UserContext);

  //Subscribing to the store using a selector
  const cartItems=useSelector((store)=>store.cart.items);

  return (
    <div className="flex justify-between bg-pink-50 shadow-md sm:bg-purple-50">
      <Title/>
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-4">Online Status:{isLoggedIn?"✅":"🔴"}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About</Link></li>
          <li className="px-4"><Link to="/contact">Contact</Link></li>
          <li className="px-4"><Link to="/instamart">Instamart</Link></li>
          <li className="px-4 font-bold text-xl"><Link to="/cart">Cart</Link> ({cartItems.length} items)</li>
          {
            (isLoggedIn?<button onClick={()=>{
              setIsLoggedIn(false);
            }}>LogOut</button>:<button onClick={()=>{
              setIsLoggedIn(true);
            }}>LogIn</button>)
          }
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

