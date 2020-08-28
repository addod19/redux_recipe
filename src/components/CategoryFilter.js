import React, { useState } from 'react';
import PropTypes from 'prop-types';
import categories from '../constants/types';

const CategoryFilter = ({ handleChange }) => {
  // eslint-disable-next-line no-unused-vars
  const [ dropDownValue, setDropDownValue ] = useState('All');
  return (
    <div>
      <select
        name="category"
        onChange={e => {
          const val = e.target.value;
          setDropDownValue(val);
          handleChange(val);
        }}
      >
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
  handleChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
