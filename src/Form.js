import React from "react";

import "./Form.css";

export default function Form() {
  return (
    <form id="searchForm">
      <div className="form-row">
        <div class="form-group col-5">
          <input
            type="search"
            className="form-control search"
            id="cityInput"
            placeholder="Search city"
          />
        </div>
        <div className="form-group col-7">
          <button type="submit" className="btn btn-primary" id="searchButton">
            Search
          </button>

        </div>
      </div>
    </form>
  );
}
