import { flightsListSelectorDeparture } from "../../flights.selectors";
import { connect } from "react-redux";

import * as flightsActions from "../../flights.actions";
import FlightsList from "./FlightsList";

const mapDispatch = {
  getFlightsList: flightsActions.getFlightsListDeparture,
};

const mapState = (state) => {
  return {
    flights: flightsListSelectorDeparture(state),
  };
};

export default connect(mapState, mapDispatch)(FlightsList);
