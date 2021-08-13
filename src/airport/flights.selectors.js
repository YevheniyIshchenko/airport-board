export const flightsListSelector = (state) => {
  return state.flights.flightsList;
};


export const flightsListSelectorDeparture = (state) => {
  const departureList = flightsListSelector(state);
  return departureList;
};

export const flightsListSelectorArrival = (state) => {
  const arrivaList = flightsListSelector(state);
  return arrivaList;
};

