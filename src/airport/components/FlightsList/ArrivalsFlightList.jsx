import { connect } from "react-redux";
import { flightsListSelectorArrival } from "../../flights.selectors";
import * as flightsActions from "../../flights.actions";
import FlightsList from "./FlightsList";

const mapDispatch = {
  getFlightsList: flightsActions.getFlightsListArrivals,
};

const mapState = (state) => {
  return {
    flights: flightsListSelectorArrival(state),
  };
};

// export default connect(mapState, mapDispatch)(ArrivalsFlightsList);
export default connect(mapState, mapDispatch)(FlightsList);
