import { useEffect, useState } from "react";

const Profile=({name})=>{
  const [count,setCount]=useState(0);
  useEffect(()=>{
    //API call
    // console.log("useEffect");
  },[]);
  return (
    <div>
      <h2>Profile component</h2>
      <h2>Name:{name}</h2>
      <h3>Count:{count}</h3>
      <button onClick={()=>{
        setCount(1);
      }}>Count</button>
    </div>
  );
};

export default Profile;