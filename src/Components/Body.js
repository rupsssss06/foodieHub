import { useState } from "react";
import RestroCards from "./RestroCards";
import resList from "../utils/mockData";

const Body = () => {
  const [listOfRestro, setListOfRestro] = useState(resList);

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
