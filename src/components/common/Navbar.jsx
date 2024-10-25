import React from "react";
import "../../images/search-logo.png";
import TotalVisitors from "../Statistics/global-stats/TotalVisitors";
import TotalPointsMined from "../Statistics/global-stats/TotalPointsMined";

function Navbar() {
  return (
    <div>
      <nav className="bg-violet fs-3 text-light fw-100">
        <div className="container-fluid">
          <p className="text-uppercase">BiNg Search Automator</p>
          <TotalVisitors />
          <TotalPointsMined />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
