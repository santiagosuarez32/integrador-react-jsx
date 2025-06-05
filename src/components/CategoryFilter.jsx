import React, { useState } from "react";

const categories = ["Todos", "Running", "Casual", "Training"];

const CategoryFilter = ({ onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <div className="w-full flex justify-center items-center bg-gray-100 p-6 rounded-md shadow-md mt-8">

      <ul className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <li
            key={category}
            className={`cursor-pointer px-4 py-2 rounded-md text-gray-800 transition ${
              selectedCategory === category ? "bg-red-600 text-white" : "hover:bg-gray-200"
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
