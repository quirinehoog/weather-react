import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <form className="search-form">
        <div className="row">
          <div className="col-8">
            <div className="Cityname">
              <input
                className="form-control"
                type="search"
                placeholder="Enter a city..."
                autoComplete="off"
                autoFocus="on"
              />
            </div>
          </div>
          <div className="col-2">
            <div className="Search">
              <input
                type="submit"
                value="Search"
                className="form-control btn btn-primary shadow-sm w-100"
              />
            </div>
          </div>
          <div className="col-2">
            <div className="Live">
              <input
                type="submit"
                value="LIVE location"
                className="form-control btn btn-primary shadow-sm w-100"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
