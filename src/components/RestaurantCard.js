import { useContext } from "react";
import { IMG_CDN_URL } from "../constants";
import UserContext from "../utils/UserContext";
const RestaurantCard=({name,cuisines,cloudinaryImageId,avgRatingString,deliveryTime,costForTwo})=>{
  // const {resData}=props;
  // const {name,cuisines,cloudinaryImageId,avgRatingString}=resData?.info;
  const {loggedInUser}=useContext(UserContext);
  return (
    <div className="w-56 p-2 m-2 shadow-md bg-gray-100">
      <img src={IMG_CDN_URL+cloudinaryImageId}/>
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRatingString} stars</h4>
      {/* <h4>Rs.{costForTwo/100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4> */}
      <h4>User: {loggedInUser}</h4>
    </div>
  )
};

//Higher Order Component

//input -->> RestaurantCard ===>>> RestaurantCardPromoted

export const withPromotedLabel=(RestaurantCard)=>{
  return ({name,cuisines,cloudinaryImageId,avgRatingString})=>{
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...{name,cuisines,cloudinaryImageId,avgRatingString}}/>
      </div>
    )
  }
}

export default RestaurantCard;