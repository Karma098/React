import { useState } from "react";
import Logo from "../assets/img/download.jpeg"
import { Link } from "react-router-dom";

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
  return (
    <div className="flex justify-between bg-pink-50 shadow-md sm:bg-purple-50">
      <Title/>
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2"><Link to="/">Home</Link></li>
          <li className="px-2"><Link to="/about">About</Link></li>
          <li className="px-2"><Link to="/contact">Contact</Link></li>
          <li className="px-2"><Link to="/instamart">Instamart</Link></li>
          <li className="px-2">Cart</li>
        </ul>
      </div>
      {
        //Expression
        // ((a=10),console.log(a))
        (isLoggedIn?<button onClick={()=>{
          setIsLoggedIn(false);
        }}>LogOut</button>:<button onClick={()=>{
          setIsLoggedIn(true);
        }}>LogIn</button>)
      }
      {/* <button>Login</button>
      <button>LogOut</button> */}
    </div>
  );
};

export default Header;

