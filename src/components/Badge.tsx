import React from "react";

type BadgeText = "area" | "population";

interface BadgeProps {
  color: string;
  value: number;
  text: BadgeText;
}

export const Badge = ({ color, value, text }: BadgeProps) => {
  return (
    <p className={` p-3 m-2 badge  ${color}`}>
      {text}: {value}
    </p>
  );
};
