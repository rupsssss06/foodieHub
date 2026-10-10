const MenuShimmer = () => {
  return (
    <div className="min-h-screen bg-[#fffdf8] px-5 py-10 sm:px-10">
      {/* Restaurant details placeholder */}
      <div className="mx-auto mb-10 max-w-3xl rounded-2xl bg-white p-6 shadow-md sm:p-8">
        {/* Restaurant name */}
        <div className="mb-4 h-9 w-3/4 rounded-md animate-shimmer bg-[linear-gradient(90deg,#eeeeee_25%,#dddddd_50%,#eeeeee_75%)] bg-[length:200%_100%]" />

        {/* Cuisines and cost */}
        <div className="mb-5 h-4 w-2/3 rounded-md animate-shimmer bg-[linear-gradient(90deg,#eeeeee_25%,#dddddd_50%,#eeeeee_75%)] bg-[length:200%_100%]" />

        {/* Rating and delivery details */}
        <div className="flex flex-wrap gap-4">
          <div className="h-4 w-16 rounded-md animate-shimmer bg-[linear-gradient(90deg,#eeeeee_25%,#dddddd_50%,#eeeeee_75%)] bg-[length:200%_100%]" />
          <div className="h-4 w-24 rounded-md animate-shimmer bg-[linear-gradient(90deg,#eeeeee_25%,#dddddd_50%,#eeeeee_75%)] bg-[length:200%_100%]" />
          <div className="h-4 w-28 rounded-md animate-shimmer bg-[linear-gradient(90deg,#eeeeee_25%,#dddddd_50%,#eeeeee_75%)] bg-[length:200%_100%]" />
        </div>
      </div>

      {/* Menu section */}
      <div className="mx-auto max-w-3xl">
        {/* Menu heading */}
        <div className="mb-6 border-b border-stone-200 pb-4">
          <div className="h-7 w-28 rounded-md animate-shimmer bg-[linear-gradient(90deg,#eeeeee_25%,#dddddd_50%,#eeeeee_75%)] bg-[length:200%_100%]" />
        </div>

        {/* Menu item placeholders */}
        <div className="divide-y divide-stone-200 rounded-xl bg-white px-5 shadow-sm">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-4 py-5"
            >
              {/* Dish name and description */}
              <div className="flex-1 space-y-3">
                <div className="h-4 w-3/4 rounded-md animate-shimmer bg-[linear-gradient(90deg,#eeeeee_25%,#dddddd_50%,#eeeeee_75%)] bg-[length:200%_100%]" />

                <div className="h-3 w-1/2 rounded-md animate-shimmer bg-[linear-gradient(90deg,#eeeeee_25%,#dddddd_50%,#eeeeee_75%)] bg-[length:200%_100%]" />
              </div>

              {/* Dish image placeholder */}
              <div className="h-20 w-20 shrink-0 rounded-xl animate-shimmer bg-[linear-gradient(90deg,#eeeeee_25%,#dddddd_50%,#eeeeee_75%)] bg-[length:200%_100%]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuShimmer;
