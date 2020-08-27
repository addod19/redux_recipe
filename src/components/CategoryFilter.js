import React, { useState } from 'react';
import PropTypes from 'prop-types';
import categories from '../constants/types';

const CategoryFilter = ({ handleFilterChange }) => {
  const [setDropDownValue] = useState('All');
  return (
    <div>
      <select
        name="type"
        handleChange={e => {
          const val = e.target.value;
          setDropDownValue(val);
          handleFilterChange(val);
        }}
      >
        <option value="All">All</option>
        { categories.map(category => (
          <option key={category} value={category}>
            { category }
          </option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
