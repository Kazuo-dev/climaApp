import React from "react";
import { Puff } from "react-loader-spinner";


export const Loading = () => {
  return (
    <div className="loading">
      <Puff color="white" height={100} timeout={3000} width={100} />
    </div>
  );
};
