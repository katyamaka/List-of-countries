import React from "react";
import { Badge } from ".//Badge";
import { Country } from "../types/types";

interface CountryItemProps {
  countries: Country;
}

export const CountryItem = ({
  countries: { flag, name, capital, region, area, population },
}: CountryItemProps) => {
  return (
    <li className="list-group-item d-flex align-items-center justify-content-between">
      {/* Я не знаю, как выровнять так, чтобы все было ровно, justify-content-between хоть и делает в строке все ровно, но вот несмотря на разный размер текста список выглядит криво и мне это очень не нравится, подскажи пожалуйста, как это исправить? */}
      <img src={flag} height={70} width={100} alt="flag" />
      <p className="m-1">{name}</p>
      <p className="m-1">{capital}</p>
      <p className="m-1">{region}</p>
      <Badge color="bg-primary" value={area} text="area" />
      <Badge color="bg-secondary" value={population} text="area" />
    </li>
  );
};
