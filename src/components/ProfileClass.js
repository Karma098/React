import React from "react";
class Profile extends React.Component{

  constructor(props){
    super(props);
    this.state={
      count:0,
      count2:0,
      userInfo:{
        name:"",
        location:"",
      },
    };
    console.log("child-Constructor");
  }

  async componentDidMount(){
    //API call
    this.timer=setInterval(()=>{
      console.log("every ss");
    },1000);
    const data=await fetch("https://api.github.com/users/karma098");
    const json=await data?.json();
    this.setState({
      userInfo:json,
    })
    console.log("child-componentDidMount");
  }

  componentDidUpdate(prevProps,prevState){
    if(this.state.count!==prevState.count ||
      this.state.count2!==prevState.count2){

      }
    console.log("Component Did Update");
  }
  componentWillUnmount(){
    clearInterval(this.timer);
    console.log("ComponentWillUnmount");
  }

  render(){
    console.log("child-render");
    return (
      <div>
        <h1>Profile Class Component</h1>
        <img src={this?.state?.userInfo.avatar_url}/>
        <h2>Name:{this?.state?.userInfo.name}</h2>
        <h3>Location:{this?.state?.userInfo?.location}</h3>
        <button onClick={()=>{
          this.setState({
            count:1,
          });
        }}>Count</button>
      </div>
    )
  }
}

export default Profile;