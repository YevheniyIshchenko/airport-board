import React, { useEffect } from "react";
import { useLocation } from "react-router";
import qs from "qs";
import { connect } from "react-redux";
import { flightsListSelector } from "../../flights.selectors";
import * as flightsActions from "../../flights.actions";
import { newFlightStatus, filterFlightList } from "../../flights.utils";
import moment from "moment";
import "./flightsList.scss";

const FlightsList = ({ flights, getFlightsList }) => {
  const { pathname, search } = useLocation();

  const direction = pathname.split("/")[1];

  const queryString = qs.parse(search, { parameterLimit: 1 });
  useEffect(() => {
    getFlightsList(direction);
  }, [direction, search]);

  const newFlights = filterFlightList(flights, queryString, direction);

  return newFlights.length === 0 ? (
    <div className='noFlight'>NO Flight</div>
  ) : (
    <div className='table'>
      <table className='table-striped'>
        <thead className='table-striped__head'>
          <tr>
            <th className='table-striped__head__item'>Terminal</th>
            <th className='table-striped__head__item'>Local time</th>
            <th className='table-striped__head__item'>Destination</th>
            <th className='table-striped__head__item'>Status</th>
            <th className='table-striped__head__item'>Airline</th>
            <th className='table-striped__head__item'>Flight</th>
            <th className='table-striped__head__item'></th>
          </tr>
        </thead>
        <tbody className='table-striped__body'>
          {newFlights.map((el) => {
            return (
              <tr className='table-striped__body__row' key={el.ID}>
                <td className='table-striped__body__row__terminal-field'>
                  <span
                    className={
                      el.term === "A"
                        ? "terminal-field__elem__a"
                        : "terminal-field__elem__d"
                    }
                  >
                    {el.term}
                  </span>
                </td>
                <td>
                  {moment(el.timeDepShedule || el.timeToStand).format("LT")}
                </td>
                <td>
                  {el["airportToID.city_en"] || el["airportFromID.city_en"]}
                </td>
                <td className='status-field'>{newFlightStatus(el)}</td>
                <td className='table-striped__body__row__company-name'>
                  <div className='logo'>
                    <img
                      className='logo__img'
                      src={el["airline"]["en"]["logoSmallName"]}
                    ></img>
                  </div>
                  <p>{el["airline"]["en"]["name"]}</p>
                </td>
                <td>{el["codeShareData"]["0"]["codeShare"]}</td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const mapDispatch = {
  getFlightsList: flightsActions.getFlightsList,
};

const mapState = (state) => {
  return {
    flights: flightsListSelector(state),
  };
};

export default connect(mapState, mapDispatch)(FlightsList);
