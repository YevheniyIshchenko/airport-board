import { currentDay } from "./flights.utils";
const baseUrl = "https://api.iev.aero/api/flights/";

export const fetchFlightsList = (direction) => {
  return fetch(`${baseUrl}${currentDay}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then(
      (res) => res.body[(direction = !direction ? "departure" : direction)]
    );
};
