import { Link } from "react-router-dom";
import RestaurantCard, { withOpenLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useContext, useEffect, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const RestaurantCardWithOpenLabel = withOpenLabel(RestaurantCard);

//Whenever a state variable is updated react re-renders the component
const Body = () => {
  const { loggedInUser, setUserName } = useContext(UserContext);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9428958&lng=77.7366242&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>
        Looks you're not connected to internet !! Please check your connection.
      </h1>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="m-4">
      <div className="filter flex">
        <div className="m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-1 bg-blue-400 mx-5 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredList(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4">
          <button
            className="px-4 py-1 bg-gray-400 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredList(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="m-4 p-4">
          <label>LoggedIn User: </label>
          <input
            className="border border-black"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap hover:cursor-pointe">
        {filteredList.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
            className="link"
          >
            {restaurant.info.availability.opened ? (
              <RestaurantCardWithOpenLabel resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
