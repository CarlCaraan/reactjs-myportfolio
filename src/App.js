import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import LoadingSpinner from "./components/UI/LoadingSpinner";
// import LandingPage from "./pages/LandingPage";
// import NotFound from "./pages/NotFound";

const LandingPage = React.lazy(() => import("./pages/LandingPage"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
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
    </Suspense>
  );
}

export default App;
