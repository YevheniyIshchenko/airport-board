import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { currentDay } from "../../flights.utils";
import "./button.scss";

const Button = () => {
  const { search, pathname } = useLocation();

  const departureBtn =
    pathname === `/departure/${currentDay}` ? "btn_active" : "";
  const arrivalBtn = pathname === `/arrival/${currentDay}` ? "btn_active" : "";
  return (
    <div className='directions'>
      <ul className='directions__list'>
        <li className={`directions__list__item ${departureBtn}`}>
          <Link
            className={`directions__list__item__link directions__list__item__link__departure ${departureBtn} `}
            to={`/departure/${currentDay}${search}`}
          >
            <i className='fas fa-plane-departure'></i>
            <span className='directions__list__item__text'>Departure</span>
          </Link>
        </li>
        <li className={`directions__list__item ${arrivalBtn}`}>
          <Link
            className={`directions__list__item__link directions__list__item__link__arrival ${arrivalBtn}`}
            to={`/arrival/${currentDay}${search}`}
          >
            <i className='fas fa-plane-arrival'></i>
            <span className='directions__list__item__text'>Arrival</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Button;
