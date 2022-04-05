import React from "react";

export default function Header() {
  return (
    <div className="Header">
      <form className="search-form">
        <div className="row">
          <div className="col-6 search-name">
            <input
              className="form-control"
              type="search"
              placeholder="Enter a city..."
              autoComplete="off"
              autoFocus="on"
            />
          </div>
          <div className="col-3 search-button">
            <input
              type="submit"
              value="Search"
              className="form-control btn btn-primary shadow-sm"
            />
          </div>
          <div className="col-3 live-button">
            <input
              type="submit"
              value="LIVE location"
              className="form-control btn btn-primary shadow-sm"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
