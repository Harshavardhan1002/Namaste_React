import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/URLs";
import { useParams } from "react-router-dom";
const MenuCard = () => {
  const [filteredResInfo1, setfilteredResInfo1] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchData();

    return () => {
      setfilteredResInfo1(null);
    };
  }, []);
  const fetchData = async () => {
    console.log("menu render");
    const data = await fetch(MENU_API + resId);
    const datajson = await data.json();
    setfilteredResInfo1(datajson.data);
  };

  if (filteredResInfo1 === null) return <Shimmer />;

  return (
    <div>
      <h1>{filteredResInfo1?.cards[0].card.card.info.name}</h1>
      <p>
        {filteredResInfo1?.cards[0].card.card.info.cuisines.join(", ")} -{" "}
        {filteredResInfo1?.cards[0].card.card.info.costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {console.log(
          filteredResInfo1.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]
            ?.card?.card
        )}
        {filteredResInfo1?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel?.map(
          (res) => {
            return (
              <li>
                {res.dish.info.name}: {"Rs " + res.dish.info.price / 100}
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};

export default MenuCard;
