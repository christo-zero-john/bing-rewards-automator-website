import React from "react";
import TotalVisitors from "./TotalVisitors";
import DevicesCount from "./DevicesCount";
import AutomationsCount from "./AutomationsCount";
import SearchesCount from "./SearchesCount";
import PointsMined from "./PointsMined";

function GlobalStats({ stats }) {
  return (
    <div className="">
      <h2>Global Statistics</h2>
      <TotalVisitors />
      <DevicesCount />
      <AutomationsCount />
      <SearchesCount />
      <PointsMined />
    </div>
  );
}

export default GlobalStats;

// <div className="global-stats">
// <h2>Global Statistics</h2>
// <p>Total Visitors: {stats.visitorCount || 0} </p>
// <p>Total Devices: {stats.totalDevices || 0} </p>
// <p>Total Automations Performed: {stats.totalTimesAutomated || 0} </p>
// <p>Total Searches performed: {stats.totalSearches || 0} </p>
// <p>Total Points Mined: {stats.totalPointsMined || 0}</p>
// </div>
