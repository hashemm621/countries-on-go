import React, { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(visited ? false : true);
    handleVisitedCountries(country);
  };

  return (
    <div className={`country ${visited && "visited"}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <div className="countryData">
        <h3>Name: {country.name.common} </h3>
        <p>Population: {country.population.population} </p>

        <button onClick={handleVisited}>
          {visited ? "Visited" : "Not Visited"}
        </button>

        <button
          onClick={() => {
            handleVisitedFlag(country.flags.flags.png);
          }}
        >
          Add Visited Flag
        </button>
      </div>
    </div>
  );
};

export default Country;
