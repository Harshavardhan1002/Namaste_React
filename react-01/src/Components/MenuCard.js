import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/URLs";
import { useParams } from "react-router-dom";
import Accordion from "./Accordion";
const MenuCard = () => {
  const [filteredResInfo1, setfilteredResInfo1] = useState(null);
  const { resId } = useParams();
  const [showItems, setShowItems] = useState(0);
  const [showPrevClick, setShowPrevClick] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const datajson = await data.json();
    setfilteredResInfo1(datajson.data);
  };

  if (filteredResInfo1 === null) return <Shimmer />;
  const {
    itemCards
  } = filteredResInfo1.cards[2].groupedCard?.cardGroupMap?.REGULAR.cards[2].card
  const cat = filteredResInfo1.cards[2].groupedCard?.cardGroupMap?.REGULAR.cards?.filter((ele) => {
    return ele.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  })
  function setToggle(index){
    if(index === showItems){
      setShowItems(null)
    }
    else{
      setShowItems(index)
    }
  }
  return (
    <div className="text-center w-6/12 mx-auto justify-center">
      <h1 className="font-bold text-xl p-2 m-2">{filteredResInfo1?.cards[0].card.card.info.name}</h1>
      <p className="font-bold text-base p-1 m-1">
        {filteredResInfo1?.cards[0].card.card.info.cuisines.join(", ")} -{" "}
        {filteredResInfo1?.cards[0].card.card.info.costForTwoMessage}
      </p>
      <ul>
        {cat.map(
          (res, index) => {
            return (
              <li key = {res.card.card.title}>
                <Accordion key = {res.card.card.title} data = {res.card.card} index = {index} showItems = {showItems === index? true: false} setToggle = {() => {setToggle(index)}}/>
              </li>
            );
          }
        )}{console.log("after click",showItems)}
      </ul>
    </div>
  );
};

export default MenuCard;
