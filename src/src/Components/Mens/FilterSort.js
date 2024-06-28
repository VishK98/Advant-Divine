import React from 'react';
import './FilterSort.css'; // Custom CSS for styling if needed
import { FaFilter } from 'react-icons/fa'; // React icons for the filter icon

const FilterSortComponent = () => {
  return (
    <div className="filter-sort-container">
      <div className="filter-icon">
        <FaFilter />
      </div>
      <button className="color-black-button">Colour Black</button>
      <div className="sort-by-dropdown">
        <label htmlFor="sort-by">Sort By:</label>
        <select id="sort-by" name="sort-by">
          <option value="low-high">Low / High</option>
          <option value="high-low">High / Low</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSortComponent;
