import React, { use } from 'react';

const Countries = ({countiesPromise}) => {

    const countriesData = use(countiesPromise)
    const countries = countriesData.countries
    console.log(countries);
    return (
        <div>
            <h1>Total countries in the world : {countries.length}</h1>
        </div>
    );
};

export default Countries;