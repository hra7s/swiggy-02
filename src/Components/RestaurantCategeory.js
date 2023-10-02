import React from "react";
import ItemList from "./ItemList";

const RestaurantCategeory = ({ data }) => {
  // console.log(data);
  return (
    <div>
      <div className="w-6/12 m-auto my-4 bg-gray-100 shadow-xl p-4 ">
        <div className="flex justify-between">
          <span className="font-bold text-lg ">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{"⬇️"}</span>
        </div>

        <ItemList items={data.itemCards} />
      </div>
    </div>
  );
};

export default RestaurantCategeory;
