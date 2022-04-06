import { Route, Switch, Redirect } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";

function App() {
  return (
      <Switch>
        <Route path="/" exact>
          <Redirect to="/ " />
        </Route>
        <Route path="/ " exact>
          <LandingPage />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
  );
}

export default App;

