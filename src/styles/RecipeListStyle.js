import styled from 'styled-components';

const FilterWrap = styled.div `
  text-align: center;
  color: white;
`

const RecipeWrap = styled.div `
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-gap: 20px
`
export { FilterWrap, RecipeWrap };