import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ReWrap extends Component {
  render() {
    const { recipe } = this.props;
    return (
      <div className="">
        <div className="card card-body text-center h-100 mx-auto">
          <img
            className="w-100 mb-2"
            src={recipe.strMealThumb}
            alt="Recipe Cover"
            title="click on image to view details"
          />
          <h5 className="card-title">{recipe.strMeal}</h5>
        </div>
      </div>
    );
  }
}

ReWrap.propTypes = {
  recipe: PropTypes.instanceOf(Object).isRequired,
};

export default ReWrap;