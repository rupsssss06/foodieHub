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
  console.log(itemCards);

  const groupedItems = itemCards.reduce((group, item) => {
    const dish = item?.card?.info;

    if (!dish) return groupedItems;

    const category = dish.category || "Other Items";

    if (!group[category]) {
      group[category] = [];
    }

    group[category].push(item);
    return group;
  }, {});
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
              <div className="space-y-6">
                {Object.entries(groupedItems).map(([category, items]) => (
                  <div key={category}>
                    {/* Category heading */}
                    <h3>
                      {category} ({items.length})
                    </h3>

                    {/* Dishes inside this category */}
                    {items.map((item, index) => {
                      const dish = item?.card?.info;

                      if (!dish) return null;

                      return (
                        <div key={`${dish.id}-${index}`}>
                          <h4>{dish.name}</h4>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestroMenu;
