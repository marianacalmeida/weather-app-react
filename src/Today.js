import React from "react";

import "./Today.css";

import Infos from "./Infos";
import Temperature from "./Temperature";

export default function Today() {
  return (
    <div className="today">
      <h1 className="location" id="city">
        Porto
      </h1>
      <h5 className="date" id="date">
        Tuesday, 14:23
      </h5>
      <p className="emoji">☀️</p>
      <Temperature />
      <Infos />
    </div>
  );
}
