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
      className="logo" 
      alt="logo" 
      src={Logo}
      />
  </a>
);

const Header = () => {
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  return (
    <div className="header">
      <Title/>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>Cart</li>
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

