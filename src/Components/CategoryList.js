const IMG_URL = "https://media-assets.swiggy.com/swiggy/image/upload/";
const CategoryList = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => {
        const dish = item?.card?.info;

        if (!dish) return null;

        const price = dish.price ?? dish.defaultPrice;

        return (
          <div
            key={`${dish.id ?? "dish"}-${index}`}
            className="border-b border-gray-200 py-3"
          >
            <h4 className="font-medium">{dish.name}</h4>

            {/* Cost */}
            {(dish.price ?? dish.defaultPrice) != null && (
              <p className="text-sm font-medium text-gray-700">
                ₹{(dish.price ?? dish.defaultPrice) / 100}
              </p>
            )}

            {/* Ingredients */}
            {dish.description && (
              <p className="mt-1 text-sm text-gray-500">{dish.description}</p>
            )}
            <div className="shrink-0">
              {dish.imageId ? (
                <div className="flex w-28 flex-col items-center">
                  <img
                    src={IMG_URL + dish.imageId}
                    alt={dish.name}
                    className="h-28 w-28 rounded-xl object-cover"
                  />

                  <button className="relative -mt-3 rounded-lg border border-green-600 bg-white px-6 py-1 font-bold text-green-600 shadow-sm hover:bg-green-50">
                    ADD
                  </button>
                </div>
              ) : (
                <button className="rounded-lg border border-green-600 bg-white px-6 py-1 font-bold text-green-600 shadow-sm hover:bg-green-50">
                  ADD
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryList;
