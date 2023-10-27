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
      } = restroData?.info;
    
    return(
      <div className="card">
        <img className="restro-img" src={CDN_URL + cloudinaryImageId}/>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{deliveryTime}</h4>
        <h4>{costForTwo}</h4>
      </div>
    )
  }
  

  export const PromotedCard = (RestroCard) => {
    return (props) =>{
      return (
        <div>
      <label className="absolute bg-black text-white rounded-lg">Promoted</label>
      <RestroCard {... props}/>
      </div>
      )
    }
    
  }

  export default RestroCard