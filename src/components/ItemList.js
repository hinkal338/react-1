import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          data-testid="foodItems"
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <p>{item?.card?.info?.name}</p>
              <p className="font-normal">
                ₹
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100}
              </p>
            </div>
            <p className="text-gray-400 font-normal text-left text-xs m-2">
              {item?.card?.info?.description}
            </p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute mx-3">
              <button
                className="bg-white text-green-800 mx-12 rounded-md p-2"
                onClick={() => handleAddItem(item)}
              >
                Add
              </button>
            </div>
            <img src={CDN_URL + item?.card?.info?.imageId} className="w-full" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
