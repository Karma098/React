import { useState,useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";
const useRestaurant=(id)=>{
  const [restaurantInfo,setRestaurantInfo]=useState(null);
  useEffect(()=>{
    getRestaurantInfo();
  },[]);

  async function getRestaurantInfo(){
    const data=await fetch(FETCH_MENU_URL+id);
    const json=await data.json();
    console.log(json);
    setRestaurantInfo(json?.data);
  }
  return restaurantInfo;
};

export default useRestaurant;