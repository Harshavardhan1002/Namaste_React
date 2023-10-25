import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/URLs";
import { useParams } from "react-router-dom";
const MenuCard = () => {
    const[resInfo, setResInfo] = useState(null);
    const[filteredResInfo, setfilteredResInfo] = useState(null);
    const[filteredResInfo2, setfilteredResInfo2] = useState(null);
    const[filteredResInfo1, setfilteredResInfo1] = useState(null);
    const[firstTime, setFirsttime] = useState(true);
    const {
      resId
    } = useParams();

    useEffect(() => {
        setFirsttime(true)
        fetchData();

        return ()=>{
          setFirsttime(true)
          setfilteredResInfo1(null)
        setfilteredResInfo(null)
        setfilteredResInfo2(null)
        }
    },[])
    const fetchData = async () => {
      console.log("menu render")
       const data = await fetch(MENU_API + resId)
        const datajson = await data.json();
        console.log("data0", datajson)
        setResInfo(datajson.data)
        setfilteredResInfo1(datajson.data.cards[0])
        setfilteredResInfo(datajson.data.cards[2])
        setfilteredResInfo2(datajson.data.cards[2])
    }

    if (resInfo === null) return <Shimmer />;
    // const {
    //     name,
    //     costForTwoMessage,
    //     cuisines
    // } = filteredResInfo?.card.card.info
    // console.log(filteredResInfo?.cards[0])
    console.log("after", filteredResInfo?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card)
    // const {
    //     itemCards
    // } = filteredResInfo2?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      // setfilteredResInfo(data);

  if(firstTime){
      return (
    <div>
      <h1>{filteredResInfo1?.card.card.info.name}</h1>
      <p>
        {filteredResInfo1?.card.card.info.cuisines.join(", ")} - {filteredResInfo1?.card.card.info.costForTwoMessage}
      </p>
      
      <button className="toggleColor" onClick={() =>{
        const items = filteredResInfo.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards.filter(res => {
            return res.card.info.isVeg ==1 ;
        })
        console.log
        setfilteredResInfo2(items)
        setFirsttime(false)
      }}>Veg</button>
      <h2>Menu</h2>
      <ul>
        
         {
          
          filteredResInfo2?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards.map(res => {
                return (
                    <li>{res.card.info.name}: {res.card.info.price }</li>
                )
            })
        }
      </ul>
    </div>
  );
      }
      else{
        return(
          <div>
      <h1>{filteredResInfo1?.card.card.info.name}</h1>
      <p>
        {filteredResInfo1?.card.card.info.cuisines.join(", ")} - {filteredResInfo1?.card.card.info.costForTwoMessage}
      </p>
      
      <button onClick={() => {
        setfilteredResInfo2(filteredResInfo)
        setFirsttime(true)
      }}>reset</button>
      <h2>Menu</h2>
      <ul>
        
         {
          
          filteredResInfo2.map(res => {
                return (
                    <li>{res.card.info.name}: {res.card.info.price }</li>
                )
            })
        }
      </ul>
    </div>
        )
      }
};

export default MenuCard