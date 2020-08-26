import styled from 'styled-components';

const MainWrap = styled.div`
  width: 100%;
`;

const ImageWrap = styled.div`
  height: 20em;
  width: 100%;
  margin-top: 2px;

  @media only screen and (min-width: 200px) and (max-width: 577px) {
    height: 400px;
  }
  @media only screen and (min-width: 578px) and (max-width: 1024px) {
    width: 160%;
    height: 40em;

    .recipeImage {
      margin-left: 80px;
      height: 100%;
    }
  }
`;
const RecipeDetails = styled.div`
  background-color: white;
  opacity: 0.6;
  width: 80%;
  margin: auto;

  @media only screen and (min-width: 578px) and (max-width: 1024px) {
    width: 160%;
    text-align: center;
    margin-left: 80px;
    background-color: #e5e5e5;
    opacity: 0.6;
  }
`;
export { MainWrap, ImageWrap, RecipeDetails };
