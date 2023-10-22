import RestroCard from "./Restrocard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
const [listOfRestruants, setListOfRestruants] = useState(resList)

    return(
      <div className="body">
        <div className="filter">
            <button onClick={()=>{
                const filterItems = listOfRestruants.filter(res => {return res.data.avgRating > 4})
                setListOfRestruants(filterItems)
            }}>Top restaurants</button>
        </div>
      <div className="card-container">
        {
          listOfRestruants.map((restaurant) => (
            <RestroCard key={restaurant?.data?.id} restroData = {restaurant}/>
          ))
        }
      </div>
      </div>
    )
  }

  export default Body;