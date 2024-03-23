import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

  const dispatch = useDispatch();

  const handleAddItem=(item)=>{
    //dispatch an action
    dispatch(addItem(item));
  }

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-green-300 border-b-2 text-left flex justify-between "
        >
          <div className="w-10/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-2/12 p-4">
            <div className="absolute">
              <button
              className=" pt-1 pb-1 pr-4 pl-4 mx-3 mt-24 rounded-lg bg-black text-white text-xs text- shadow-lg m-auto"
              // onClick={handleAddItem}
              onClick={()=>handleAddItem(item)}
              // onClick={handleAddItem(item)}
              >
                ADD +
              </button>
            </div>
            <img src={IMG_CDN_URL + item.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
