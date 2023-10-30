import RestroCard, { PromotedCard } from "./Restrocard";
import resList from "../utils/mockData";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestruants, setListOfRestruants] = useState([]);
  const [filteredRestraunts, setfilteredRestraunts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const {loggedInUser, setUsername} = useContext(UserContext)

  const RestroPromoted = PromotedCard(RestroCard);
  useEffect(() => {
    fetchData();
}, []);
  fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestruants(
      json?.data?.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
    setfilteredRestraunts(
      json?.data?.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  if (listOfRestruants.length === 0) {
    return <Shimmer />;
  }
  filteredRestraunts.forEach((res) => {
  });
  // const onlineStatus = useOnlineStatus();
  // if (onlineStatus === false)
  //   return (
  //     <h1>
  //       Looks like you're offline!! Please check your internet connection;
  //     </h1>
  //   );
  return (
    <div className="body">
      <div className="filter">
        <div>
          <input
            type="text"
            value={searchValue}
            onChange={(event) => {
              setSearchValue(event.target.value);
            }}
          />
        </div>
        <button
          onClick={() => {
            const items = listOfRestruants.filter((res) => {
              return res.info.name
                .toLowerCase()
                .includes(searchValue.toLowerCase());
            });
            setfilteredRestraunts(items);
          }}
        >
          Search
        </button>
        <button
          onClick={() => {
            const filterItems = listOfRestruants.filter((res) => {
              return res.info.avgRating > 4;
            });
            setListOfRestruants(filterItems);
          }}
        >
          Top restaurants
        </button>
        <input className="border border-black" value={loggedInUser} onChange={(e) => {setUsername(e.target.value)}}/>
      </div>
      <div className="card-container">
        {filteredRestraunts.map((restaurant) => {
          return (
            <Link to={"/restuarants/" + restaurant?.info?.id}>
              {
                
                restaurant.info.avgRating > 4.4 ? <RestroPromoted key={restaurant?.info.id} restroData={restaurant}/> : <RestroCard key={restaurant?.info.id} restroData={restaurant} />
              }
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
