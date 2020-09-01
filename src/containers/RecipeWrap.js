import React from 'react';
import PropTypes from 'prop-types';

import { MainWrap, ImageWrap, RecipeDetails } from '../styles/RecipeComponent';

const ReWrap = ({ recipe }) => (
  <div className="showRecipe">
    <div className="text-center">
      <MainWrap>
        <ImageWrap>
          <img
            className="w-100 mb-2 recipeImg"
            src={recipe.strMealThumb}
            alt="Recipe Cover"
            title="click on image to view details"
          />
        </ImageWrap>
        <RecipeDetails>
          <h5 className="card-title name">
            {recipe.strMeal}
          </h5>
        </RecipeDetails>
      </MainWrap>
    </div>
  </div>
);

// class ReWrap extends Component {
//   render() {
//     const { recipe } = this.props;
//     return (
//       <div className="showRecipe">
//         <div className="text-center">
//           <MainWrap>
//             <ImageWrap>
//               <img
//                 className="w-100 mb-2 recipeImg"
//                 src={recipe.strMealThumb}
//                 alt="Recipe Cover"
//                 title="click on image to view details"
//               />
//             </ImageWrap>
//             <RecipeDetails>
//               <h5 className="card-title name">
//                 {recipe.strMeal}
//               </h5>
//             </RecipeDetails>
//           </MainWrap>
//         </div>
//       </div>
//     );
//   }
// }

ReWrap.propTypes = {
  recipe: PropTypes.shape({
    idMeal: PropTypes.number,
    strMeal: PropTypes.string,
    strMealThumb: PropTypes.string,
  }).isRequired,
};

export default ReWrap;
