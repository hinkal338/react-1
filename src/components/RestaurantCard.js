import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.info;
  const { deliveryTime } = sla;
  return (
    <div className="m-4 p-4 w-64 h-[450px] bg-gray-100 rounder-sm hover:cursor-pointer hover:bg-gray-200">
      <img
        className="w-60 h-48"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4 className="text-green-700">{"* " + avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime + " mins"}</h4>
    </div>
  );
};

export const withOpenLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute mx-4 p-2 bg-black rounded-lg text-white">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
