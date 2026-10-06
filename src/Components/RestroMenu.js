import { useEffect, useState } from "react";
import { menu_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
const RestroMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    const data = await fetch(menu_API + resId);

    const json = await data.json();
    console.log(json);

    setResInfo(json?.data);
  };
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, cloudinaryImageId, costForTwoMessage } =
    resInfo?.cards?.find((card) => card?.card?.card?.info)?.card?.card?.info;
  console.log(resInfo);
  const regularCards =
    resInfo?.cards?.find((card) => card?.groupedCard)?.groupedCard?.cardGroupMap
      ?.REGULAR?.cards || [];

  const itemCards = regularCards
    .filter((card) => card?.card?.card?.itemCards)
    .flatMap((card) => card.card.card.itemCards);
  console.log(itemCards);
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {" "}
        {cuisines.join(", ")}- {costForTwoMessage}
      </p>

      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs. {item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default RestroMenu;
