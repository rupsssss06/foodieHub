import CategoryList from "./CategoryList";
import { useState } from "react";
const RestroCategory = ({ category, items, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <>
      <div className="mb-4 rounded-xl bg-white p-4 shadow-sm">
        <div
          className="flex cursor-pointer items-center justify-between"
          onClick={handleClick}
        >
          <h3 className="text-lg font-bold">
            {category} ({items.length})
          </h3>

          <span>{showItems ? "⬆️" : "⬇️"}</span>
        </div>
        {showItems && <CategoryList items={items} />}
      </div>
    </>
  );
};
export default RestroCategory;
