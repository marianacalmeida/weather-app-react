import React from "react";

import "./Temperature.css";

export default function Temperature() {
  return (
    <div className="row">
      <div className="col-4">
        <p className="temperature min-temp" id="min">
          14º
        </p>
      </div>
      <div className="col-4 main-temp">
        <p className="temperature" id="currentTemp">
          16º
        </p>
        <p className="units">
          <a href="" id="cel" class="active">
            C º
          </a>
          <a href="" id="fah">
            F º
          </a>
        </p>
      </div>
      <div className="col-4 max-temp">
        <p className="temperature" id="max">
          17º
        </p>
      </div>
    </div>
  );
}
