
import { currentDay } from "./flights.utils";
const baseUrl = "https://api.iev.aero/api/flights/";



export const fetchFlightsList = () => {
  return fetch(`${baseUrl}${currentDay}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((res) => res.body);
};

export const fetchFlightsListArrival = () => {
  return fetch(`${baseUrl}${currentDay}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((res) => res.body)
    .then((res) => res.arrival);
};

export const fetchFlightsListDeparture = () => {
  return fetch(`${baseUrl}${currentDay}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((res) => res.body)
    .then((res) => res.departure);
};
