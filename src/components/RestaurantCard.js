import { IMG_CDN_URL } from "../constants";
const RestaurantCard=({name,cuisines,cloudinaryImageId,avgRatingString})=>{
  // const {resData}=props;
  // const {name,cuisines,cloudinaryImageId,avgRatingString}=resData?.info;
  return (
    <div className="w-56 p-2 m-2 shadow-md bg-gray-100">
      <img src={IMG_CDN_URL+cloudinaryImageId}/>
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRatingString} stars</h4>
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