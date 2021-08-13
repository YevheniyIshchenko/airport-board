import React from "react";
import { Provider } from "react-redux";
import store from "./store.js";
import Search from "./airport/components/Search/Search.jsx";
import Button from "./airport/components/Button/Button.jsx";
import FlightsList from "./airport/components/FlightsList/FlightsList.jsx";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route component={Search}></Route>

        <Button />
        <Switch>
          <Route path='/departure' component={FlightsList} />
          <Route path='/arrival' component={FlightsList} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
