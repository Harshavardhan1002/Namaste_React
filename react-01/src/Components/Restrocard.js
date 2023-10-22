import { CDN_URL } from "../utils/URLs";
import resList from "../utils/mockData";


const RestroCard = (props) => {
    const {restroData} = props;
    const 
      {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
      } = restroData?.data;
    
    return(
      <div className="card">
        <img className="restro-img" src={CDN_URL + cloudinaryImageId}/>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{deliveryTime}</h4>
        <h4>Rs. {costForTwo/ 100} for Two</h4>
      </div>
    )
  }
  

  export default RestroCard