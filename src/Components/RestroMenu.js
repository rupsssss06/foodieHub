import { useParams } from "react-router-dom";
import MenuShimmer from "./MenuShimmer";
import useRestroMenu from "../utils/useRestroMenu";

const RestroMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestroMenu(resId);

  if (resInfo === null) return <MenuShimmer />;

  const info = resInfo?.cards?.find((c) => c?.card?.card?.info)?.card?.card
    ?.info;

  if (!info) return <MenuShimmer />;

  const {
    name,
    cuisines = [],
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    areaName,
    cloudinaryImageId,
  } = info;

  const regularCards =
    resInfo?.cards?.find((card) => card?.groupedCard)?.groupedCard?.cardGroupMap
      ?.REGULAR?.cards || [];

  const itemCards = regularCards
    .filter((card) => card?.card?.card?.itemCards)
    .flatMap((card) => card.card.card.itemCards);

  const imageUrl = cloudinaryImageId
    ? `https://media-assets.swiggy.com/swiggy/image/upload/${cloudinaryImageId}`
    : null;

  return (
    <div className="min-h-screen bg-[#fffdf8] px-4 py-8 text-[#292524] sm:px-8 lg:px-16">
      {/* Restaurant Image */}
      <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-white shadow-md">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={name}
            className="h-56 w-full object-cover sm:h-80"
          />
        )}

        {/* Restaurant Details */}
        <div className="p-5 sm:p-7">
          <h1 className="mb-3 text-3xl font-bold sm:text-4xl">{name}</h1>

          <p className="mb-3 text-sm leading-6 text-stone-600">
            {cuisines.join(", ")}
          </p>

          <div className="mb-3 flex flex-wrap items-center gap-3 text-sm">
            {avgRating && (
              <span className="rounded-lg bg-green-100 px-3 py-1.5 font-semibold text-green-800">
                ★ {avgRating}
              </span>
            )}

            {totalRatingsString && (
              <span className="text-stone-500">
                {totalRatingsString} ratings
              </span>
            )}

            {costForTwoMessage && (
              <span className="font-semibold text-stone-700">
                {costForTwoMessage}
              </span>
            )}
          </div>

          {areaName && (
            <p className="text-sm text-stone-500">Location: {areaName}</p>
          )}
        </div>
      </div>

      {/* Menu Heading */}
      <div className="mx-auto mt-10 max-w-3xl">
        <h2 className="mb-2 text-center text-2xl font-bold sm:text-3xl">
          Menu
        </h2>

        <p className="mb-6 text-center text-sm text-stone-500">
          Explore our delicious dishes
        </p>

        {/* Menu Items */}
        <div className="space-y-4">
          {itemCards.map((item, index) => {
            const dish = item.card.info;
            const price = dish.price ?? dish.defaultPrice;

            return (
              <div
                key={`${dish.id}-${index}`}
                className="flex items-center justify-between gap-4 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm transition hover:shadow-md sm:p-5"
              >
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-semibold text-stone-800 sm:text-lg">
                    {dish.name}
                  </h3>

                  <p className="mt-2 font-semibold text-stone-700">
                    {price != null
                      ? `₹${(price / 100).toFixed(0)}`
                      : "Price unavailable"}
                  </p>

                  {dish.description && (
                    <p className="mt-2 line-clamp-2 text-sm leading-5 text-stone-500">
                      {dish.description}
                    </p>
                  )}
                </div>

                {dish.imageId && (
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/${dish.imageId}`}
                    alt={dish.name}
                    className="h-24 w-24 shrink-0 rounded-xl object-cover sm:h-28 sm:w-28"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestroMenu;
