import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import {useState} from "react";

//what is state
//what is hooks
//what is useState

function filterData(searchText,restaurants){
  return restaurants.filter((restaurant)=>restaurant.info.name.includes(searchText));
}

const Body = () => {
  const [restaurants, setRestaurants]=useState(restaurantList);
  // const searchTxt="KFC";
  //searchText is a local state variable
  const [searchText,setSearchText]=useState(""); //To create state variable

  
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e)=>{
            setSearchText(e.target.value);
          }}
        />
        <button className="search-btn" onClick={()=>{
          const data=filterData(searchText,restaurantList);
          setRestaurants(data);

        }}>Search</button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
