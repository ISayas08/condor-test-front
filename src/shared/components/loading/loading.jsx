import React from "react";
import "./loading.scss";

export const Loading = props => {
  return (
    <div className="loading-box">
      <div className="loading loading--rolling" />
    </div>
  );
};
