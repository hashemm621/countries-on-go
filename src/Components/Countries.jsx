import React, { use } from "react";
import Country from "./Country/Country";

const Countries = ({ countiesPromise }) => {
  const countriesData = use(countiesPromise);
  const countries = countriesData.countries;

  return (
    <div>
      <h1>Total countries in the world : {countries.length}</h1>

      {countries.map((country) => (
        <Country key={country.cca3.cca3} country={country}></Country>
      ))}
    </div>
  );
};

export default Countries;
