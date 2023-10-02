import React from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestaurantCategeory from "./RestaurantCategeory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  //resInfo has single responsiblity that means it is bother about fetching data

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data.cards[0]?.card?.card?.info;
  // console.log(resInfo);

  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  console.log(itemCards);
  console.log(
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );

  const categories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <h1 className="font-bold my-5 text-2xl">{name}</h1>
      <p className="font-bold text-lg ">
        {cuisines.join(",")} {costForTwoMessage}
      </p>

      {/* CA */}

      {categories.map((each) => (
        <RestaurantCategeory data={each?.card?.card} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
