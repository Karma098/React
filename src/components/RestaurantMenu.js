import {useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import  Shimmer  from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu=()=>{
  const {id}=useParams();
  // console.log(params);

  const restaurantInfo=useRestaurant(id);
  // console.log(restaurantInfo);
  const [showIndex,setShowIndex]=useState(null);

  if(restaurantInfo===null) return <Shimmer/>;
  const {name, cloudinaryImageId, areaName, city, avgRating, costForTwoMessage, cuisines}=restaurantInfo?.cards[0]?.card?.card?.info;

  const {itemCards}=restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories=restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  // console.log(categories);

  return (
    <div>
      <div className="text-center">
        {/* <h1>Restaurant id: {id}</h1>  */}
        <h2 className="font-bold my-6 text-2xl">{name}</h2>
        <p className="font-bold text-lg">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        {categories.map((category,index)=>
          //controlled component
          <RestaurantCategory data={category?.card?.card} key={category.card.card.title} 
          showItems={index===showIndex&&true}
          setShowIndex={()=>setShowIndex(index)}/>
        )}
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