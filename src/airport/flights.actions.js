import { flightsListSelector } from "./flights.selectors";
import {
  fetchFlightsList,
  fetchFlightsListArrival,
  fetchFlightsListDeparture,
} from "./flightsGateway";
export const FLIGHTS_LIST_RECIEVED = "TASKS_LIST_RECIEVED";

export const tasksListRecieved = (flightsList) => {
  return {
    type: FLIGHTS_LIST_RECIEVED,
    payload: {
      flightsList,
    },
  };
};

export const getFlightsList = () => {
  const thunkaAction = function (dispatch) {
    fetchFlightsList().then((tasksList) =>
      dispatch(tasksListRecieved(tasksList))
    );
  };
  return thunkaAction;
};
export const getFlightsListDeparture = () => {
  const thunkaAction = function (dispatch) {
    fetchFlightsListDeparture().then((tasksList) =>
      dispatch(tasksListRecieved(tasksList))
    );
  };
  return thunkaAction;
};
export const getFlightsListArrivals = () => {
  const thunkaAction = function (dispatch) {
    fetchFlightsListArrival().then((tasksList) =>
      dispatch(tasksListRecieved(tasksList))
    );
  };
  return thunkaAction;
};
