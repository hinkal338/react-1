import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  // const params = useParams();
  // console.log(params);

  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);

    setResInfo(json.data);
  };

  const info = resInfo?.cards[0]?.card?.card?.info;
  console.log(info);

  const name = info?.name;
  const cuisines = info?.cuisines;
  const costForTwoMessage = info?.costForTwoMessage;

  const itemCards =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5].card.card
      .itemCards;
  console.log("ItemCards   ,", itemCards);

  if (resInfo === null) {
    return <Shimmer />;
  }

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => {
          return (
            <li key={item?.card?.info?.id}>
              <div className="menu-heading">
                {item?.card?.info?.name} - ₹
                {item?.card?.info?.defaultPrice / 100 ||
                  item?.card?.info?.price / 100}
              </div>
              <div className="menu-description">
                {item?.card?.info?.description}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
