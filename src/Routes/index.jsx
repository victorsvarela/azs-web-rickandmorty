import { Route, Switch } from "react-router-dom";
import EpisodePage from "../Pages/Episode";
import HomePage from "../Pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/episode/:id">
        <EpisodePage />
      </Route>
    </Switch>
  );
};

export default Routes;
