import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestroMenu from "../utils/useRestroMenu";
const RestroMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestroMenu(resId);
  if (resInfo === null) return <Shimmer />;
  const info = resInfo?.cards?.find((c) => c?.card?.card?.info)?.card?.card
    ?.info;
  const {
    name,
    cuisines = [],
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    areaName,
    city,
    sla,
  } = info;

  const regularCards =
    resInfo?.cards?.find((card) => card?.groupedCard)?.groupedCard?.cardGroupMap
      ?.REGULAR?.cards || [];

  const itemCards = regularCards
    .filter((card) => card?.card?.card?.itemCards)
    .flatMap((card) => card.card.card.itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {" "}
        {cuisines.join(", ")}- {costForTwoMessage}
      </p>

      <h2>Menu</h2>
      <ul>
        {itemCards.map((item, index) => (
          <li key={`${item.card.info.id}-${index}`}>
            {item.card.info.name} - Rs.{" "}
            {(item.card.info.price ?? item.card.info.defaultPrice) / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestroMenu;
