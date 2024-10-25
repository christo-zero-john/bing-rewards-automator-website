import React from "react";
import AutomationsCount from "./AutomationsCount";
import SearchesCount from "./SearchesCount";
import PointsMined from "./PointsMined";

function UserStats({ stats }) {
  return (
    <div className="">
      <h2>Your Statistics</h2>
      <AutomationsCount />
      <SearchesCount />
      <PointsMined />
    </div>
  );
}

export default UserStats;
{
  /* <div className="user-stats">
      <h2>Your Statistics</h2>
      <p>Total Automations Performed: {stats.totalTimesAutomated || 0} </p>
      <p>Total Searches performed: {stats.totalSearches || 0} </p>
      <p>Total Points Mined: {stats.totalPointsMined || 0}</p>
    </div> */
}
