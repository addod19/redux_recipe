import recipe from '../../redux/reducers/recipe';

describe('Recipe Reducer', () => {
  it('Should return default state', () => {
    const newState = recipe(undefined, { loading: true, recipe: {}, recipes: [] });
    expect(newState).toEqual({ loading: true, recipe: {}, recipes: [] });
  });

  it('Should not return default state', () => {
    const newState = recipe(undefined, { loading: true, recipe: {}, recipes: [] });
    const falseState = recipe('meals', { loading: false, recipe: {}, recipes: [] });
    expect(newState).not.toBe(falseState);
  });

});