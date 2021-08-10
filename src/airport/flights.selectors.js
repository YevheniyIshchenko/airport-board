import { createSelector } from "reselect";

export const flightsListSelector = (state) => {
  return state.flights.flightsList;
};

// export const sortedTasksListSelector = createSelector(
//   [tasksListSelector],
//   (tasksList) => {
//     return tasksList.slice().sort((a, b) => a.done - b.done);
//   }
// );

// export const flightsListSelectorDeparture = (state) => {
//   return state.flights.flightsList.body.departure;
// };

// export const flightsListSelectorDeparture = createSelector(
//   [flightsListSelector],
//   (departureList) => {
//     return departureList;
//   }
// );.

export const flightsListSelectorDeparture = (state) => {
  const departureList = flightsListSelector(state);
  return departureList;
};

export const flightsListSelectorArrival = (state) => {
  const arrivaList = flightsListSelector(state);
  return arrivaList;
};
// export const flightsListSelectorArrival = createSelector(
//   [flightsListSelector],
//   (arrivaList) => {
//     return arrivaList;
//   }
// );
