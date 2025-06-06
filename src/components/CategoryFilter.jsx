import React, { useState } from "react";

const categories = ["Todos", "Running", "Casual", "Training"];

const CategoryFilter = ({ onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <div className="w-full flex justify-center items-center p-6 rounded-md  mt-8 bg-gray-900">

      <ul className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <li
            key={category}
            className={`bg-red cursor-pointer px-4 py-2 rounded-md text-white transition ${
              selectedCategory === category ? "bg-red-600 text-white" : "hover:bg-red-600"
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
