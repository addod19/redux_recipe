import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import RecipeList from '../containers/RecipeList';
import Recipe from '../containers/Recipe';
import { StyledApp, StyledNav } from '../styles/AppStyle';

const App = () => (
  <Router>
    <div className="container-fluid">
      <StyledApp>
        <StyledNav>
          <Link exact='true' to="/">
            <h1 className="cata">Catalogue of Recipes</h1>
          </Link>
        </StyledNav>
        <Switch>
          <Route exact path="/" component={RecipeList} />
          <Route exact path="/:id" component={Recipe} />
        </Switch>
      </StyledApp>
    </div>
  </Router>
);

export default App;
