import React from 'react';
import PropTypes from 'prop-types';
import types from '../redux/constants/types';

const CategoryFilter = ( {handleChange }) => (
  <div>
    <select name="type" onChange={ handleChange }>
      <option value="All">All</option>
      { types.map(type => (
        <option key={type} value={type}>
          { type }
        </option>
      ))}
    </select>
  </div>
);

CategoryFilter.propTypes = {
    handleChange: PropTypes.func.isRequired,
};

export default CategoryFilter;