import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.info;
  const { deliveryTime } = sla;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4 className="star-ratings">{"* " + avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime + " mins"}</h4>
    </div>
  );
};

export default RestaurantCard;
