import {useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import  Shimmer  from "./Shimmer";

const RestaurantMenu=()=>{
  const {id}=useParams();
  // console.log(params);

  const [restaurantInfo,setRestaurantInfo]=useState(null);

  useEffect(()=>{
    getRestaurantInfo();
  },[]);

  async function getRestaurantInfo(){
    const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.29790&lng=82.99560&restaurantId="+id+"&catalog_qa=undefined&submitAction=ENTER");
    const json=await data.json();
    console.log(json);
    setRestaurantInfo(json?.data?.cards[0]?.card?.card?.info);
  }

  return !restaurantInfo?(<Shimmer/>):(
    <div>
      <div>
        <h1>Restaurant id: {id}</h1> 
        <h2>{restaurantInfo.name}</h2>
        <img src={IMG_CDN_URL+restaurantInfo?.cloudinaryImageId}/>
        <h3>{restaurantInfo?.areaName}</h3>
        <h3>{restaurantInfo?.city}</h3>
        <h3>{restaurantInfo?.avgRating}</h3>
        <h3>{restaurantInfo?.costForTwoMessage}</h3>
      </div>
      {/* <div>
        <h1>Menu</h1>
        <ul>{
          Object.values(restaurantInfo.menu.items).map((item)=>(<li key={item.id}>{item.name}</li>))}</ul>
      </div> */}
    </div>
  );
};

export default RestaurantMenu;