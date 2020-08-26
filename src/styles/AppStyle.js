import styled from 'styled-components';

const StyledApp = styled.div`
  width: 100%;
  height: 100%;
`;

const StyledNav = styled.nav`
  text-align: center;
  width: 100%;

  @media only screen and (min-width: 1025px) {
    width: 100%;
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    width: 140%;
  }
`;

export { StyledApp, StyledNav };
