import React from "react";
import countries from "./country-data.json";
import { CountryList } from "./components/CountryList";
import { transformCountries } from "./mappers/TransformCountries";

export const App = () => {
  const transformedCountries = transformCountries(countries);
  return (
    <div className="container">
      <h1 className="p-4">Country List</h1>
      <CountryList countries={transformedCountries} />
    </div>
  );
};

export default App;
