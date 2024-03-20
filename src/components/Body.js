import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  // const searchTxt="KFC";
  //searchText is a local state variable
  const [searchText, setSearchText] = useState(""); //To create state variable
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);

  //empty dependency array=>once after render
  //dep array [searchText]=>once after initial render+everytime after render(searchText chnges)
  useEffect(() => {
    //API call
    // fetch()
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.29790&lng=82.99560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  const isOnline=useOnline();
  if(!isOnline){
    return <h1>Seems like you are offline</h1>
  };


  //Conditional Rendering
  //if restaurant is empty=>shimmer Ui
  //if restaurant has data=>actual data Ui
  if (!allRestaurants) return null;
  // if(filteredRestaurants.length===0) return <h1>No result found!!</h1>

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-5 bg-pink-50 my-5">
        <input
          type="text"
          className="focus:bg-gray-100"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="p-2 m-2 bg-purple-700 text-white rounded-lg hover:bg-purple-200"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {!filteredRestaurants.length?<h1>No Results Found</h1>:filteredRestaurants.map((restaurant) => {
          return (
            <Link 
            key={restaurant?.info?.id}
            to={"/restaurant/"+restaurant?.info?.id}>
              {
              restaurant?.info?.avgRating>4.3?(<RestaurantCardPromoted {...restaurant.info} />
              ):
              (<RestaurantCard {...restaurant.info} />
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
