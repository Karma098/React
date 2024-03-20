import {Outlet} from "react-router-dom"
import Profile from "./ProfileClass";
import ProfileFunctionalComponent from "./Profile";
import React from "react";
const About2=()=>{
  return (
    <div>
      <h1>About Us page</h1>
      <p>
        {""}
        This is a About Us page
      </p>
      {/* <Outlet/> */}
      <ProfileFunctionalComponent name={"xyz"}/>
      <Profile name={"sxyzClass"}/>
    </div>
  );
};

class About extends React.Component{
  constructor(props){
    super(props);
    console.log("parent-constructor");
    
  }
  componentDidMount(){
    console.log("parent-componentDidMount");
  }
  render(){
    console.log("parent-render");
    return (
      <div>
      <h1>About Us page</h1>
      <p>
        {""}
        This is a About Us page
      </p>
      {/* <Outlet/> */}
      <ProfileFunctionalComponent name={"xyz"}/>
      <Profile name={"sxyzClass"}/>
    </div>
    )
  }
}

export default About;