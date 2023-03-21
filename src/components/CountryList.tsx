import React from "react";

import { Country } from "../types/types";
import { CountryItem } from ".//CountryItem";

interface CountryListProps {
  countries: Country[];
}

export const CountryList = ({ countries }: CountryListProps) => {
  return (
    <ul className="list-group p-3 m-1">
      {countries.map((country) => {
        return <CountryItem countries={country} />;
      })}
    </ul>
  );
};
