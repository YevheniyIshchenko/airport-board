import React from "react";
import { Provider } from "react-redux";
import store from "./store.js";
import Search from "./airport/components/Search/Search.jsx";
import Button from "./airport/components/Button/Button.jsx";
import DepartureFlightList from "./airport/components/FlightsList/DepartureFlightList";
import ArrivalsFlightsList from "./airport/components/FlightsList/ArrivalsFlightList";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route component={Search}></Route>

        <Button />
        <Switch>
          <Route path='/departure' component={DepartureFlightList} />
          <Route path='/arrival' component={ArrivalsFlightsList} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
