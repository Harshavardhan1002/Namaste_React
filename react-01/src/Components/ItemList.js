import { CDN_URL } from "../utils/URLs";

const ItemList = (itemCards) => {
  return (
    <div className="bg-gray-100 mx-3 px-3">
      {itemCards.itemCards.map((data) => {
        return (
          <div>
            <div className="flex justify-between">
              <div className="text-left m-2 p-2">
                <div className="pb-1">
                  <span>{data.card.info.name} - </span>
                  <span>₹ {data.card.info.price / 100}</span>
                </div>
                <div>
                  <p className="text-xs text-gray-10">
                    {data.card.info.description}
                  </p>
                </div>
              </div>
              <div className="w-3/12 p-4">
                <img
                  src={CDN_URL + data.card.info.imageId}
                  className="w-full" 
                />
              </div>
            </div>
            <div className="border-b-2 border-b-gray-300 m-3 p-3"></div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
