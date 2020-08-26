import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import helper from '../__mocks__';
import Recipe from '../../components/Recipe';

Enzyme.configure({ adapter: new Adapter() });

describe('Recipe Component', () => {
  describe('Component Renders', () => {
    let recipe;
    beforeEach(() => {
      const props = {
        recipe: {
          idMeal: 52942,
          strMeal: 'Roast fennel and aubergine paella',
          strMealThumb: 'https://www.themealdb.com/images/media/meals/1520081754.jpg',
        },
      };
      recipe = shallow(<Recipe {...props} />); // eslint-disable jsx-props-no-spreading
    });

    it('Should renders without error', () => {
      const component = helper(recipe, '.showRecipe');
      expect(component.length).toBe(1);
    });

    it('Should renders with error', () => {
      const component = helper(recipe, '.Recipe');
      expect(component.length).toBeFalsy();
    });

    it('Should render an image', () => {
      const image = helper(recipe, '.recipeImg');
      expect(image.length).toBe(1);
    });

    it('Should not render an image', () => {
      const image = helper(recipe, '.Img');
      expect(image.length).toBeFalsy();
    });

    it('Should render recipe name', () => {
      const name = helper(recipe, '.name');
      expect(name.length).toBe(1);
    });

    it('Should not render recipe name', () => {
      const name = helper(recipe, '.test');
      expect(name.length).toBeFalsy();
    });
  });
});
