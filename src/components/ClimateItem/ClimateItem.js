import React from "react";
import { ImageSelector } from "../ImageSelector/ImageSelector";


export const ClimateItem = ({ props, state }) => {
  const data = props;
  const image_data = state;
  const days = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const dayNum = new Date(data.dt * 1000).getDay();
  const result = days[dayNum];

  return (
    <div className="climateitem">
      <div className="climateitem-container">
        <span>{result}</span>
        <ImageSelector state={image_data} />
        <p>
          {Math.trunc(JSON.stringify(data.temp.min))} Cº /{" "}
          {Math.trunc(JSON.stringify(data.temp.max))} Cº
        </p>
      </div>
    </div>
  );
};
