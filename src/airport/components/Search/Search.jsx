import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./search.scss";

const Search = ({ match }) => {
  const [value, setValue] = useState("");
  console.log(match);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className='search_flight'>
      <h2 className='search_flight__head'>Search flight</h2>
      <form className='search_flight__form'>
        <input
          className='search_flight__form__input'
          type='text'
          value={value}
          onChange={handleChange}
          placeholder='    &#61442;    Airline, destination or flight#'
        ></input>
        <button className='search_flight__form__btn' type='submit'>
          <Link
            className='search_flight__form__btn__link'
            to={`?search=${value}`}
          >
            Search
          </Link>
        </button>
      </form>
    </div>
  );
};

export default Search;
