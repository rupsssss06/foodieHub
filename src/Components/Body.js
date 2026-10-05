import { useEffect, useState } from "react";
import RestroCards from "./RestroCards";
import { PROXY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listOfRestro, setListOfRestro] = useState([]);
  const [filtetredRestro, setFilteredRestro] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(PROXY_URL);

    const json = await data.json();

    const restaurants = json.data.cards.find(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestro(restaurants);
    setFilteredRestro(restaurants);
  };

  return listOfRestro.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //search text

              //Filter the restro cartd and update the ui
              const newFilteredRestro = listOfRestro.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setFilteredRestro(newFilteredRestro);
            }}
          >
            Search
          </button>
        </div>
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
        {filtetredRestro.map((restaurent) => (
          <RestroCards key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};
export default Body;
