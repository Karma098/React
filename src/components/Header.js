import { useState } from "react";

// const loggedIn = ()=>{
//   //API check
//   return log;
// }
const Title =()=> (
  <a href="/">
    <img
      className="logo" 
      alt="logo" 
      src="https://lh3.googleusercontent.com/p/AF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R=w1080-h608-p-no-v0"
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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
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

