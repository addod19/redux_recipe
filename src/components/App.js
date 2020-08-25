import React from 'react';
import { BrowseRouter as Router, Route, Switch, Link } from 'react-router-dom';
import RecipeList from '../containers/RecipeList';
import Recipe from '../containers/Recipe';


function App() {
  return (
    <Router>
      <div className="container">
        <nav>
          <Link to="/">
            <h1>Recipes</h1>
          </Link>
        </nav>
        <Switch>
          <Route exact path="/" component={RecipeList} />
          <Route exact path="/:id" component={Recipe} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;
