import React from "react";

import "./Infos.css";

export default function Infos() {
  return (
    <div className="row row-infos">
      <div className="col-4">
        <p className="Infos" id="wind">
          wind: 7km/h
        </p>
      </div>
      <div className="col-4">
        <p className="Infos" id="description">
          clear sky
        </p>
      </div>
      <div className="col-4">
        <p className="Infos" id="humidity">
          humidity: 38%
        </p>
      </div>
    </div>
  );
}
