import moment from "moment";
import "moment/locale/ru";

export const currentDay = moment(new Date()).format("DD-MM-Y");

export const newFlightStatus = (el) => {
  switch (el.status) {
    case "DP":
      return `Departed at ${moment(el.timeTakeofFact).format("LT")}`;
    case "CK":
      return `Check-in`;
    case "ON":
      return `On time`;
    case "LN":
      return `Landed ${moment(el.timeLandFact).format("LT")}`;
    case "FR":
      return `In flight`;
    case "BD":
      return `Boarding`;
    case "GC":
      return `Gate closed`;
    case "DL":
      return `Delayed till ${moment(el.timeLandCalc).format("LT")}`;
    default:
      return el.status;
  }
};

export const filterFlightList = (flights, queryString, ) => {
  debugger;
  return flights.filter(
    !queryString["?search"]
      ? (el) =>
          moment(el.timeDepShedule || el.timeToStand).format("DD-MM-Y") ===
          currentDay
      : (el) =>
          el["codeShareData"]["0"]["codeShare"] == queryString["?search"] &&
          moment(el.timeDepShedule || el.timeToStand).format("DD-MM-Y") ===
            currentDay
  );
};
