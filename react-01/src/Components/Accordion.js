import { useState } from "react";
import ItemList from "./ItemList";

const Accordion = ({data, showItems, setToggle}) => {
  clickHandler = () =>{
    {console.log("itemlist",showItems)}
    setToggle();
  }
  return (
    <div>

      <div className="m-3 p-3 bg-lime-100 shadow-lg flex justify-between cursor-pointer" onClick={clickHandler}>
        <div>
          <span>{data.title}</span>
          <span>({data.itemCards.length})</span>
        </div>
        <div>{"⬇"}</div>
      </div>
      {showItems && <ItemList itemCards = {data.itemCards}/>}
    </div>
  );
};

export default Accordion;
