import { useEffect, useState } from "react";
import RestroCards from "./RestroCards";
import { PROXY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStaus";
const Body = () => {
  const [listOfRestro, setListOfRestro] = useState([]);
  const [filtetredRestro, setFilteredRestro] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING",
    );

    const json = await data.json();

    const restaurants = json.data.cards.find(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestro(restaurants);

    setFilteredRestro(restaurants);
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1 className="p-5 text-xl font-semibold">
        Looks like you're offline!! Please check your connection;
      </h1>
    );
  return listOfRestro.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="min-h-screen bg-[#f8f8f8]">
      <div className="my-6.25 mx-auto flex items-center justify-center gap-5 p-3.75 flex-wrap">
        <div className="flex h-12 w-95 max-w-full items-center overflow-hidden rounded-[28px] border border-[#e5e5e5] bg-white shadow-md transition-all duration-300 focus-within:border-[#ff5200] focus-within:shadow-lg">
          <input
            type="text"
            className="h-full min-w-0 flex-1 bg-transparent px-4.5 text-[15px] outline-none"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="mr-1.25 h-9.5 rounded-[22px] bg-[#ff5200] px-5 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:bg-[#e64600]"
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
          className="m-2.5 cursor-pointer rounded-full bg-[#222] px-5.5 py-3.25 text-[15px] font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff5200] hover:shadow-lg"
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
      <div className="grid grid-cols-[repeat(auto-fill,200px)] justify-center gap-7.5">
        {filtetredRestro.map((restaurent) => (
          <Link
            key={restaurent.info.id}
            to={"/restaurants/" + restaurent.info.id}
          >
            <RestroCards resData={restaurent} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
