import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countiesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };
  const countriesData = use(countiesPromise);
  const countries = countriesData.countries;

  return (
    <>
      <h1>Total Countries in the World : {countries.length}</h1>
      <h3>Total Visited Country: {visitedCountries.length}</h3>
      <ol>
        {visitedCountries.map((country) => (
          <li key={country.cca3.cca3}>{country.name.common}</li>
        ))}
      </ol>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            handleVisitedCountries={handleVisitedCountries}
            country={country}
          ></Country>
        ))}
      </div>
    </>
  );
};

export default Countries;
