import RestroCards from "./RestroCards";
import resList from "../utils/mockData";
const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        {resList.map((restaurent) => (
          <RestroCards key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </div>
  );
};
export default Body;
