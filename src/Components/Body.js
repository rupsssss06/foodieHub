import { useEffect, useState } from "react";
import RestroCards from "./RestroCards";
import resList from "../utils/mockData";

const Body = () => {
  const [listOfRestro, setListOfRestro] = useState(resList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const API_URL =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.14860&lng=85.89730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

    const PROXY_URL =
      "https://corsproxy.io/?key=YOUR_API_KEY&url=" +
      encodeURIComponent(API_URL);

    const data = await fetch(PROXY_URL);

    const json = await data.json();

    console.log(json);
  };
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestro.filter(
              (res) => res.info.avgRating > 4,
            );
            setListOfRestro(filteredList);
          }}
        >
          Top Rated Restaurents
        </button>
      </div>
      <div className="res-container">
        {listOfRestro.map((restaurent) => (
          <RestroCards key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};
export default Body;
