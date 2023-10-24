import RestroCard from "./Restrocard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestruants, setListOfRestruants] = useState([]);
  const [filteredRestraunts, setfilteredRestraunts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    console.log("render")
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
  filteredRestraunts.forEach(res => {
  console.log("data", res.info.id);

  })

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
            console.log(items);
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
      </div>
      <div className="card-container">
        {filteredRestraunts.map((restaurant) => {
          return (
            <Link to={"/restuarants/"+restaurant?.info?.id}><RestroCard key={restaurant?.info.id} restroData={restaurant} /></Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
