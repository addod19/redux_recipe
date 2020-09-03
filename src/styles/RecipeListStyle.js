import styled from 'styled-components';

const FilterWrap = styled.div`
  text-align: center;

`;

const RecipeWrap = styled.div`
  display: block;

  @media only screen and (min-width: 578px) and (max-width: 1024px) {
    width: 100%;
  }

  @media only screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-gap: 20px;
    margin-top: 10px;
  }
`;
export { FilterWrap, RecipeWrap };
