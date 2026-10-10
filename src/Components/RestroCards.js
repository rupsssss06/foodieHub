import { CDN_URL } from "../utils/constants";
const RestroCards = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="box-border h-87.5 w-55 cursor-pointer overflow-hidden rounded-[18px] bg-white p-2.5 shadow-[0_4px_15px_rgba(0,0,0,0.12)] transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(0,0,0,0.2)]">
      <img
        className="block h-40 w-full rounded-[14px] object-cover transition-transform duration-400 ease-in-out hover:scale-105"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="mx-1.25 mt-3.5 mb-2 line-clamp-1 text-xl font-semibold text-[#222]">
        {name}
      </h3>
      <h4 className="mx-1.25 my-2 line-clamp-2  text-sm font-medium text-[#666]">
        {cuisines.join(", ")}
      </h4>
      <h4 className="mx-1.25 my-2 text-sm font-medium text-[#666]">
        {avgRating} ⭐
      </h4>
      <h4 className="mx-1.25 my-2 text-sm font-medium text-[#666]">
        {costForTwo}
      </h4>
      <h4 className="mx-1.25 my-2 text-sm font-medium text-[#666]">
        {sla.deliveryTime} minutes
      </h4>
    </div>
  );
};
export default RestroCards;
