import React from "react";
import "../../images/search-logo.png";
import TotalVisitors from "../Statistics/global-stats/total-visitors";
import TotalPointsMined from "../Statistics/global-stats/points-mined";

function Navbar() {
  return (
    <div>
      <nav className="navbar bg-violet text-light fw-100 p-2">
        <div className="container-fluid p-0">
          <p className="small d-inline-block">Bing Search Automator</p>
          <div className="nav-stats">
            <p className="small d-block">
              Total Visitors{" "}
              <p className="d-inline-block">
                <TotalVisitors />
              </p>
            </p>
            <p className="small d-block">
              Total Points Mined{" "}
              <p className="small d-inline-block">
                <TotalPointsMined />
              </p>
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
